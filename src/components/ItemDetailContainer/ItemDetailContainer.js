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

















/*

export const ItemDetail = ({id, title, image, description, price, stock}) => {
  const [count, setCount] = useState(0);
  const [finalizar, setFinalizar] = useState(false);

  const finalizarCompra = () => {if (count > 0) setFinalizar(!finalizar)};
  
  const {agregarItem} = useContext(CartContext);

  const añadirItem = () => {

      agregarItem({
          id,
          title,
          price,
          image,
          count
      })
      finalizarCompra()
  }

  return (
      <div className='item-detail'>
          <img src={image} alt={title} />
          <div className='detail'>
              <h1>{title}</h1>
              <p>En stock: {stock}</p>
              <p>Precio: <b>${price} </b></p>
              <p><i>{description}</i></p>
              {!finalizar ? (
                  <div className='compra'>
                  <ItemCount stock={stock} initial={0} count={count} setCount={setCount} />
                  <button onClick={añadirItem}> Añadir al carrito</button>
                  </div>

              ) : (
                  <div className='compra'>
                      <Link to='/cart' >
                          <button onClick={finalizarCompra}> Ir al carrito</button>
                      </Link>
                      <button onClick={finalizarCompra}> Modificar</button>
                  </div>
              )
              }
          </div>
      </div>
  )
}

export default ItemDetail;


*/











/*


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
   const { itemId } = useParams();
   
   /*
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
*/
/*

useEffect(() => {
  const db = getFirestore();
  const item = doc(db, "items", itemId);
  getDoc(item).then((snapshot) => {
    if (snapshot.exists()) {
      setItem(snapshot.data());
    }
  });
}, [itemId]);
*/








/*
return (
    <>
        <div className="container m-auto p-3 text-center">
        <h2>Detalle del Servicio</h2>
            <div className="card-fluid text-center">
            {item ? (
                <ItemDetail {...setItem}
                    id={item.id}
                    title={item.title}
                    image={item.image}
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