
import './ItemCount.css';
import {  useState } from 'react';
import { Link } from 'react-router-dom' 

export function ItemCount ({ stock, initial, onAdd}) {                

    const [count, setCount] = useState(initial)
    const [newBoton, setNewBoton] = useState (false)

    const onDecrease = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const onIncrease = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    
    const handleOnAdd = () => {
        onAdd (count)
       setCount (initial)
       setNewBoton (true)
    }

   
    return (
        <>
            <div>
                <div>
                    <span>
                        <button className="mx-2" onClick={onDecrease} > - </button>
                    </span>
                    <span>{count}</span>
                    <span>
                        <button className="mx-2" onClick={onIncrease}> + </button>
                    </span>
                </div>

                { newBoton ? 
                    <Link to="/Cart">
                        <button className="botonesdetalle m-3">Terminar compra</button>
                    </Link>
                    : 
                    <button className="botonesdetalle m-3" onClick={handleOnAdd}>Agregar al carrito</button>
                }

            </div>
        </>
    );
}

export default ItemCount;

