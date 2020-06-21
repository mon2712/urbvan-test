import React from "react"
import { Switch, Route } from "react-router-dom"

import NotFound from 'pages/Error404';


export const AppRoutes = () => (
  <Switch>
    <Route path="/" component={NotFound} />
    <Route component={NotFound} />
  </Switch>
)

export default AppRoutes
