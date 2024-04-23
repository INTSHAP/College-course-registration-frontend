import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import AuthProvider from "./context/auth-context.tsx";
import AxiosProvider from "./context/axios-context.tsx";
import CourseProvider from "./context/course-context.tsx";
import DrawerProvider from "./context/nav-context.tsx";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <DrawerProvider>
        <AuthProvider>
          <AxiosProvider>
            <CourseProvider>
              <Toaster richColors position="top-center" />
              <App />
            </CourseProvider>
          </AxiosProvider>
        </AuthProvider>
      </DrawerProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
