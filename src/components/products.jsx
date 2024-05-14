import { AddBox, IndeterminateCheckBox } from "@mui/icons-material";
import cartSlice from "../redux/cartReduxSlice";
import { useDispatch, useSelector } from "react-redux";

const actions = cartSlice.actions;
function PRODUCTS(props) {
    let {modifiedProdList} = props;

    const {cartQty, cartproducts} = useSelector((store) => {
        return store.cartStore;
    });

    const dispatch = useDispatch();

    const handleDecrement = (prod) => {
        dispatch(actions.reduceQty(prod))
    }

    const handleIncrement = (prod) => {
        dispatch(actions.addQty(prod))
    }

    return (
        <>
            {modifiedProdList === null ?  <h2>...Loading</h2> :
                <>
                {modifiedProdList.map((product, idx) => {
                    return (
                        <div className='product' key={idx}>
                            <img src={product.image} alt="" className='product_image'></img>
                            <div className='product_meta'>
                                <p className="product_title">Title: {product.title}</p>
                                <p className="price">Price: ${product.price}</p>
                            </div>
                            <div className="add_to_cart_container">
                                <IndeterminateCheckBox onClick={() => {handleDecrement(product)}} />
                                <div className="currentCartCount">(<ProductQty id={product.id} cartproducts={cartproducts} />)</div>
                                <AddBox onClick={() => {handleIncrement(product)}} />
                            </div>
                        </div>

                    )
                }
                )}
                </>
            }
        </>
    )
}

function ProductQty(props){

    const {id, cartproducts} = props;
    let qty = 0;
    cartproducts.forEach(element => {
        if(id==element.id){
            qty = element.intQty;
        }
    });

    return <>{qty}</>

}


export default PRODUCTS