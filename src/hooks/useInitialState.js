import { useState, useEffect } from "react";

const useInitialState = (ruta) =>{
  const API = 'https://bkhr5ag0ee.execute-api.us-east-1.amazonaws.com/Stage/'+ruta;
    const [videos, setVideos] = useState({ mylist: []})
    useEffect(() => {
    fetch(API)

    .then((response) => response.json())
      .then((data) => setVideos(data)); 
  }, []);

  return videos;
};

export default useInitialState;



