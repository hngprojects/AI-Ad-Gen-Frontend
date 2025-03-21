import BlogCTA from "../components/blog-cta";
import BlogHeroSection from "../components/blog-hero-section";
import Blogs from "../components/blogs";
import BrowseByCategories from "../components/browse-categories";

const Page = () => {
  return (
    <div className="max-w-7xl w-full xl:mx-auto max-lg:px-4 pt-8 flex flex-col gap-6 md:gap-40">
      <BlogHeroSection />
      <Blogs />
      <BrowseByCategories />
      <BlogCTA />
    </div>
  );
};

export default Page;
