import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/NotFound.scss';
import Error from '../assets/static/kisspng-hand-tool-dewalt-power-tool-makita-5b07e8ab3703b2.7493522715272449712254.png';


const NotFound = () => (
  <div className="container">
   <img src={Error} />
   <span>404</span>
    <h1>Página no encontrada</h1>
    <Link to="/">
      Go Home
    </Link>
  </div>
);

export default NotFound;

