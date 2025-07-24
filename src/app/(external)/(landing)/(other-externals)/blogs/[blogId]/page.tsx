"use client";

import { blogData } from "@/domains/other-externals/components/blogs";
import Image from "next/image";
import { useParams } from "next/navigation";

const BlogDetail = () => {
  const { blogId } = useParams();
  const id = Number(blogId); 
  const blog = blogData.find((b) => b.id === id);
  const otherBlogs = blogData.filter((b) => b.id !== id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const renderBlogContent = () => {
    switch (id) {
      case 1:
        return (
          <section className="max-w-[1264px] text-[#121316] mx-auto p-4">
            <div className="relative h-[400px] md:h-[880px] w-full overflow-hidden rounded-2xl mt-6">
              <picture className="h-[400px] md:h-[880px] w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="absolute inset-0 object-cover w-full h-full aspect-square"
                  fill
                  priority
                />
              </picture>
            </div>
            <h1 className="text-[#121316] mt-8 text-[28px] md:text-[32px] font-semibold text-center">
              {blog.title}
            </h1>
            {blog.fullDescription?.map((desc, i) => (
              <p key={i} className="text-xl mt-5  leading-[28px]">
                {desc}
              </p>
            ))}

            <div>
              {[
                blog.pOne,
                blog.pTwo,
                blog.pThree,
                blog.pFour,
                blog.pFive,
                blog.pSix,
              ].map((section, i) =>
                section ? (
                  <div key={i}>
                    <div className="my-5">
                      <h2 className="text-xl font-semibold">{section.title}</h2>
                      {section.content?.map((text, j) => (
                        <p key={j} className="text-xl  leading-[28px]">
                          {text}
                        </p>
                      ))}
                    </div>

                    <div className="my-5">
                      <h3 className="text-xl font-semibold">
                        {section.sub1?.title}
                      </h3>
                      <p className="text-base">{section.sub1?.content}</p>
                      <ul>
                        {section.sub1?.liste?.map((text, j) => (
                          <li
                            key={j}
                            className="text-xl ml-10 leading-[28px] list-disc"
                          >
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null
              )}
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {otherBlogs.map((b) => (
                <div className="flex flex-col flex-[1]" key={b.id}>
                  <picture className="h-[337px]">
                    <Image
                      className="rounded-2xl w-full h-full object-cover mb-[25px]"
                      src={b.image}
                      width={410}
                      height={350}
                      alt="Blog image"
                      priority
                      unoptimized
                    />
                  </picture>
                  <p className="font-semibold text-xl">{b.title}</p>
                </div>
              ))}
            </div>
          </section>
        );
      case 2:
        return (
          <section className="max-w-[1264px] text-[#121316] mx-auto p-4">
            <div className="relative h-[400px] md:h-[880px] w-full overflow-hidden rounded-2xl mt-6">
              <picture className="h-[880px] w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="absolute inset-0 object-cover w-full h-full aspect-square"
                  fill
                  priority
                />
              </picture>
            </div>
            <h1 className="text-[#121316] mt-8 text-[28px] md:text-[32px] font-semibold text-center">
              {blog.title}
            </h1>
            {blog.fullDescription?.map((desc, i) => (
              <p key={i} className="text-xl mt-5  leading-[28px]">
                {desc}
              </p>
            ))}

            <div>
              {[
                blog.pOne,
                blog.pTwo,
                blog.pThree,
                blog.pFour,
                blog.pFive,
                blog.pSix,
              ].map((section, i) =>
                section ? (
                  <div key={i}>
                    <div className="my-5">
                      <h2 className="text-xl font-semibold">{section.title}</h2>
                      {section.content?.map((text, j) => (
                        <p key={j} className="text-xl  leading-[28px]">
                          {text}
                        </p>
                      ))}
                    </div>

                    <div className="my-5">
                      <h3 className="text-xl font-semibold">
                        {section.sub1?.title}
                      </h3>
                      <p className="text-base">{section.sub1?.content}</p>
                      <ul>
                        {section.sub1?.liste?.map((text, j) => (
                          <li
                            key={j}
                            className="text-xl ml-10 leading-[28px] list-disc"
                          >
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null
              )}
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {otherBlogs.map((b) => (
                <div className="flex flex-col flex-[1]" key={b.id}>
                  <picture className="h-[337px]">
                    <Image
                      className="rounded-2xl w-full h-full object-cover mb-[25px]"
                      src={b.image}
                      width={410}
                      height={350}
                      alt="Blog image"
                      priority
                      unoptimized
                    />
                  </picture>
                  <p className="font-semibold text-xl">{b.title}</p>
                </div>
              ))}
            </div>
          </section>
        );
      case 3:
        return (
          <section className="max-w-[1264px] text-[#121316] mx-auto p-4">
            <div className="relative  h-[400px] md:h-[880px] w-full overflow-hidden rounded-2xl mt-6">
              <picture className="h-[880px] w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="absolute inset-0 object-cover w-full h-full aspect-square"
                  fill
                  priority
                />
              </picture>
            </div>
            <h1 className="text-[#121316] mt-8 text-[28px] md:text-[32px] font-semibold text-center">
              {blog.title}
            </h1>
            {blog.fullDescription?.map((desc, i) => (
              <p key={i} className="text-xl mt-5  leading-[28px]">
                {desc}
              </p>
            ))}

            <div>
              {[
                blog.pOne,
                blog.pTwo,
                blog.pThree,
                blog.pFour,
                blog.pFive,
                blog.pSix,
              ].map((section, i) =>
                section ? (
                  <div key={i}>
                    <div className="my-5">
                      <h2 className="text-xl font-semibold">{section.title}</h2>
                      {section.content?.map((text, j) => (
                        <p key={j} className="text-xl  leading-[28px]">
                          {text}
                        </p>
                      ))}
                    </div>

                    <div className="my-5">
                      <h3 className="text-xl font-semibold">
                        {section.sub1?.title}
                      </h3>
                      <p className="text-base">{section.sub1?.content}</p>
                      <ul>
                        {section.sub1?.liste?.map((text, j) => (
                          <li
                            key={j}
                            className="text-xl ml-10 leading-[28px] list-disc"
                          >
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null
              )}
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {otherBlogs.map((b) => (
                <div className="flex flex-col flex-[1]" key={b.id}>
                  <picture className="h-[337px]">
                    <Image
                      className="rounded-2xl w-full h-full object-cover mb-[25px]"
                      src={b.image}
                      width={410}
                      height={350}
                      alt="Blog image"
                      priority
                      unoptimized
                    />
                  </picture>
                  <p className="font-semibold text-xl">{b.title}</p>
                </div>
              ))}
            </div>
          </section>
        );
      default:
        return (
          <section className="max-w-[1264px] text-[#121316] mx-auto p-4">
            <div className="relative  h-[300px] sm:h-[600px] md:h-[880px] w-full overflow-hidden rounded-2xl mt-6">
              <picture className="h-[880px] w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="absolute inset-0 object-cover w-full h-full aspect-square"
                  fill
                  priority
                />
              </picture>
            </div>
            <h1 className="text-[#121316] mt-8 text-[28px] md:text-[32px] font-semibold text-center">
              {blog.title}
            </h1>
            {blog.fullDescription?.map((desc, i) => (
              <p key={i} className="text-xl mt-5  leading-[28px]">
                {desc}
              </p>
            ))}

            <div>
              {[
                blog.pOne,
                blog.pTwo,
                blog.pThree,
                blog.pFour,
                blog.pFive,
                blog.pSix,
              ].map((section, i) =>
                section ? (
                  <div key={i}>
                    <div className="my-5">
                      <h2 className="text-xl font-semibold">{section.title}</h2>
                      {section.content?.map((text, j) => (
                        <p key={j} className="text-xl  leading-[28px]">
                          {text}
                        </p>
                      ))}
                    </div>

                    <div className="my-5">
                      <h3 className="text-xl font-semibold">
                        {section.sub1?.title}
                      </h3>
                      <p className="text-base">{section.sub1?.content}</p>
                      <ul>
                        {section.sub1?.liste?.map((text, j) => (
                          <li
                            key={j}
                            className="text-xl ml-10 leading-[28px] list-disc"
                          >
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null
              )}
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {otherBlogs.map((b) => (
                <div className="flex flex-col flex-[1]" key={b.id}>
                  <picture className="h-[337px]">
                    <Image
                      className="rounded-2xl w-full h-full object-cover mb-[25px]"
                      src={b.image}
                      width={410}
                      height={350}
                      alt="Blog image"
                      priority
                      unoptimized
                    />
                  </picture>
                  <p className="font-semibold text-xl">{b.title}</p>
                </div>
              ))}
            </div>
          </section>
        );
    }
  };

  return <>{renderBlogContent()}</>;
};

export default BlogDetail;
