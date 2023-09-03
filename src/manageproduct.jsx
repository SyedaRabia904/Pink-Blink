import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getmakeup, getskincare, getwomanwear } from "./services/items.service";

export default function Items() {
  let [womanwear, setWomanWear] = useState([]);
  let [makeup, setmakeup] = useState([]);
  let [skincare, setskincare] = useState([]);

  useEffect(() => {
    getskincare()
      .then((skincare) => {
        setskincare(skincare);
      })
      .catch((err) => {});
  }, []);
  useEffect(() => {
    getmakeup()
      .then((makeup) => {
        setmakeup(makeup);
      })
      .catch((err) => {});
  }, []);
  useEffect(() => {
    getwomanwear()
      .then((womanwear) => {
        setWomanWear(womanwear);
      })
      .catch((err) => {});
  }, []); 
  
  return (
    <>
    <h1 className="text-center mb-0" >Product Management</h1>
       <div className="container mt-5">
        <div className="card my-2">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h1>Women Wear</h1>
              <div className="d-flex">
                <Link to="/admin/womanwearadd" style={{height:'45px'}} className="btn btn-outline-primary custom-btn btn-sm">
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
            <th scope="col">Code</th>
            <th scope="col">Cover</th>
            <th scope="col">Product title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Original Price</th>
            <th scope="col">Discount</th>
            <th scope="col">Stock</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
       
    
    <tbody>
      {womanwear.map((product, index) => (
        <tr key={product._id}>
          <th scope="row">ww-{index + 1}</th>
          <td>
            <img className="products-image" src={product.cover}  alt={`Cover for ${product.title}`} />
          </td>
          <td>{product.title}</td>
          <td>{product.description ||"-"}</td>
          <td>{product.price}</td>
          <td>{product.originalprice || "-"}</td>
          <td>{product.discount || "-"}</td>
          <td>{product.stock || "-"}</td>
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
                <Link to="/admin/makeupadd" style={{height:'40px'}} className="btn btn-outline-primary custom-btn btn-sm">
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
          <th scope="col">Code</th>
            <th scope="col">Cover</th>
            <th scope="col">Product title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Original Price</th>
            <th scope="col">Discount</th>
            <th scope="col">Stock</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
       
    
    <tbody>
      {makeup.map((product,index) => (
        <tr key={product._id}>
          <th scope="row">mu-{index + 1}</th>
          <td>
            <img className="products-image" src={product.cover}  alt={`Cover for ${product.title}`} />
          </td>
          <td>{product.title}</td>
          <td>{product.description ||"-"}</td>
          <td>{product.price}</td>
          <td>{product.originalprice || "-"}</td>
          <td>{product.discount || "-"}</td>
          <td>{product.stock || "-"}</td>
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
                <Link to="/admin/skincareadd" style={{height:'45px'}}className="btn btn-outline-primary custom-btn btn-sm">
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
          <th scope="col">Code</th>
            <th scope="col">Cover</th>
            <th scope="col">Product title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Original Price</th>
            <th scope="col">Discount</th>
            <th scope="col">Stock</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
       
    
    <tbody>
      {skincare.map((product,index) => (
        <tr key={product.id}>
          <th scope="row">sc-{index + 1}</th>
          <td>
            <img className="products-image" src={product.cover}  alt={`Cover for ${product.title}`} />
          </td>
          <td>{product.title}</td>
          <td>{product.description ||"-"}</td>
          <td>{product.price}</td>
          <td>{product.originalprice || "-"}</td>
          <td>{product.discount || "-"}</td>
          <td>{product.stock || "-"}</td>
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
