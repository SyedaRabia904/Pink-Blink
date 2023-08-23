import React, { useRef } from 'react';
import './App.css';

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

  return (
    <>
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
            <li className="menu-item"><a href="#" className="menu-link">Menu Item</a></li>
            <li className="menu-item"><a href="#" className="menu-link">Menu Item</a></li>
            <li className="menu-item"><a href="#" className="menu-link">Menu Item</a></li>
            <li className="menu-item"><a href="#" className="menu-link">Menu Item</a></li>
            <li className="menu-item"><a href="#" className="menu-link">Menu Item</a></li>
          </ul>
          <h1 class="brand">
    <img src="name.PNG" alt="Brand Name"/>
</h1>

        </nav>
      </header>
      <main className="main" ref={mainRef} onClick={handleMainClick}>
        <div className="container">
          <div className="wrapper"></div>
        </div>
      </main>
      
    </>
  );
}

export default App;
