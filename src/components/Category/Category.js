import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ServicesCatalogue from "../../ServicesCatalogue.json";
import CategoryItem from "../CategoryItem/CategoryItem";
import './Category.css'

const Category = () => {
    const { categoryId } = useParams();
    const [categoryItem, setCategoryItem] = useState(null);

    const getItem = (data) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data);
                } else {
                    reject('No se encontró nada');
                }
            }, 2000);
        });

    useEffect(() => {
        getItem(ServicesCatalogue)
            .then((res) => {
                setCategoryItem(res.filter((details) => details.category === categoryId));
            })
            .catch((err) => console.log(err));
    }, [categoryId]);

    console.log(categoryItem)
    
    return (
        <>
        <div className="container-fluid ">
            <h2>Servicio de Control de {categoryId}</h2>
            <div className="card cardCategory text-center">
                {categoryItem
                    ? categoryItem.map((item) => (

                        <CategoryItem
                            servicios={item}
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            stock={item.stock} />

                    ))
                    : 'Cargando servicios...'}
            </div>
            </div>
        </>
    );
}

export default Category;
