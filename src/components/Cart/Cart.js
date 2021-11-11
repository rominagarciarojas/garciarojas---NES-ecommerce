
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import './Cart.css';
import trash from './trash.svg';


const Cart = () => {

    const {carrito, eliminarItem, limpiarCarrito, totalCarrito, totalItem, terminarCompra} = useContext(CartContext)

    const total = totalCarrito()

    return (
    <div className="container m-auto p-3 text-center">
            <h1>Carrito de compras</h1>
            {carrito.length === 0 ?(
                <div>
                    <h4>Actualmente no hay productos en el carrito </h4>
                    <Link to={'/'}>
                        <button className="botonesdetalle">Volver al inicio</button>
                    </Link>
                </div>
            ) : (
                <div>
                    <ul>
                        {carrito.map(serv  => 
                            <li key={serv.id}> 
                                <img className="ImagenCard my-3" src={serv.image} alt={serv.title} />
                                <h3>{serv.title}</h3>
                                <h5>Precio total ${totalItem(serv)}</h5>
                                <h5>Cantidad: {serv.count}</h5>
                                <button onClick={() => eliminarItem(serv.id)}><img src={trash} alt="cesto" /></button>
                            </li>
                        )}
                    </ul>
                    <div>
                    <h2>Total ${total}</h2>
                    <button className="botonesdetalle mx-3" onClick={limpiarCarrito}>Vaciar carrito</button>
                    <Link to={'/finalCart'}>
                    <button className="botonesdetalle mx-3" onClick={terminarCompra}>Terminar compra</button>
                    </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart 
