import React from "react";
import inicioData from './fixtures/jumbo.json';
import Inicio from "./components/inicio"

export default function App() {
  return (
    <Inicio.Container>
      {
        inicioData.map((item) => (
          <Inicio key={item.id} direction={item.direction}>
            <Inicio.Title>{item.title}</Inicio.Title>
            <Inicio.SubTitle>{item.subTitle}</Inicio.SubTitle>
            <Inicio.Image src= {item.image} alt = {item.alt} />
          </Inicio>
        ))
      }
    </Inicio.Container>
  );
}
