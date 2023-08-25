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
      image: "data:image/jpeg;base64,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",
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
