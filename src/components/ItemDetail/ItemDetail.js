import {useContext, useState} from 'react'
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({ title, description, stock, image, price, id }) => {

    
    const [count, setCount] = useState(1)
    const [terminar, setTerminar] = useState(false);

    const terminarCompra = () => {if (count > 1) setTerminar(!terminar)};
    
    const {agregarItem} = useContext(CartContext);

    const onAdd = () => {

        agregarItem({
            id,
            title,
            price,
            image,
            count
        })
        terminarCompra()
    }

    return (
        <div>
        <img className="ImagenCard" src={image} alt={title} />
        <div >
            <h2>{title}</h2>
            <p>En stock: {stock}</p>
            <h3>Precio: <b>${price} </b></h3>
            <p><i>{description}</i></p>
            {!terminar ? (
                <div>
                <ItemCount className="botonesdetalle" stock={stock} initial={1} onAdd={onAdd}/>
                </div>

            ) : (
                <div >
                    <Link to='/Cart' >
                        <button className="botonesdetalle m-3" onClick={terminarCompra}>Ir al carrito</button>
                    </Link>
                    <button className="botonesdetalle m-3" onClick={terminarCompra}>Modificar</button>
                </div>
            )
            }
        </div>
    </div>
)
}

export default ItemDetail;  

