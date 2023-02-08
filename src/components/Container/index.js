import React, {useEffect} from "react";
import LeftSection from "../LeftSection/index";
import BottomSection from "../BottomSection/index";
import MainContent from "../MainContent/index";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
display: flex;
`

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            navigate('/');
        }
    }, [])
    return (
        <>
            <Container>
                <LeftSection />
                <MainContent />
            </Container>
            <BottomSection />
        </>
    )
}

export default Home;