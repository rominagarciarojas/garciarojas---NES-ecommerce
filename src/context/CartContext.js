import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const itemExistente = (item) => 
        carrito.filter(serv => serv.id === item.id).length === 0;
    

    const agregarItem = (item) => {
        if (itemExistente(item)){
            setCarrito([...carrito, item])
        } else{
            alert('Ya tienes este servicio en tu carrito');
        }
    }

    const eliminarItem = (item) =>{
        setCarrito(carrito.filter(serv => serv.id !== item))
    }

    const totalCarrito = () => {
        return carrito.reduce( (accion, serv) => accion + (serv.price * serv.count), 0)
    }

    const totalItem = (item) => {
        return item.price * item.count
    }

    const cantidadCarrito = () => {
        return carrito.reduce( (accion, serv) => accion + serv.count, 0)
    }

    const limpiarCarrito = () => {
        setCarrito([]);
    }
    
    
    return (
        <CartContext.Provider value={{carrito, agregarItem, totalCarrito, totalItem, cantidadCarrito, eliminarItem, limpiarCarrito}}>
            {children}
        </CartContext.Provider> 
    )
}


export default CartProvider;

