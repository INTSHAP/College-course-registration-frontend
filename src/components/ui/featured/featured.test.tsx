import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../../../context/auth-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Featured from "./featured";

test("feature books render correctly", () => {
  const client = new QueryClient();
  render(
    <AuthProvider>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Featured />
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>,
  );
  const paragraphElement = screen.getByText(
    "Browse through all courses ahead of time",
  );
  expect(paragraphElement).toBeInTheDocument();

  const viewCoursesButton = screen.getByText(/view all courses/i);
  expect(viewCoursesButton).toBeInTheDocument();
});
