import React, { useEffect, useRef, useState } from "react";
import {
  ButtonCountainer,
  CarousellCountainer,
  ProductCardCountainer,
  ProductsCarousellWrapper,
  ProductCard,
  ButtonCarousell,
} from "./styles";

import { IconContext } from "react-icons";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Button from "../Button/button";
import { colors } from "../../../assets/styles/colors";

const ProductsCarousell = () => {

  const prodArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const arrayProducts = prodArray.slice(0, 8)

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardPerScreen, setCardPerScreen] = useState(0);
  const [moveValue, setMoveValue] = useState(0);
  const [widthCard, setWidthCard] = useState(0);
  const [width, setWidth] = useState(0);
  const [nextBtn, setNextBtn] = useState(false);
  const [prevBtn, setPrevBtn] = useState(true);
  const elementRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (elementRef.current) {
        setWidth(elementRef.current.offsetWidth);
        cardQuantity();
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [width]);

  const percentage = 100 / arrayProducts.length;
  const cardsQuantity = arrayProducts.length - cardPerScreen;

  const cardQuantity = () => {
    switch (true) {
      case width < 500:
        setCardPerScreen(2);
        setWidthCard(width / 2);
        break;
      case width < 700:
        setCardPerScreen(3);
        setWidthCard(width / 3);
        break;
      case width < 850:
        setCardPerScreen(4);
        setWidthCard(width / 4);
        break;
      default:
        setCardPerScreen(5);
        setWidthCard(width / 5);
        break;
    }
  };

  useEffect(()=>{
    currentIndex <= 0 ? setPrevBtn(true) : setPrevBtn(false)
    currentIndex >= cardsQuantity ? setNextBtn(true) : setNextBtn(false)
  },[moveValue])

  const handleNext = () => {
    if (currentIndex < cardsQuantity) {
      setMoveValue((prev) => prev + percentage);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setMoveValue((prev) => prev - percentage);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <ProductsCarousellWrapper ref={elementRef}>
      <ProductCardCountainer>
        <ButtonCountainer>
          <ButtonCarousell onClick={handlePrev} disabled={prevBtn}>
            <IconContext.Provider value={{ size: "100%" }}>
              <SlArrowLeft />
            </IconContext.Provider>
          </ButtonCarousell>
          <ButtonCarousell onClick={handleNext} disabled={nextBtn}>
            <IconContext.Provider value={{ size: "100%" }}>
              <SlArrowRight />
            </IconContext.Provider>
          </ButtonCarousell>
        </ButtonCountainer>
        <CarousellCountainer $translatevalue={-moveValue}>
          {arrayProducts.map((product, index) => (
            <ProductCard key={index} style={{ width: widthCard }}>
              {product}
            </ProductCard>
          ))}
        </CarousellCountainer>
      </ProductCardCountainer>
      <Button text="View all" width={"180px"} height={"80px"} color={colors.red}/>
    </ProductsCarousellWrapper>
    
  );
};

export default ProductsCarousell;
