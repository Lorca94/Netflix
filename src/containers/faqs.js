import React from 'react'
import { PreguntasFrecuentes } from '../components';
import PruebameForm from '../components/pruebame-form';
import faqsData from '../fixtures/faqs.json';

export default function FaqsContainer () {
  return (
    <PreguntasFrecuentes>
      <PreguntasFrecuentes.Title>Preguntas Frecuentes</PreguntasFrecuentes.Title>
      {faqsData.map (item =>
        <PreguntasFrecuentes.Item key={item.id}>
          <PreguntasFrecuentes.Header>{item.header}</PreguntasFrecuentes.Header>
          <PreguntasFrecuentes.Body>{item.body}</PreguntasFrecuentes.Body>
        </PreguntasFrecuentes.Item>  
      )}
      <PruebameForm>
        <PruebameForm.Text>¿Quieres ver algo ya? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla.</PruebameForm.Text>
        <PruebameForm.Input placeholder="Correo electrónico" />
        <PruebameForm.Button>Empezar</PruebameForm.Button>
      </PruebameForm>
    </PreguntasFrecuentes>
  );
}

