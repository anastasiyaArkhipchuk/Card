import styled from "styled-components";
import cardsimage from "./CardsImage.png";
import React from "react";

export const Card = styled.div`
    width: 300px;
    min-height: 350px;
    background-color: white;
    border-radius: 15px;
    padding: 10px 10px 22px
`
export const Image = styled.img`
    width: 100%;
    height: 170px;
    object-fit: cover;
    border-radius: 10px;
`
export const Content = styled.div`
    padding: 0 10px;
`
export const Title = styled.h1`
    font-weight: 700;
    font-size: 16px;
    color: #000;
    margin: 20px 0;
`
export const Text = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 1.6;
    color: #abb3ba;
    margin: 20px 0;
`
export const Buttons = styled.div`
    display: flex;
    gap: 12px;
`
export const Button = styled.button<{ btnType: "primary" | "secondary" }>`
    border-radius: 5px;
    width: 86px;
    height: 30px;
    background-color: ${props => props.btnType === "primary" ? "#4e71fe" : "transparent"};
    font-weight: 700;
    font-size: 10px;
    line-height: 2;
    color: ${props => props.btnType === "primary" ? "#fff " : "#4e71fe"};
    border: 2px solid #4e71fe;
    cursor: pointer;
    
    &:hover {
        background-color: ${props => props.btnType === "primary" ? "transparent" : "#4e71fe"};
        color: ${props => props.btnType === "primary" ? "#4e71fe" : "#fff"};
    }
`
export const CardBody = () => {
    return (
        <Card>
            <Image src={cardsimage}/>
            <Content>
                <Title>Headline</Title>
                <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>

                <Buttons>
                    <Button btnType="primary">See more</Button>
                    <Button btnType="secondary">Save</Button>
                </Buttons>
            </Content>
        </Card>
    )
}