
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import './Cart.css';
import trash from './trash.svg';
import  Form  from '../Form/Form';

const Cart = () => {

    const {carrito, eliminarItem, limpiarCarrito, totalCarrito, totalItem} = useContext(CartContext)

    const total = totalCarrito()

    return (
    <div className="container m-auto p-3 text-center">
            <h2>Carrito de compras</h2>
            {carrito.length === 0 ?(
                <div>
                    <h4>Actualmente no hay productos en el carrito </h4>
                    <Link to={'/'}>
                        <button className="botonesdetalle">Volver al inicio</button>
                    </Link>
                </div>
            ) : (
                <div className="cartContainer">
                    <ul className="cartContainerUl">
                        {carrito.map(serv  => 
                            <li className="cartContainerLi" key={serv.id}> 
                                <img className="ImagenCard my-3" src={serv.image} alt={serv.title} />
                                <h4>{serv.title}</h4>
                                <h6 className="parrafo">Precio total ${totalItem(serv)}</h6>
                                <h6 className="parrafo">Cantidad: {serv.count}</h6>
                                <button className="m-2" onClick={() => eliminarItem(serv.id)}><img src={trash} alt="cesto" /></button>
                            </li>
                        )}
                    </ul>
                    <div>
                    <h2 className="m-3">Total ${total}</h2>
                    <button className="botonesdetalle mx-3" onClick={limpiarCarrito}>Vaciar carrito</button>
                    </div>  
                </div>
            )}
            <Form carrito={carrito} total={total} limpiarCarrito={limpiarCarrito} />
        </div>
    )
}

export default Cart;