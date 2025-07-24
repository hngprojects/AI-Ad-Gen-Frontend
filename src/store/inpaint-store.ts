// stores/inpaintStore.ts
import { create } from 'zustand';
import { getRequest, postRequest } from "@/lib/axios-fetch";

interface InpaintParams {
  image_id: string;
  prompt: string;
}

interface InpaintTaskResponse {
  status: string;
  status_code: number;
  message: string;
  data: {
    task_id: string;
  };
}

interface TaskStatusResponse {
  status: string;
  status_code: number;
  message: string;
  data: {
    status: string;
    image_url?: string;
    success?: boolean;
    image_id?: string;
    prompt_used?: string;
  };
}

interface InpaintState {
  taskId: string | null;
  progress: number;
  isInpainting: boolean;
  inpaintData: TaskStatusResponse | null;
  error: string | null;
  startInpainting: (params: InpaintParams) => Promise<void>;
  checkInpaintStatus: () => Promise<void>;
  reset: () => void;
}

export const useInpaintStore = create<InpaintState>((set, get) => ({
  taskId: null,
  progress: 0,
  isInpainting: false,
  inpaintData: null,
  error: null,

  startInpainting: async (params) => {
    try {
      set({ 
        isInpainting: true,
        progress: 0,
        error: null,
        inpaintData: null
      });

      // Start the inpainting process
      const response = await postRequest("/image/inpaint", params);
      const responseData = response as InpaintTaskResponse;

      if (responseData?.data?.task_id) {
        set({ 
          taskId: responseData.data.task_id,
          progress: 10
        });

        // Start polling for status
        get().checkInpaintStatus();
      } else {
        throw new Error("Failed to start inpainting: No task ID received");
      }
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Failed to start inpainting",
        isInpainting: false,
        progress: 0
      });
    }
  },

  checkInpaintStatus: async () => {
    const { taskId } = get();
    if (!taskId) return;

    try {
      const response = await getRequest(`/image/task/${taskId}`);
      const responseData = response as TaskStatusResponse;

      if (responseData.status_code === 200 && responseData.data.status === "pending") {
        // Still pending - update progress
        set((state) => ({
          progress: Math.min(state.progress + 30, 90)
        }));

        // Continue polling after delay
        setTimeout(get().checkInpaintStatus, 3000);
      } else if (responseData.status_code === 201) {
        // Completed
        set({
          inpaintData: responseData,
          progress: 100,
          isInpainting: false
        });
      } else {
        throw new Error(responseData.message || "Unknown status response");
      }
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Failed to check inpainting status",
        isInpainting: false,
        progress: 0
      });
    }
  },

  reset: () => set({ 
    taskId: null,
    progress: 0,
    isInpainting: false,
    inpaintData: null,
    error: null
  })
}));