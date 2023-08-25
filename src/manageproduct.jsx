import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Items() {
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
  const Makeup = [
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
    <>
    <h1 className="text-center mb-0" >Product Management</h1>
       <div className="container mt-5">
        <div className="card my-2">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h1>Women Wear</h1>
              <div className="d-flex">
                <Link to="add-post" style={{height:'45px'}} className="btn btn-outline-primary custom-btn btn-sm">
                  Add Item
                </Link>
              </div>
            </div>
          </div>
        </div>
    <div className="container table-responsive py-5">
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Cover</th>
            <th scope="col">Product title</th>
            <th scope="col">Price</th>
            <th scope="col">Original Price</th>
            <th scope="col">Discount</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
       
    
    <tbody>
      {products.map((product) => (
        <tr key={product.id}>
          <th scope="row">{product.id}</th>
          <td>
            <img className="products-image" src={product.images[0]}  alt={`Cover for ${product.name}`} />
          </td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.originalPrice || "-"}</td>
          <td>{product.discount || "-"}</td>
          <td>
            <button  style={{margin:'10px'}} className="btn btn-primary me-2">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div></div>
<div className="container mt-5">
        <div className="card my-2">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h1>Make Up</h1>
              <div className="d-flex">
                <Link to="add-post" style={{height:'40px'}} className="btn btn-outline-primary custom-btn btn-sm">
                  Add Item
                </Link>
              </div>
            </div>
          </div>
        </div>
    <div className="container table-responsive py-5">
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Cover</th>
            <th scope="col">Post title</th>
            <th scope="col">Post Author</th>
            <th scope="col">Published At</th>
            <th scope="col">Updated At</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
       
    
    <tbody>
      {Makeup.map((product) => (
        <tr key={product.id}>
          <th scope="row">{product.id}</th>
          <td>
            <img className="product-image" src={product.image}  alt={`Cover for ${product.name}`} />
          </td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.originalPrice || "-"}</td>
          <td>{product.discount || "-"}</td>
          <td>
            <button  style={{margin:'10px'}} className="btn btn-primary me-2">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div></div>
<div className="container mt-5">
        <div className="card my-2">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h1 >Skin Care</h1>
              <div className="d-flex">
                <Link to="add-post" style={{height:'45px'}}className="btn btn-outline-primary custom-btn btn-sm">
                  Add Item
                </Link>
              </div>
            </div>
          </div>
        </div>
    <div className="container table-responsive py-5">
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Cover</th>
            <th scope="col">Post title</th>
            <th scope="col">Post Author</th>
            <th scope="col">Published At</th>
            <th scope="col">Updated At</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
       
    
    <tbody>
      {skincare.map((product) => (
        <tr key={product.id}>
          <th scope="row">{product.id}</th>
          <td>
            <img className="product-image" src={product.image}  alt={`Cover for ${product.name}`} />
          </td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.originalPrice || "-"}</td>
          <td>{product.discount || "-"}</td>
          <td>
            <button  style={{margin:'10px'}} className="btn btn-primary me-2">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div></div>
    
    </>
  );
}
