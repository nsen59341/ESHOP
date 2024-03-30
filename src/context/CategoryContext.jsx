import React, { useContext } from "react";
import { useState } from "react";

const CategoryContext = React.createContext()

export default function CategoryProvider({children}){
    const [currCategory, setCurrCategory] = useState("All Categories")
    const catrgoryProps = {
        currCategory, setCurrCategory
    }
    return (
        <CategoryContext.Provider value={catrgoryProps}>
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategoryContext = () => {
    return useContext(CategoryContext)
}