import React from "react";
import { NavBar } from "./Components/NavBar/NavBar";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { initializeApp } from "firebase/app";
import { Home } from "./Components/Home/Home";
import {ItemDetail} from './Components/Item/ItemDetail'
import { CartContextProvider } from "./Components/Context/CartContext";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const App= () => {
  return (
          <CartContextProvider>
          <BrowserRouter>
          <NavBar/>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products/:id' element={<ItemDetail/>}/>
          <Route path='/category/:idCategory' element={<Home/>}/>
          </Routes>
          </BrowserRouter>
          </CartContextProvider>
          
  );
}


export default App