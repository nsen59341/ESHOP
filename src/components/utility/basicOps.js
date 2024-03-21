function searchTerm(products,searchInput) {
    let modifiedProdList = products;
    if(searchInput!=""){
        modifiedProdList = products.filter((product) => {
            const prod_title = product.title.toLowerCase();
            const search_input = searchInput.toLowerCase();
            return prod_title.includes(search_input); 
        });
    }
    return modifiedProdList;
}

function basicOps(products, searchInput){
    if(products==null){
        return []
    }

    // Function for Searching Products
    let modifiedProdList = searchTerm(products,searchInput);
    
    return modifiedProdList;
}

export default basicOps;