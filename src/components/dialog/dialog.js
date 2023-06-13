import { styled } from "styled-components";

export const CssModal = styled.span`
    h1{
        width:100%;
        height:54px;
        display: flex;
        align-items: center;
        padding-left: 20px;

        color:white;
        background: var(--color-primary);

        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
    }
    .modal{
        width: 375px;
        height: 411px;

        position:fixed;
        left: calc(50% - 375px/2 - 0.5px);
        top: calc(50% - 411px/2 - 0.5px);
        z-index:3;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        background: white;
        overflow:hidden;

        border-radius: 8px;
    }
    .backdrop{
        height: 100vh;
        width:100vw;

        background: black;
        opacity: .3;

        position:fixed;
        z-index:2;
        top:0px;
    }
    .ul{
        width:332px;
        height:190px;

        overflow: scroll;
        margin-left: 21px;
    }
    .info{
        width: 332px;
        height: 124px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        margin-left: 21px;
        padding-top: 10px;
        border-top: 2px solid var(--grey-100);
    }
    button{
        width: 332px;
        height: 60px;

        border-radius: 8px;

        font-weight: 600;
        font-size: 16px;
        line-height: 19px;

        color: var(--grey-300);
        background: var(--grey-0);
    }
    .X{
        width: 12px;
        height:12px;

        position: absolute;
        top:19px;
        right:15px;

        color: white;
        background: var(--color-primary);
    }
`

export const CssDialogCard = styled.li`
    width: 332.31px;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding-top: 10px;
        .item{
            width: 70px;
            height: 70px;
            background: var(--grey-100);

            border-radius: 5px;
        }
        .can{
            width: 17px;
            height: 17px;
        }
        div{
            display: flex;
            flex-direction: row;
            gap:10px;
        }
`