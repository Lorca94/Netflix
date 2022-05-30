import React from "react";
import { Pane, Inner, Container, Title, SubTitle, Image, Item } from './styles/inicio'

export default function Inicio({children, direction = 'row', ...restProps }) {
    return(
        <Item {...restProps}>
            <Inner direction={direction}>
                { children }
            </Inner>
        </Item>
    );
}

Inicio.Pane = function InicioPane({children, ...restProps}) {
    return <Pane { ...restProps}>{ children }</Pane>
}

Inicio.Container = function InicioContainer({children, ...restProps}) {
    return <Container { ...restProps}>{ children }</Container>
}

Inicio.Title = function InicioTitle({children, ...restProps}) {
    return <Title { ...restProps}>{ children }</Title>
}


Inicio.SubTitle = function InicioSubTitle({children, ...restProps}) {
    return <SubTitle { ...restProps}>{ children }</SubTitle>
}


Inicio.Image = function InicioImage({...restProps}) {
    return <Image { ...restProps} />
}