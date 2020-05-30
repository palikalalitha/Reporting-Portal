import React from "react";

import { render, fireEvent, getByDisplayValue, getByTestId } from "@testing-library/react";

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
    it("should render title field error message", () => {
        const { getByText,getByTestId, getByRole } = render(
            <Router history={createMemoryHistory()}>
                        <UserFormRoute  />
                          </Router>
        );

        const title=getByTestId("title")

        expect(title).toBeInTheDocument()

        const submitButton = getByRole("button", { name: "Submit" });
        expect(submitButton).toBeInTheDocument()

        fireEvent.click(submitButton)
        getByText(/Enter Required Field/i)
      
    });
    it("should render sverity field error message", () => {
        const { getByText,getByTestId, getByRole } = render(
            <Router history={createMemoryHistory()}>
                        <UserFormRoute  />
                          </Router>
        );

        const severityField=getByTestId("severity")

        expect(severityField).toBeInTheDocument()

        const submitButton = getByRole("button", { name: "Submit" });
        expect(submitButton).toBeInTheDocument()

        fireEvent.click(submitButton)
        getByText(/Enter Required Field/i)
      
    });
    it("should render description field error message", () => {
        const { getByText,getByTestId, getByRole } = render(
            <Router history={createMemoryHistory()}>
                        <UserFormRoute  />
                          </Router>
        );

        const descriptionField=getByTestId("description")

        expect(descriptionField).toBeInTheDocument()

        const submitButton = getByRole("button", { name: "Submit" });
        expect(submitButton).toBeInTheDocument()

        fireEvent.click(submitButton)
        getByText(/Enter Required Field/i)
      
    });
    it("should test user form page ", () => {
        const { getByText, } = render(
            <Router history={createMemoryHistory()}>
                        <UserFormRoute  />
                          </Router>
        );

        getByText("Back To Observation");

        
      
    });


    // it("should render   the user observation ", () => {
    //     const { getByText,getByLabelText,getByDisplayValue,getByTestId, getByRole,debug } = render(
    //         <Router history={createMemoryHistory()}>
    //                     <UserFormRoute  />
    //                       </Router>
    //     );

    //     const backButton=getByTestId("back")

    //     expect(backButton).toBeInTheDocument()

        

        
      
    // });



});
