import React, { Suspense } from "react";
import Loader from "@/components/ui/loader";
import ImageAdForm from "../../components/image-ad-form";

const Page = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-full">
          <Loader />
        </div>
      }
    >
      <ImageAdForm />
    </Suspense>
  );
};

export default Page;
