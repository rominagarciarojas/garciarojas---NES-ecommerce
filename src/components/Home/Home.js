import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './Home.css';


export const Home = () => {
    return (
        <>
        <section className="masthead home text-center">
            <div className="container cajaTitulos m-3">
                <h1 className="text-center">Higiene y Seguridad en el Trabajo</h1>
                <h3 className="text-center">Lic. Nestor E. Sosa</h3>
            </div>
            <div className="text-center" >
            <ItemListContainer />
            </div>
        </section>

        </>
    );
}

export default Home;