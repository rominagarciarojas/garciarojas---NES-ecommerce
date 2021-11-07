import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ title, description, stock, image, price }) => {

    return (
        <>

            <div className="w-75 m-auto p-3 m-3 card text-center">
                    <img src={image} alt={image} className="card-img-top ImagenCard text-center m-auto" alt="imagenDetalle" />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="price">${price}</p>
                    <p>{description}</p>
                     
                     <ItemCount stock={stock} initial={1} />
                    
                    <button className="botonesdetalle m-3" >Agregar al carrito</button>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;