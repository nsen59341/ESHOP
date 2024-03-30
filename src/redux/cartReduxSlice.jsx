import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart Slice",
    initialState: {
        cartQty:0,
        cartproducts: []
    },
    reducers: {
        reduceQty: (state, obj) => {
            let prodToRemoved = obj.payload;

            const rqrdProdutsIdx = state.cartproducts.findIndex((cp)=>{
                return prodToRemoved.id == cp.id
            });

            if(rqrdProdutsIdx!=-1){
                state.cartQty--;
                if(state.cartproducts[rqrdProdutsIdx].intQty==1){
                    state.cartproducts.splice(rqrdProdutsIdx,1);
                }
                else{
                    state.cartproducts[rqrdProdutsIdx].intQty--;
                }
            }
        },
        addQty: (state, obj) => {
            let prodToAdd = obj.payload;
            const rqrdProdut = state.cartproducts.find((cp)=>{
                return prodToAdd.id == cp.id
            });
            if(rqrdProdut==undefined){
                prodToAdd.intQty = 1;
                state.cartproducts.push(prodToAdd);
            }
            else{
                rqrdProdut.intQty += 1;
            }
            state.cartQty++;
        }
    }

});

export default cartSlice;