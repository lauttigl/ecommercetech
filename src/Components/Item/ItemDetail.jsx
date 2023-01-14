import { getFirestore, doc, getDoc } from 'firebase/firestore'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Item } from './Item'


export const ItemDetail = () => {
  const [product, setProduct] = useState([])
  const {id} = useParams()

  useEffect(() => {
    getProduct()
  }, [])
  
  const getProduct = async () => {
    const db = getFirestore()
    const document = doc(db,'products', id)
    const response = await getDoc(document)
    const result = {id:response.id,...response.data()}
    setProduct(result)
  }

  
  return (
    <div>
      <Item key={product.id} product={product}/>
    </div>
  )
}
