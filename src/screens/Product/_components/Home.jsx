import { useSelector, useDispatch } from "react-redux";
import {useEffect} from "react";
import {setProducts} from "../../../redux/product/productActions";

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
    }, [dispatch]);

    return (
        <>
            <h5>{JSON.stringify(product.PRODUCTS)}</h5>
        </>
    );
};

export default Home;