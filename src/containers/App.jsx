
import React,{ useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SeasonsView from '../pages/SeasonsView';
import EpisodesView from '../pages/EpisodesView';
import NotFound from '../pages/NotFound';
import View from '../pages/View';
import Login from '../containers/Login';
import Layout from '../components/Layout';

import '../assets/styles/App.scss';


const App = () => (

         <BrowserRouter>
           <Layout>
            <Switch>
            <Route exact path ="/" component= {SeasonsView} />
            <Route exact path ="/login" component= {Login} />
            <Route exact path ="/season/:id" component= {EpisodesView} />
            <Route exact path ="/season/episode/:id" component= {View} />
            <Route component= {NotFound} />
            </Switch>
           </Layout>
        </BrowserRouter>


    );

export default App;