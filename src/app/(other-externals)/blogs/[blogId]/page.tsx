"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { blogData } from "../../components/blogs";

const BlogDetail = () => {
  const { blogId } = useParams();
  const blog = blogData.find((b) => b.id === Number(blogId));
  const otherBlog = blogData.filter((b) => b.id !== Number(blogId));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <section className="max-w-[1264px] mx-auto p-4">
      <div className="relative h-[880px] w-full overflow-hidden rounded-2xl mt-6">
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
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-lg mb-4">{blog.description}</p>
      <p>{blog.description}</p>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {otherBlog.map((b, index) => (
          <picture className="flex gap" key={index}>
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
        ))}
      </div>
    </section>
  );
};

export default BlogDetail;
