
import { useState, useEffect } from "react";

const useInitialState1 = (ruta) =>{
    const API = 'https://bkhr5ag0ee.execute-api.us-east-1.amazonaws.com/Stage/'+ruta;
    const [videos, setVideos] = useState({ Name:"",ResourseFinal:"",ImagenFinal:"",Id_season:""})
    useEffect(() => {
    fetch(API)
  
    .then((response) => response.json())
      .then((data) => setVideos(data)); 
  }, []);
  
  return videos;
  };
  
  export  default useInitialState1;