import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-[100%] md:h-[100vh] sm:px-[3rem] sm:py-[3rem] px-[1rem] py-[1rem]">
      <section className="flex gap-[10px] items-center flex-wrap">
        <ProductCard
          image="/product-image1.jpeg"
          title="This one is a one line title"
          paragraphText="Two line paragraph Lorem ipsum dolor sit amet, consectetur"
          originalPrice="$1050"
          newPrice="$750"
          discount="You Save $250"
        />

        <ProductCard
          image="/product-image2.jpeg"
          title="This one is a one line title"
          paragraphText="Two line paragraph Lorem ipsum dolor sit amet, consectetur"
          newPrice="$750"
        />

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
