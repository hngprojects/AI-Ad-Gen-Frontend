import Image from "next/image";
import browser1 from "../../../../public/browser-1.svg";
import browser2 from "../../../../public/browser-2.svg";
import browser3 from "../../../../public/browser-3.svg";

const BrowseByCategories = () => {
  return (
    <section className="flex flex-col gap-6 md:gap-8">
      <h2 className="text-[#121316] text-[28px] md:text-[32px] font-semibold text-center">
        Browse by categories
      </h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {[browser1, browser2, browser3].map((img, index) => (
          <picture className="" key={index}>
            <Image
              className="rounded-2xl w-full h-full object-cover mb-[25px]"
              src={img}
              width={410}
              height={350}
              alt="Blog image"
              priority
              unoptimized
            />
          </picture>
        ))}
      </div>
    </section>
  );
};
export default BrowseByCategories;
