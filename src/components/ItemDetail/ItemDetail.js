import {useState} from 'react'
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ title, description, stock, image, price }) => {

    
    const [count, setCount] = useState(1)

    const onAdd = (total) => {
        setCount(total)
    }
    console.log(count);


    return (
        <>
            <div className="w-75 m-auto p-3 m-3 card text-center">
                    <img src={image} alt="imagen" className="card-img-top ImagenCard text-center m-auto" alt="imagenDetalle" />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="price">${price}</p>
                    <p>{description}</p>
                     
                     <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                    
                </div>
            </div>
        </>
    );
}

export default ItemDetail;