
import React,{ useState, useEffect } from 'react';

import Description from '../components/Description';
import Reproductor from '../components/Reproductor';

import { useParams} from "react-router-dom";
import useInitialState1 from '../hooks/useInitialState1';
import '../assets/styles/components/View.scss';


const API = 'chapterbyid/';

const View = () => { 
  let { id } = useParams();
  const initialState = useInitialState1(API+id);

  return(   
            <div className="view__container">
            <Description Id_season={initialState.Id_season} title={initialState.Name} Imagen={initialState.ImagenFinal} />
            <Reproductor Resourse={initialState.ResourseFinal}/>
            
          </div>
        )
    
}

export default View;