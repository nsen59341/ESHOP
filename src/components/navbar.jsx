import { ShoppingCartCheckoutOutlined } from "@mui/icons-material"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import store from "../redux/store"
function NAVBAR() {
    let quantity = useSelector((store) => {
        return store.cartStore.cartQty;
    })
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/cart">
                <div className="cart_container">
                    <ShoppingCartCheckoutOutlined></ShoppingCartCheckoutOutlined>
                    <div className="cart_quantity">{quantity}</div>
                </div>
            </Link>
        </div>
    )
}

export default NAVBAR