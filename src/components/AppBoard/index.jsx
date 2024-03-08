import { Box } from "@mui/material";
import ModeSelect from "../ModeSelect";

function AppBoard() {
    return (
        <Box
            sx={{
                backgroundColor: "primary.light",
                width: "100%",
                height: (theme) => theme.custom.appBarHeight,
                display: "flex",
                alignItems: "center",
            }}
        >
            <ModeSelect />
        </Box>
    );
}

export default AppBoard;