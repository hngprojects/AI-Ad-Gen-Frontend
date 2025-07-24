import Image from "next/image";

import Link from "next/link";
import genzlogo from "../../../../public/genz-logo.svg";

const AuthNav = () => {
  return (
    <div className="w-full flex  bg-[#F9FAFB] justify-center items-center px-3 py-4 border-b-[1px] border-[#E8E9E9] ">
      <Link href="/">
        <div className="w-full cursor-pointer flex items-center justify-center">
          <Image src={genzlogo} alt="Genz.ad.svg" width={150} height={150} />
        </div>
      </Link>
    </div>
  );
};

export default AuthNav;
