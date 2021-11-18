import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from "react";
//import ServicesCatalogue from "../../ServicesCatalogue.json";
import { getFirestore } from "../../firebase/index.js";
import { useParams } from 'react-router-dom';
//import {Item} from '../Item/Item';
import { collection, query, where, getDocs } from "firebase/firestore";

export const ItemListContainer = () => {
    const [servicios, setServicios] = useState([]);
    const { categoryId } = useParams();
  
    useEffect(() => {
      const db = getFirestore();
      let q = query(collection(db, "items"));
  
      if (!categoryId) {
        getDocs(q).then((snapshot) => {
          setServicios(snapshot.docs.map((doc) => doc.data()));
        });
      } else {
        const q = query(
          collection(db, "items"),
          where("category", "==", categoryId)
        );
        getDocs(q).then((snapshot) => {
          setServicios(snapshot.docs.map((doc) => doc.data()));
        });
      }
    }, [categoryId]);

  return (
    <div >
        <ul>
            <ItemList servicios={servicios} category={categoryId} key={servicios.id} /> 
            
        </ul>    
    </div>  
)
}


export default ItemListContainer;























/////////////////// SIN FIRESTORE OK /////////////////////////
/*
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

*/
/////////////////// SIN FIRESTORE OK /////////////////////////


////////////////////////////// SALE UN ERROR ////////////////////////////////////
/*const ItemListContainer = () => {

    const { serviciosId } = useParams();
    const { items, setItems } = useState(null);

    useEffect(() => {
        const db = getFirestore();
        const servItems = doc(db, 'items', serviciosId);
        getDoc(servItems).then((snapshot) => {
            if(snapshot.exists()){
                setItems(snapshot.data());
            }
        });
    }, [serviciosId]);

    return(
        <>
        {items ? <ItemList Item={items} key={items.id} /> : <p>'Un segundo por favor...'</p> } 
        </>
    )

 }


export default ItemListContainer;
*/
////////////////////////////// SALE UN ERROR ////////////////////////////////////