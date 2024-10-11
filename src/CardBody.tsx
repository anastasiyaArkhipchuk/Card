import React from "react";
import {Button, Buttons, Card, Content, Image, Text, Title} from "./styledApp/Card";

type CardBodyProps = {
    title: string;
    description: string;
    image: string;
}

export const CardBody = (props: CardBodyProps) => {
    return (
        <Card>
            <Image src={props.image}/>
            <Content>
                <Title>{props.title}</Title>
                <Text>{props.description}</Text>

                <Buttons>
                    <Button btnType="primary">See more</Button>
                    <Button btnType="secondary">Save</Button>
                </Buttons>
            </Content>
        </Card>
    )
}