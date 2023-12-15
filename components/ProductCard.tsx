// Importing the productCardProps type from the specified path

import { ProductCardProps } from "@/types";

// Functional component for a product card
const ProductCard = ({
  image,
  title,
  paragraphText,
  originalPrice,
  newPrice,
  discount,
}: ProductCardProps) => {
  return (
    // Container for the entire product card with fixed width and height
    <section className="w-[254px] h-[304px] flex flex-col items-center">
      {/* Card container with shadow, rounded corners, and hover effect */}
      <div className="shadow-custom rounded-[10px] flex flex-col  w-[234px] h-[292px]  transition duration-500 ease-in-out hover:scale-[1.05]">
        {/* Product image with rounded top corners */}
        <img
          src={image}
          alt="product-card-image"
          className="w-[234px] h-[157px] object-cover rounded-tl-[7px] rounded-tr-[7px]"
        />

        {/* Product information section */}
        <div className="pl-[10px] pt-[7px] pr-[10px] ">
          {/* Product title */}
          <h2 className="text-dark font-semibold text-[16px] ">{title}</h2>
          {/* Product description */}
          <p className="text-primary text-[12px] font-medium pr-[20px] mb-[5px]">
            {paragraphText}
          </p>
          {/* Price information */}
          <div className="flex justify-between items-center">
            {/* Original price with strikethrough if available */}
            {originalPrice && (
              <p className="text-dark text-[12px] line-through font-medium">
                {originalPrice}
              </p>
            )}
            {/* New price with bold text if available */}
            {newPrice && (
              <p className="text-green text-[12px] font-bold">{newPrice}</p>
            )}
            {/* Discount badge if available */}
            {discount && (
              <p className="bg-lightGreen text-[10px] rounded-[100px] py-[2px] px-[5px]">
                {discount}
              </p>
            )}
          </div>
        </div>

        {/* Divider line below the product information */}
        <div className="bg-gray mt-[10px] opacity-[0.2] h-[1px] w-full" />

        {/* Additional product statistics section */}
        <div className="flex gap-[12px] items-center pl-[10px] pt-[7px]">
          {/* Time icon with hours information */}
          <div className="flex items-center gap-[6px]">
            <img src="/time.svg" alt="time-icon" />
            <p className="text-gray opacity-[0.8] text-[10px]">10 hrs</p>
          </div>
          {/* People icon with count information */}
          <div className="flex items-center gap-[5px]">
            <img src="/people.svg" alt="people-icon" />
            <p className="text-gray opacity-[0.8] text-[10px]">308</p>
          </div>
          {/* Message icon with count information */}
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
