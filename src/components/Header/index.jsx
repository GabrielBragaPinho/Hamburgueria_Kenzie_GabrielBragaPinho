import cart from "../../assets/Cart.svg"
import search from "../../assets/Search Icon.png"
import logo from "../../assets/Burger Kenzie Logo.png"

import { useState } from "react"
import { CSSHeader } from "./header"

export const Header = ({ callback, setModalState, newCartItem}) => {
    const [inputSearch, setInputSearch] = useState("");

    
    const handleSubmit = (event)=>{
        event.preventDefault();
        callback( inputSearch );
    }

    return(
        <CSSHeader>
            <div>
                <img className="logo" src={logo} alt="Logo Burger Kenzie" />
                <span className="count">
                    <img className="cart" src={cart} alt="cart icon" onClick={()=> setModalState(true)}/>
                    <p>{newCartItem.length}</p>
                </span>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Digitar Pesquisa" 
                onChange={(event)=> setInputSearch(event.target.value)}
                />
                <div className="searchDiv" onClick={handleSubmit}>
                    <img className="search" src={search} alt="search icon" />
                </div>
            </form>
        </CSSHeader>
    )
}
