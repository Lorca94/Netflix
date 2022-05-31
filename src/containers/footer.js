 import React from "react";
import { Footer } from '../components';

export default function FooterContainer() {
    return(
        <Footer>
            <Footer.Title>¿Preguntas? Llama al 900 822 376</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">Preguntas Frecuentes</Footer.Link>
                    <Footer.Link href="#">Inversores</Footer.Link>
                    <Footer.Link href="#">Formas de ver</Footer.Link>
                    <Footer.Link href="#">Información Cooperativa</Footer.Link>
                    <Footer.Link href="#">Avisos legales</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Centro de ayuda</Footer.Link>
                    <Footer.Link href="#">Empleo</Footer.Link>
                    <Footer.Link href="#">Términos de uso</Footer.Link>
                    <Footer.Link href="#">Contáctanos</Footer.Link>
                    <Footer.Link href="#">Solo en Netflix</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Cuenta</Footer.Link>
                    <Footer.Link href="#">Canjear tarjetas de regalo</Footer.Link>
                    <Footer.Link href="#">Privacidad</Footer.Link>
                    <Footer.Link href="#">Prueba de velocidad</Footer.Link>
                </Footer.Column>
                
                <Footer.Column>
                    <Footer.Link href="#">Zona de prensa</Footer.Link>
                    <Footer.Link href="#">COmprar tarjetas de regalo</Footer.Link>
                    <Footer.Link href="#">Preferencias de cookies</Footer.Link>
                    <Footer.Link href="#">Garantía legal</Footer.Link>
                </Footer.Column>
            </Footer.Row>
        </Footer>
    );
} 