import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="pt-12 pb-[120px] flex items-start justify-between">
      <div className="tracking-[0.01em]">
        <h3 className="font-font-family font-medium text-[32px] text-black mb-4">
          Privacy Policy
        </h3>
        <p className="max-w-[404px] font-font-family font-normal text-[16px] text-grayscale-60 mb-8">
          The Ngul! Privacy Policy is comprised of the following agreements:
        </p>
        <Link
          href={"/terms_of_service"}
          className="font-font-family font-medium text-[16px] text-primary-10"
        >
          Terms of Service
        </Link>
      </div>
    </div>
  );
};

export default page;
