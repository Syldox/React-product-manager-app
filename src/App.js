import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header';
// import Contacts from './components/Contacts';
import Products from './components/Products';

function App() {
  return (
    <div>
      <Header branding = "Product-Manager"/>
      <div className="container">
      {/* <Contacts/> */}
      <Products/>
      </div>
    </div>
  );
}
export default App;
