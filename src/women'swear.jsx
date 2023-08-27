import React from 'react';

export function WomenWear() {
  const products = [
    {
      id: '1',
      images: [
        'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw74ebe740/images/hi-res/bla230403_blue_2.jpg?sw=800&sh=1200',
        'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwd8c6fec9/images/hi-res/bla230403_blue_4.jpg?sw=800&sh=1200',
      ],
      name: 'WW-01',
      price: 'Rs. 8000',
      originalPrice: 'Rs. 12,000',
      discount: '25% off',
    },
    {
      id: '2',
      images: [
        'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw9f1427a6/images/hi-res/kkf23107_pink_4.jpg?sw=800&sh=1200',
        'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw4c79d645/images/hi-res/kkf23107_pink_5.jpg?sw=800&sh=1200',
      ],
      name: 'WW-02',
      price: 'Rs. 25,000',
    },
    {
      id: '3',
      images: [
        'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw19459081/images/hi-res/kkf23103_grey_4.jpg?sw=800&sh=1200',
        'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw1fbcdb29/images/hi-res/kkf23103_grey_5.jpg?sw=800&sh=1200',
      ],
      name: 'WW-03',
      price: 'Rs. 30,000',
    },
    {
      id: '4',
      images: [
        'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw0fc89e71/images/hi-res/bcb23106_beige_4.jpg?sw=800&sh=1200',
        'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwf6a99bd3/images/hi-res/bcb23106_beige_5.jpg?sw=800&sh=1200',
      ],
      name: 'WW-04',
      price: 'Rs. 10,000',
    },
    {
      id: '5',
      images: [
        'https://cdn.shopify.com/s/files/1/2810/3666/products/773f9a79-812c-4e44-94a0-a62269e17ef2.jpg?v=1669281831',
        'https://cdn.shopify.com/s/files/1/0534/2065/4791/products/42205040-1_4_1200x1200.jpg',
      ],
      name: 'WW-05',
      price: 'Rs. 12,000',
    },
    {
      id: '6',
      images: [
        'https://cdn11.bigcommerce.com/s-1mni2m1cst/images/stencil/1280x1280/products/26941/91858/kkf22411_purple_4__28385.1672563577.jpg?c=2',
        'https://cdn11.bigcommerce.com/s-1mni2m1cst/images/stencil/500x750/products/26941/91859/kkf22411_purple_5__14571.1672563577.jpg?c=2',
      ],
      name: 'WW-06',
      price: 'Rs. 20,000',
      originalPrice: 'Rs. 26,000',
      discount: '15% off',
    },
    {
      id: '7',
      images: [
        'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw34fcae65/images/hi-res/ect22473_black_1.jpg?sw=800&sh=1200',
        'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw7dbc30e1/images/hi-res/ect22473_black_5.jpg?sw=800&sh=1200',
      ],
      name: 'WW-07',
      price: 'Rs. 5000',
      discount: '15% off',
    },
    {
      id: '8',
      images: [
        'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwf0fe3fb8/images/hi-res/bk22411_purple_4.jpg?sw=800&sh=1200',
        'https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw9306019c/images/hi-res/bk22411_purple_5.jpg?sw=800&sh=1200',
      ],
      name: 'WW-08',
      price: 'Rs. 8000',
    },
    
  ];

  return (
    <>
     <div className="row">
      {products.map(product => (
        <div className="col-md-3 col-sm-6" key={product.id}>
          <div className="product-grid">
            <div className="product-image">
              <a href="#" className="image">
                <img className="img-1" src={product.images[0]} alt={product.name} />
                <img className="img-2" src={product.images[1]} alt={product.name} />
              </a>
              {product.discount && <span className="product-hot-label">{product.discount}</span>}
              <a className="add-to-cart">
                <i className="fa fa-shopping-cart" /> Add to Cart
              </a>
            </div>
            <div className="product-content">
              <h3 className="title">
                <a href="#">{product.name}</a>
              </h3>
              <div className="price">
                {product.price} {product.originalPrice && <span>{product.originalPrice}</span>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
