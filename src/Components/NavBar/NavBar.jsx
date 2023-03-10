import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

    export const NavBar = () => {
        const {carritoCounter} = useCart()
        const cantidad = carritoCounter()
        
    return (
        <div className="navbar bg-gradient-to-r from bg-sky-300 to-white ">
        <div className="flex-1">
            <Link to='/'><a className="btn btn-ghost font-sans font-lg">My Tech Store</a>
            </Link>
        </div>
        <div className="form-control xxs:invisible xs:invisible sm:invisible md:visible ">
            <input
            type="text"
            placeholder="Buscar productos"
            className="input input-bordered"
            />
        </div>
        <div className="dropdown dropdown-end ">
        <label tabIndex={0} className="btn btn-ghost rounded-btn m-2">Categorias</label>
        <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
        <Link to={`category/procesador`}><li className="font-light text-lg p-2">Procesadores</li></Link> 
        <Link to={`category/monitores`}><li className="font-light text-lg p-2">Monitores</li></Link> 
        <Link to={`category/teclados`}><li className="font-light text-lg p-2">Teclados</li></Link> 
        </ul>
    </div>
        <div className="flex-none">
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
                <span className="badge badge-lg indicator-item">({cantidad})</span>
                </div>
            </label>
            <div
                tabIndex={0}
                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
                <div className="card-body">
                <span className="font-light text-lg">{cantidad} Productos en carrito</span>
                <div className="card-actions">
                    <button className="btn bg-gradient-to-br from-purple-600 to-blue-500 btn-block">Ver Carrito</button>
                </div>
                </div>
            </div>
            </div>
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
                </div>
            </label>
            <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                <a className="justify-between">Registrarme</a>
                </li>
                <li>
                <a>Logout</a>
                </li>
            </ul>
            </div>
        </div>
        </div>
    );
    };
