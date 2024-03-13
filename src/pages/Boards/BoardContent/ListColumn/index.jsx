import { Box, Button } from "@mui/material";

import { NoteAdd } from "@mui/icons-material";
import Column from "../Column";
import {
    SortableContext,
    horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

function ListColumns({ listCol }) {
    console.log("🚀 ~ ListColumns ~ listCol:", listCol);
    return (
        <SortableContext
            items={listCol?.map((c) => c._id)}
            strategy={horizontalListSortingStrategy}
        >
            <Box
                sx={{
                    bgcolor: "inherit",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    overflowX: "auto",
                    overflowY: "hidden",
                }}
            >
                {listCol?.map((column, index) => (
                    <Column key={index} column={column} />
                ))}
                {/* create column */}
                <Box
                    sx={{
                        minWidth: "200px",
                        maxWidth: "200px",
                        mx: 2,
                        borderRadius: "6px",
                        height: "fit-content",
                        bgcolor: "#ffffff3d",
                    }}
                >
                    <Button
                        sx={{ color: "whitesmoke", width: "100%" }}
                        startIcon={<NoteAdd />}
                    >
                        Add Column
                    </Button>
                </Box>
            </Box>
        </SortableContext>
    );
}

export default ListColumns;
