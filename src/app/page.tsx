import Hero from "@/components/Hero";
import HomeIntro from "@/components/home/HomeIntro";
import HomeSolutions from "@/components/home/HomeSolutions";
import HomeProducts from "@/components/home/HomeProducts";
import HomeCases from "@/components/home/HomeCases";
import HomeMethod from "@/components/home/HomeMethod";
import HomeFAQ from "@/components/home/HomeFAQ";

export default function Page() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <HomeSolutions />
      <HomeProducts />
      <HomeCases />
      <HomeMethod />
      <HomeFAQ />
    </>
  );
}
