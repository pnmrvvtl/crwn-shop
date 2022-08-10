

import SHOP_DATA from '../shop-data.js';
import {createContext, useEffect, useState} from "react";
import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = {categoriesMap};

    // useEffect(() => {
    //     addCollectionAndDocument('categories', SHOP_DATA);
    // },[])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, [])

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}