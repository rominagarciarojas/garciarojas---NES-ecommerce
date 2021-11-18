import { useEffect, useState } from "react";
import { useParams } from 'react-router';
//import ServicesCatalogue from "../../ServicesCatalogue.json";
import ItemDetail from "../ItemDetail/ItemDetail";
//import { Link } from "react-router-dom";
import { getFirestore } from "../../firebase/index";
import { doc, getDoc } from "@firebase/firestore";


export function ItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState();
  
    const { itemId } = useParams();
  
    useEffect(() => {
      const db = getFirestore();
      const item = doc(db, "items", itemId);
      getDoc(item).then((snapshot) => {
        if (snapshot.exists()) {
          setItemDetail(snapshot.data());
        }
      });
    }, [itemId]);
  
    return (
      <div>
        {itemDetail ? (
          <ItemDetail item={itemDetail} />
        ) : (
          <div>
            <h2>sdnflsdngldkngld</h2>
          </div>
        )}
      </div>
    );
  }


  export default ItemDetailContainer;




///////////////// hasta aca ok ///////////////////////
/*
const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
   const { itemId } = useParams();

    const getItem = (data) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data);
                } else {
                    reject('Sin datos');
                }
            }, 2000);
        });

useEffect(() => {
      getItem(ServicesCatalogue)
           .then((res) => {
              setItem(res.find((details) => details.id === itemId));
         })

           .catch((err) => console.log(err));
  }, [itemId]);

return (
    <>
        <div className="container m-auto p-3 text-center">
        <h2>Detalle del Servicio</h2>
            <div className="card-fluid text-center">
            {item ? (
                <ItemDetail
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    name={item.title}
                    description={item.description}
                    price={item.price}
                    stock={item.stock}
                />
            ) : (
              "Cargando servicios..."
            )}
    </div>
        <div className="container-fluid text-center">    
            <Link  to="/">
                <button className="m-2 text-center">Volver</button>
          </Link>
        </div>
    </div>
    </>
);
}


export default ItemDetailContainer;

*/
