import React from 'react';
import './Main.css'
import Play from './../../img/Play.png';
import Store from './../../img/Store.png';
import phone from './../../img/phone.png';
import Features from './../Features/Features';
import Testimonial from './../Testimonial/Testimonial';
import Blog from './../Blog/Blog';
import {BrowserRouter, Route} from 'react-router-dom';

const Main = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path='/Main'>
                    <div className="App-main">
                        <div className="container">
                            <div className="main">
                                <div className="Left_slide">
                                    <h1 className="title">Your Favourite Food <br /> delivery Partner.</h1>
                                    <h5 className="sub_title">Food Delivery is a thriving business and there are many <br /> opportunities for this Businesses as its Growing.</h5>
                                    <div className="btn_group">
                                        <div className="btn_play">
                                            <img src={Play} />
                                            <button className="App_google">GET IT ON <br /><span>Google Play</span></button>
                                        </div>
                                        <div className="btn_store">
                                            <img src={Store} />
                                            <button className="App_store">Download on the <span>App Store</span></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="App-phone">
                                    <img src={phone} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route path='/Features'>
                    <Features />
                </Route>
                <Route path='/Testimonial'>
                    <Testimonial />
                </Route>
                <Route path='/Blog'>
                    <Blog />
                </Route>
            </div>
        </BrowserRouter>
    )
}

export default Main
