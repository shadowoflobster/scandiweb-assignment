import React from "react";
import SweaterImage from "../../assets/images/b5e3087a92bcdb9503e38bbf905ae3a0.png";
import "./ProductPage.css";

const ProductPage: React.FC = () => {
  return (
    <div className="product-page row mt-5 gap-5">
      <div className="col-1 d-flex flex-column gap-3">
        <img className="image-selection-item" src={SweaterImage} alt="" />
        <img className="image-selection-item" src={SweaterImage} alt="" />
        <img className="image-selection-item" src={SweaterImage} alt="" />
        <img className="image-selection-item" src={SweaterImage} alt="" />
        <img className="image-selection-item" src={SweaterImage} alt="" />
        <img className="image-selection-item" src={SweaterImage} alt="" />
      </div>
      <div className="product-image-main-div col-7">
        <img className="product-image-main col-12" src={SweaterImage}></img>
      </div>
      <div className="product-details-div col-3 d-flex flex-column gap-3 ">
        <h1 className="product-details-name">Running Shorts</h1>
        <span className="product-details-span">SIZE:</span>
        <div className="product-details-size-div d-flex gap-3">
          <div className="product-details-size-item">XS</div>
          <div className="product-details-size-item">S</div>
          <div className="product-details-size-item">M</div>
          <div className="product-details-size-item">L</div>
        </div>
        <span className="product-details-span">COLOR:</span>
        <div className="product-details-color-div d-flex gap-1">
            <div className="product-details-color-item"></div>
            <div className="product-details-color-item"></div>
            <div className="product-details-color-item"></div>
        </div>
        <span className="product-details-span">PRICE:</span>
        <p className="details-price-item">$50.00</p>

        <button className="add-to-cart-button">ADD TO CART</button>
        <p className="product-details-description">Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>
      </div>
    </div>
  );
};
export default ProductPage;
