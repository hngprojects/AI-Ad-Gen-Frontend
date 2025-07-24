"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import * as z from "zod";
import { useSubmitMarketingForm } from "@/domains/ads-gen/api/use-submit-marketing";

const EarlyAccess = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { mutate: submitForm } = useSubmitMarketingForm();

  const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().optional(),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = { name, email, message };
    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    submitForm(formData, {
      onSuccess: () => {
        router.push("/signin?type=signup");
      },
    });
  };

  return (
    <div
      className="w-full bg-[#520052] bg-cover bg-center"
      style={{ backgroundImage: "url('/Map.png')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <Image
            src="/early-access.svg"
            alt="Early Access Visual"
            width={450}
            height={400}
            className="object-cover"
            priority
          />
        </div>

        <motion.div
          className="flex flex-col justify-center p-6 md:p-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-white text-center md:text-left">
            Upgrade your freelancing business with effortless ad creation!
          </h2>
          <p className="text-center md:text-left text-gray-200 mt-2">
            Sign up for early access.
          </p>

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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.message}
                </div>
              )}
            </div>
            <button
              type="submit"
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

export default EarlyAccess;
