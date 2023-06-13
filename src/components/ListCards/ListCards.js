import { styled } from "styled-components";

export const Card = styled.li`
    width: 300px;
    height:346px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    border:2px solid var(--grey-100);
    border-radius:5px;
    background: var(--grey-0);
    img{
        width:177px;
        height: 177px;
    }
    div{
        width:296px;
        height:196px;

        display: flex;
        flex-direction: column;
        background: white;
        justify-content:space-between;
        padding:1rem;
    }
    button{
        width: 106px;
        height: 40px;
        color:white;
        border-radius: 8px;
        background:var(--color-primary)
    }
   .price{  
        color:var(--color-primary);
        font-weight: 600;
   }
`