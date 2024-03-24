function searchTerm(products,searchInput, delay=500) {
    let modifiedProdList = products;
    if(searchInput!=""){
        modifiedProdList = products.filter((product) => {
            let prod_title = product.title.toLowerCase();
            let search_input = searchInput.toLowerCase();
            if(search_input[0]=='*'){
                search_input = search_input.slice(1,search_input.length-1);
                return prod_title.includes(search_input); 
            }
            else{
                let title_arr = prod_title.split(' ');
                console.log('title_arr',title_arr);
                let return_val = false;
                title_arr.forEach((title_sngl) => {
                    console.log(title_sngl.startsWith(search_input));
                    if(title_sngl.startsWith(search_input)==true){
                        return_val = true;
                    }
                });
                return return_val;
            }
        });
    }
    return modifiedProdList;
}

function debounce(cb, delay=500) {
    let timeOutId = null;
    return function(...args){
        if(timeOutId){
            clearTimeout(timeOutId);
        }
        else{
            timeOutId = setTimeout(() => {
                cb(...args);
                timeOutId = null;
            }, delay);
        }
    }
}

function categorizedProduct(modifiedProdList, currCategory) {
    if(currCategory.localeCompare("All Categories")!=0){
        modifiedProdList = modifiedProdList.filter((product) => {
            return product.category==currCategory;
        });
    }
    return modifiedProdList;
}

function sortProductList(modifiedProdList, sortProduct) {
    if(sortProduct!=0) {
        if(sortProduct===-1){
            modifiedProdList = modifiedProdList.sort((a,b) =>  b.price-a.price)
        }
        else{
            modifiedProdList = modifiedProdList.sort((a,b) =>  a.price-b.price)
        }
    }
    return modifiedProdList;
}

function pagination(modifiedProdList, pageNo, pageSz){
    let totalPgs = Math.ceil(modifiedProdList.length/pageSz);
    let startidx = (pageNo-1)*pageSz;
    let endidx = startidx+pageSz-1;
    modifiedProdList = modifiedProdList.slice(startidx, endidx+1);
    return {modifiedProdList, totalPgs}
}


function basicOps(products, searchInput, currCategory, sortProduct, pageNo, pageSz){
    if(products==null){
        return []
    }

    // Function for Searching Products
    let modifiedProdList = searchTerm(products,searchInput);

    // Function to filter out the products
    modifiedProdList = categorizedProduct(modifiedProdList, currCategory);

    // Function to Sort products
    modifiedProdList = sortProductList(modifiedProdList, sortProduct);
    
    return pagination(modifiedProdList, pageNo, pageSz);
}

export default basicOps;