import Version from "@/domains/external/components/version";
import Image from "next/image";

interface Shape {
  positionSize: string;
  picture: [src: string, alt: string, height: number, width: number];
}

import circle from "../../../../public/shapes/circle.svg";
import ellipse from "../../../../public/shapes/ellipse.svg";
import obj1 from "../../../../public/shapes/obj1.svg";
import obj2 from "../../../../public/shapes/obj2.svg";
import starFall from "../../../../public/star-fall.svg";

import version0 from "../../../../public/version0.svg";
import version1 from "../../../../public/version1.svg";
import version2 from "../../../../public/version2.svg";

interface Versions {
  name: string;
  deadline: string;
  status: string;
  title: string;
  subtitle: string;
  content: {
    item1: string[];
    item2: string[];
    item3: string[];
  };
  picture: string;
}

const shapes: Shape[] = [
  {
    positionSize:
      "h-[70px] lg:h-[193px] absolute right-[-28px]  lg:right-[-39px] bottom-[-8px] lg:bottom-[-44px]",
    picture: [circle, "circle", 193, 193],
  },
  {
    positionSize:
      "h-[53px] lg:h-[132px] absolute left-[-105px]  lg:left-[-160px] top-[85px] lg:top-[67px]",
    picture: [ellipse, "ellipse", 132, 376],
  },
  {
    positionSize:
      "h-[88px] lg:h-[238px] absolute right-[-19px]  lg:right-[-39px] top-[-19px] lg:top-[-39px]",
    picture: [obj1, "object 1", 238, 319],
  },
  {
    positionSize:
      "h-[127px] lg:h-[293px] absolute left-[-48px]  lg:left-[-57px] bottom-[-22px] lg:bottom-[-54px]",
    picture: [obj2, "object 2", 293, 297],
  },
];

const versions: Versions[] = [
  {
    name: "1.O",
    deadline: "Mar 16, 2024",
    status: "Released",
    title: "Predefined Prompt",
    subtitle:
      "Unauthenticated users can explore the demo ad feature by selecting from a set of predefined prompts provided by the genz.ad. This allows them to quickly generate an AI-powered ad without entering custom campaign details.",
    content: {
      item1: [
        "Users can browse and select from a list of predefined ad prompts.",
      ],
      item2: ["AI generates an ad based on the selected prompt."],
      item3: ["No authentication is required to access this feature."],
    },
    picture: version0,
  },
  {
    name: "1.1",
    deadline: "Mar 16, 2024",
    status: "released",
    title: "Sign Up & Generate Custom Prompt",
    subtitle:
      "Users can create an account to access the AI-powered ad generator. This update allows registered users to enter custom campaign prompts for a more personalized ad creation experience.",
    content: {
      item1: ["Users can sign up and create an account."],
      item2: ["AI generates an ad campaign based on the user’s input."],
      item3: ["Authentication is required to access this feature."],
    },
    picture: version1,
  },
  {
    name: "1.2",
    deadline: "Mar 16, 2024",
    status: "released",
    title: "Export and Download",
    subtitle:
      "Download your AI-generated ads effortlessly in PNG or JPEG format. Keep your generated ads and use them anywhere.",
    content: {
      item1: ["Export ads in PNG or JPEG"],
      item2: ["Download and store your ads easily"],
      item3: [""],
    },
    picture: version2,
  },
  // {
  //   name: "1.3",
  //   deadline: "Mar 16, 2024",
  //   status: "released",
  //   title: "Google Authentication",
  //   subtitle:
  //     "Signing up is now effortless with Google Authentication. No emails, no passwords—just quick access to unlimited ad generation.",
  //   content: {
  //     item1: ["Sign up with Google for unlimited ads"],
  //     item2: ["No email/password required"],
  //     item3: ["No email verification—instant access"],
  //   },
  //   picture: "version3.svg",
  // },
  // {
  //   name: "1.4",
  //   deadline: "Mar 16, 2024",
  //   status: "released",
  //   title: "Standalone Ad Pages",
  //   subtitle:
  //     " Every AI-generated ad now gets a unique page, making sharing easy. Share your ads as independent web pages without requiring users to log in.",
  //   content: {
  //     item1: ["Sign up with Google for unlimited ads"],
  //     item2: ["No email/password required"],
  //     item3: ["No email verification—instant access"],
  //   },
  //   picture: "version4.svg",
  // },
  // {
  //   name: "1.5",
  //   deadline: "Mar 16, 2024",
  //   status: "released",
  //   title: "Limited Trials & Sign-up Prompt",
  //   subtitle:
  //     "We introduced usage limits to encourage user sign-ups. Users can generate only 5 ads per day before needing to sign up or wait for a reset.",
  //   content: {
  //     item1: ["Users can generate up to 5 ads daily."],
  //     item2: ["After reaching the limit, users can either:"],
  //     item3: ["Sign up via Google authentication for unlimited access."],
  //   },
  //   picture: "version5.svg",
  // },
];

const ChangeLogPage = () => {
  return (
    <main className="flex  flex-col items-center">
      <section className="w-full px-10 py-[37.5px] md:py-[93px] flex flex-col items-center bg-[#520052] relative overflow-hidden gap-4 m-auto">
        {shapes.map((image) => (
          <picture key={image.picture[0]} className={image.positionSize}>
            <Image
              src={image.picture[0]}
              alt={image.picture[1]}
              height={image.picture[2]}
              width={image.picture[3]}
              className="object-cover h-full w-auto"
            />
          </picture>
        ))}

        <button className="py-2 px-2 md:px-3 bg-[#FBE6F8] rounded-3xl border border-[#F8E6F8] flex gap-2 items-center">
          <Image
            src={starFall}
            alt="star icon"
            height={24}
            width={24}
            className="size-4 md:size-6"
          />
          <span className="text-[#520052] text-[12px] md:text-base">
            ChangeLog
          </span>
        </button>
        <div className="max-w-[360px] md:max-w-[756px] m-auto flex flex-col gap-6">
          <h1 className="px-10 text-[28px] lg:text-[64px] font-medium text-center text-white">
            What&quot;s New? Changelog & Updates
          </h1>

          <p className="text-[12px] md:text-[20px] text-center text-[#ECECEC] font-normal md:font-medium">
            HCheck out everything we&quot;ve been working on to make your ad creation
            smoother, faster, and better!
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-6 md:gap-14 lg:gap-20 max-w-[960px] lg:mt-[103px] pb-[54px] lg:pb-24 mx-[40px] md:mx-[60px] lg:mx-[80px]">
        {versions.map((version) => (
          <Version
            key={version.title}
            name={version.name}
            deadline={version.deadline}
            status={version.status}
            title={version.title}
            subtitle={version.subtitle}
            content={version.content}
            picture={version.picture}
          />
        ))}
      </section>
    </main>
  );
};
export default ChangeLogPage;
