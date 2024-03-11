import { Box } from "@mui/material";
import ListColumns from "./ListColumn";
import { mapOrder } from "~/util/sorts";
function BoardContent({ board }) {
    const orderedColumn = mapOrder(
        board?.columns,
        board?.columnOrderIds,
        "_id"
    );
    return (
        <Box
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
                width: "100%",
                height: (theme) => theme.custom.contentHeight,
                p: "10px 0",
            }}
        >
            <ListColumns listCol={orderedColumn} />
        </Box>
    );
}

export default BoardContent;
