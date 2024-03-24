import { useEffect, useState } from "react"
import basicOps from "./utility/basicOps";
import Categories from "./categories";
import PRODUCTS from "./products";
import { ArrowCircleDown, ArrowCircleLeftOutlined, ArrowCircleRightOutlined, ArrowCircleUp, KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material";

function HOME() {

    let [products, setProducts] = useState(null)
    let [categories, setCategories] = useState([])
    let [currCategory, setCurrCategory] = useState("All Categories")
    let [searchInput, setsearchInput] = useState('')
    let [sortProduct, setSortProduct] = useState(0)

    let [pageSz, setPageSz] = useState(4);
    let [pageNo, setPageNo] = useState(1);

    useEffect(() => {
        (async function() {
            let products_arr = await fetch(`https://fakestoreapi.com/products`);
            let products = await products_arr.json();
            setProducts(products);
        })();
    }, []);

    
    useEffect(() => {
        (async function() {
            const categories_arr = await fetch("https://fakestoreapi.com/products/categories");
            const categories = await categories_arr.json();
            setCategories(categories);
        })();
    }, []);

    let object = basicOps(products, searchInput, currCategory, sortProduct, pageNo, pageSz);

    // console.log('modifiedProdList', modifiedProdList);

    let totalPgs = object.totalPgs;
    let modifiedProdList = object.modifiedProdList != null ? object.modifiedProdList : [];

    return (
        <>
            <header className="nav_wrapper">
                <div className="search_sort_wrapper">
                    <label htmlFor="search_input">Search</label>
                    <input type="text" name="search_input" id="search_input" value={searchInput} onChange={(e) => setsearchInput(e.target.value)} />
                    <div className="icon_container">
                        <ArrowCircleDown onClick={() => setSortProduct(-1)} />
                        <ArrowCircleUp onClick={() => setSortProduct(1)} />
                    </div>
                </div>

                <div className="categories_wrapper">
                    <Categories categories={categories} setCurrCategory={setCurrCategory} />
                </div>
            </header>
            <main className="product_wrapper">
                <PRODUCTS modifiedProdList={modifiedProdList} />
            </main>
            <div className="pagination_container">
                <button onClick={() => {
                        if(pageNo==1){
                            return;
                        }
                        setPageNo((pageNo)=>pageNo-1)
                    }
                }>
                    <KeyboardArrowLeftOutlined />
                </button>
                <div className="pageNum">{pageNo}</div>
                <button onClick={() => {
                        if(pageNo==totalPgs){
                            return;
                        }
                        setPageNo((pageNo)=>pageNo+1)
                    }
                }>
                    <KeyboardArrowRightOutlined />
                </button>
            </div>
        </>
    )
}

export default HOME