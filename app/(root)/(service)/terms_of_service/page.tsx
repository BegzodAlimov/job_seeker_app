import Link from "next/link";
import React from "react";

const TermsOfService = () => {
  return (
    <div className="pt-12 pb-[120px] flex items-start justify-between">
      <div className="tracking-[0.01em]">
        <h3 className="font-font-family font-medium text-[32px] text-black mb-4">
          Terms of Service
        </h3>
        <p className="max-w-[404px] font-font-family font-normal text-[16px] text-grayscale-60 mb-8">
          The Ngul! Terms of Service is comprised of the following agreements:
        </p>
        <Link
          href={"/privacy_policy"}
          className="font-font-family font-medium text-[16px] text-primary-10"
        >
          Privacy Policy
        </Link>
      </div>
      <div className="flex flex-col gap-y-4 font-font-family font-medium tracking-[0.01em] text-[#09080d] max-w-[708px]">
        <h4 className="text-xl">User Agrement</h4>
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
        <ol className="flex flex-col gap-y-4">
          <li>
            <h4>1. How It Works</h4>
            <p className="text-grayscale-60 font-normal">
              Nunc congue et sit quis phasellus nisi etiam. Felis ut interdum
              luctus sit neque. Diam eget suscipit lacinia vitae duis. Mollis
              tellus tristique orci enim mauris. Morbi urna at diam lacus
              imperdiet amet ut faucibus. Magnis faucibus ac neque consectetur.{" "}
            </p>
          </li>
          <li>
            <h4>2. Freelancer Fees</h4>
            <p className="text-grayscale-60 font-normal">
              Neque ut facilisi risus aenean ac nibh massa. Sed accumsan et
              aliquet feugiat facilisi mauris nibh aliquet. Eu in scelerisque in
              feugiat adipiscing cras mollis non. Etiam tristique risus luctus
              cursus ut. Nunc congue et sit quis phasellus nisi etiam. Felis ut
              interdum luctus sit neque. Diam eget suscipit lacinia vitae duis.
              Mollis tellus tristique orci enim mauris. Morbi urna at diam lacus
              imperdiet amet ut faucibus. Magnis faucibus ac neque consectetur.{" "}
            </p>
          </li>
          <li>
            <h4>3. Client Fees</h4>
            <p className="text-grayscale-60 font-normal">
              Convallis enim urna turpis facilisi magna pellentesque enim.
              Volutpat diam sed varius odio elementum mattis. Pharetra felis
              scelerisque hendrerit aliquet elementum. Risus viverra aliquam nec
              lectus lacus. Purus dis mi volutpat arcu sed fringilla id magna
              dolor. Dignissim phasellus proin tellus felis sollicitudin orci
              facilisi. Ut ornare vitae sed egestas volutpat. Condimentum enim
              orci scelerisque at. Ornare erat eget tempus tristique neque id
              magna aliquet rhoncus. Ornare magna urna at consequat ultrices
              adipiscing auctor. Quam amet vivamus sed id aenean nibh laoreet
              elit quis. Nibh nulla molestie risus consectetur augue viverra.
              Vivamus arcu enim porta quisque proin maecenas. A tellus bibendum
              neque nunc magna.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TermsOfService;
