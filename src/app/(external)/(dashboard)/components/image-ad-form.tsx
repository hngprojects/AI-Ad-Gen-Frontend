"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ImageTextEditor } from "@/components/ui/image-editor";
import { Input } from "@/components/ui/input";
import Loader from "@/components/ui/loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useGenerateAdImage } from "@/domains/ads-gen/api/ad-image-generate";
import { DesktopAdPreviewNavigation } from "@/domains/external/components/desktop-ad-preview-navigation";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useInpaintStore } from "@/store/inpaint-store";
import { zodResolver } from "@hookform/resolvers/zod";
import html2canvas from "html2canvas";
import { ArrowRight, ImageIcon, RefreshCw, Upload } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Canvas, IText, Rect, Circle, Image as FabricImage } from 'fabric';
import { FabricImageEditor } from "@/components/ui/fabric-image-editor";


// Dynamically import mobile components
const MobileSelectBottomSheet = dynamic(
  () => import("@/components/ui/mobile-select"),
  { ssr: false }
);

const adPlacementOptions = [
  { label: "Instagram", value: "Instagram post (1:1)" },
  { label: "Facebook", value: "Facebook Ad (4:5)" },
  { label: "Twitter", value: "Landscape (1.91:1)" },
  { label: "LinkedIn", value: "LinkedIn Profile Banner (4:1)" },
  // { label: "Company Page", value: "Company Page Banner (1.91:1)" },
  // { label: "Google Ads Leaderboard", value: "Google Ads Leaderboard (8:1)" },
  // { label: "Google Ads Skyscraper", value: "Google Ads Skyscraper (1:3.75)" },
];

const formSchema = z.object({
  adDescription: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(200, "Description cannot exceed 200 characters")
    .nonempty("Ad description is required"),

  adSize: z
    .string()
    .min(1, "Please select a platform")
    .refine(
      (val) => adPlacementOptions.some((option) => option.value === val),
      {
        message: "Please select a valid platform",
      }
    ),

  productName: z
    .string()
    .min(2, "Product name must be at least 2 characters")
    .max(60, "Title cannot exceed 60 characters")
    .nonempty("Product name is required"),

  targetAudience: z
    .string()
    .min(10, "Target audience must be at least 10 characters")
    .max(200, "Target audience cannot exceed 200 characters")
    .nonempty("Target audience is required"),

  productImage: z.instanceof(File).optional(),
  brandLogo: z.instanceof(File).optional(),
});

type FormData = z.infer<typeof formSchema>;


