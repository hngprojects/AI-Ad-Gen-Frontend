"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonies = [
  {
    cite: "“As a small business owner with no design experience, GenZ.AI made ad creation effortless! I launched professional campaigns in minutes and saw a big boost in sales.”",
    authorPic: "/images/one.png",
    authorName: "Tanya.A, Boutique Owner",
  },
  {
    cite: "“GenZ.AI streamlined my workflow, helping me scale ad campaigns faster with data-driven creatives. Now, I spend less time tweaking ads and more time optimizing strategy.”",
    authorPic: "/images/two.png",
    authorName: "Jake M., Performance Marketer",
  },
  {
    cite: "“I had a tight deadline for my school project, and GenZ.AI saved me! It generated stunning ad creatives instantly, making my assignment stand out.”",
    authorPic: "/images/three.png",
    authorName: "Lena R., Marketing Student",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className=" flex flex-col justify-between gap-10 lg:gap-[80px] px-[40px] md:px-[60px] lg:px-[80px] py-10 md:py-20 bg-[#FEFBFE]"
    >
      <motion.div
        className="flex flex-col text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: 50 }}
      >
        <motion.p
          className="text-[#10509A] text-center text-sm md:text-base font-semibold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          TESTIMONIES
        </motion.p>
        <motion.h2
          className="text-[28px] md:text-[36px] lg:text-[48px] font-medium leading-tight max-w-[767px] m-auto text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          What our clients say about us
        </motion.h2>
      </motion.div>

      <motion.div
        className="flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-3 gap-6 w-full"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="bg-[#1671D9] rounded-[16px] flex flex-col justify-between p-6 relative min-h-60">
          <h3 className="text-[14px] text-white relative z-1">
            FACTS AND NUMBERS
          </h3>
          <div className="max-w-[187px] relative z-1">
            <p className="text-[32px] text-white">91%</p>
            <span className="text-[14px] text-white">
              Of our clients recommend Genz.ad
            </span>
          </div>
          <Image
            src="/disc.svg"
            height={250}
            width={300}
            alt="bg"
            className="absolute left-0 bottom-0 w-[75%] h-auto max-h-[80%]"
          />
        </div>
        <div className="col-span-2 rounded-[16px] bg-[url('/bg-testimonies2.png')] bg-cover bg-center p-6 relative overflow-hidden flex flex-col justify-between  min-h-80">
          <h3 className="text-[14px] text-white relative z-1">CASE STUDY</h3>
          <div className="max-w-[440px] relative z-1">
            <p className="text-[32px] text-white">
              &quot;GenZ.AI cut our ad creation time in half!&quot;
            </p>
            <span className="text-[16px] text-white">
              With AI-driven ad generation, we launched high-performing
              campaigns effortlessly, saving hours while boosting engagement and
              conversions.
            </span>
          </div>
          <span className="inset-0 absolute z-0 bg-[#1A1A1AC7]"></span>
        </div>
        {testimonies.map((testimony, index) => (
          <div
            className="rounded-[16px] bg-white border-2 border-[#F2F2F2] p-6 flex flex-col justify-between min-h-[260px] lg:min-h-[323px]"
            key={index}
          >
            <p className="text-[20px] font-light">{testimony.cite}</p>
            <div className="flex gap-4 items-center">
              <picture className="h-10 w-10 rounded-[20px] overflow-hidden">
                <Image
                  src={testimony.authorPic}
                  height={40}
                  width={40}
                  alt="profile"
                />
              </picture>
              <p className="text-base font-bold">{testimony.authorName}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
