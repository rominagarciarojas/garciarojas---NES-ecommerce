import './Navbar.css';
import { Link } from "react-router-dom";
import CardWidget from './CardWidget/CardWidget';

export const Navbar = () => {

    const categories = [
        { url: "Iluminacion", label: "Iluminación" },
        { url: "Extintores", label: "Extintores" },
        { url: "EPP", label: "EPP" }
    ];

    return (
        <>
            <nav className="navbar navbar-expand-lg fs-6">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-light logo" to="/">
                        <li className="nav-item">NES Consultora</li>
                    </Link>
                </div>
                 <ul class="navbar-nav justify-content-center">
                    {categories.map(({ url, label }) => (
                    <Link className="nav-link active" key={url} to={`/category/${url}`}>
                            <li className="nav-item">{label}</li>
                    </Link>
                    ))}
                </ul>
                <div>
                    <CardWidget />        
                </div> 
            </nav>
        </>
    )
}

export default Navbar
