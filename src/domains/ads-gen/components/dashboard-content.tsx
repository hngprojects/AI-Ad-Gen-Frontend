import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { motion } from "framer-motion";

import Loader from "@/components/ui/loader";
import { Check } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useAdsData } from "../api/use-ads-data";
import { useAdsContext } from "../context/AdsContext";

const DashboardContent = ({ filt }: { filt?: "user" | "community" }) => {
  const [filter, setFilter] = useState<"user" | "community">(
    filt ? filt : "user"
  );

  const {
    userPage,
    communityPage,
    isLoading,
    adData,
    setAdData,
    setUserPage,
    setCommunityPage,
  } = useAdsContext();

  const { nextUserPage, prevUserPage, nextCommunityPage, prevCommunityPage } =
    useAdsData();

  const [sortOption, setSortOption] = useState("most-recent");

  const { publishedImages, userImages } = useAdsData();

  const router = useRouter();
  useEffect(() => {
    setAdData({ user: userImages.images, community: publishedImages.images });
   

    // Check if there's a recently published ad in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const publishStatus = urlParams.get("publishStatus");

    if (publishStatus) {
      const toastMessage =
        publishStatus === "published"
          ? {
              title: "Ad Published Successfully!",
              description:
                "Your ad is now live and ready to reach your audience.",
            }
          : {
              title: "Ad Unpublished Successfully!",
              description: "Your ad is no longer live.",
            };

      // Show toast only once
      toast.custom(
        () => (
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg pointer-events-auto flex items-center p-4">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-500 rounded-md shadow-lg p-0.5">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 mb-2">
                    {toastMessage.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {toastMessage.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ),
        {
          id: "publish-status-toast",
        }
      );

      setTimeout(() => {
        const newUrl = window.location.pathname;
        window.history.replaceState({}, "", newUrl);
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userImages.images, publishedImages.images]);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const currentPage = filter === "user" ? userPage : communityPage;
  const maxPage =
    filter === "user"
      ? Math.ceil(userImages.total_count / 10)
      : Math.ceil(publishedImages.total_count / 10);

  return isLoading ? (
    <Loader fullscreen={false} />
  ) : (
    <>
      <section
        className={`bg-white rounded-[20px] px-4 py-6 md:p-6 flex flex-col gap-10 mt-10 transition-all duration-500 ${
          !isLoading ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex justify-between flex-col sm:flex-row gap-4">
          <div className="flex gap-3 md:gap-5">
            {(["user", "community"] as const).map((category) => (
              <motion.button
                key={category}
                className={`rounded-[8px] p-2 text-[14px] font-semibold cursor-pointer ${
                  filter === category
                    ? "text-[#7D7D7D] bg-[#ECECEC] border border-[#ECECEC]"
                    : "text-[#7D7D7D]"
                }`}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {category === "user" ? "Recent Ads" : "Community"}
              </motion.button>
            ))}
          </div>
          {filter === "community" || filter === "user" && (
            <motion.div
              className="flex gap-2.5 items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-[#121316] text-[14px] font-semibold">
                Sort by:{" "}
              </p>
              <Select value={sortOption} onValueChange={(value) => {
                setSortOption(value)
                console.log(value)
                }}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Most recent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="most-recent">Most recent</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </motion.div>
          )}
        </div>

        {adData[filter]?.length === 0 ? (
          <div className="flex flex-col items-center gap-4 my-12">
            <Image
              src="/get-started.png"
              width={401}
              height={333}
              alt="Let's get started."
            />
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            initial="hidden"
            animate="show"
            key={filter}
          >
            {adData &&
              adData[filter]
                ?.sort((a, b) => {
                  if (sortOption === "most-recent") {
                    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
                  } else if (sortOption === "name") {
                    return a.product_name.localeCompare(b.product_name);
                  }
                  return 0;
                })
                .map((ad, i) => (
                  <motion.div
                    key={i}
                    className="border-[#ECECEC] border bg-[#FCFCFC] rounded-[8px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                    variants={itemVariants}
                    whileHover="hover"
                    onClick={() =>
                      router.push(`/dashboard/details?type=${filter}&id=${i}`)
                    }
                  >
                    <div className="relative group h-[140px] sm:h-[294px] overflow-hidden">
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.4, ease: "easeOut" },
                        }}
                      >
                        <Image
                          src={ad.final_url ? ad.final_url : ad.image_url}
                          fill
                          alt={`${ad.prompt}`}
                          priority={i < 3}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover cursor-pointer"
                          style={{ height: "100%" }}
                          unoptimized
                        />
                        <motion.div
                          className="absolute inset-0 bg-black opacity-0"
                          whileHover={{ opacity: 0.5 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </div>
                    <motion.div className="flex flex-col gap-[10px] mt-2.5 ml-4 mb-3">
                      <span className="font-semibold">{ad.product_name}</span>
                      {filter === "community" && (
                        <div className="flex gap-2.5 items-center">
                          <div className="w-5 h-5 rounded-full overflow-hidden relative flex items-center justify-center">
                            <div className="bg-[#2C2C2C] flex items-center justify-center size-[20px] rounded-full text-[#F5F5F5] font-semibold text-xs">
                              {ad.author_info.name[0].toUpperCase()}
                            </div>
                          </div>
                          <span className="text-[#7D7D7D] text-sm">
                            {ad.author_info.name}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
          </motion.div>
        )}
        <div
          className={`${
            (adData[filter] || []).length || "hidden"
          } flex justify-center mt-6 bg-[#f8f7f759] rounded-2xl m-auto w-fit p-2.5`}
        >
          <Pagination>
            <PaginationContent className="flex gap-4">
              <PaginationItem>
                <PaginationPrevious
                  onClick={filter === "user" ? prevUserPage : prevCommunityPage}
                  className={
                    currentPage == 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>
              {currentPage > 1 && (
                <PaginationItem
                  onClick={() =>
                    filter == "user" ? setUserPage(1) : setCommunityPage(1)
                  }
                >
                  <span className="px-3 py-1 hover:bg-white hover:outline hover:outline-[#B800B8] rounded">
                    1
                  </span>
                </PaginationItem>
              )}
              {currentPage >= 3 && (
                <PaginationItem
                  onClick={() =>
                    filter == "user" ? setUserPage(2) : setCommunityPage(2)
                  }
                >
                  <span className="px-3 py-1 hover:bg-white hover:outline hover:outline-[#B800B8] rounded">
                    2
                  </span>
                </PaginationItem>
              )}
              {currentPage >= 4 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <span className="px-3 py-1 bg-[#B800B8] hover:opacity-90 text-white rounded">
                  {currentPage}
                </span>
              </PaginationItem>
              {maxPage > currentPage + 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              {currentPage !== maxPage && (
                <PaginationItem
                  onClick={() =>
                    filter == "user"
                      ? setUserPage(maxPage)
                      : setCommunityPage(maxPage)
                  }
                >
                  <span className="px-3 py-1 hover:bg-white hover:outline hover:outline-[#B800B8] rounded">
                    {maxPage.toString()}
                  </span>
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationNext
                  onClick={filter === "user" ? nextUserPage : nextCommunityPage}
                  className={
                    currentPage == maxPage
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </>
  );
};

export default DashboardContent;
