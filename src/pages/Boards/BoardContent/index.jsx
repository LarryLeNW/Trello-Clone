import { Box } from "@mui/material";
import ListColumns from "./ListColumn";
import { mapOrder } from "~/util/sorts";
import {
    DndContext,
    MouseSensor,
    PointerSensor,
    TouchSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";

function BoardContent({ board }) {
    const [orderedColumns, setOrderedColumns] = useState([]);

    const pointerSensor = useSensor(PointerSensor, {
        activationConstraint: { distance: 10 },
    });

    // Pull 10px to trigger the event
    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint: { distance: 10 },
    });

    // delay 250ms and tolerance to trigger the event
    const touchSensor = useSensor(TouchSensor, {
        activationConstraint: { delay: 250, tolerance: 5 },
    });

    const sensors = useSensors(mouseSensor, touchSensor);

    useEffect(() => {
        setOrderedColumns(
            mapOrder(board?.columns, board?.columnOrderIds, "_id")
        );
    }, [board]);

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (!over) return;

        if (active.id !== over.id) {
            const oldIndex = orderedColumns.findIndex(
                (c) => c._id === active.id
            );
            const newIndex = orderedColumns.findIndex((c) => c._id === over.id);
            const dndOrderedColumns = arrayMove(
                orderedColumns,
                oldIndex,
                newIndex
            );
            setOrderedColumns(dndOrderedColumns);
            const dndOrderedColumnIds = dndOrderedColumns.map((c) => c._id);
            console.log(
                "🚀 ~ handleDragEnd ~ dndOrderedColumnIds:",
                dndOrderedColumnIds
            );
        }
    };

    return (
        <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
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
