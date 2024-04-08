import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../../../context/auth-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Hero from "./hero";

test("Hero section render correctly", () => {
  const client = new QueryClient();
  render(
    <AuthProvider>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>,
  );

  const heroImage = screen.getByRole("img");
  expect(heroImage).toBeInTheDocument();
  const getStartedButton = screen.getByText(/Get started/i);
  expect(getStartedButton).toBeInTheDocument();
});
