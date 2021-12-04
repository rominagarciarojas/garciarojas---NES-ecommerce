import './ItemListContainer.css';
import { useEffect, useState } from "react";
import { getFirestore } from "../../firebase/index.js";
import { useParams } from 'react-router-dom';
import {Item} from '../Item/Item';
import { collection, query, where, getDocs } from "firebase/firestore";
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react";

export const ItemListContainer = () => {
    
    const [itemsDisplay, setItemsDisplay] = useState([]);
    const [loading, setLoading] = useState(true);
    const { catId } = useParams();
    const spinnerStyle = css`
        display: block;
        margin: 20vh auto;
        border-color: blue;
    `;
  
    useEffect(() => {
      const db = getFirestore();
      let q = query(collection(db, "items"));
  
      if (!catId) {
        getDocs(q).then((snapshot) => {
          setItemsDisplay(snapshot.docs.map((doc) => doc.data()));
        });
      } else {
        const q = query(
          collection(db, "items"),
          where("category", "==", catId)
        );
        getDocs(q).then((snapshot) => {
          setItemsDisplay(snapshot.docs.map((doc) => doc.data()));
        }).finally(() => {
            setLoading(false)
        });
      }
    }, [catId]);

  return (
    
        <div className="items">
        <ul >
        {!loading ? 
                itemsDisplay.map((item) => <Item  item={item} category={catId} key={item.id} /> )
                :
                <BounceLoader css={spinnerStyle} size={80} color={"#F4623A"} loading={loading} speedMultiplier={1}  />
                }
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