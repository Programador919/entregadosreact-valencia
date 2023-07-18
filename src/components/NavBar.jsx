import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <NavLink to="/home" className="li"><h1>Drink House</h1>  </NavLink>
            <div className='NavBar-right'>
                <ul>
                    <NavLink to="/productos" className="li">Productos</NavLink>
                    <NavLink to="/categorias/Whisky" className="li">Whisky</NavLink>
                    <NavLink to="/categorias/Tequila" className="li">Tequila</NavLink>
                    <NavLink to="/categorias/Vodka" className="li">Vodka</NavLink>
                    <NavLink to="/categorias/Vino" className="li">Vino</NavLink>
                </ul>
                <NavLink to="/carrito"><CartWidget  /></NavLink>  
            </div>
        </nav>
    )
}

export default NavBar