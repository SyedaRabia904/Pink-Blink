import React, { useEffect, useState } from 'react';
import { getmakeup } from './services/items.service.js';

export function Makeup() {
  let [makeup, setmakeup] = useState([]);

  useEffect(() => {
    getmakeup()
      .then((makeup) => {
        setmakeup(makeup);
      })
      .catch((err) => {});
  }, []); // Add an empty dependency array to run this effect only once

  const renderStockStatus = (stock) => {
    if (stock > 0) {
      return <span style={{ color: 'green' }}>In Stock</span>;
    } else {
      return <span style={{ color: 'red' }}>Out of Stock</span>;
    }
  };

  const toggleDescription = (productId, event) => {
    event.preventDefault(); // Prevent the default link behavior
    setmakeup((prevMakeup) => {
      return prevMakeup.map((product) => {
        if (product._id === productId) {
          return { ...product, showDescription: !product.showDescription };
        } else {
          return product;
        }
      });
    });
  };

  return (
    <>
      <div className="row">
        {makeup.map((product) => (
          <div className="col-md-3 col-sm-6" key={product._id}>
            <div className="product-grid">
              <div className="product-image">
                <a
                  href="#"
                  className="image"
                  onClick={(e) => toggleDescription(product._id, e)} // Prevent default behavior
                >
                  <img src={product.cover} alt={`Product ${product._id}`} />
                </a>
                {product.discount > 0 && (
                  <span className="product-hot-label">
                    {product.discount}% Off
                  </span>
                )}
                {product.stock > 0 && (
                  <a
                    className="add-to-cart"
                    onClick={() => {
                      // Handle adding to cart logic here
                      console.log('Added to Cart:', product.title);
                    }}
                  >
                    <i className="fa fa-shopping-cart" /> Add to Cart
                  </a>
                )}
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a
                    href="#"
                    onClick={(e) => toggleDescription(product._id, e)} // Prevent default behavior
                  >
                    {product.title}
                  </a>
                </h3>
                <div className="price">
                  Rs. {product.price}{' '}
                  {product.discount > 0 && product.originalprice && (
                    <span className="original-price">
                      Rs. {product.originalprice}
                    </span>
                  )}
                </div>
                {product.showDescription && (
                  <div>
                    <p>Description: {product.description}</p>
                    <p>Stock: {renderStockStatus(product.stock)}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
