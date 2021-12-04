import React from 'react';
import './Navbar.css';
import logo from '../Navbar/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from 'react-router-dom';
import {categorias} from '../../categorias/categorias.json'

export const Navbar = () =>  {

    return  (
    <div className="navbar">
            <Link to={'/'}> <img className="logo" src={logo} alt="logo" /> </Link>
            <ul>
                {categorias.map(cat => <li className="navLink"  key={cat.id} > <NavLink className="navLinkItem"  to={`/category/${cat.id}`} activeClassName='active'>{cat.title} </NavLink></li>)}
            </ul>
            <div>
                    <Link to="/Cart">
                    <CartWidget />   
                    </Link>     
                </div> 
        </div>
    )
}
export default Navbar;
