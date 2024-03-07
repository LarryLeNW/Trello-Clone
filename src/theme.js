import { experimental_extendTheme } from "@mui/material";
import { cyan, deepOrange, orange, teal } from "@mui/material/colors";

// Create a theme instance.
const theme = experimental_extendTheme({
    colorSchemes: {
        light: {
            palette: { primary: teal, secondary: deepOrange },
        },
        dark: {
            palette: { primary: cyan, secondary: orange },
        },
    },
    // ...other properties
});

export default theme;
