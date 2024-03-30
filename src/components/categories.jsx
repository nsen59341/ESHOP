import { usePaginationContext } from "../context/PaginationContext";

function Categories(props) {
    let {categories, setCurrCategory} = props;
    let {setPageNo} = usePaginationContext();
    return (
    <>
    <button onClick={() => {setCurrCategory("All Categories")}}>All Categories</button>
    {
        categories.map((category, idx) => {
            return <button key={idx} onClick={() => {
                setCurrCategory(category);
                setPageNo(1);

            }}>{category}</button>
        })
    }
    </>
    )
}

export default Categories;