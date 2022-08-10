import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {CategoriesContext} from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import './category.styles.scss';


const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category])


    return (
        <>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {
                    products &&
                    products.map((product) => (<ProductCard key={product.id} product={product}/>))
                }
            </div>
        </>
    );
};

export default Category;