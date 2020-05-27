import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Provider} from "mobx-react";

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import "./App.css";
import {store} from "./SignInModule/stores/"
// import {Home} from "./common/home"
import { InputElement } from "./common/components/InputElement";
import {Button} from "./common/components/Button/"
import { Profile } from "./common/components/Profile/Profile";
import { DropDownList } from "./common/components/DropDownList/DropDownList";
import { TextArea } from "./common/components/TextArea/TextArea";
import { RadioButton } from "./common/components/RadioButton";
import Pagination from "./common/components/Pagination/Pagination"
import {Image} from "./common/components/Image"
import { Header } from "./common/components/Header/Header";
import { SignInForm } from "./SignInModule/components/SigninForm/SignInForm";
import {TableData} from "./common/components/TableData/TableData"
import { Table } from "./common/components/Table/Table";
import  signInRoutes from "./SignInModule/routes"
import userRoutes from "./UserModule/routes"
import {signInStore} from "./SignInModule/stores/index"
import { UserPage } from "./UserModule/components/UserPage/UserPage";
class App extends React.Component
{
  render(){
  return (
    <Provider signInStore={signInStore} >
    <Router basename={process.env.PUBLIC_URL}>
       <Switch>
      
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