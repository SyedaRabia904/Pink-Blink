import React, { useRef, useState } from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';


function App() {
  const burgerRef = useRef(null);
  const menuRef = useRef(null);
  const mainRef = useRef(null);

  const handleBurgerClick = () => {
    burgerRef.current.classList.toggle("active");
    menuRef.current.classList.toggle("active");
  };

  const handleMainClick = () => {
    if (menuRef.current.classList.contains("active")) {
      burgerRef.current.classList.remove("active");
      menuRef.current.classList.remove("active");
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Escape" && menuRef.current.classList.contains("active")) {
      burgerRef.current.classList.remove("active");
      menuRef.current.classList.remove("active");
    }
  };
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <>
    <div class="app-section">
      <header className="header">
        <nav className="navbar">
          <div className="burger" id="burger" ref={burgerRef} onClick={handleBurgerClick}>
            <span className="burger-open">
              <svg className="img"xmlns="http://www.w3.org/2000/svg" width="24" height="16">
                <g fill="#252a32" fillRule="evenodd">
                  <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
                </g>
              </svg>
            </span>
            <span className="burger-close">
              <svg  className="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path fill="#252a32" fillRule="evenodd" d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z" />
              </svg>
            </span>
          </div>
          <ul className="menu" id="menu" ref={menuRef}>
          <li className="menu-item">
        <Link to="/" className="menu-link">
          Home
        </Link>
      </li>
  <li className="menu-item dropdown">
    <a href="#" className="menu-link">Product</a>
    <ul className="dropdown-menu">
      <li>
        <Link to="/womenwear">Women's Wear</Link>
      </li>
      <li>
        <Link to="/makeup">Makeup</Link>
      </li>
      <li>
        <Link to="/skincare">Skin Care</Link>
      </li>
    </ul>
  </li>
  <li className="menu-item"><a href="#" className="menu-link">Cart</a></li>
  <li className="menu-item">
        <Link to="/login" className="menu-link">
          Admin Login
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/signup" className="menu-link">
          Admin Signup
        </Link>
      </li>
</ul>

<Link to="/" className="brand">
        <i>Pink Blink</i>
      </Link>
      
          <div   class="search-box" > 
          
  
    <input type="text" class="search-txt" name="" placeholder="Search"/>
    <a href="#" class="search-btn">
      <ion-icon name="search-outline"></ion-icon>
    </a>
  </div> 
  <a href="#" class="search-btn">
      <ion-icon name="cart-outline"></ion-icon>
    </a>
 
        </nav>
      </header>
      <main  className="main" ref={mainRef} onClick={handleMainClick}>
        <div className="container">
          <Outlet/></div>
        
        
      </main>
      </div>
      <footer
  id="Footer"
  style={{ backgroundColor: "rgb(228, 153, 188)" }}
  className="page-footer font-small stylish-color-dark pt-4"
>
  <div
    style={{ backgroundColor: "rgb(228, 153, 188)" }}
    className="container text-center text-md-left"
  >
    <div className="row">
      <div className="col-md-4 mx-auto">
        {/* Content */}
        <h5 className="text-uppercase font-weight-bold mt-3 mb-4">
          About our Company
        </h5>
        <hr
          className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
          style={{ width: 70 }}
        />
        <p>
        At Pink Blink, we're passionate about bringing you the best in women's wear, makeup, and skincare products. Our mission is to provide you with high-quality and stylish options that enhance your beauty and confidence. Discover a world of elegance and self-care with our curated collection.
        </p>
      </div>
      <hr className="clearfix w-100 d-md-none" />
      <div id="link10" className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase font-weight-bold">Products</h6>
        <hr
          className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
          style={{ width: 70 }}
        />
          <p>
        <Link to="/womenwear" style={{ color: 'rgb(170, 10, 85)' }}>
          Women's Wear
        </Link>
      </p>
      <p>
        <Link to="/makeup" style={{ color: 'rgb(170, 10, 85)' }}>
          Makeup
        </Link>
      </p>
      <p>
        <Link to="/skincare" style={{ color: 'rgb(170, 10, 85)' }}>
          Skin Care
        </Link>
      </p>
     
      </div>
      <hr className="clearfix w-100 d-md-none" />
      <div id="link10" className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
        <hr
          className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
          style={{ width: 70 }}
        />
        <p>
          <a style={{ color:'rgb(170, 10, 85)'}} href="#!">Your Account</a>
        </p>
        <p>
          <a style={{ color:'rgb(170, 10, 85)'}} href="#!">Become an Affiliate</a>
        </p>
        <p>
          <a style={{ color:'rgb(170, 10, 85)'}} href="#!">Shipping Rates</a>
        </p>
        <p>
          <a style={{ color:'rgb(170, 10, 85)'}} href="#!">Help</a>
        </p>
      </div>
      <hr className="clearfix w-100 d-md-none" />
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <h6 className="text-uppercase font-weight-bold">Contact</h6>
        <hr
          className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
          style={{ width: 60 }}
        />
        <p>
          <i className="fas fa-home mr-3" /> Karachi, Sindh, Pakistan
        </p>
        <p>
          <i className="fas fa-envelope mr-3" /> pinkblink@gmail.com
        </p>
        <p>
          <i className="fas fa-phone mr-3" /> + 92 80254 52222
        </p>
        <p>
          <i className="fas fa-print mr-3" /> + 92 80254 55123
        </p>
      </div>
    </div>
  </div>
  <hr />
  {/* Call to action */}
  <ul
    style={{ backgroundColor: "rgb(228, 153, 188)" }}
    className="list-unstyled list-inline text-center py-2"
  >
    <li className="list-inline-item">
      <h5 className="mb-1">Register for free</h5>
    </li>
    <li className="list-inline-item">
      <a href="#Contact"  className="btn btn-outline-primary  custom-btn btn-sm">
        Sign up!
      </a>
    </li>
  </ul>
  <hr />
  {/* Social buttons */}
  <div className="hover-effect1">
    <ul
      style={{ backgroundColor: "rgb(228, 153, 188)" }}
      className="list-unstyled list-inline text-center"
    >
      <li className="list-inline-item">
        <a href="https://www.facebook.com/codewithfaraz" title="Facebook">
          <i className="fa fa-facebook" />
        </a>
      </li>
      <li className="list-inline-item">
        <a href="https://www.twitter.com/codewithfaraz" title="Twitter">
          <i className="fa fa-twitter" />
        </a>
      </li>
      <li className="list-inline-item">
        <a href="https://www.instagram.com/codewithfaraz" title="Instagram">
          <i className="fa fa-instagram" />
        </a>
      </li>
      <li className="list-inline-item">
        <a href="https://www.youtube.com/@codewithfaraz" title="Youtube">
          <i className="fa fa-youtube" />
        </a>
      </li>
      
    </ul>
  </div>
  {/* Copyright */}
  <div
    style={{ backgroundColor: "rgb(228, 153, 188)" }}
    className="footer-copyright text-center py-3"
  >
    Copyright© 2023: Design and Develop by SR Developers
  </div>
</footer>

    </>
  );
}

export default App;
