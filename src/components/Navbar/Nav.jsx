import React from 'react';
import './Nav.css';
import logo from './../../img/Logo.png';
import Items from '../Items/Items';

const Nav = () => {
    return (
        <div className="App-header">
            <header>
                <div className="container">
                    <div className="nav">
                        <div className="App_logo">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="App_menu">
                            <ul className="nav_items">
                                <li className="nav_item"><Items href="/Main" text="Home"/></li>
                                <li className="nav_item"><Items href="/Features" text="Features"/></li>
                                <li className="nav_item"><Items href="/Testimonial" text="Testimonial"/></li>
                                <li className="nav_item"><Items href="/Blog" text="Blog"/></li>
                            </ul>
                        </div>
                        <div className="App_btn">
                            <button className="btn_nav">Download Now</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Nav
