import { useEffect, useState } from "react";

import { api } from "../../sevices/api";
import { Header } from "../Header";
import { List } from "./page";
import { ListCards } from "../ListCards";
import { Modal } from "../dialog";

export const Page = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 
    const [search, setSearch] = useState('');
    const [modalState, setModalState] = useState('');
    const [newCartItem, setNewCartItem] = useState([]);


    useEffect(() => {
        setIsLoading(true);

        const getItems = async () =>{
            try {
                const response = await api.get("/products", {
                    params: {
                        name_like: search,
                   }
                })
                setItems(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        getItems();
    }, [search]);
    const handleForm = (inputSearch) => {
        setSearch(inputSearch);
    }


    return (
        <>
        <Modal isOpen={modalState} setModalState={setModalState} newCartItem={newCartItem} setNewCartItem={setNewCartItem}/>
        <Header callback={handleForm} setModalState={setModalState} newCartItem={newCartItem}/>
        <List>
            <div className="container">
            {items.map((item) =>
                <ListCards 
                setNewCartItem = {setNewCartItem}
                key={item.id}{...item}
                item={item}
                 />)}

            </div>
           
        </List>
        </>
    )
}