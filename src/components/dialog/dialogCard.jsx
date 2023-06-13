import Can from "../../assets/Can.svg"
import {CssDialogCard} from "./dialog.js"



export const DialogCard = ({item, removeFromCart})=>{
    return(
        <CssDialogCard>
            <div>
                <img className="item" src={item.img} alt="" />
                <h3>{item.name}</h3>
            </div>
           <img className="can" src={Can} alt="" onClick={()=> removeFromCart(item.id)}/>
        </CssDialogCard>
    )
}