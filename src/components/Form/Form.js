import React, { useState, useContext} from "react";
import { getFirestore } from "../../firebase";
import { collection, addDoc} from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Form.css";

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
        alert("Tu pedido ha sido registrado");
      })
      .catch((error) => {
        alert(error.phone);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setPhone("");
    setTotalCompra("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Hacer el pedido</h2>

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
        value={totalCarrito()}
        onChange={(e) => setTotalCompra(e.target.value)}
      ></input>

      <Link to="/">
           <input className="botonesdetalle m-2" type="button" value="Cancelar" onClick={() => limpiarCarrito()} />
      </Link>
      <button className="botonesdetalle m-2" type="submit">Hacer el pedido</button>
    </form>
  );
};

export default Form;































