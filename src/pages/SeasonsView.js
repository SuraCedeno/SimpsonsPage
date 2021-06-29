
import React from 'react';

import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';



const SeasonsView = () => { 

  const {mylist} = useInitialState("allseason");

 
return(
            <>
            <Search />
            <Carousel >
            {mylist.map(item => ( 
            <CarouselItem 
            ChapterID={item.ID} 
            Image={item.ImageFinal} 
            Chapters={item.Chapters}
            Name={item.Name} />
            ))}
           </Carousel>
          </>
        )
    };


export default SeasonsView;