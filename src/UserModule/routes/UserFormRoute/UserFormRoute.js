import React, { Component } from 'react';
import { UserForm } from "../../components/UserForm/UserForm";
import { UserPage } from "../../components/userPage/UserPage";

class UserFormRoute extends Component {
    render() {
        return (
           <UserPage
           component={UserForm}
           />
        );
    }
}

export default UserFormRoute;