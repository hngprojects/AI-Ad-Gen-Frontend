import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as z from "zod";
import { useSubmitMarketingForm } from "@/domains/ads-gen/api/use-submit-marketing";

interface AccessProps {
  heading?: string;
  imageSrc?: string;
  backgroundImage?: string;
  buttonText?: string;
  onSubmit?: (formData: { name: string; email: string; phone: string }) => void;
}

const Access = ({ heading, imageSrc }: AccessProps) => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { mutate: submitForm } = useSubmitMarketingForm();

  const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Email is required"),
    phone: z.string().optional(),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = { name, email, phone };
    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    submitForm(formData);
    setErrors({});
    router.push("/signup");
  };

  return (
    <div
      className="w-full bg-[#520052] bg-cover bg-center py-10"
      style={{
        backgroundImage: "url('/Map.png')",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center max-md:px-4 mt-8 sm:mt-12 md:mt-0">
          <Image
            src={imageSrc || "/early-access.svg"}
            alt="Early Access Visual"
            width={400}
            height={400}
            className="object-cover"
            priority
          />
        </div>

        <motion.div
          className="flex flex-col items-center justify-center p-6 md:p-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-md md:text-2xl font-semibold text-white text-left w-full">
            {heading || (
              <span className="whitespace-nowrap text-left w-[40ch]">
                Stop struggling with creating ads, and get early to GenZ Ad.
              </span>
            )}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-4 w-full max-w-[600px] self-start"
          >
            <div>
              <input
                type="text"
                placeholder="Enter your name"
                className="p-3 rounded-md text-[#5F5F5F] w-full font-semibold text-sm outline-none bg-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors.name && (
                <div className="text-red-500 text-sm mt-1">{errors.name}</div>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-md text-[#5F5F5F] w-full font-semibold text-sm outline-none bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Enter your phone number (optional)"
                className="p-3 rounded-md text-[#5F5F5F] w-full font-semibold text-sm outline-none bg-white"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && (
                <div className="text-red-500 text-sm mt-1">{errors.phone}</div>
              )}
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-[#CF54CF] text-white font-semibold px-4 py-2 cursor-pointer text-sm rounded-md hover:bg-[#A63EA6] transition self-start"
            >
              Get Early Access
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Access;
