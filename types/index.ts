// Interface for the props expected by the ProductCard component
export interface ProductCardProps {
  // URL of the product image
  image: string;
  // Main title of the product
  title: string;
  // Additional text or description about the product
  paragraphText: string;
  // Optional: Original price of the product with an optional strikethrough
  originalPrice?: string;
  // Optional: New discounted price of the product
  newPrice?: string;
  // Optional: Discount information or badge
  discount?: string;
}
