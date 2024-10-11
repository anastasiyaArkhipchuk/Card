import React from 'react';
import './App.css';
import {CardBody} from "./CardBody";
import {Box} from "./styledApp/Card";
import cardsimage from "./CardsImage.png";

function App() {
    return (
        <Box>
            <CardBody
                image={cardsimage}
                title={"Headline"}
                description={"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."}
            />
        </Box>
    );
}



export default App;
