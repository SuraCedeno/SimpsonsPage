import React from 'react';
import { useParams } from "react-router-dom";

import Episodes from '../components/Episodes';
import EpisodesItem from '../components/EpisodesItem';

import useInitialState from '../hooks/useInitialState';
import '../assets/styles/components/EpisodesItem.scss';

const API = 'allchapterbyidseason/'

const EpisodesView = () => { 
  let { id } = useParams();
  const {mylist} = useInitialState(API+id);
  
       
    return (
        <>
            <Episodes>
            {mylist.map(item => ( 
            <EpisodesItem ChapterID={item.ID} Image={item.ImageFinal} Order={item.Order} Name={item.Name} />
            ))}
            </Episodes>
            
        </>
    
        
         )
    }

export default EpisodesView;