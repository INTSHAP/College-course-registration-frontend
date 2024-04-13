import { render, screen } from "@testing-library/react";
import LoginForm from "./login";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../../../context/auth-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AxiosProvider from "../../../context/axios-context";

test("login form render correctly", () => {
  const client = new QueryClient();
  render(
    <AuthProvider>
      <AxiosProvider>
        <QueryClientProvider client={client}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </QueryClientProvider>
      </AxiosProvider>
    </AuthProvider>,
  );
  const emailInputElement = screen.getByPlaceholderText("Enter your email");
  const passwordInputElement = screen.getByPlaceholderText(
    "Enter your password",
  );
  const submitButton = screen.getByRole("button");
  expect(submitButton).toBeInTheDocument();
  expect(emailInputElement).toBeInTheDocument();
  expect(passwordInputElement).toBeInTheDocument();
});
