import React, { useEffect, useState } from 'react';
import { getwomanwear } from './services/items.service.js';

export function WomenWear() {
  let [womanwear, setWomanWear] = useState([]);

  useEffect(() => {
    getwomanwear()
      .then((womanwear) => {
        setWomanWear(womanwear);
      })
      .catch((err) => {});
  }, []); // Add an empty dependency array to run this effect only once

  return (
    <>
      <div className="row">
        {womanwear.map((product) => (
          <div className="col-md-3 col-sm-6" key={product._id}>
            <div className="product-grid">
              <div className="product-image">
                <a href="#" className="image">
                  <img className="img-1" src={product.cover} alt={product.title} />
                  <img className="img-2" src={product.cover2} alt={product.title} />
                </a>
                {product.discount > 0 && ( // Check if discount is greater than zero
                  <span className="product-hot-label">
                    {product.discount}% Off
                  </span>
                )}
                <a className="add-to-cart">
                  <i className="fa fa-shopping-cart" /> Add to Cart
                </a>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">{product.title}</a>
                </h3>
                <div className="price">Rs. 
                  {product.price}{' '}
                  {product.discount > 0 && product.originalprice && ( // Check if discount is greater than zero and original price exists
                    <span className="original-price">Rs. 
                      {product.originalprice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
