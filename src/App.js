import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { toJS } from 'mobx'
import './App.css'

import signInRoutes from './SignInModule/routes'
import rpRoutes from './RPModule/routes/index'
import userRoutes from './UserModule/routes'
import { signInStore } from './SignInModule/stores/index'
import { rpStore } from './RPModule/stores/index'
import { userStore } from './UserModule/stores'
import { I18nextProvider } from 'react-i18next'
import i18n from './common/i18n'

class App extends React.Component {
   render() {
      return (
         <Provider
            signInStore={signInStore}
            rpStore={rpStore}
            userStore={userStore}
         >
            <I18nextProvider i18n={i18n}>
               <Suspense fallback={<div>Loading....</div>}>
                  <Router basename={process.env.PUBLIC_URL}>
                     <Switch>
                        {signInRoutes}
                        {/* {userRoutes}
                     {rpRoutes} */}
                     </Switch>
                  </Router>
               </Suspense>
            </I18nextProvider>
         </Provider>
      )
   }
}

export default App
