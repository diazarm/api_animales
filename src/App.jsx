//import React from 'react';
import { Home } from "./pages/Home";
//import { Navbar } from './components/Navbar';
//import { ListadoAdoptame } from './components/ListadoAdoptame';
//import { ErrorBoundary } from './components/ErrorBoundary';
import BasicExample from './components/navBar2.jsx'
import "./App.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import CardBoostrap from './components/CardBoostrap.jsx';

export const App = () => {
  return (
    <div>
      <BasicExample/>
      {/* <CardBoostrap/> */}
      {/* <ErrorBoundary> */}
      {/* <Navbar /> */}
      {/* <ListadoAdoptame /> */}
      <Home />
      {/* </ErrorBoundary> */}
    </div>
  );
};
