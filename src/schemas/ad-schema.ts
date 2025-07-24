import { z } from "zod";

export const ImageAdSchema = z.object({
  productName: z.string().min(1, "Product name is required"),
  demographics: z.string().min(1, "Demographics selection is required"),
  region: z.string().min(1, "Target region is required"),
  ageGroup: z.array(z.string()).min(1, "At least one age group is required"),
  adSize: z.string().min(1, "Ad size is required"),
  language: z.string().min(1, "Ad language is required"),
  adGoal: z
    .string()
    .min(10, "Ad goal must be at least 10 characters")
    .max(500, "Ad goal must be less than 500 characters"),
});
