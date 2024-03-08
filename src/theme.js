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
        // light: {
        //     palette: { primary: teal, secondary: deepOrange },
        // },
        // dark: {
        //     palette: { primary: cyan, secondary: orange },
        // },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    "*::-webkit-scrollbar": {
                        width: "8px",
                        height: "8px",
                    },
                    "*::-webkit-scrollbar-thumb": {
                        backgroundColor: "#bdc3c7",
                        borderRadius: "8px",
                    },
                    "*::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#00b894",
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: { textTransform: "none" },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({ theme }) => ({ color: theme.palette.primary.main }),
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.primary.main,
                    fontSize: "0.875rem",
                    ".MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.primary.light,
                    },
                    "&:hover": {
                        ".MuiOutlinedInput-notchedOutline": {
                            borderColor: theme.palette.primary.main,
                        },
                    },
                    "& fieldset": { borderWidth: "1px !important" },
                }),
            },
        },
    },
});

export default theme;
