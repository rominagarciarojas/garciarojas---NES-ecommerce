import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore } from "../../firebase/index";
import { doc, getDoc   } from "@firebase/firestore";
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react";

export const ItemDetailContainer = () => {
  const {itemId} = useParams();
  const [loading, setLoading] = useState(true);
  const [displayItem, setDisplayItem] = useState();
  const spinnerStyle = css`
        display: block;
        margin: 20vh auto;
        border-color: blue;
    `;

  useEffect(() => {
      const db = getFirestore();
      const item = doc(db, "items", itemId);
      getDoc(item).then((snapshot) => {
          if (snapshot.exists()) {
            setDisplayItem(snapshot.data());
          } 
          }).finally(() => {
            setLoading(false)
        })
      }, [itemId]);

  return (
      <div>
          {!loading ? 
          displayItem && <ItemDetail {...displayItem} />
          :
          <BounceLoader css={spinnerStyle} size={80} color={"#F4623A"} loading={loading} speedMultiplier={1} />
          }
      </div>
  )
}


export default ItemDetailContainer;


