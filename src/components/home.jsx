import { useEffect, useState } from "react"
import basicOps from "./utility/basicOps";

function HOME() {

    let [products, setProducts] = useState(null)
    let [searchInput, setsearchInput] = useState('')

    useEffect(() => {
        (async function() {
            let products_json = await fetch(`https://fakestoreapi.com/products`);
            let products = await products_json.json();
            setProducts(products);
        })();
    });

    let modifiedProdList = basicOps(products, searchInput);

    return (
        <>
            <header className="nav_wrapper">
                <div className="search_sort_wrapper">
                    <label htmlFor="search_input">Search</label>
                    <input type="text" name="search_input" id="search_input" value={searchInput} onChange={(e) => setsearchInput(e.target.value)} />
                </div>
            </header>
            <main className="product_wrapper">
                {
                (modifiedProdList === null) ?  <h2>...Loading</h2> :
                <>
                    {modifiedProdList.map((product, idx) => {
                        return (
                            <div className='product' key={idx}>
                                <img src={product.image} alt="" className='product_image'></img>
                                <div className='product_meta'>
                                    <p className="product_title">Title: {product.title}</p>
                                    <p className="price">Price: {product.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </>
                }
            </main>
        </>
    )
}

export default HOME