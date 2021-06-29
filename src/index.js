import React from 'react';

import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider }  from 'react-redux';
import { createStore } from 'redux';
import useInitialState from './hooks/useInitialState';
//import reducers from './reducers';




const initialState ={mylist:[]}
//const initialState= await fetch(API).then((response) => response.json())
//const initialState = await axios(API);



    /*
const store = createStore(
 // reducers, // todos los reducers
  initialState //estado inicial
)*/


ReactDOM.render(
//<Provider store={ store }>
  <App />,
//</Provider>,
 
  
  
 document.getElementById('app')
 );
