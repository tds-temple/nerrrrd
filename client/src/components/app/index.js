//NPM
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//Components
import Home from '../routes/home'

//Constants
import { ROUTES } from '../../constants/routes'

const app = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.home} component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default app