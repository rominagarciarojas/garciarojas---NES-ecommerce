import React from 'react';
import {Link} from 'react-router-dom';

export const Item = ({item, category}) => {
    return (
       
        
            <div>
            <li  key={item.id}> 
                <div>
                    <h3> {item.title}</h3>
                    <img src={item.image} alt={item.title}/>
                    <p>  {item.description} </p>
                     <Link to={`/${category}/${item.id}`} item={item.id}>
                    <button className="botonesdetalle">Mira los detalles del servicio</button>
                    </Link>
                </div>
            </li>
            </div>
        
        
    )
}

export default Item;

