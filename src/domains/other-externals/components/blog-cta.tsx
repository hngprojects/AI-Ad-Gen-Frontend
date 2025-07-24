import Image from "next/image";
import blogCta from "../../../../public/blogs-cta.svg";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
const BlogCTA = () => {
  return (
    <section className="bg-[#F8E6F8] rounded-[16px] md:rounded-[32px] py-6 px-8 flex justify-between items-center gap-5 mb-6 md:mb-30">
      <div className="max-w-[526px] flex flex-col gap-6 items-center md:items-start">
        <p className="text-[#121316] text-[24px] text-center md:text-start md:text-[32px] font-semibold">
          Stay ahead with expert articles, trends, and tips designed to elevate
          your marketing strategy.
        </p>
        <Link
          href=""
          className="bg-light-purple cursor-pointer text-white px-6 py-3 rounded-sm hover:bg-dark-purple transition-colors justify-center items-center gap-2 w-fit hidden md:flex"
        >
          <p>Get Started Sow</p> <ArrowRight />
        </Link>
      </div>
      <picture className="hidden lg:flex">
        <Image
          className="rounded-2xl w-full h-full object-cover"
          src={blogCta}
          width={523}
          height={425}
          alt="Blog cta image"
          priority
          unoptimized
        />
      </picture>
    </section>
  );
};
export default BlogCTA;
