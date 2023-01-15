import React, { useState } from 'react'

export const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)


    
    return (
        <div >  
            <button disabled={count <=0}onClick={ () =>setCount (count - 1)} className="btn bg-gray-400"><h2 className='text-black'>-</h2> </button>
                <span className='text-lg p-4'>{count}</span>
                    <button  disabled={count >= stock}onClick={ () =>setCount (count + 1)} className="btn bg-gray-400 p-4"> <h2 className='text-black'>+</h2> </button>
            <label htmlFor="my-modal" disabled={count == 0} onClick={() => onAdd(count)}  className="btn m-4 bg-gray-400"><h2 className='text-black'>Añadir al carrito</h2></label>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal ">
                    <div className="modal-box bg-violet-100">
                    <h2 className="text-3xl text-center">El producto se agregó al carrito!</h2>
                    <div className="modal-action">
                    <label htmlFor="my-modal" className="btn bg-gray-400">Seguir comprando</label>
                    </div>
                    </div>
                    </div>
                    </div>
                )
                }