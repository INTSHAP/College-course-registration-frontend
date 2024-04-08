import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../../../context/auth-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignupForm from "./signup";

test("signup form render correctly", () => {
  const client = new QueryClient();
  render(
    <AuthProvider>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <SignupForm />
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>,
  );
  const emailInputElement = screen.getByPlaceholderText("Enter your email");
  const passwordInputElement = screen.getAllByPlaceholderText(
    "Enter your password",
  );
  const firstNameInputElement = screen.getByPlaceholderText(
    "Enter your first name",
  );
  const lastNameInputElement = screen.getByPlaceholderText(
    "Enter your last name",
  );
  const submitButton = screen.getByRole("button");
  expect(firstNameInputElement).toBeInTheDocument();
  expect(lastNameInputElement).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
  expect(emailInputElement).toBeInTheDocument();
  expect(passwordInputElement.length).toEqual(2); // there two password inputs
});
