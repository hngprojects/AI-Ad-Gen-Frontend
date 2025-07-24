"use client";
import { Logo } from "@/components/icons/icon";
import { UserAvatar } from "@/domains/ads-gen/components/avatar";
import { useAuthStore } from "@/store/auth-store";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import iconLogo from "../../../../../public/icon-logo.svg";
import logoPng from "../../../../../public/logo.png";
import UpgradePlanModal from "../upgrade-plan-modal";
import { useSubscriptionStatus } from "@/hooks/use-subscription-status";

const Header: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const { data } = useSubscriptionStatus();
  const logout = useAuthStore((state) => state.logout);
  const name = `${user?.first_name || ""} ${user?.last_name || ""}`;
  const pathname = usePathname();
  const predefinedPromptPages =
    pathname.startsWith("/preview-ad") || pathname.startsWith("/generate-ad");
  const isSpecialPage =
    pathname.startsWith("/dashboard") ||  pathname.startsWith("/stand-alone") || predefinedPromptPages;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalComplete, setIsModalComplete] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    setIsModalOpen(false);
    setIsModalComplete(false);
    logout();
  };

  if (isLoading) {
    return (
      <header className="w-full border-b border-[#F8E6F8] sticky top-0 z-40 bg-white">
        <div className="max-w-[1440px] m-auto flex justify-between w-full px-6 py-4 lg:pl-20 lg:pr-9">
          <div className="w-fit">
            <Link href="/">
              <Image
                src={iconLogo}
                alt="Logo"
                width={35}
                height={40}
                className="inline-block sm:hidden"
              />
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`w-full border-b border-[#F8E6F8] sticky top-0 z-40 ${
        isSpecialPage ? "bg-[#292929]" : "bg-white"
      } focus:outline-none focus:ring-0`}
    >
      <div
        className={`max-w-[1440px] m-auto flex justify-between w-full px-6 py-4 lg:pl-20 lg:pr-9`}
      >
        <div className="w-fit">
          <Link href="/">
            {isSpecialPage ? (
              <>
                <Image
                  src={logoPng}
                  alt="Logo"
                  width={128}
                  height={64}
                  className="hidden sm:inline-block"
                />
                <Image
                  src={iconLogo}
                  alt="Logo"
                  width={35}
                  height={40}
                  className="inline-block sm:hidden"
                />
              </>
            ) : (
              <>
                <Logo className="w-32 md:w-auto hidden sm:inline-block" />
                <Image
                  src={iconLogo}
                  alt="Logo"
                  width={35}
                  height={40}
                  className="inline-block sm:hidden"
                />
              </>
            )}
          </Link>
        </div>
        {!isSpecialPage && (
          <nav className="hidden md:flex items-center space-x-6 text-gray-600">
            <Link
              href="/features"
              className={`hover:text-purple-700 ${
                pathname == "/features" && "text-purple-700"
              }`}
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className={`hover:text-purple-700 ${
                pathname == "/how-it-works" && "text-purple-700"
              }`}
            >
              How it works
            </Link>
            <Link
              href="/pricing"
              className={`hover:text-purple-700 ${
                pathname == "/pricing" && "text-purple-700"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/contact-us"
              className={`hover:text-purple-700 ${
                pathname == "/contact=us" && "text-purple-700"
              }`}
            >
              Contact us
            </Link>
          </nav>
        )}

        {!predefinedPromptPages && (
          <>
            {user ? (
              <div className="flex sm:gap-10 gap-2">
                {isSpecialPage && (
                  <div
                    className="flex items-center gap-2 sm:gap-4 px-2 sm:px-4 py-1 sm:py-2 bg-white rounded-[8px] cursor-pointer max-sm:mr-2 max-sm:h-fit my-auto"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <div className="flex items-center">
                      <Image
                        src="/star-fall2.svg"
                        height={24}
                        width={24}
                        alt="Star fall"
                      />

                      {data ? (
                        <span className="pl-[2px] sm:pl-1.5 text-base font-semibold text-[#5F5F5F]">
                          {data.data.subscription?.credits}{" "}
                          <span className="hidden sm:inline-block">
                            credits
                          </span>
                        </span>
                      ) : (
                        <span className="pl-[2px] sm:pl-1.5 text-base font-semibold text-[#5F5F5F]">
                          5{" "}
                          <span className="hidden sm:inline-block">
                            credits
                          </span>
                        </span>
                      )}
                    </div>
                    <div className="flex sm:flex items-center gap-2 sm:gap-4 ">
                      <Image
                        src="/separate.svg"
                        height={16}
                        width={3}
                        alt="Separator"
                      />

                      <span className="font-semibold text-[#121316] inline-block sm:hidden">
                        {data?.data.subscription?.plan_type?.[0]?.toUpperCase()}
                      </span>
                      <span className="hidden sm:inline-block">
                        {" "}
                        {data?.data.subscription?.plan_type}
                      </span>
                    </div>
                  </div>
                )}
                <UserAvatar
                  name={name}
                  imageUrl={user.avatar_url}
                  onSignOut={handleLogout}
                />
              </div>
            ) : (
              <div className="flex gap-3">
                <Link
                  href={"/signin?type=signin"}
                  className="cursor-pointer px-2 sm:px-6 py-1 sm:py-3 rounded-sm text-[#520052] transition-colors justify-center items-center gap-2 border border-[#B800B8] hover:bg-[#cf54cf21] w-fit mx-auto flex"
                >
                  Sign in
                </Link>
                <Link
                  href={"/signin?type=signup"}
                  className="cursor-pointer px-2 sm:px-6 py-1 sm:py-3 rounded-sm bg-light-purple text-white hover:bg-dark-purple transition-colors justify-center items-center gap-2 border w-fit mx-auto flex"
                >
                  Sign up
                </Link>
              </div>
            )}

            {user && (
              <UpgradePlanModal
                isOpen={isModalOpen}
                isComplete={isModalComplete}
                onClose={setIsModalOpen}
                onComplete={setIsModalComplete}
              />
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
