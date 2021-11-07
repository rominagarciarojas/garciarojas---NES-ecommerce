
import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({ stock }) => {

    const [count, setCount] = useState(1)

    const onDecrease = () => {
        if (count >= 1) {
            setCount(count - 1)
        }
    }

    const onIncrease = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <>
            <div className="counterCard">
                <div>
                    <span>
                        <button className="mx-2" onClick={onDecrease} > - </button>
                    </span>
                    <span>{count}</span>
                    <span>
                        <button className="mx-2" onClick={onIncrease}>+</button>
                    </span>
                </div>
            </div>

        </>
    );
}

export default ItemCount;

