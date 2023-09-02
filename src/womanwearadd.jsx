import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const Womanwearadd = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [coverPhoto2, setCoverPhoto2] = useState(null);
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
    setCoverPhoto(event.target.files[0]);
  };
  
  const handleCoverPhotoChange2 = (event) => {
    setCoverPhoto2(event.target.files[0]);
  };
  const handlePublish = () => {
  let formData= new FormData();
    
     
      formData.append('title', title);
      formData.append('body', body);
      formData.append('coverPhoto', coverPhoto);
      formData.append('coverPhoto2', coverPhoto2);
      formData.append('price', price);
      formData.append('originalPrice', originalPrice);
      formData.append('stock', stock);
      formData.append('discount', discount);
      console.log(title,body,price,originalPrice,stock,discount,coverPhoto,coverPhoto2)
     
  };

  const handleCancel = () => {
    setTitle('');
    setBody('');
    setCoverPhoto(null);
    setCoverPhoto2(null);
    setOriginalPrice('');
    setPrice('');
    setStock('');
    setDiscount('');
  };

  return (
    <div className="container mt-4">
      <h1>Create Post</h1>
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
          <input
            type="file"
            className="form-control"
            id="coverPhoto"
            accept="image/*"
            onChange={handleCoverPhotoChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="coverPhoto2" className="form-label">
            Cover Photo 2
          </label>
          <input
            type="file"
            className="form-control"
            id="coverPhoto2"
            accept="image/*"
            onChange={handleCoverPhotoChange2}
          />
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
