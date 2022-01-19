import React from 'react';
import phone from './../img/phone.png';
import Play from './../img/Play.png';
import Store from './../img/Store.png';

const Main = () => {
    return (
        <div>
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
        </div>
    )
}

export default Main
