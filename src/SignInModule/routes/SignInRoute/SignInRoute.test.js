import React from "react";

import { render, fireEvent, waitFor, waitForElement, getByDisplayValue } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";

import getUserSignInResponse from "../../fixtures/getUserSignInResponse.json";

import { SignInRoute } from "."
import {
    SIGN_IN_PATH
}
from "../../constants/RouteConstants"

import {USER_PATH} from "../../../UserModule/constants/RouteConstants"
import {SignInAPI} from "../../services/SignInAPI/SignInAPI"
import  {SignInStore} from "../../stores/SignInStore/"

const LocationDisplay = withRouter(({ location }) => (
    <div data-testid="location-display">{location.pathname}</div>
));
describe("SignInRoute Tests", () => {
    let signInAPI;
    let signInStore;
    beforeEach(() => {
        signInAPI = new SignInAPI();
        signInStore = new SignInStore(signInAPI);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it("should render username empty error message", () => {
        const { getByText, getByRole,debug } = render(
            <Router history={createMemoryHistory()}>
                        <SignInRoute signInStore={signInStore} />
                          </Router>
        );
        const username=""
        const usernameField=getByRole("textbox")
        
        expect(usernameField).toBeInTheDocument();
        const signInButton = getByRole("button", { name: "Login" });
        fireEvent.click(signInButton);
        expect(usernameField).toHaveAttribute('type', "text")
        getByText(/Please enter username/i)
    });

    it("should render password empty error message", () => {
        const { getByText,getAllByText, getByRole,getByDisplayValue, debug ,getByTestId} = render(
            <Router history={createMemoryHistory()}>
        <SignInRoute signInStore={signInStore} />
      </Router>
        );
        const username = "test-user";
        const signInButton = getByRole("button", { name: "Login" });
        const usernameField=getByRole("textbox",   { type:"text"})
        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.click(signInButton);
        getByText(/Please enter password/i);
    });
    // it("should submit sign-in on press enter", async() => {
    //     const { getByLabelText, getByRole, getByDisplayValue, getByText } = render(
    //         <Router history={createMemoryHistory()}>
    //                 <SignInRoute signInStore={signInStore} />
    //               </Router>
    //     );
    //     const username = "test-user";
    //     const password = "test-password";

    //     const usernameField = getByRole("textbox");
    //     const passwordField = getByRole("textbox");
    //     const signInButton = getByRole("button", { name: "Login"});

    //     fireEvent.change(usernameField, { target: { value: username } });
    //     fireEvent.change(passwordField, { target: { value: password } });
    //     fireEvent.click(signInButton);
    //     expect(getByDisplayValue("Loading")).toBeInTheDocument()
    //     //await getByText("Loading")
    // });






});
