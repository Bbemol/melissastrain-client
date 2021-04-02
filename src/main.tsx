import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { store } from "core/Store";
import "core/styles/index.css";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
