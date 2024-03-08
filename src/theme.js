import { experimental_extendTheme } from "@mui/material";
import { cyan, deepOrange, orange, teal } from "@mui/material/colors";

// initialize css variable styles
const appBarHeight = "58px";
const boardBarHeight = "60px";

const theme = experimental_extendTheme({
    custom: {
        appBarHeight,
        boardBarHeight,
        contentHeight: `calc(100vh - ${appBarHeight} - ${boardBarHeight})`,
    },
    colorSchemes: {
        light: {
            palette: { primary: teal, secondary: deepOrange },
        },
        dark: {
            palette: { primary: cyan, secondary: orange },
        },
    },
});

export default theme;
