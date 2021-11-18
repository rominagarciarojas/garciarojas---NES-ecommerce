
import { Link } from 'react-router-dom';
import './Item.css';


export const Item = ({ servicios }) => {


    return (
          
        <div className="contenerdorCard">
                
        <img src={servicios.image} className="text-center imagePoint " alt="imagen" />
        
            <h5 className="card-title">{servicios.title}</h5> 
            <p className="textoStock text-center">Máximo {servicios.stock} servicios mensuales</p>
                <Link to={`/item/${servicios.id}`}>
            <button className="botonesdetalle">Mira los detalles</button>
        </Link>
        
    </div>
  

);
}

export default Item;


