import Image from "next/image";
import Link from "next/link";

const BlogHeroSection = () => {
  return (
    <section>
      <hgroup className="flex items-center flex-col p-2 gap-4">
        <h1 className="text-[#121316] text-[28px] font-semibold md:text-3xl lg:text-[40px] text-center">
          Stay Ahead with Expert Insights on Marketing Trends
        </h1>
        <p className="max-w-4xl text-base sm:text-xl text-center">
          Explore articles, tips, and insights on marketing trends, AI-driven
          advertising, and best practices to refine your ad strategy and
          maximize your brand&apos;s impact.
        </p>
        <Link
          href="/blogs/#blog-section"
          className="bg-light-purple cursor-pointer text-white px-10 py-3 rounded-[12px] hover:bg-dark-purple transition-colors my-2"
        >
          <p>Explore Articles</p>
        </Link>
      </hgroup>
      <div className="relative h-fit w-full overflow-hidden rounded-2xl mt-6">
        <div className="w-full mx-auto h-[350px] sm:h-[704px] md:h-[500px]">
          <Image
            src="/blog-hero.jpeg"
            alt="Explore articles"
            className="absolute inset-0 object-cover w-full h-full aspect-square"
            fill
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;
