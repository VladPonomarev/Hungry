import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
      <div>
        <div className="card">
          <img src={props.img} className="img_card"/>
            <div className="card-body">
              <h2 className="title_card">{props.title}</h2>
              <p className="text_card">{props.text}</p>
              <a className="btn_card">{props.btn}</a>
            </div>
        </div>
      </div>
  );
};

export default Card;
