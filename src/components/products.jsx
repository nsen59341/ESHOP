function PRODUCTS(props) {
    let {modifiedProdList} = props;
    return (
        modifiedProdList === null) ?  <h2>...Loading</h2> :
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

export default PRODUCTS