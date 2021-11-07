import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './CategoryItem.css'

const CategoryItem = ({ title, stock, image, price, id, description }) => {
    return (
        <>
            <div className="container-fluid m-auto p-3">
                <div className="card w-75 text-center m-auto p-3">
                    <img src={image} className="imgCategory m-auto" alt="imagen" />
                    <h3>{title}</h3>
                    <p>{stock} servicios mensuales</p>
                <Link to={`/item/${id}`}>
                    <button className="botonesdetalle">Ver detalles del servicio</button>
                </Link>
                </div> 
            </div>
        </>
    );
}

export default CategoryItem;