import Image from "next/image";
import done from "../../../../public/done.svg";

type MyComponentProps = {
  key: string;
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
};

const Version: React.FC<MyComponentProps> = ({
  name,
  deadline,
  status,
  title,
  subtitle,
  content,
  picture,
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-10 md:gap-20">
      <div className="w-[123px]">
        <h2 className="text-[18px] md:text-[24px] font-semibold pb-3 md:pb-6 text-nowrap">
          {`Version ${name}`}
        </h2>
        <p className="text-[14px] md:text-[16px] text-[#121316] pb-2.5 md:pb-4">
          {deadline}
        </p>
        <button className="text-[12px] flex items-center gap-1.5 px-2 py-1 bg-[#E7F5EC] rounded-[30px] text-[#0F973D] font-semibold">
          <span>{status}</span>
          <Image src={done} alt="done" height={12} width={12} />
        </button>
      </div>
      <div>
        <hgroup>
          <h1 className="text-2xl font-medium md:font-semibold md:text-[32px] pb-2 ">
            {title}
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#121316]">
            {subtitle}
          </p>
        </hgroup>
        <ul className="text-[#5F5F5F] pt-3 md:pt-6 list-disc pl-4">
          {content?.item1.length > 1 ? (
            content?.item1.map((itemContent, i) => (
              <div key={i} className="pl-5">
                <li>{itemContent}</li>
              </div>
            ))
          ) : (
            <li>{content?.item1[0]}</li>
          )}

          {content?.item2.length > 1 ? (
            content?.item2.map((itemContent, i) => (
              <div key={i} className="pl-5">
                <li>{itemContent}</li>
              </div>
            ))
          ) : (
            <li>{content?.item2[0]}</li>
          )}

          {content?.item3.length > 1
            ? content?.item3.map((itemContent, i) => (
                <div key={i} className="pl-5">
                  <li>{itemContent}</li>
                </div>
              ))
            : content.item3[0] && <li>{content?.item3[0]}</li>}
        </ul>
        <Image
          src={picture}
          alt="version 1.1"
          width={757}
          height={480}
          className="mt-5 md:mt-10 w-full"
        />
      </div>
    </div>
  );
};
export default Version;
