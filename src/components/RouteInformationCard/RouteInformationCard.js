import React from "react"

import {
  Card,
  RightContainer,
  StyledRow,
  StyledSpan,
  RowData,
  StyledInfo,
  LocationIcon,
} from "./RouteInformationCard.styles"
import { Container, Row, Col } from "react-bootstrap"

const RouteInformationCard = ({ origin, destination, distance, duration }) => (
  <Card>
    <StyledRow>
      <Col lg={2}>
        <LocationIcon />
      </Col>
      <Col lg={10}>
        <RightContainer>
          <Row>
            <Col>
              <span>{origin}</span>
            </Col>
            <Col>
              <Container>
                <RowData>
                  <Col> {duration.text}</Col>
                  <StyledInfo>
                    <StyledSpan> de viaje</StyledSpan>
                  </StyledInfo>
                </RowData>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col>
              <span>{destination}</span>
            </Col>
            <Col>
              <Container>
                <RowData>
                  <Col> {distance.text}</Col>
                  <StyledInfo>
                    <StyledSpan> de viaje</StyledSpan>
                  </StyledInfo>
                </RowData>
              </Container>
            </Col>
          </Row>
        </RightContainer>
      </Col>
    </StyledRow>
  </Card>
)

export default RouteInformationCard
