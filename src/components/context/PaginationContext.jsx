import React from "react";
import { useState } from "react";
import { useContext } from "react";

const PaginationContext = React.createContext();

export default function PaginationProvider({children}) {

    const [pageSz, setPageSz] = useState(4);
    const [pageNo, setPageNo] = useState(1);

    const pageProp = {
        pageSz, setPageSz, pageNo, setPageNo
    }

    return (
        <PaginationContext.Provider value={pageProp}>{children}</PaginationContext.Provider>
    )
}


export const usePaginationContext = () => {
    return useContext(PaginationContext)
}