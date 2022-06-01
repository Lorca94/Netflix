import React from "react";
import HeaderContainer from "../containers/header";
import { PruebameForm, Feature } from "../components";
import FooterContainer from "../containers/footer";
import JumbotronContainer from "../containers/jumbotron";
import FaqsContainer from "../containers/faqs"; 

export default function Home() {
    return(
        <>
            <HeaderContainer>
                <Feature>
                        <Feature.Title>Todas las películas y series que desees, y mucho más.</Feature.Title>
                        <Feature.SubTitle>Disfruta donde quieras. Cancela cuando quieras.</Feature.SubTitle>
                    <PruebameForm>
                        <PruebameForm.Text>¿Quieres ver algo ya? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla.</PruebameForm.Text>
                        <PruebameForm.Breack />
                        <PruebameForm.Input placeholder="Correo electrónico" />
                        <PruebameForm.Button>Empezar</PruebameForm.Button>
                    </PruebameForm>
                </Feature>
            </HeaderContainer>
            
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}