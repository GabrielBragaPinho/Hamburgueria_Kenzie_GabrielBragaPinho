import { styled } from "styled-components";

export const CSSHeader = styled.header`
    height:152px;

    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;

    gap:0px;
    padding-bottom:25px;
    padding-top: 10px;
  
    background: var(--grey-0);
    
    .logo{
        height: 23px;
        width: 150px;
        margin-top:4px;
    }
    .cart{
        width:25px;
        height:25px;
        margin-right:12px;
    }
    .count{
        display:flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction:row-reverse;
    }
    p{
        height:23px;
        width:20px;

        font-weight: 800;
        font-size: 14px;
        line-height: 0px;

        font-family: var(--font-family);
        color:white;
        background: green;
        border-radius:7px;

        display:flex;
        justify-content:center;
        align-items:center;

        position:relative;
        left:38px;
        top:-13px;
    }
    > div:nth-child(1){
        width:355px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        padding-top:10px;
    }
    form{
        height:60px;
    }
    input{
        height:60px;
        width:355px;
        padding-left: 10px;

        font-family: var(--font-family);
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        background: white;

        border:2px solid var(--grey-300);
        border-radius:8px;
    }
    .search{
        width: 16px;
        height: 16px;
    }
    .searchDiv{
        width: 53px;
        height: 40px;

        display:flex;
        align-items: center;
        justify-content:center;

        border-radius: 8px;
        background: var(--color-primary);

        position:relative;
        left:290px;
        top:-49px;
    }
    @media (min-width: 710px){
        justify-content: space-between;
        padding-left: 10%;
        padding-right: 10%;
        height:80px;
    }
`
