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



































/*import React, { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "../../firebase";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Form.css";

const Form = () => {

const db = getFirestore()

  const { items, totalCarrito, limpiarCarrito } = useContext(CartContext);
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [idCompra, setIdCompra] = useState("");

  const onChangeName = (e) => {
    setInputName(e.target.value);
  };
  const onChangePhone = (e) => {
    setInputPhone(e.target.value);
  };
  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const confirmarCompra = (e) => {
    e.preventDefault();
    const guardar = async () => {
      const docSave = await addDoc(collection(db, "ordenes"), {
        name: inputName,
        phone: inputPhone,
        email: inputEmail,
        items: [...items],
        total: totalCarrito(),
      });

      setIdCompra(docSave.id);
    };
    guardar();
  };

  const terminarOperacion = () => {
    let compra = true;
    if (inputName === "" || inputPhone === "" || inputEmail === "") {
      compra = false;
    }
    return compra;
  };


  return (
    <div className="contenedorForm">
      {idCompra ? (
        <div >
          <div>
            <p>Realizaste la compra</p>
            <p> N° Compra: <span>{idCompra}</span></p>
          </div>

          <Link to="/">
            <button  onClick={() => limpiarCarrito()}> Volver </button>
          </Link>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            confirmarCompra(e);
            limpiarCarrito();
          }}
        >
          <div >
            <div>
              <p className="textInput m-0 text-center">Nombre y Apellido</p>
              <input type="text" name="name" onChange={onChangeName} />
            </div>

            <div>
              <p className="textInput m-0 text-center">Celular</p>
              <input type="number" name="phone" onChange={onChangePhone} />
            </div>

            <div>
              <p className="textInput m-0 text-center">Email</p>
              <input type="email" name="email" onChange={onChangeEmail} />
            </div>

            <div >
              <Link to="/">
                <input className="botonesdetalle m-2" type="button" value="Cancelar" onClick={() => limpiarCarrito()} />
              </Link>
              <input class={ terminarOperacion() ? "active" : "desabilitar" } type="submit" className="botonesdetalle m-2"  value="Finalizar Compra" />
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;

*/















/*const BuyerForm = ({setBuyer, buyer}) => {

    const handleBuyerChange = (e) => {
setBuyer({...buyer, [e.value.name]:e.target.value })

    }

    return(
        <div>
            <input type='text' name={name} onChange={handleBuyerChange} />

        </div>
    );
};

export default BuyerForm;
*/