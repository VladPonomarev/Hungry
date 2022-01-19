import logo from './../img/Logo.png'
import Items from './Items'
import React from 'react'

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
                                <li className="nav_item"><Items href="/" text="Home"/></li>
                                <li className="nav_item"><Items href="/Features" text="Features"/></li>
                                <li className="nav_item"><Items href="/Testimonial" text="Testimonial"/></li>
                                <li className="nav_item"><Items href="/Blog" text="Blog"/></li>
                            </ul>
                        </div>
                        <div className="App_btn">
                            <button className="btn">Download Now</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Nav
