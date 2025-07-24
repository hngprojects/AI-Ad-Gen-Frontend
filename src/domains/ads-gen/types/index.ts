import { ImageAdSchema } from "@/schemas/ad-schema";
import { z } from "zod";

export type ImageAdFormData = z.infer<typeof ImageAdSchema>;
