import { useContext } from "react";
import React from "react"

const contextWrap = React.createContext();

function Context(){
    return (
        <contextWrap.Provider value="Be Safe" >
        <GrantParent />
        </contextWrap.Provider>
    )
}

function GrantParent(){
    return <>
        <div>
            <h2>GrantParent</h2>
            <div>&</div>
            <Parent />
        </div>
    </>
}

function Parent(){
    return <>
        <div>
            <h2>Parent</h2>
            <div>&</div>
            <Children />
        </div>
    </>
}

function Children(){
    const msg = useContext(contextWrap);
    return <>
        <div>
            <h2>Children</h2>
            <div>&</div>
            <div>{msg}</div>
        </div>
    </>
}

export default Context