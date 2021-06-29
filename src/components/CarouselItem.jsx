import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/CarouselItem.scss';


const  CarouselItem =({ChapterID,Image, Name, Chapters }) => ( 

  <Link to={`/season/${ChapterID}`} className="carousel-item__details--title"> 
    <div className="carousel-item">
   
        <img className="carousel-item__img" src={Image} alt=" SeasonCover"/>
  
    <div className="carousel-item__details">
     <Link to ={`/season/${ChapterID}`} className="carousel-item__details--title"> {Name}</Link> 
     
     <p className="carousel-item__details--subtitle">{Chapters}</p>
    </div>

  </div>
  </Link> 
);

export default CarouselItem;