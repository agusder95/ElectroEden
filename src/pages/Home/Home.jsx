import React from "react";
import Banner from "../../components/UI/BannerCarousell/Banner";
import SeparatorBar from "../../components/UI/SectionSeparator/sectionSeparator";
import SectCategories from "../../components/SectionCategories/sCategories";
import SectionSalesFlash from "../../components/SectionSalesFl/sectionSalesFl";
import SectionBest from "../../components/SectionBest/sectionBest";
import SectServices from "../../components/SectionServices/sectServices";

const Home = () => {
  return (
    <>
      <Banner />
      <SectionSalesFlash />
      <SeparatorBar />
      <SectionBest />
      <SeparatorBar />
      <SectCategories />
      <SeparatorBar />
      <SectServices />
    </>
  );
};

export default Home;
