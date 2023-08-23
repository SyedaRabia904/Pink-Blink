import './App.css';
import React, { useState, useEffect, useRef} from 'react';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Escape' && menuActive) {
      closeMenu();
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [menuActive]);

  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <div className={`burger ${menuActive ? 'active' : ''}`} id="burger" onClick={toggleMenu}>
            <span className="burger-open">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16">
                <g fill="#252a32" fillRule="evenodd">
                  <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
                </g>
              </svg>
            </span>
            <span className="burger-close">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  fill="#252a32"
                  fillRule="evenodd"
                  d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                />
              </svg>
            </span>
          </div>
          <ul className={`menu ${menuActive ? 'active' : ''}`} id="menu">
            <li className="menu-item">
              <a href="#" className="menu-link">
                Menu Item
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                Menu Item
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                Menu Item
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                Menu Item
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                Menu Item
              </a>
            </li>
          </ul>
          <h1>
            <a href="./index.html" className="brand">
              Brand
            </a>
          </h1>
        </nav>
      </header>
      <main className="main" onClick={closeMenu}>
        <div className="container">
          <div className="wrapper"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
