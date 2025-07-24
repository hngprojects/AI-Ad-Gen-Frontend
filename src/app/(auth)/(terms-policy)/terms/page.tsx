import React from "react";
import TermsPage from "./terms-page";
import { termsData } from "./data";

const page = () => {
  return (
    <div>
      <TermsPage termsData={termsData} />
    </div>
  );
};

export default page;
