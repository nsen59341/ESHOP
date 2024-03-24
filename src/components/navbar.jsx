import { Link } from "react-router-dom"
function NAVBAR() {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/cart">Cart</Link>
        </div>
    )
}

export default NAVBAR