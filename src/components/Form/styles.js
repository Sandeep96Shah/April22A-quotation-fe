import styled from 'styled-components';

export const Container = styled.div`
position: relative;
height: 80vh;
top: 100px;
display: flex;
justify-content: center;
align-items: center;
`;

export const FormContainer = styled.div `
border: 2px solid grey;
border-radius: 20px;
padding: 20px;
width: 40%;
box-shadow: 0px 0px 10px 0px grey;
@media screen and (max-width: 550px){
    width: 70%;
}
`;

export const Header = styled.div`
font-size: 25px;
    text-align: center;
    border-bottom: 1px solid grey;
    padding-bottom: 5px;
`;

export const FormBody = styled.div`
margin-top: 10px;
display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Fields = styled.div`
display: flex;
    flex-direction: ${({btn}) => btn ? "row" : "column"};
    justify-content: ${({btn}) => btn ? "space-around" : ""};
    gap: 5px;
    input {
        outline: none;
        height: 25px;
    }
    label {
        font-size: 22px;
    }
    .active {
        background-color: blue;
    }
    input[type=submit] {
        color: white;
        padding: 3px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 28px;
        cursor: pointer;
    }
    .in-active {
        color: black !important;
    }
`;