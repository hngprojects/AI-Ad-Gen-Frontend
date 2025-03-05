"use client";
import React, { useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

const NewsletterComponent = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    const validationResult = newsletterSchema.safeParse({ email });
    if (!validationResult.success) {
      setError(validationResult.error.errors[0].message);
      return;
    }

    try {
      console.log("Subscribing:", email);
      toast.success("Thank you for subscribing!", {
        description: "You'll receive the latest updates in your inbox.",
        duration: 3000,
      });
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("Failed to subscribe", {
        description: "Please try again later.",
      });
    }
  };

  return (
    <div
      className="relative flex items-center justify-center p-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/newsoverlay.svg')",
        backgroundColor: "#1E1E1E",
        backgroundBlendMode: "multiply",
        minHeight: "300px",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 w-full text-center   max-w-2xl">
        <h2 className="text-lg md:text-[28px]  text-white mb-4">
          Subscribe to our newsletter for the latest trends,
          <br className="hidden sm:block" />
          AI-powered advert strategies and exclusive offers
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[80%] mx-auto flex-col items-center"
        >
          <div className="h-5  text-red-500 text-xs self-start">
            {error && <p>{error}</p>}
          </div>
          <div className="flex w-full flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <Input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              className="bg-white rounded-xs outline-none border-none text-black focus:border-ring"
              placeholder="Enter your email"
            />
            <Button
              type="submit"
              className="bg-[#CF54CF] text-white hover:bg-[#CF54CF]/80 w-full sm:w-auto"
            >
              Subscribe Now
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterComponent;
