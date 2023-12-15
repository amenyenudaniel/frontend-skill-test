import { productCardProps } from "@/types";
import React from "react";

const ProductCard = ({
  image,
  title,
  paragraphText,
  price1,
  price2,
  discount,
}: productCardProps) => {
  return (
    <section className="w-[254px] h-[304px] flex flex-col items-center">
      <div className="shadow-xl rounded-[10px] flex flex-col  w-[234px] h-[292px]  transition duration-500 ease-in-out hover:scale-[1.05]">
        <img
          src={image}
          alt="product-card-image"
          className="w-[234px] h-[157px] object-cover rounded-tl-[7px] rounded-tr-[7px]"
        />

        <div className="pl-[10px] pt-[7px] pr-[10px] ">
          <h2 className="text-dark font-semibold text-[16px] ">{title}</h2>
          <p className="text-primary text-[12px] font-medium pr-[20px] mb-[5px]">
            {paragraphText}
          </p>
          <div className="flex justify-between items-center">
            {price1 && (
              <p className="text-dark text-[12px] line-through font-medium">
                {price1}
              </p>
            )}
            {price2 && (
              <p className="text-green text-[12px] font-bold">{price2}</p>
            )}
            {discount && (
              <p className="bg-lightGreen text-[10px] rounded-[100px] py-[2px] px-[5px]">
                {discount}
              </p>
            )}
          </div>
        </div>
        <div className="bg-gray mt-[10px] opacity-[0.2] h-[1px] w-full" />
        <div className="flex gap-[12px] items-center pl-[10px] pt-[7px]">
          <div className="flex items-center gap-[6px]">
            <img src="/time.svg" alt="time-icon" />
            <p className="text-gray opacity-[0.8] text-[10px]">10 hrs</p>
          </div>
          <div className="flex items-center gap-[5px]">
            <img src="/people.svg" alt="people-icon" />
            <p className="text-gray opacity-[0.8] text-[10px]">308</p>
          </div>
          <div className="flex items-center gap-[5px]">
            <img src="/message.svg" alt="message-icon" />
            <p className="text-gray opacity-[0.8] text-[10px]">17</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
