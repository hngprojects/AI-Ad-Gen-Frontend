import { useState } from "react";

const ToggleSwitch: React.FC = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative flex items-center bg-gray-200 rounded-full p-1 w-48">
        <div
          className={`absolute top-0 left-0 h-full w-1/2 bg-white rounded-full shadow transition-transform duration-300 ${
            isYearly ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>

        <button
          className={`relative w-1/2 text-center py-2 text-sm font-medium transition ${
            !isYearly ? "text-black" : "text-gray-500"
          }`}
          onClick={() => setIsYearly(false)}
        >
          Monthly
        </button>

        <button
          className={`relative w-1/2 text-center py-2 text-sm font-medium transition ${
            isYearly ? "text-black" : "text-gray-500"
          }`}
          onClick={() => setIsYearly(true)}
        >
          Annually
        </button>
      </div>
    </div>
  );
};

export default ToggleSwitch;
