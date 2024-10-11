import React from 'react';
import './App.css';
import styled from "styled-components";
import {CardBody} from "./CardBody";

function App() {
    return (
        <Box>
            <CardBody/>
            
            {/*<Card imgSrc={logo} title={"Headline"} aria-description={"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."}/>*/}
        </Box>
    );
}

const Box = styled.div`
    background-color: rgba(0, 4, 17, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

export default App;
