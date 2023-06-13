import React from "react"
import { DialogCard } from "./dialogCard"
import { CssModal } from "./dialog"
import { v4 as uuidv4} from 'uuid'


export const Modal = ({isOpen, setModalState, newCartItem, setNewCartItem})=>{
    const removeFromCart = (itemId) => {setNewCartItem((newCartItem)=> newCartItem.filter (item=>item.id!==itemId))}
    
    const totalValue = newCartItem.reduce((accValue, value)=>{
        return accValue + value.price;
    }, 0)


        if(isOpen) {
        return <CssModal>
                    <div className="modal">
                        <h1>Carrinho de compras</h1>
                        <button className="X" onClick={()=>setModalState(false)}>X</button>
                        <ul className="ul">
                            {newCartItem.map((item)=><DialogCard key={uuidv4()}
                            item={item} removeFromCart={removeFromCart}/>)}
                        </ul>
                        <div className="info">
                            <h4>Total</h4>
                            <p>R$ {totalValue},00</p>
                            <button onClick={()=> setNewCartItem([])}>Remover todos</button>
                        </div>
                    </div>
                    <div className="backdrop" onClick={()=>setModalState(false)}>wwwww</div>

                </CssModal>
    }
    return null
}