import styled from 'styled-components';

export const Container = styled.div`
width: 85vw;
display: flex;
justify-content: center;
padding-top: 40px;
flex-direction: column;
align-items: center;
gap: 20px;
padding-left: 80px;
    padding-top: 100px;
.quotation{
    width: 70%;
    border: 1px solid grey;
    height: max-content;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 0px grey;
    line-height: 24px;
    color: #706969;
}
.by {
    float: right;
    color: #464141;
}

@media screen and (max-width: 425px){
    width: 100%;
    padding-left: 0px;
    padding-bottom: 60px;
    .quotation{
        width: 80%;
    }
}
`;