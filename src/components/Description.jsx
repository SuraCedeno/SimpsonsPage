import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Description.scss';

const Description = ({Imagen,title, Id_season}) => (
    
    <div className="description">
        <div className="description__container">
            <img src={Imagen}/>
            <h3 className="description__title">{title}</h3>
           <Link to={`/season/${Id_season}`}>
            <button>
               Temporada: {Id_season}
            </button>
        </Link>
        
        </div>
    </div>
    
 );
export default Description;