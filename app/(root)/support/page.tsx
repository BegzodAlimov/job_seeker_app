import SupportContact from "@/components/shared/support-contact/support-contact";
import SupportForm from "@/components/shared/support-form/support-form";
import React from "react";

const Support = () => {
  return (
    <div className="py-[120px] flex gap-x-20 justify-between">
      <SupportContact/>
      <SupportForm/>
    </div>
  );
};

export default Support;
