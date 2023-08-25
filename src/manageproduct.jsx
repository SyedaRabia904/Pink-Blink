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
            <img className="product-image" src={product.images[0]}  alt={`Cover for ${product.name}`} />
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
