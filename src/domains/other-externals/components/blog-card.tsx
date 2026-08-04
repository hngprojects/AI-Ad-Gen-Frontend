import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface section {
  title: string;
  content: string[];
  sub1?: { title: string; content?: string; liste?: string[] };
  sub2?: { title: string; content?: string; liste?: string[] };
}

export interface BlogCardProps {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
  fullDescription: string[];
  pOne?: section;
  pTwo?: section;
  pThree?: section;
  pFour?: section;
  pFive?: section;
  pSix?: section;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  image,
  title,
  description,
}) => {
  return (
    <div className={`flex flex-col gap-6 ${id != 1 && "lg:flex-row "} w-full`}>
      <div
        className={`w-full h-[340px] md:h-[500px] ${
          id == 1 ? "lg:h-[443px]" : "lg:h-[220px] lg:w-[230px]"
        } overflow-hidden`}
      >
        <Image
          className="rounded-2xl w-full h-full object-cover mb-[25px]"
          src={image}
          width={410}
          height={350}
          alt="Blog image"
          priority
          unoptimized
        />
      </div>
      <div className="flex-[2]">
        <div className={`flex flex-col ${id == 1 ? "gap-5" : "gap-3"}`}>
          <h2 className="text-[#121316] text-2xl text-center font-semibold line-clamp-2">
            {title}
          </h2>
          <p className="text-[#5F5F5F] text-xl font-normal line-clamp-3">
            {description}
          </p>
        </div>
        <Link
          href={`/blogs/${id}`}
          className={`bg-light-purple cursor-pointer text-white px-6 py-3 ${
            id == 1 ? "mt-6" : "mt-3"
          } rounded-sm hover:bg-dark-purple transition-colors flex justify-center items-center gap-2 w-fit`}
        >
          <p>Read more</p> <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
