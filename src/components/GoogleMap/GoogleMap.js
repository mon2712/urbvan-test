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

const MapComponent = (props) => {
  const [directions, setDirections] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const {
      location,
      travelMode,
    } = props

    if (location && location.origin && location.destination) {
      const directionsService = new google.maps.DirectionsService()
      directionsService.route(
        {
          origin: location.origin,
          destination: location.destination,
          travelMode: travelMode,
          provideRouteAlternatives: true,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections(result)
            props.setRoutes(result.routes)
          } else {
            setError(result)
          }
        }
      )
    }
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
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyA1lqeER_Mw5wuD49qVx1HCIJI_j3tIxqw&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  connect(null, mapDispatchToProps)
)(MapComponent)
