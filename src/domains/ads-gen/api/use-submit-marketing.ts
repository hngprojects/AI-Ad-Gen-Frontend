import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { postRequest } from "@/lib/api";

export const useSubmitMarketingForm = () => {
  const mutation = useMutation({
    mutationKey: ["submitContactForm"],
    mutationFn: (formData: { name: string; email: string; phone?: string }) =>
      postRequest("/contact/submit", formData),
    onSuccess: (data) => {
      if (data.status_code === 201) {
        toast.success(
          "Form submitted successfully! You will be redirected to sign up "
        );
      } else {
        toast.error("Something went wrong. Please try again.");
        console.error("Submission failed:", data.message);
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      console.error("Submission failed:", error);

      if (
        error.response?.data?.data?.errors &&
        error.response.data.data.errors.length > 0
      ) {
        const errors = error.response.data.data.errors;
        errors.forEach((err: string) => {
          toast.error(err);
        });
      } else if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(
          error.message || "Failed to submit form. Please try again."
        );
      }
    },
  });

  return mutation;
};
