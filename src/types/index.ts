export interface User {
  id: string;
}

export interface ImageData {
  id: string;
  created_at: string;
  image_url: string;
  prompt: string;
  updated_at: string;
}

export interface SelectOption {
  label: string;
  value: string;
  display?: string;
  aspectRatio?: string;
}

//Image Generation Types
export interface ImageGenerationResponse {
  status: string;
  status_code: number;
  message: string;
  data: {
    success: boolean;
    image_url: string;
    image_id: string;
    direct_image_url: string;
    prompt_used: string;
    target_audience: string;
    ad_description: string;
    is_published: boolean;
    metadata: Record<string, unknown>;
    task_id?: string;
    error?: string;
  };
}

export interface TaskStatusResponse {
  status: string;
  status_code: number;
  message: string;
  data: {
    task_id: string;
    status: "pending" | "processing" | "completed" | "failed";
    progress: number;
    result?: {
      image_url: string;
      direct_image_url: string;
    };
    error?: string;
  };
}
