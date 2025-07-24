import React from "react";
import PrivacyPage from "./privacy-page";
import { privacyData } from "./data";

const page = () => {
  return (
    <div>
      <PrivacyPage privacyData={privacyData} />
    </div>
  );
};

export default page;
