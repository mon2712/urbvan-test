import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

import { ReactComponent as Location } from "./img/location.svg"

export const Card = styled(Container)`
  border-radius: 0.5rem;
  background: #edf2ff;
  box-shadow: 0 6px 5px #e5e6eb;
  margin-bottom: 2rem;
  min-height: 6rem;
  padding: 1rem;
`

export const RightContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const StyledRow = styled(Row)`
  align-items: center;
`

export const StyledSpan = styled.span`
  font-size: 10px;
`

export const StyledInfo = styled(Col)`
  bottom: 1rem;
`

export const RowData = styled(Row)`
  flex-direction: column;
`

export const LocationIcon = styled(Location)`
  width: 2rem;
  height: 2rem
`
