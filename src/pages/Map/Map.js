import React, { useState } from "react"

import { Container, Row, Form } from "react-bootstrap"
import Page from "components/Page"
import GoogleMap from "components/GoogleMap"
import {
  StyledLogo,
  ContainerMap,
  ContainerForm,
  StyledButton,
} from "./Map.styles.js"

const MapContainer = (props) => {
  const [origin, setOrigin] = useState("Chicago, IL")
  const [destination, setDestination] = useState("Los Angeles")
  const [directions, setDirections] = useState({ origin, destination })

  const handleChange = (e) => {
    if (e.target.name === "origin") {
      setOrigin(e.target.value)
    }
    if (e.target.name === "destination") {
      setDestination(e.target.value)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    setDirections({ origin, destination })
  }

  return (
    <Page title="mapa">
      <Container fluid>
        <Row>
          <ContainerForm lg={4}>
            <StyledLogo />
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Origen: </Form.Label>
                <Form.Control
                  name="origin"
                  value={origin}
                  onChange={handleChange}
                  type="text"
                  placeholder="Origen"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Destino: </Form.Label>
                <Form.Control
                  name="destination"
                  value={destination}
                  onChange={handleChange}
                  type="text"
                  placeholder="Destino"
                />
              </Form.Group>

              <StyledButton variant="primary" type="submit">
                BUSCAR RUTA
              </StyledButton>
            </Form>
          </ContainerForm>
          <ContainerMap lg={8}>
            <GoogleMap isMarkerShown travelMode="DRIVING" location={directions} />
          </ContainerMap>
        </Row>
      </Container>
    </Page>
  )
}

export default MapContainer
