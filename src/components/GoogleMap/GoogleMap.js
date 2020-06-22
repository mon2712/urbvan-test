/*global google*/
import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { compose, withProps } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps"

import { setRoutes } from "redux/actions"
import routesData from './fakeResponse.json'

const MapComponent = (props) => {
  const [directions, setDirections] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const { location, travelMode } = props

    const directionsService = new google.maps.DirectionsService()
    directionsService.route(
      {
        origin: location.origin,
        destination: location.destination,
        travelMode: travelMode,
        provideRouteAlternatives: true,
      },
      (result, status) => {
        props.setRoutes(routesData.routes)
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result)
        } else {
          setError(result)
        }
      }
    )
  })

  if (error) {
    return <div>Hubo error al hacer request</div>
  }

  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setRoutes: (routes) => dispatch(setRoutes(routes)),
})

export default compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAqSAYiqpypE3BF_i-FYela4XfEyW8nhAg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  connect(null, mapDispatchToProps)
)(MapComponent)
