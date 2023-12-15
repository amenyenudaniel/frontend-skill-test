import { cardTitleProps } from "@/types";
import React from "react";

const CardTitle = ({ title1, title2 }: cardTitleProps) => {
  return (
    <section>
      <h3 className="text-gray opacity-[0.7] text-[16px] font-semibold text-center">
        {title1}
      </h3>
      <h1 className="text-black opacity-[0.5] font-bold text-[16px] font-semibold text-center">
        {title2}
      </h1>
    </section>
  );
};

export default CardTitle;
