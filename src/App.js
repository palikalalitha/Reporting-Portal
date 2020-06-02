import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Provider} from "mobx-react";

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import "./App.css";
import {store} from "./SignInModule/stores/"
import {ObservationScreen} from "./UserModule/components/ObservationScreen/"
import  signInRoutes from "./SignInModule/routes"
import userRoutes from "./UserModule/routes"
import {signInStore} from "./SignInModule/stores/index"

class App extends React.Component
{
  render(){
  return (
    <Provider signInStore={signInStore} >
    <Router basename={process.env.PUBLIC_URL}>
       <Switch>
         {/* <ObservationScreen/> */}
          {signInRoutes}
          {userRoutes}
      </Switch>
    </Router>
    </Provider>
  )
 } ;
};

export default App;


  {/* <>
     
      <Table/>
      <Header />
       <Image type="logo" imageURL=
      "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/8b9ff190-f490-4211-b2dd-61f476cfeabd.svg"/>
      <InputElement type="text"/> 
      <Button buttonText="Login" type="primary"/>
     
       <Pagination currentPage="1" list={["power","water","health",]}totalPages="5"/>
       <TextArea data="Reporting portal project"/>
       <DropDownList optionsList={["mobile","laptop"]}/>
       <RadioButton list={["male","female"]}/>
       <Button buttonText="Submit"/>
       <InputElement type="date"/> 
       </> */}