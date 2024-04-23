import React from "react";
import {
  BuySectionProd,
  DeliveryInfo,
  DeliveryInfoContainer,
  DeliveryText,
  ProductDescription,
  ProductImgContainer,
  ProductPagWrapper,
  ProductPrice,
  ProductSection,
  RatingSeparator,
  RatingWrapper,
  RelatedSection,
} from "./styles";
import ProductsCarousell from "../../components/UI/ProductsCarousell/ProdCarousell";
import Title from "../../components/UI/Title/title";
import Image from "../../components/UI/Image/image";
import SeparatorBar from "../../components/UI/SectionSeparator/sectionSeparator";
import { IconContext } from "react-icons";
import { FaShippingFast, FaSync } from "react-icons/fa";
import { colors } from "../../assets/styles/colors";
import InputQuantity from "../../components/UI/InputQuantity/inputQuantity";
import Button from "../../components/UI/Button/button";
import Rating from "@mui/material/Rating";
import FavButton from "../../components/UI/FavButton/favButton";

/* Test */
import ImgTest from "../../assets/Images/Products/Gaming/Ps5-Mando.jpg";
import ImgTest2 from "../../assets/Images/Products/Gaming/Switch-Lite.jpg";
import EOST100 from "../../assets/Images/Products/Cameras/Canon-EOS-T100.jpg";

const ProductPag = () => {
  const relatedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const dataProducts = {
    id: 0,
    category: "cameras",
    name: "Canon EOS T100",
    price: 400,
    img: EOST100,
    description:
      "Creating distinctive stories with DSLR quality photos and Full HD movies is easier than you think with the 18 Megapixel EOS Rebel T100. Share instantly and shoot remotely via your compatible smartphone with Wi-Fi®* and the Canon Camera Connect app",
    rating: 4.5,
    reviews: 3,
    stock: 15,
    sale: 0,
  };

  const FixDecimal = (price) => {
    return Number.isInteger(price) ? price.toFixed(2) : price;
  };

  const stateBtn = dataProducts.stock > 0 ? true : false;

  return (
    <ProductPagWrapper>
      <ProductSection>
        <ProductImgContainer>
          <Image src={EOST100} alt={"ImgTest"} objectFit={"contain"} />
        </ProductImgContainer>
        <ProductDescription>
          <h1>{dataProducts.name}</h1>
          <ProductPrice>${FixDecimal(dataProducts.price)}</ProductPrice>

          <RatingWrapper>
            <Rating
              name="rating"
              size="large"
              defaultValue={Math.round(dataProducts.rating * 2) / 2}
              precision={0.5}
              readOnly
            />
            <p style={{ color: colors.grey }}>
              ({dataProducts.reviews} Reviews)
            </p>
            <RatingSeparator />
            <p
              style={
                dataProducts.stock > 0
                  ? { color: colors.green }
                  : { color: colors.red }
              }
            >
              {dataProducts.stock > 0
                ? `${dataProducts.stock} In Stock`
                : "Out of Stock"}
            </p>
          </RatingWrapper>
          <p style={{ lineHeight: "170%" }}>{dataProducts.description}</p>
          <SeparatorBar />
          <BuySectionProd>
            <InputQuantity width={"140px"} height={"45px"} max={dataProducts.stock}/>
            <Button
              text={stateBtn ? "Add to cart" : "Out of Stock"}
              color={colors.red}
              txtColor={colors.white}
              width={"10px"}
              height={"45px"}
            />
            <FavButton />
          </BuySectionProd>
          <DeliveryInfoContainer>
            <DeliveryInfo>
              <IconContext.Provider
                value={{ color: `${colors.blackSoft}`, size: "2rem" }}
              >
                <FaShippingFast />
              </IconContext.Provider>
              <DeliveryText>
                <p>Free Delivery</p>
                <p>
                  <u>Enter your postal code for delivery availability</u>
                </p>
              </DeliveryText>
            </DeliveryInfo>
            <DeliveryInfo>
              <IconContext.Provider
                value={{ color: `${colors.blackSoft}`, size: "2rem" }}
              >
                <FaSync />
              </IconContext.Provider>
              <DeliveryText>
                <p>Retur Delivery</p>
                <p>
                  Free 30 days return. <u>Details</u>
                </p>
              </DeliveryText>
            </DeliveryInfo>
          </DeliveryInfoContainer>
        </ProductDescription>
      </ProductSection>
      <RelatedSection>
        <Title sectionName="Related Items" />
        <ProductsCarousell />
      </RelatedSection>
    </ProductPagWrapper>
  );
};

export default ProductPag;
