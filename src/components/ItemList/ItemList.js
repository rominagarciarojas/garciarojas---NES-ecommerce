import './ItemList.css'
import Item from '../Item/Item';

const ItemList = ({ servicios }) => {


    return (
        <>

            <div className="container m-0 p-0 text-center">
                {servicios.length
                    ? servicios.map((servicios) => (
                        <Item servicios={servicios} key={servicios.id} />
                    ))
                    : 'Cargando servicios...'}
            </div>
        </>
    );
}

export default ItemList;