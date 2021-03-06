import React from "react";
import inicioData from '../fixtures/jumbo.json';
import { Jumbotron } from "../components";

export default function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {
        inicioData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Image src= {item.image} alt = {item.alt} />
          </Jumbotron>
        ))
      }
    </Jumbotron.Container>
  );
}
