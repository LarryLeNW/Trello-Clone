import { Box } from "@mui/material";

function BoardContent() {
    return (
        <Box
            sx={{
                backgroundColor: "primary.main",
                width: "100%",
                height: (theme) => theme.custom.contentHeight,
                display: "flex",
                alignItems: "center",
            }}
        >
            Content
        </Box>
    );
}

export default BoardContent;
