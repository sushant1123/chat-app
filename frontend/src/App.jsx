import { useState } from "react";
import "./App.css";
import { Button } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import Chat from "./pages/Chat";
import ErrorBoundary from "./components/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/chats",
    element: <Chats />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/chats/:id",
    element: <Chat />,
    errorElement: <ErrorBoundary />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
