import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Box, ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Box bg="#1b1b1b" minH="100vh">
      <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
