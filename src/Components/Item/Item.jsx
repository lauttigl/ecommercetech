import React from 'react'
import { useCart } from '../Context/CartContext'
import { Counter } from '../Counter/Counter'

export const Item = (props) => {
    const {product} = props
    const {addToCart} = useCart()

    const addHandler = (qty) => {
        const newProduct ={
            ...product,
            quantity:qty
        }
        addToCart(newProduct)
    }

return (
    <div><div className="card lg:card-side  bg-base shadow-lg shadow-stone-500 card-bordered border-black m-10 ">
    <figure><img className='object-scale-down h-80 w-80 'src={product.img} alt={product.imageAlt}/></figure>
        <div className="card-body place-items-center" key={product.id}>
        <p className="card-title font-sans font-light">{product.name}</p>
        <div>
        <p className='text-lg font-light'>Precio: ${product.price}</p>
        <p className='text-lg font-light'>En Stock: {product.stock} unidades </p>
        <Counter initial={0} stock={product.stock} onAdd={addHandler}/>
        </div>
    </div>
    </div>
    </div>
)
}
