import React from "react"

import Page from "components/Page"
import GoogleMap from "components/GoogleMap"

const MapContainer = (props) => {
  
  return (
    <Page title="404">
      <GoogleMap
        isMarkerShown
        travelMode='DRIVING'
        origin={'Chicago, IL'}
        destination={'Los Angeles, CA'}
      />
    </Page>
  )
}

export default MapContainer
