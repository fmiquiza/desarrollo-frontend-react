import { useSelector, useDispatch } from "react-redux";
import {useEffect} from "react";
import {setProducts} from "../../../redux/product/productActions";


import FilterableProductTable from '../_components/FilterableProductTable';
/*
import FilterableProductTable from "./FilterableProductTable";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
*/

const Home = () => {
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setProducts([
                { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
                { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
                { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
                { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
                { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
                { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
            ])
        )
    }, [dispatch]); //fixed variable reference

    return (
        <>
            <h5>{JSON.stringify(product.PRODUCTS)}</h5>
            <br/>
            <br/>
            <h3> -- Utilizando componentes  -- </h3>
            <h1>Fruit Products</h1>
            <FilterableProductTable products={product.PRODUCTS}/>
        </>


        /*<FilterableProductTable/>
        <ProductCategoryRow/>
        <ProductRow/>
        <ProductTable/>
        <SearchBar/> 
        <FilterableProductTable products={product.PRODUCTS} />
        */
    );
};

export default Home;