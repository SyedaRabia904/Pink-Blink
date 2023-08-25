import React from "react";

export function Makeup() {
  const products = [
    {
      id:1,
      name: "MU-01",
      image: "https://www.heygirl.pk/cdn/shop/products/HudaDemiMatteCreamLiquidLipstick.jpg?v=1643792297",
      price: "Rs. 2500",
      originalPrice: "Rs. 4000",
      discount: "-23%",
    },
    {
      id:2,
      name: "MU-02",
      image: "https://allurebeauty.pk/cdn/shop/products/6291106031638.webp?v=1678272204",
      price: "Rs. 5000",
    },
    {
      id:3,
      name: "MU-03",
      image: "https://maks.pk/cdn/shop/files/newnude.jpg?v=1684726938",
      price: "Rs. 11,000",
    },
    {
      id:4,
      name: "MU-04",
      image: "https://www.heygirl.pk/cdn/shop/products/huda_beauty_Interview.jpg?v=1630020123&width=1946",
      price: "Rs. 3500",
    },
    {
      id:5,
      name: "MU-05",
      image: "https://static-01.daraz.pk/p/c2813975b08f2af75889a96c847c4612.jpg",
      price: "Rs. 6000",
    },
    {
      id:6,
      name: "MU-06",
      image: "https://static.thcdn.com/images/large/original//productimg/1600/1600/12765086-1834830290386011.jpg",
      price: "Rs. 1000",
    },
    {
      id:7,
      name: "MU-07",
      image: "https://static.thcdn.com/images/large/original//productimg/1600/1600/12765086-1834830290386011.jpg",
      price: "Rs. 3500",
    },
    {
      id:8,
      name: "MU-08",
      image: "https://www.colorshow.pk/cdn/shop/products/IC-1178594_1024x1024.jpg?v=1619523528",
      price: "Rs. 4400",
    },
  ];

  return (
    <div className="row">
      {products.map(product => (
        <div className="col-md-3 col-sm-6" key={product.id}>
          <div className="product-grid">
            <div className="product-image">
              <a href="#" className="image">
                <img src={product.image} alt={`Product ${product.id}`} />
              </a>
              {product.discount && (
                <span className="product-discount-label">{product.discount}</span>
              )}
              <a href="" className="add-to-cart">
                <i className="fa fa-shopping-cart" /> Add to Cart
              </a>
            </div>
            <div className="product-content">
              <h3 className="title">
                <a href="#">{product.name}</a>
              </h3>
              <div className="price">
                {product.price}{" "}
                {product.originalPrice && <span>{product.originalPrice}</span>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
