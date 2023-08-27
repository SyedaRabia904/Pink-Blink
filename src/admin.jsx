import { React, useRef } from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { Myinfo } from './myinfo';
import Items from './manageproduct';



function Admin() {
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

            <div class="app-section">
                <header className="header">
                    <nav className="navbar">
                        <div className="burger" id="burger" ref={burgerRef} onClick={handleBurgerClick}>
                            <span className="burger-open">
                                <svg className="img" xmlns="http://www.w3.org/2000/svg" width="24" height="16">
                                    <g fill="#252a32" fillRule="evenodd">
                                        <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
                                    </g>
                                </svg>
                            </span>
                            <span className="burger-close">
                                <svg className="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                    <path fill="#252a32" fillRule="evenodd" d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z" />
                                </svg>
                            </span>
                        </div>
                        <ul className="menu" id="menu" ref={menuRef}>
                            <li className="menu-item">
                                <Link to="/" className="menu-link">
                                    Dashboard
                                </Link>
                            </li>
                           
                            <li className="menu-item">
                                <Link to="/signup" className="menu-link">
                                    Admins List
                                </Link>
                            </li>
                            <li className="menu-item dropdown">
                                <a href="#" className="menu-link">Product Management</a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/womenwear">Add Product</Link>
                                    </li>
                                    <li>
                                        <Link to="/makeup">Deleted Products</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="brand">
                        <i>Pink Blink</i>
                        </div>
                        <Link to="/login" className="search-btn">
                          <ion-icon name='log-out-outline'></ion-icon>
                        </Link>
                    </nav>
                </header>
                <Outlet/>
            </div>
           
        </>
    );
}
export default Admin