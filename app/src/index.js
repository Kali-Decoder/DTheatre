import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import ContextProvider from "./Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </ContextProvider>
);
