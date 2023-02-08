import styled from "styled-components";

export const Container = styled.div`
    z-index: 1;
    height: 100vh;
    width: 100vw;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    .formBody{
        width: 50%;
        background-color: white;
        box-shadow: 0px 0px 5px 5px grey;
        padding: 10px;
        border-radius: 20px;
        position: relative;
    }
    h1 {
        text-align: center;
        border-bottom: 1px solid grey;
        padding-bottom: 10px;
    }
    form {
        display: flex;
        gap: 15px;
        flex-direction: column;
        padding: 10px 20px;
        position: relative;
    }
    input {
        width: 20%;
        padding: 5px 2px;
        cursor: pointer;
    }
    span {
        position: absolute;
        top: 17px;
        right: 15px;
        color: red;
        cursor: pointer;
    }
`;