export default function AdCustomizer() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [formLoaded, setFormLoaded] = useState(false);
  const [formStep, setFormStep] = useState(1); // Track form step (1 or 2)
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<Canvas | null>(null);
  
  
  useEffect(() => {
    if (typeof window !== 'undefined' && canvasRef.current) {
      const canvas = new Canvas(canvasRef.current, {
        backgroundColor: '#f2f2f2',
        preserveObjectStacking: true,
      });
      setFabricCanvas(canvas);
      
      return () => {
        canvas.dispose();
      };
    }
  }, []);
  const downloadFunction = async () => {
    if (!fabricCanvas) return;
    
    // Create a temporary link to download the canvas as PNG
    const dataURL = fabricCanvas.toDataURL({
      format: 'png',
      quality: 1,
      multiplier: 1, 
    });
    
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'ad-design.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const lastFormData = useRef<FormData | null>(null);

  // Use the generate image hook
  const { generateAd, adData, isFetchingAd, progress, error, reset } =
    useGenerateAdImage();
  const {
    inpaintData,
    isInpainting: isFetchingStatus,
    progress: inpaintProgress,
    error: inpaintError,
    reset: resetInpainting,
  } = useInpaintStore();

  const [finalImageUrl, setFinalImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (inpaintData?.data?.image_url) {
      setFinalImageUrl(inpaintData.data.image_url);
    } else if (adData?.data?.image_url) {
      setFinalImageUrl(adData.data.image_url);
    } else {
      setFinalImageUrl(null);
    }
  }, [adData, inpaintData]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      adDescription: "",
      adSize: "",
      productName: "",
      targetAudience: "",
      productImage: undefined,
      brandLogo: undefined,
    },
    mode: "onChange",
  });

  const { formState, watch } = form;
  const { isValid } = formState;

  // Watch first step fields to validate the "Next" button
  const adDescription = watch("adDescription");
  const adSize = watch("adSize");
  const productName = watch("productName");
  const isFirstStepValid = adDescription && adSize && productName;

  // Handle errors
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  // Load saved form data on component mount using sessionStorage
  useEffect(() => {
    try {
      const savedData = sessionStorage.getItem("adCustomizerData");
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData);

          // Set form values and ensure they're properly updated
          form.reset({
            adDescription: parsedData.adDescription || "",
            adSize: parsedData.adSize || "",
            productName: parsedData.productName || "",
            targetAudience: parsedData.targetAudience || "",
            productImage: parsedData.productImage || undefined,
            brandLogo: parsedData.brandLogo || undefined,
          });

          // Trigger validation after setting values
          form.trigger();
        } catch (error) {
          console.error("Error parsing saved data:", error);
        }
      }
    } catch (error) {
      console.error("Error accessing sessionStorage:", error);
    }

    // Mark form as loaded to prevent default value overrides
    setFormLoaded(true);
  }, [form]);

  type SelectOption = {
    label: string;
    value: string;
    display?: string;
    aspectRatio?: string;
  };

  // Get the value label helper function
  const getOptionLabel = (options: SelectOption[], value: string): string => {
    if (!value) return "";
    const option = options.find((opt) => opt.value === value);
    return option ? option.label : "";
  };

  // Handle next step
  const handleNextStep = () => {
    if (isFirstStepValid) {
      setFormStep(2);
    } else {
      // Show validation errors
      form.trigger(["adDescription", "adSize", "productName"]);
    }
  };

  const onSubmit = async (data: FormData) => {
    // Store the form data for retry functionality
    lastFormData.current = data;

    // Additional validation check before submission
    if (!data.adDescription || data.adDescription.trim().length === 0) {
      form.setError("adDescription", {
        type: "manual",
        message: "Ad description is required",
      });
      toast.error("Ad description is required");
      return;
    }

    if (!data.adSize || data.adSize.trim().length === 0) {
      form.setError("adSize", {
        type: "manual",
        message: "Please select a platform",
      });
      toast.error("Please select a platform");
      return;
    }

    if (!data.productName || data.productName.trim().length === 0) {
      form.setError("productName", {
        type: "manual",
        message: "Product name is required",
      });
      toast.error("Product name is required");
      return;
    }

    try {
      generateAd({
        ad_goal: data.adDescription.trim(),
        ad_size: data.adSize.trim(),
        product_name: data.productName.trim(),
        target_audience: data.targetAudience.trim(),
        productImage: data.productImage || undefined,
        // Note: brandLogo is not sent to the API as requested
      });
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("Failed to generate image");
    }
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("adCustomizerData");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Handle retry - restart the whole process
  const handleRetry = () => {
    reset(); // Reset the hook state
    resetInpainting();
    if (lastFormData.current) {
      onSubmit(lastFormData.current);
    }
  };

  if (!formLoaded) {
    return (
      <div className="p-8 text-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-0">
      {/* Form Section */}
      <div className="w-full lg:w-[440px] lg:min-w-[440px] scrollbar-hide p-4 md:py-6 md:px-10 flex flex-col gap-10 lg:max-w-[440px] bg-white order-2 lg:order-1 z-20 lg:border-r md:border-[#ECF1F5]">
        {/* Form Header */}
        <div className="lg:flex items-center justify-between hidden">
          <h1 className="text-2xl font-medium leading-8 text-[#2A2A2A]">
            Customize your Ad
          </h1>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 py-1.5 text-sm border border-[#63A0E6] bg-[#FBFCFE] rounded-full hover:bg-gray-50">
              Image
            </DropdownMenuTrigger>
          </DropdownMenu>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {formStep === 1 ? (
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="productName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base leading-6 font-normal text-[#2A2A2A]">
                        Ad Title
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your Ad title"
                          className="w-full border-[#E3E3E3] focus:ring-[#B800B8] focus:border-[#B800B8] h-11 md:h-[56px] text-base leading-6 text-[#121316] placeholder:text-gray-[#7D7D7D]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="adDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base leading-6 font-normal text-[#2A2A2A]">
                        Ad description
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type in your Ad description"
                          className="w-full min-h-[100px] max-h-[200px] border-[#E3E3E3] focus:ring-[#B800B8] focus:border-[#B800B8] text-base leading-6 text-[#1B1B1B] placeholder:text-gray-[#7D7D7D] bg-[#FCFCFC]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="adSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base leading-6 font-normal text-[#2A2A2A]">
                        Where will this ad appear?
                      </FormLabel>
                      <FormControl>
                        {isMobile ? (
                          <MobileSelectBottomSheet
                            options={adPlacementOptions}
                            selected={field.value}
                            onChange={field.onChange}
                            placeholder="Select Platform"
                            title="Ad Placement"
                          />
                        ) : (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger className="w-full border-[#E3E3E3] focus:ring-[#B800B8] focus:border-[#B800B8] h-11 md:h-[56px]">
                              <SelectValue placeholder="Select Platform">
                                {getOptionLabel(
                                  adPlacementOptions,
                                  field.value
                                )}
                              </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                              {adPlacementOptions.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                  className="py-3 hover:bg-[#F6F6F6] text-[#121316]"
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />

                <Button
                  type="button"
                  disabled={!isFirstStepValid}
                  onClick={handleNextStep}
                  className={`w-full text-white px-6 py-5 rounded-sm hover:bg-dark-purple transition-colors flex items-center justify-center gap-2 text-base leading-6 font-normal ${
                    isFirstStepValid
                      ? "bg-[#B800B8] hover:bg-[#960096] cursor-pointer"
                      : "bg-[#EAC8F0] cursor-not-allowed"
                  }`}
                >
                  Next
                  <ArrowRight size={20} className="text-white" />
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="targetAudience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base leading-6 font-normal text-[#2A2A2A]">
                        Target Audience
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Select Target Audience"
                          className="w-full min-h-[100px] max-h-[200px] border-[#E3E3E3] focus:ring-[#B800B8] focus:border-[#B800B8] text-base leading-6 text-[#1B1B1B] placeholder:text-gray-[#7D7D7D] bg-[#FCFCFC]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />

                <div className="space-y-2">
                  <FormLabel className="text-base leading-6 font-normal text-[#2A2A2A]">
                    Product content (optional)
                  </FormLabel>
                  <div className="flex gap-2">
                    <FormField
                      control={form.control}
                      name="brandLogo"
                      render={({ field }) => (
                        <FormItem className="w-1/2">
                          <FormControl>
                            <div
                              className={`border-2 border-gray-200 rounded-lg text-center cursor-pointer hover:border-gray-800 transition-colors ${
                                field.value ? "py-0" : "py-14 border-dashed "
                              } bg-[#FCFCFC]`}
                              onClick={() =>
                                document.getElementById("brand-logo")?.click()
                              }
                            >
                              {field.value ? (
                                <div className="relative w-full h-[170px]">
                                  <Image
                                    src={
                                      URL.createObjectURL(
                                        field.value as File
                                      ) || "/placeholder.svg"
                                    }
                                    alt="Brand Logo"
                                    fill
                                    className="object-cover rounded-lg"
                                  />
                                </div>
                              ) : (
                                <>
                                  <Upload className="mx-auto mb-3 text-[#7D7D7D]" />
                                  <p className="text-base leading-6 font-light text-[#5F5F5F]">
                                    Upload brand logo
                                  </p>
                                </>
                              )}
                              <input
                                type="file"
                                id="brand-logo"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    field.onChange(file);
                                  }
                                }}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-500 text-xs mt-1" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="productImage"
                      render={({ field }) => (
                        <FormItem className="w-1/2">
                          <FormControl>
                            <div
                              className={`border-2 border-gray-200 rounded-lg text-center cursor-pointer hover:border-gray-800 transition-colors ${
                                field.value ? "py-0" : "py-14 border-dashed "
                              } bg-[#FCFCFC]`}
                              onClick={() =>
                                document
                                  .getElementById("product-image")
                                  ?.click()
                              }
                            >
                              {field.value ? (
                                <div className="relative w-full h-[170px]">
                                  <Image
                                    src={
                                      URL.createObjectURL(
                                        field.value as File
                                      ) || "/placeholder.svg"
                                    }
                                    alt="Product"
                                    fill
                                    className="object-cover rounded-lg"
                                  />
                                </div>
                              ) : (
                                <>
                                  <Upload className="mx-auto mb-3 text-[#7D7D7D]" />
                                  <p className="text-base leading-6 font-light text-[#5F5F5F]">
                                    Upload product image
                                  </p>
                                </>
                              )}
                              <input
                                type="file"
                                id="product-image"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    field.onChange(file);
                                  }
                                }}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-500 text-xs mt-1" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  <Button
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="w-full px-6 py-5 rounded-sm bg-gray-200 hover:bg-gray-300 transition-colors text-gray-800 flex items-center justify-center gap-2 text-base leading-6 font-normal"
                  >
                    Back
                  </Button>

                  <Button
                    type="submit"
                    disabled={!isValid || isFetchingAd}
                    className={`w-full text-white px-6 py-5 rounded-sm hover:bg-dark-purple transition-colors flex items-center justify-center gap-2 text-base leading-6 font-normal ${
                      isValid && !isFetchingAd
                        ? "bg-[#B800B8] hover:bg-[#960096] cursor-pointer"
                        : "bg-[#EAC8F0] cursor-not-allowed"
                    }`}
                  >
                    {isFetchingAd || isFetchingStatus
                      ? "Generating"
                      : "Generate Ad"}
                    <ArrowRight size={20} className="text-white" />
                  </Button>
                </div>
              </div>
            )}
          </form>
        </Form>
      </div>

      {/* Preview Section */}
      <div className="lg:flex-1 flex flex-col order-1 lg:order-2 md:pb-4 lg:p-0 gap-2 max-md:bg-white ">
        {/* Preview Header */}
        <div className="py-3 px-2 md:px-10 bg-white border-b border-[#ECF1F5] ">
          <DesktopAdPreviewNavigation
            type="image-form"
            imageId={adData?.data?.image_id || ""}
            isPublished={true}
            downloadFunction={() => {
              const element = document.getElementById("outputImg");
              if (element) {
                downloadFunction();
              }
            }}
            status={
              isFetchingAd || isFetchingStatus
                ? "generating"
                : finalImageUrl
                ? "completed"
                : "initial"
            }
            imageUrl={finalImageUrl}
            pageAdData={adData?.data}
          />
          <button></button>
        </div>
        {/* Preview Content */}
        {finalImageUrl && !isFetchingStatus && (
          <div className="flex items-center gap-1 text-sm md:text-base leading-6 font-normal md:py-4 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8 11.75C8.2125 11.75 8.39075 11.678 8.53475 11.534C8.67875 11.39 8.7505 11.212 8.75 11V8C8.75 7.7875 8.678 7.6095 8.534 7.466C8.39 7.3225 8.212 7.2505 8 7.25C7.788 7.2495 7.61 7.3215 7.466 7.466C7.322 7.6105 7.25 7.7885 7.25 8V11C7.25 11.2125 7.322 11.3907 7.466 11.5347C7.61 11.6787 7.788 11.7505 8 11.75ZM8 5.75C8.2125 5.75 8.39075 5.678 8.53475 5.534C8.67875 5.39 8.7505 5.212 8.75 5C8.7495 4.788 8.6775 4.61 8.534 4.466C8.3905 4.322 8.2125 4.25 8 4.25C7.7875 4.25 7.6095 4.322 7.466 4.466C7.3225 4.61 7.2505 4.788 7.25 5C7.2495 5.212 7.3215 5.39025 7.466 5.53475C7.6105 5.67925 7.7885 5.751 8 5.75ZM8 15.5C6.9625 15.5 5.9875 15.303 5.075 14.909C4.1625 14.515 3.36875 13.9808 2.69375 13.3063C2.01875 12.6318 1.4845 11.838 1.091 10.925C0.697501 10.012 0.500501 9.037 0.500001 8C0.499501 6.963 0.696501 5.988 1.091 5.075C1.4855 4.162 2.01975 3.36825 2.69375 2.69375C3.36775 2.01925 4.1615 1.485 5.075 1.091C5.9885 0.697 6.9635 0.5 8 0.5C9.0365 0.5 10.0115 0.697 10.925 1.091C11.8385 1.485 12.6323 2.01925 13.3063 2.69375C13.9803 3.36825 14.5148 4.162 14.9098 5.075C15.3048 5.988 15.5015 6.963 15.5 8C15.4985 9.037 15.3015 10.012 14.909 10.925C14.5165 11.838 13.9823 12.6318 13.3063 13.3063C12.6303 13.9808 11.8365 14.5152 10.925 14.9097C10.0135 15.3042 9.0385 15.501 8 15.5Z"
                fill="#B800B8"
              />
            </svg>
            <p>Click on your image to make edits</p>
          </div>
        )}
        <div
          className={`${
            finalImageUrl && !isFetchingStatus
              ? ""
              : "bg-[#F2F2F2] md:bg-[#F2F2F2] max-md:mt-4 flex-1 rounded-md flex items-center justify-center min-h-[50vh] md:min-h-[100vh] mx-auto max-h-[648px] max-w-[699px] w-full max-md:w-[90%] md:my-10 max-md:py-10"
          }`}
        >
          <div className={`${finalImageUrl ? "" : "bg-[#F2F2F2]"}`}>
            <div className="w-full mx-auto flex items-center justify-center rounded-sm">
              {error || inpaintError ? (
                <div className="max-w-[609px] w-full mx-auto flex items-center justify-center max-h-[648px] rounded-sm">
                  <div className="flex flex-col gap-4 md:gap-6 items-center justify-center text-center">
                    <h2 className="text-lg md:text-2xl text-[#121316] text-center leading-8 font-semibold max-md:max-w-[338px]">
                      Failed to Generate Image
                    </h2>
                    <Button
                      onClick={handleRetry}
                      className="bg-[#B800B8] hover:bg-[#960096] w-fit mx-auto text-white px-6 py-5 rounded-sm transition-colors flex items-center justify-center gap-2 text-sm md:text-base leading-6 font-normal"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Try Again
                    </Button>
                  </div>
                </div>
              ) : isFetchingAd || isFetchingStatus ? (
                <div className="max-w-[609px] w-full mx-auto flex items-center justify-center max-h-[648px] rounded-sm">
                  <div className="flex flex-col gap-6 items-center justify-center rounded-md">
                    <div className="relative w-12 h-12">
                      <div className="absolute inset-0 border-6 border-gray-800 rounded-full"></div>
                      <div className="absolute inset-0 border-6 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <h2 className="text-lg md:text-2xl text-[#121316] text-center leading-8 font-semibold max-md:max-w-[338px]">
                      {isFetchingStatus ? "Inpainting" : "Generating"} Your
                      Image Ad...{" "}
                      {isFetchingStatus ? inpaintProgress : progress}%
                    </h2>
                  </div>
                </div>
              ) : !finalImageUrl ? (
                <div className="flex flex-col">
                  <ImageIcon className="size-10 mb-4 text-[#A1A1A1] mx-auto" />
                  <p className="text-lg md:text-2xl leading-8 font-light text-[#A1A1A1] text-center">
                    Your ad will be generated here
                  </p>
                </div>
              ) : null}

              {finalImageUrl && !isFetchingStatus && (
                <div className="w-full h-full">
                <FabricImageEditor
                    canvasRef={canvasRef}
                    fabricCanvas={fabricCanvas}
                    imageSrc={finalImageUrl}
                    imageId={adData?.data.image_id || ""}
                    initialTexts={[
                      {
                        id: "1",
                        content:
                          adData?.data.keywords &&
                          adData?.data.keywords.length > 0
                            ? adData?.data.keywords[0]
                            : "Edit this text",
                        x: 50,
                        y: 50,
                        fontSize: 24,
                        color: "#ffffff",
                        fontFamily: "Arial",
                        backgroundColor: "none",
                      },
                    ]}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
