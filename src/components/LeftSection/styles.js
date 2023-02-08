import styled from 'styled-components';

export const Container = styled.div`
    width: 110px;
    height: 80vh;
    background-color: lightgray;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: fixed;
    top: 80px;
    div{
        border: 1px solid black;
        width: 60px;
        padding: 3px 8px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        border-radius: 5px;
    }
    @media screen and (max-width: 425px){
        display: none;
    }
`;