import Header from "./components/Header/Header";
import LeftSection from "./components/LeftSection";
import BottomSection from "./components/BottomSection";
import MainContent from "./components/MainContent";
import styled from 'styled-components';
import Form from './components/Form';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Container/index';

const Container = styled.div`
display: flex;
`

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
