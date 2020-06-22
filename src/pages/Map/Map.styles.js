import styled from "styled-components"
import { ReactComponent as Logo } from "pages/Map/img/logo.svg"
import { Col, Button } from "react-bootstrap"

export const StyledLogo = styled(Logo)`
  width: 6rem;
  margin-bottom: 2rem;
`

export const ContainerForm = styled(Col)`
  padding: 2rem;
`

export const ContainerMap = styled(Col)`
  padding: 0;
`

export const StyledButton = styled(Button)`
  width: 100%;
`

export const CardsContainer = styled.div`
  margin-top: 1rem;
`
