import React from "react";
import {Container, Input, Button, Text, Breack } from "./styles/pruebameForm";

export default function PruebameForm({ children, ...restProps}) {
    return(
        <Container {...restProps}>
                { children }
        </Container>
    );
}

PruebameForm.Input = function PruebameFormInput({ ...restProps }) {
    return <Input {...restProps} />;
};

PruebameForm.Button = function PruebameFormButton({ children, ...restProps }) {
    return(
        <Button {...restProps}>
            { children } <img src="/images/icons/chevron-right.png" alt="Pruebalo" />
        </Button>
    );
};

PruebameForm.Text = function PruebameFormText({children, ...restProps }) {
    return <Text {...restProps}>{ children }</Text>;
};

PruebameForm.Breack = function PruebameFormBreack({ ...restProps }) {
    return <Breack />;
};