// @ts-ignore
import React from 'react';
import {Container, Row, Col, Button, Alert, Spinner, Card} from "react-bootstrap";
import useSpeechToText, { ResultType, PictogramasList } from './Hooks';

// @ts-ignore
import micIcon from "./mic.svg";

import './App.css';

export default function App() {
  const {
    error,
    interimResult,
    isRecording,
    isLoading,
    pictogramas,
    sentence,
    results,
    startSpeechToText,
    stopSpeechToText
  } = useSpeechToText({
    continuous: true,
    crossBrowser: true,
    googleApiKey: process.env.REACT_APP_API_KEY,
    speechRecognitionProperties: { interimResults: true },
    useLegacyResults: false
  });

  if (error) {
    return (
      <div
        style={{
          maxWidth: '600px',
          margin: '100px auto',
          textAlign: 'center'
        }}
      >
        <p>
          {error}
          <span style={{ fontSize: '3rem' }}>🤷‍</span>
        </p>
      </div>
    );
  }

  return (
      <Container>
          <Row>
             <Col>&nbsp;</Col>
          </Row>
          <Row>
             <Col md={{ span: 8, offset: 2 }} className="d-grid gap-2">
                 <Button variant="primary" size="lg" onClick={isRecording ? stopSpeechToText : startSpeechToText}>
                    <span>{isRecording ? 'Detener' : 'Comenzar'}</span>
                    <img data-recording={isRecording} src={micIcon} alt="" />
                </Button>
             </Col>
          </Row>
          <Row>
             <Col>&nbsp;</Col>
          </Row>
          <Row>
              <Col>
                  {sentence &&
                  <Alert variant='success'>
                      <b>Pregunta: </b>{sentence} ?
                  </Alert>}

              </Col>
          </Row>
          <Row>
              {pictogramas && (pictogramas as PictogramasList[]).map((result) => (
                      <Col md={{ span: 2, offset: 1 }}>
                          <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={`/images/jugo.jpeg`} />
                          <Card.Body>
                            <Card.Title>{result.title}</Card.Title>
                            <Card.Subtitle>
                                {result.desc}
                            </Card.Subtitle>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
          </Row>

          {isLoading && <div style={{ position: 'absolute', width: '100%', height:'100%', top: '0', alignItems: "center", justifyContent: "center"}}>
              <Spinner animation="border" variant="success"/>
          </div>
          }
      </Container>

  );
}
