import React from "react"
import { Switch, Route } from "react-router-dom"

import NotFound from 'pages/Error404';
import Map from 'pages/Map';


export const AppRoutes = () => (
  <Switch>
    <Route path="/" component={Map} />
    <Route component={NotFound} />
  </Switch>
)

export default AppRoutes
