import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { addWomanWear } from './services/items.service.js';


export const Womanwearadd = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [coverPhoto, setCoverPhoto] = useState('');
  const [coverPhoto2, setCoverPhoto2] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [discount, setDiscount] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  
  const handleOriginalPriceChange = (event) => {
    setOriginalPrice(event.target.value);
  };
  
  const handleDiscount = (event) => {
    setDiscount(event.target.value);
  };
  
  const handleStockChange = (event) => {
    setStock(event.target.value);
  };
  
  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };
  
  const handleCoverPhotoChange = (event) => {
    setCoverPhoto(event.target.value);
  };
  
  const handleCoverPhotoChange2 = (event) => {
    setCoverPhoto2(event.target.value);
  };
  const handlePublish = () => {
    // Perform actions to publish the post, like sending data to a server
    console.log('Post published:', { title, body, coverPhoto,coverPhoto2, price, originalPrice, discount, stock });

    let formData= new FormData();
    formData.append("title", title);
    formData.append("description", body);
    formData.append("cover", coverPhoto);
    formData.append("cover2", coverPhoto2);
    formData.append("price", price);
    formData.append("originalprice", originalPrice);
    formData.append("discount", discount);
    formData.append("stock", stock)


    addWomanWear(formData).then((womanwear)=>{
      if(womanwear){
          navigate("/admin");
      }
  })
}

  const handleCancel = () => {
    setTitle('');
    setBody('');
    setCoverPhoto('');
    setCoverPhoto2('');
    setOriginalPrice('');
    setPrice('');
    setStock('');
    setDiscount('');
  };

  return (
    <div style={{ marginTop: '100px' }} className="container mt-4">
      <h1>Create Product</h1>
      <form>
        <div style={{ marginTop: '25px' }} className="mb-3">
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
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="Enter discounted price / original price"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="originalPrice" className="form-label">
            Original Price
          </label>
          <input
            type="text"
            className="form-control"
            id="originalPrice"
            placeholder="Enter original price if discount available"
            value={originalPrice}
            onChange={handleOriginalPriceChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="discount" className="form-label">
            Discount
          </label>
          <input
            type="text"
            className="form-control"
            id="discount"
            placeholder="Enter discount if available"
            value={discount}
            onChange={handleDiscount}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock
          </label>
          <input
            type="text"
            className="form-control"
            id="stock"
            placeholder="available or not"
            value={stock}
            onChange={handleStockChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="body"
            rows="4"
            placeholder="Enter Product Description"
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
        <div className="mb-3">
          <label htmlFor="coverPhoto2" className="form-label">
            Cover Photo 2
          </label>
          <textarea
            className="form-control"
            id="coverPhoto"
            placeholder="Enter your second image url"
            value={coverPhoto2}
            onChange={handleCoverPhotoChange2}
          ></textarea>
        </div>
        <div style={{ display: 'inline' }}>
          <button
            style={{ marginBottom: '20px', marginRight: '20px', width: '100px' }}
            type="button"
            className="btn btn-outline-primary custom-btn btn-sm"
            onClick={handlePublish}
          >
            Publish
          </button>
          <button
            style={{ marginBottom: '20px', width: '100px' }}
            type="button"
            className="btn btn-outline-primary custom-btn btn-sm"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
