import React from "react";
import { NavBar } from "./Components/NavBar/NavBar";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { initializeApp } from "firebase/app";
import { Catalog } from "./Components/Catalog/Catalog";
import { Home } from "./Components/Home/Home";
import {ItemDetail} from './Components/Item/ItemDetail'


const firebaseConfig = {
  apiKey: "AIzaSyC5i9oyG1D24rJQ6r4SnpDqFCrtrZeYCdc",
  authDomain: "techcommerce-3e5c9.firebaseapp.com",
  projectId: "techcommerce-3e5c9",
  storageBucket: "techcommerce-3e5c9.appspot.com",
  messagingSenderId: "602920689238",
  appId: "1:602920689238:web:1d6f1f238dc61052eb25f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const App= () => {
  return (
          
          <BrowserRouter>
          <NavBar/>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products/:id' element={<ItemDetail/>}/>
          <Route path='/category/:idCategory' element={<Home/>}/>
          </Routes>
          </BrowserRouter>
          
  );
}


export default App