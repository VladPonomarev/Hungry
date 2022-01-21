import React from 'react';
import './Blog.css';
import Card from './../Card/Card';
import flaur from './../../img/blog-img/flaur.png';
import home from './../../img/blog-img/home.png';
import wall from './../../img/blog-img/wall.png';


const Blog = () => {
  return (
    <div>
      <h1 className='blog_title'>Update News</h1>
      <div className="card_news">
        <Card img={flaur} title='Healthy Food' text='Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing.' btn='Read More'/>
        <Card img={home} title='Healthy Food' text='Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing.' btn='Read More'/>
        <Card img={wall} title='Healthy Food' text='Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing.' btn='Read More'/>
      </div>
    </div>
  )
};

export default Blog;
