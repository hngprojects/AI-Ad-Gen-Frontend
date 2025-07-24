"use client";

import React, { useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import bgLine from "../../../../../../public/bg-line.png";
import contactAmico from "../../../../../../public/Contact us-amico.png";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { postRequest } from "@/lib/axios-fetch";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      console.log("Sending email to amandawork2022@gmail.com");
      console.log("Form data:", data);

      await postRequest("/contact/submit", data);

      toast.success("Message sent!", {
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Something went wrong", {
        description: "Your message couldn't be sent. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container mx-auto py-8 md:py-16 relative">
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={bgLine}
          alt="Background line"
          className="object-cover w-full h-auto md:h-full"
          priority
        />
      </motion.div>

      <Card className="mx-4 md:mx-auto max-w-7xl rounded-2xl shadow-md overflow-hidden">
        <CardContent className="p-6 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              className="w-full md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, scale: 0.9, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-6 md:mb-8">
                <h1 className="text-2xl md:text-4xl font-bold mb-2">
                  Contact Us
                </h1>
                <p className="text-gray-600 text-sm md:text-base">
                  We are here for you! How can we help?
                </p>
              </div>

              <div className="max-w-md mx-auto md:mx-0">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter your email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Enter your message"
                              className="min-h-32 w-full"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-[#B800B8] hover: hover:bg-[#cf54cf21]mt-6 py-7 rounded-[6px] text-white font-semibold  transition-colors"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Now"}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src={contactAmico}
                alt="Contact us illustration"
                className="max-w-full h-auto"
              />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactPage;
