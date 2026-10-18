import Hero from "@/components/Hero/hero";
import PriceIncreased from "@/components/PriceIncreased/PriceIncreased";
import PriceDecreased from "@/components/PriceDecreased/PriceDecreased";
import AllProducts from "@/components/AllProducts/AllProducts";
import { getProducts } from "@/lib/api";
import { Product } from "@/types";

const Page = async () => {
  const products: Product[] = await getProducts();

  return (
    <div className="min-h-screen bg-[#E1E8E1]">
      <Hero />
      <PriceIncreased products={products} />
      <PriceDecreased products={products} />
      <AllProducts products={products} />
    </div>
  );
};

export default Page;