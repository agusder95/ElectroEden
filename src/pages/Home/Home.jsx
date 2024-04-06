import React from "react";
import Banner from "../../components/UI/BannerCarousell/Banner";
import SectionSeparator from "../../components/SectionSeparator/sectSep";
import ProductsCarousell from "../../components/UI/ProductsCarousell/ProdCarousell";
import SeparatorBar from "../../components/UI/SectionSeparator/sectionSeparator";

const Home = () => {
  return (
    <>
      <Banner />
      <SectionSeparator sectionName="Today's" title={"Flash Sales"}/>
      <ProductsCarousell />
      <SeparatorBar />
      <SectionSeparator sectionName="This Month" title={"Best Selling"}/>
      <ProductsCarousell />
      <SeparatorBar />
      <SectionSeparator sectionName="Categories" title={"Browse By Category"}/>
    </>
  );
};

export default Home;
