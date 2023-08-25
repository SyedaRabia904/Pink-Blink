import React from "react";

export function SkinCare() {
  const skincare = [
    {
      id:1,
      name: "SC-01",
      image: "https://hnbstore.pk/cdn/shop/products/cleanser.jpg?v=1692771889",
      price: "Rs. 2500",
      originalPrice: "Rs. 4000",
      discount: "-23%",
    },
    {
      id:2,
      name: "SC-02",
      image: "https://static.beautytocare.com/media/catalog/product/cache/global/image/1300x1300/85e4522595efc69f496374d01ef2bf13/n/e/neutrogena-visibly-clear-spot-proofing-daily-wash-200ml_2.jpg",
      price: "Rs. 5000",
    },
    {
      id:3,
      name: "SC-03",
      image: "https://static.beautytocare.com/media/catalog/product/cache/global/image/1300x1300/85e4522595efc69f496374d01ef2bf13/n/e/neutrogena-bright-boost-night-cream-50ml.jpg",
      price: "Rs. 5000",
    },
    {
      id:4,
      name: "SC-04",
      image: "https://int.sentimentsexpress.com/cdn/shop/products/Rosemarybottle_d0c8cc49-11d7-4d16-ac7a-27237b7404e3.jpg?v=1662552659",
      price: "Rs. 500",
    },
    {
      id:5,
      name: "SC-05",
      image: "https://conaturalintl.com/cdn/shop/collections/conatural-collection-anti-aging.jpg?v=1543495070",
      price: "Rs. 6000",
    },
    {
      id:6,
      name: "SC-06",
      image: "https://drrashelstore.pk/cdn/shop/products/1197761-1.jpg?v=1610007596",
      price: "Rs. 1000",
    },
    {
      id:7,
      name: "SC-07",
      image: "https://coswin.pk/cdn/shop/products/H782b766ee9f1497ea913fea7c80f782fW_1296x_jpg.webp?v=1646392582",
      price: "Rs. 3500",
    },
    {
      id:8,
      name: "SC-08",
      image: "https://chasevalue.pk/cdn/shop/products/IMG_3903_3efe7400-1d61-45a7-bcc7-52285213fe21_850x.jpg?v=1581420314",
      price: "Rs. 4400",
    },
  ];

  return (
    <div className="row">
      {skincare.map(product => (
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
