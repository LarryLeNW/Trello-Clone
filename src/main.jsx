import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme.js";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import "./index.css";
import { GlobalStyles } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
    <CssVarsProvider theme={theme}>
        <CssBaseline />
        {/* <GlobalStyles styles={{ icon: { color: "red" } }} /> */}
        <App />
    </CssVarsProvider>
);
