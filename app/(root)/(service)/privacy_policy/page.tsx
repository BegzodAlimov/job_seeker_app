import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
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

      <div className="flex flex-col gap-y-4 font-font-family font-medium tracking-[0.01em] text-[#09080d] max-w-[708px]">
        <h4 className="text-xl">Privacy Policy</h4>
        <p className="text-[16px]">
          <div className="mb-8 text-grayscale-60 font-normal">
            Neque ut facilisi risus aenean ac nibh massa. Sed accumsan et
            aliquet feugiat facilisi mauris nibh aliquet. Eu in scelerisque in
            feugiat adipiscing cras mollis non. Etiam tristique risus luctus
            cursus ut. Nunc congue et sit quis phasellus nisi etiam. Felis ut
            interdum luctus sit neque. Diam eget suscipit lacinia vitae duis.
            Mollis tellus tristique orci enim mauris. Morbi urna at diam lacus
            imperdiet amet ut faucibus. Magnis faucibus ac neque consectetur.
          </div>
          Viverra dictum nullam hac adipiscing venenatis. Malesuada nibh nunc
          consequat hendrerit egestas sed. Dui hendrerit diam amet tincidunt
          netus condimentum viverra. Aliquam eget at in tempus aliquam lorem.
          Eget nulla quis scelerisque interdum scelerisque posuere sit.
        </p>
        <ul className="flex flex-col gap-y-4">
          <li>
            If you have an unresolved privacy or data use concern that we have
            not addressed to your satisfaction, please contact our U.S.-based
            third-party dispute resolution provider free at{" "}
            <Link href={"/"} className="text-primary-10">
              https://feedback-Ngul!.com/request.
            </Link>
          </li>
          <li>
            Certain features or services referenced in this Privacy Policy may
            not be offered on the Service at all times. Please also review our
            Terms of Service, which governs your use of the Service, and which
            is accessible at{" "}
            <Link href={"/"} className="text-primary-10">
              https://www.Ngul!.com/legal/terms/.
            </Link>
          </li>
          <li>
            If you have an unresolved privacy or data use concern that we have
            not addressed to your satisfaction, please contact our U.S.-based
            third-party dispute resolution provider free at{" "}
            <Link href={"/"} className="text-primary-10">
              https://feedback-Ngul!.com/request.
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
