import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'

import HomePage from './components/HomePage'
import Page1 from './components/Page1'
import './App.css'
import { store } from './SignInModule/stores/'
import { ObservationScreen } from './UserModule/components/ObservationScreen'
import signInRoutes from './SignInModule/routes'
import rpRoutes from './RPModule/routes/index'
import userRoutes from './UserModule/routes'
import { signInStore } from './SignInModule/stores/index'
import { rpStore } from './RPModule/stores'

class App extends React.Component {
   render() {
      return (
         <Provider signInStore={signInStore} rpStore={rpStore}>
            <Router basename={process.env.PUBLIC_URL}>
               <Switch>
                  {rpRoutes}
                  {/* <ObservationScreen/> */}
                  {signInRoutes}
                  {userRoutes}
               </Switch>
            </Router>
         </Provider>
      )
   }
}

export default App
