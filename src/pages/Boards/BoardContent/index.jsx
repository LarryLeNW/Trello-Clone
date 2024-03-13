import { Box } from "@mui/material";
import ListColumns from "./ListColumn";
import { mapOrder } from "~/util/sorts";
import { DndContext } from "@dnd-kit/core";
import { useEffect, useState } from "react";

function BoardContent({ board }) {
    const [orderedColumns, setOrderedColumns] = useState([]);

    useEffect(() => {
        setOrderedColumns(
            mapOrder(board?.columns, board?.columnOrderIds, "_id")
        );
    }, [board]);

    const handleDragEnd = (event) => {
        console.log(event);
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <Box
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
                    width: "100%",
                    height: (theme) => theme.custom.contentHeight,
                    p: "10px 0",
                }}
            >
                <ListColumns listCol={orderedColumns} />
            </Box>
        </DndContext>
    );
}

export default BoardContent;
