import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'

// import HomePage from './components/HomePage'
// import Page1 from './components/Page1'
import './App.css'
// import { store } from './SignInModule/stores'
import signInRoutes from './SignInModule/routes'
// import rpRoutes from './RPModule/routes/index'
import userRoutes from './UserModule/routes'
import { signInStore } from './SignInModule/stores/index'
// import { rpStore } from './RPModule/stores/index'
import { userStore } from './UserModule/stores'

class App extends React.Component {
   render() {
      return (
         <Provider
            signInStore={signInStore}
            // rpStore={rpStore}
            userStore={userStore}
         >
            <Router basename={process.env.PUBLIC_URL}>
               <Switch>
                  {signInRoutes}
                  {userRoutes}
                  {/* {rpRoutes}  */}
               </Switch>
            </Router>
         </Provider>
      )
   }
}

export default App
