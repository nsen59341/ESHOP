function Categories(props) {
    let {categories, setCurrCategory} = props;
    return (
    <>
    <button onClick={() => {setCurrCategory("All Categories")}}>All Categories</button>
    {
        categories.map((category, idx) => {
            return <button key={idx} onClick={() => {setCurrCategory(category)}}>{category}</button>
        })
    }
    </>
    )
}

export default Categories;