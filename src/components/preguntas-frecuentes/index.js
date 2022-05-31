import React, {createContext, useState, useContext} from "react";
import { Container, Title, Item, Inner, Header, Body } from "./styles/preguntasFrecuentes";
 
const ToggleContext = createContext();

export default function PreguntasFrecuentes({ children, ...restProps}) {
    return(
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

PreguntasFrecuentes.Title = function PreguntasFrecuentesTitle({ children, ...restProps}) {
    return <Title {... restProps}>{children}</Title>;
};

PreguntasFrecuentes.Item = function PreguntasFrecuentesItem({ children, ...restProps}) {
    const [toggleShow, setToggleShow] = useState(false);

    return (
        <ToggleContext.Provider value={{ toggleShow,setToggleShow}}>
            <Item {... restProps}>{children}</Item>
        </ToggleContext.Provider>
    );
};

PreguntasFrecuentes.Header = function PreguntasFrecuentesHeader({ children, ...restProps}) {
    const {toggleShow, setToggleShow} = useContext(ToggleContext);

    return (
        <Header onClick={()=> setToggleShow((!toggleShow))}
        {... restProps}>
            {children}
            {toggleShow ? (
                <img src="/images/icons/close-slim.png" alt="Close" />
            ) : (
                <img src="/images/icons/add.png" alt="Open" />
            )}
        </Header>
    );
};

PreguntasFrecuentes.Body = function PreguntasFrecuentesBody({ children, ...restProps}) {
    const { toggleShow } = useContext(ToggleContext);
    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};