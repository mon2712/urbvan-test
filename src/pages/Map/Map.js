import React, { useState } from "react"
import { connect } from "react-redux"
import { compose } from "recompose"

import { Container, Row, Form } from "react-bootstrap"
import Page from "components/Page"
import GoogleMap from "components/GoogleMap"
import {
  StyledLogo,
  ContainerMap,
  ContainerForm,
  StyledButton,
  CardsContainer,
} from "./Map.styles.js"
import RouteInformationCard from "../../components/RouteInformationCard/index.js"

const MapContainer = (props) => {
  const { routes } = props
  const [origin, setOrigin] = useState(null)
  const [destination, setDestination] = useState(null)
  const [directions, setDirections] = useState(null)

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

            <CardsContainer>
              {directions &&
                routes &&
                routes.length &&
                routes.map((route) =>
                  route.legs.map((leg) => (
                    <RouteInformationCard
                      origin={origin}
                      destination={destination}
                      distance={leg.distance}
                      duration={leg.duration}
                    />
                  ))
                )}
            </CardsContainer>
          </ContainerForm>
          <ContainerMap lg={8}>
            <GoogleMap isMarkerShown travelMode="DRIVING" location={directions} />
          </ContainerMap>
        </Row>
      </Container>
    </Page>
  )
}

const mapStateToProps = (state) => {
  return {
    routes: state.routes,
  }
}

export default compose(connect(mapStateToProps, null))(MapContainer)
