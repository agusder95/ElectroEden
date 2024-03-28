import React, { useEffect, useState } from "react";
import {
  BannerButton,
  BannerButtonCountainer,
  BannerWrapper,
  CarouselBanner,
  PointBanner,
  PointBannerContainer,
} from "./style";

import { BannerIMG } from "../../../constants/banner";
import Image from "../Image/image";
import { IconContext } from "react-icons";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
const Banner = () => {
  const ammountImg = BannerIMG.length;

  const [translateValue, setTranslateValue] = useState(0);
  const [imgActive, setImgActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [translateValue]);

  const handleNext = () => {
    setTranslateValue((prev) =>
      prev === (ammountImg - 1) * -100 ? 0 : prev - 100
    );
    setImgActive((prev) => (prev === ammountImg - 1 ? 0 : prev + 1));
  };
  const handlePrev = () => {
    setTranslateValue((prev) =>
      prev === 0 ? (ammountImg - 1) * -100 : prev + 100
    );
    setImgActive((prev) => (prev === 0 ? ammountImg - 1 : prev - 1));
  };

  const goToImg = (id) => () => {
    setTranslateValue((prev) => (prev === id * -100 ? 0 : id * -100));
    setImgActive(id);
  };

  return (
    <BannerWrapper>
      <BannerButtonCountainer>
        <BannerButton onClick={handlePrev}>
          <IconContext.Provider value={{ size: "100%" }}>
            <SlArrowLeft />
          </IconContext.Provider>
        </BannerButton>
        <BannerButton onClick={handleNext}>
          <IconContext.Provider value={{ size: "100%" }}>
            <SlArrowRight />
          </IconContext.Provider>
        </BannerButton>
      </BannerButtonCountainer>

      <CarouselBanner $translatevalue={translateValue}>
        {BannerIMG.map((item) => (
          <Image key={item.id} src={item.image} alt={item.alt} />
        ))}
      </CarouselBanner>
     
     <PointBannerContainer>
          {
            BannerIMG.map((item) => (
              <PointBanner key={item.id} $active={item.id === imgActive} onClick={goToImg(item.id)}/>
            ))
          }
     </PointBannerContainer>

    </BannerWrapper>
  );
};

export default Banner;
