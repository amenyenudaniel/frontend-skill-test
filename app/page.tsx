import CardTitle from "@/components/CardTitle";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-[100vh]">
      <section className="flex gap-[10px] items-center flex-wrap">
        <div className="w-[254px] flex flex-col gap-[2.5rem]">
          <ProductCard
            image="/product-image1.jpeg"
            title="This one is a one line title"
            paragraphText="Two line paragraph Lorem ipsum dolor sit amet, consectetur"
            price1="$1050"
            price2="$750"
            discount="You Save $250"
          />
        </div>
        <div className="w-[254px] flex flex-col gap-[2.5rem]">
          <ProductCard
            image="/product-image2.jpeg"
            title="This one is a one line title"
            paragraphText="Two line paragraph Lorem ipsum dolor sit amet, consectetur"
            price2="$750"
          />
        </div>
        <div className="w-[254px] flex flex-col gap-[2.5rem]">
          <ProductCard
            image="/product-image3.jpeg"
            title="This one is a one line title"
            paragraphText="Two line paragraph Lorem ipsum dolor sit amet, consectetur"
            price2="FREE"
          />
        </div>
      </section>
    </main>
  );
}
