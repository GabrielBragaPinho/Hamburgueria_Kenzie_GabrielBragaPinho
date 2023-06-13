import { styled } from "styled-components"

export const List = styled.ul`
padding-top: 2rem;
overflow: scroll;
    .container{
        width: fit-content;
        display: flex;
        overflow-x: scroll;
        gap: 1rem;
        padding:1rem;
        min-height: calc(100vh - 9rem);
    }
    @media (min-width: 710px){
        .container{
            flex-wrap: wrap;
        }
    }
`