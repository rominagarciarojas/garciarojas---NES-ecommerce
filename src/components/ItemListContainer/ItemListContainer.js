import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from "react";
import ServicesCatalogue from "../../ServicesCatalogue.json";


const ItemListContainer = () => {

    const [servicios, setServicios] = useState([]);

    const getData = (data) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data);
                } else {
                    reject("Sin datos");
                }
            }, 2000);
        });

    useEffect(() => {
        getData(ServicesCatalogue)
            .then((res) => setServicios(res)).catch((err) => console.log(err));

    }, []);

    return (
        <>
            <div className="ItemListContainer">
                <ItemList servicios={servicios} />    
           </div>
        </>
    );
}

export default ItemListContainer;
