import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import AuthProvider from "./context/auth-context.tsx";
import AxiosProvider from "./context/axios-context.tsx";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <AuthProvider>
        <AxiosProvider>
          <Toaster richColors position="top-center" />
          <App />
        </AxiosProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
