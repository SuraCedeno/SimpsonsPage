
import React from 'react';




const  Reproductor =({Resourse}) => ( 
    
     
        <div className="reproductor__container">
          <video width="500px" height="300px"src={Resourse} controls> Vídeo no es soportado... </video>
        </div>
      
);
  


    export default  Reproductor;