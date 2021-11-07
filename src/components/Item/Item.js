import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './Item.css';


const Item = ({ servicios }) => {


    return (
        <>  
            <div className="card-group w-75 m-auto p-3 m-3 contenerdorCard">
                <div className="card">
                    <img src={servicios.image} className="card-img-top text-center imagePoint mt-3" alt="imagen" />
                    <div className="card-body">
                        <h5 className="card-title">{servicios.title}</h5> 
                        <p className="textoStock">Máximo {servicios.stock} servicios mensuales</p>
                            <Link to={`/item/${servicios.id}`}>
                        <button className="botonesdetalle">Mira los detalles</button>
                    </Link>
                    </div>
                </div>
            </div>   
        </>
    );
}

export default Item;


