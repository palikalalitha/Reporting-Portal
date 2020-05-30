import React from "react";

import { render, fireEvent, getByDisplayValue } from "@testing-library/react";

import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";

import { USER_CREATION_FORM, USER_PATH } from "../../constants/RouteConstants";
import { UserRoute } from "./UserFormRoute";
import { UserForm } from "../../components/UserForm/UserForm";
import UserFormRoute from "./UserFormRoute";

const LocationDisplay = withRouter(({ location }) => (
    <div data-testid="location-display">{location.pathname}</div>
));
describe("UserFormRoute Tests", () => {
    it("should render title error message", () => {
        const { getByText,getByLabelText,getByDisplayValue, getByRole,debug } = render(
            <Router history={createMemoryHistory()}>
                        <UserFormRoute  />
                          </Router>
        );
    });
  

});
