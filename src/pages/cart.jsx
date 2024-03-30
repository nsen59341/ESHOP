import { useSelector } from "react-redux";
import PRODUCTS from "../components/products";

function Cart(){

    const {cartQty, cartproducts} = useSelector((store) => {
        return store.cartStore;
    });

    return (
        <div>
            <PRODUCTS modifiedProdList={cartproducts} />
        </div>
    )
}

export default Cart