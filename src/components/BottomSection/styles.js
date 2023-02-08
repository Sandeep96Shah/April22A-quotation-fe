import styled from 'styled-components';

export const Container = styled.div`
    height: 50px;
    background-color: lightgray;
    display: none;
    div{
        border: 1px solid black;
        height: max-content;
        width: 60px;
        padding: 3px 8px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        border-radius: 5px;
    }
    @media screen and (max-width: 425px){
        position: fixed;
        width: 100%;
        bottom: 0px;
        display: flex;
        gap: 20px;
        justify-content: space-evenly;
        align-items: center;
    }
`;