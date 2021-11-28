import logo from '../Thanks/logo.png';
import './Thanks.css';

export const Thanks = () => {

    return (
        <div className="contenedorThanks">
            <h3 className="text-center">¡Gracias por su compra!</h3>
            <h6 className="text-center ">Nos comunicaremos con usted a la brevedad</h6>
            <div className="logoContenedorThanks">
                <img className="logoThanks" src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default Thanks;