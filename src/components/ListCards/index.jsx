import { useState } from "react"
import { Card } from "./ListCards";

export const ListCards = ({item, setNewCartItem}) => {

    const addItemToCart=()=>{
        const newItem = {item};
        setNewCartItem ((newCartItem)=> [...newCartItem, item]);
    }

    return(

        <Card>
            <img src={item.img} alt="product image" />
            <div id={item.id}>
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <p className="price">R$ {item.price},00</p>
                <button onClick={() => addItemToCart()}>Adicionar</button>
            </div>
        </Card>
    )
}