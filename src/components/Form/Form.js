import React, { useState, useContext} from "react";
import { getFirestore } from "../../firebase";
import { collection, addDoc} from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Form.css";
import swal from 'sweetalert';



const Form = () => {

  const db = getFirestore()
  
  const { totalCarrito, limpiarCarrito } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [totalCompra, setTotalCompra] = useState("");
  
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    addDoc(collection(db, "orders"), {
        name: name,
        email: email,
        phone: phone,
        totalCompra: totalCarrito(),
      })
      .then(() => {
        setLoader(false);
        swal("¡Muchas gracias!", "Nos comunicaremos con usted a la brevedad", "success");
        limpiarCarrito(loader);   
      })
      
    setName("");
    setEmail("");
    setPhone("");
    setTotalCompra("");
  };

  return (
    <>
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="my-3">Hacer el pedido</h3>

      <label>Nombre y Apellido</label>
      <input
        placeholder="Completar con tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Completar con tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Teléfono</label>
      <input
        placeholder="Completar con tu teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      ></input>

      <label>Total</label>
      <input
        placeholder="Total"
        value={totalCarrito(totalCompra)}
        onChange={(e) => setTotalCompra(e.target.value)}
      ></input>

      <Link to="/">
           <input className="botonesdetalle m-2" type="button" value="Cancelar" onClick={() => limpiarCarrito()} />
      </Link>

        <button className="botonesdetalle" type="submit" disabled={!(name && email && phone)}>Hacer el pedido</button>
    </form>
    </>
  );
  
};


export default Form;




