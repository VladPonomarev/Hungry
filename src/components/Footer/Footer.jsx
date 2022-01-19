import React from 'react';
import './Footer.css';
import Hungry from './Hungry';
import Support from './Support';


const Footer = () => {
  return (
    <div className="app_footer">
      <div className="container">
        <div className="content">
          <div className="hungry">
            <Hungry title='Hungry.' text='Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing.' />
          </div>
          <div className="support">
            <Support title='Support' text='Privacy&Policy' />
            <Support text='Terms & Condition' />
            <Support text='Guidelines' />
            <Support text='Help' />
          </div>
          <div className="usefull">
            <Support title='Usefull Links' text='Privacy&Policy' />
            <Support text='Terms & Condition' />
            <Support text='Guidelines' />
            <Support text='Help' />
          </div>
          <div className="letter">
            <Support title='News Letter' />
            <Support text='Guidelines' />
            <Support text='Help' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
