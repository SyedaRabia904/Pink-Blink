import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { addMakeup } from './services/items.service.js';


export const Makeupadd = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [coverPhoto, setCoverPhoto] = useState('');

  const [stock, setstock] = useState('');
  const [price, setprice] = useState('');
  const [originalprice, setoriginalprice] = useState('');
  const [discount, setDiscount] = useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handlePriceChange = (event) => {
    setprice(event.target.value);
  };
  const handleOriginalPriceChange = (event) => {
    setoriginalprice(event.target.value);
  };
  const handleDiscount= (event)=>{
    setDiscount(event.target.value)
}
  const handleStockChange = (event) => {
    setstock(event.target.value);
  };
  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleCoverPhotoChange = (event) => {
    setCoverPhoto(event.target.value);
  };

  const handlePublish = () => {
    // Perform actions to publish the post, like sending data to a server
    console.log('Post published:', { title, body, coverPhoto, price,originalprice, discount, stock });

    let formData= new FormData();
    formData.append("title", title);
    formData.append("description", body);
    formData.append("cover", coverPhoto);
    formData.append("price", price);
    formData.append("originalprice", originalprice);
    formData.append("discount", discount);
    formData.append("stock", stock)


    addMakeup(formData).then((makeup)=>{
      if(makeup){
          navigate("/admin");
      }
  })
   
  }
  const handleCancel = () => {
    // Perform actions to cancel post creation
    console.log('Post creation canceled');
    // Reset the form
    setTitle('');
    setBody('');
    setCoverPhoto('');
    setoriginalprice('');
    setprice('');
    setstock('');
  };
  return (
    <div className="container mt-4">
    <h1>Create Post</h1>
    <form>
      <div style={{marginTop:'25px'}} className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Price
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter discounted price / original price"
          value={price}
          onChange={handlePriceChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
         Original Price
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter original price if discount available"
          value={originalprice}
          onChange={handleOriginalPriceChange}
        />
      </div>
      <div className="mb-3">
            <label htmlFor="title" className="form-label">
             Discount
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter discount if available"
              value={discount}
              onChange={handleDiscount}
            />
          </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
         Stock
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="available or not"
          value={stock}
          onChange={handleStockChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Discription
        </label>
        <textarea
          className="form-control"
          id="body"
          rows="4"
          placeholder="Enter Product Dispcription"
          value={body}
          onChange={handleBodyChange}
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="coverPhoto" className="form-label">
          Cover Photo
        </label>
        <textarea
            className="form-control"
            id="coverPhoto"
            placeholder="Enter your image url"
            value={coverPhoto}
            onChange={handleCoverPhotoChange}
          ></textarea>
      </div>
    
      <div style={{display: "inline"  }} >
        <button style={{marginBottom:'20px' , marginRight: "20px", width:"100px"}} type="button" className="btn btn-outline-primary  custom-btn btn-sm" onClick={handlePublish}>
          Publish
        </button>
        <button style={{marginBottom:'20px' ,width:"100px"}}type="button" className="btn btn-outline-primary  custom-btn btn-sm" onClick={handleCancel}>
          Cancel
        </button></div>
    </form>
  </div>
);
};

