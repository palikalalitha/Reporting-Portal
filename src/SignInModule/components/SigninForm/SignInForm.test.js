
import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import { SignInForm } from "./index"

describe("SignInForm test", () => {
    it("should render typed username", () => {
        const username = "test-user";
        const { getByRole } = render(
            <SignInForm username={username}  />
        )
        const usernameField = getByRole("textbox");
        expect(usernameField.value).toBe(username);
    });
    it("should render typed password", () => {
        const password = "test-password";
        const { getByDisplayValue} = render(
            <SignInForm userpassword={password} />
        );
       
        expect(getByDisplayValue(password)).toBeInTheDocument()
      
    });
});





