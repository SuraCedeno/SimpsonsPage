import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/CarouselItem.scss';
import Image from '../assets/static/Homer.jpg'


const EpisodesItem = ({ChapterID,Image, Name, Order }) => (
    <div className="episode-item">
    <img className="episode-item__img" src={Image} alt="Imagen del capitulo"  />
    
    <div className="episode-item__details">
     <Link to={`/season/episode/${ChapterID}`} className="episode-item__details--title"> {Name}</Link>
     <p className="episode-item__details--subtitle">{Order}</p>
    </div>
  </div>
 );

export default EpisodesItem;