"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const schema = z.object({
  email: z
    .string()
    .min(1, "This field is required")
    .email("Invalid email address"),
});

export const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: { email: string }) => {
    console.log("Subscribed with:", data);
  };

  return (
    <div className="bg-black text-white py-14 px-4 text-center flex flex-col gap-8">
      <p className="text-white text-md md:text-[28px] font-semibold leading-[36px] text-center px-6 lg:px-11 md:max-w-3xl mx-auto">
        Subscribe to our newsletter for the latest trends, AI-powered advert
        strategies, and exclusive offers
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row items-center justify-center gap-6"
      >
        <div className="relative w-[90%] max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="w-full px-4 py-3 rounded-md border border-[#CF54CF] bg-white focus:outline-none text-[#5F5F5F]  text-lg font-semibold leading-[28px]"
          />
          {errors.email && (
            <p className="text-red-500 min-h-2  absolute text-sm mt-1 text-left">
              {errors.email.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#C23CC3] cursor-pointer text-white font-semibold px-6 py-3 rounded-lg transition hover:bg-[#a72ca7]"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  );
};
