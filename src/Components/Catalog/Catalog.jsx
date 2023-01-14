import React from "react";
import { useState, useEffect,  } from "react";
import {useParams} from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";

  const Catalog = () => {
  const [catalog, setCatalog] = useState([])
  const {idCategory} = useParams()

  useEffect(() => {
    idCategory?getProductsCategory():getProducts()
  }, [idCategory])
  

  const getProducts = async () => {
    const db = getFirestore();
    const collectionRef = collection(db, "products");
    const snapshot = await getDocs(collectionRef);
    setCatalog(snapshot.docs.map(d => ({ id:d.id, ...d.data() })));
  }


  const getProductsCategory= async () =>{
    const db = getFirestore()
    const collectionRef = query(collection(db, 'products'), where ('category', '==', idCategory))
    const snapshot = await getDocs(collectionRef)
    setCatalog(snapshot.docs.map(d => ({id: d.id, ...d.data()})))
  }

  return (
    <>

  <div className="bg-base">
    <div className=" grid grid-cols-4 gap-5 m-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
    {catalog.map((product) =>(
  <div className="card card-side bg-base card-bordered  shadow-lg shadow-stone-500"  key={product.id}>
  <figure><img src={product.img}/></figure>
  <div className="card-body  ">
    <h2 className="card-title font-sans font-light">{product.name}</h2>
    <p className="text-lg font-light">Precio: ${product.price}</p>
    <div className="card-actions justify-end">
    <a href="#_" className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
<span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
<span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
<span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
<Link to={`/products/${product.id}`}><span className="relative">Ver Producto</span>
</Link>
</a>
    </div>
  </div>
</div>
) )}</div>
  </div>
    </>



)
}
  
export default Catalog
