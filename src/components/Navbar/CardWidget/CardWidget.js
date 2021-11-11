import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
//import './CartWidget.css';
import cart4 from './cart4.svg';

const CardWidget = () => {

    const {cantidadCarrito} = useContext(CartContext);

    return ( 
        <Link to={'/cart'}>

        {cantidadCarrito() > 0 ? 
            (
                <div>{cantidadCarrito()} </div> 
            ) : (
                <div ></div> 
            )}
            <div class="container-fluid">
            <botton><img src={cart4} className="App-cart" alt="cart" /></botton>
        </div>
        </Link>
     );
}
 
export default CardWidget;

