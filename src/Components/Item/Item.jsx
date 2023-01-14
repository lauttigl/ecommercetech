import React from 'react'

export const Item = (props) => {
    const {product} = props

return (
    <div><div className="card lg:card-side  bg-base shadow-lg shadow-stone-500 card-bordered border-black m-10 ">
    <figure><img className='object-scale-down h-80 w-80 'src={product.img} alt={product.imageAlt}/></figure>
        <div className="card-body place-items-center" key={product.id}>
        <p className="card-title font-sans font-light">{product.name}</p>
        <div>
        <p className='text-lg font-light'>Precio: ${product.price}</p>
        <p className='text-lg font-light'>En Stock: {product.stock} unidades </p>
        </div>
    </div>
    </div>
    </div>
)
}
