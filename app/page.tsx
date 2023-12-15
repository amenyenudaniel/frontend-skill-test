// Importing the ProductCard component from the specified path
import ProductCard from "@/components/ProductCard";

// Default functional component for the home page
export default function Home() {
  return (
    // Main container with flex layout, centered content, and responsive padding
    <main className="flex items-center justify-center h-[100%] md:h-[100vh] sm:px-[3rem] sm:py-[3rem] px-[1rem] py-[1rem]">
      {/* Section containing a flex container with spacing, items, and wrapping */}
      <section className="flex gap-[10px] items-center flex-wrap">
        {/* First ProductCard component with specific props */}
        <ProductCard
          image="/product-image1.jpeg"
          title="This one is a one line title"
          paragraphText="Two line paragraph Lorem ipsum dolor sit amet, consectetur"
          originalPrice="$1050"
          newPrice="$750"
          discount="You Save $250"
        />

        {/* Second ProductCard component with specific props */}
        <ProductCard
          image="/product-image2.jpeg"
          title="This one is a one line title"
          paragraphText="Two line paragraph Lorem ipsum dolor sit amet, consectetur"
          newPrice="$750"
        />

        {/* Third ProductCard component with specific props */}
        <ProductCard
          image="/product-image3.jpeg"
          title="This one is a one line title"
          paragraphText="Two line paragraph Lorem ipsum dolor sit amet, consectetur"
          newPrice="FREE"
        />
      </section>
    </main>
  );
}
