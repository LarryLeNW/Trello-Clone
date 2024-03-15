import { Box } from "@mui/material";
import ListColumns from "./ListColumn";
import { mapOrder } from "~/util/sorts";
import {
    useSensor,
    useSensors,
    DndContext,
    MouseSensor,
    TouchSensor,
    DragOverlay,
    defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import Card from "./Card";
import Column from "./Column";
const ACTIVE_DRAG_TYPE = {
    COLUMN: "COLUMN",
    CARD: "ACTIVE_CARD",
};

function BoardContent({ board }) {
    const [orderedColumns, setOrderedColumns] = useState([]);
    const [activeIdItemDrag, setActiveIdItemDrag] = useState(null);
    console.log("🚀 ~ BoardContent ~ activeIdItemDrag:", activeIdItemDrag);
    const [activeTypeItemDrag, setActiveTypeItemDrag] = useState(null);
    console.log("🚀 ~ BoardContent ~ activeTypeItemDrag:", activeTypeItemDrag);
    const [activeDataItemDrag, setActiveDataItemDrag] = useState(null);
    console.log("🚀 ~ BoardContent ~ activeDataItemDrag:", activeDataItemDrag);

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

    const handleDragStart = (e) => {
        setActiveIdItemDrag(e?.active?.id);
        setActiveTypeItemDrag(
            e?.active?.data?.current?.columnId
                ? ACTIVE_DRAG_TYPE.COLUMN
                : ACTIVE_DRAG_TYPE.CARD
        );
        setActiveDataItemDrag(e?.active?.data?.current);
    };

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

        setActiveIdItemDrag(null);
        setActiveTypeItemDrag(null);
        setActiveDataItemDrag(null);
    };

    const customDropAnimation = {
        sideEffects: defaultDropAnimationSideEffects({
            styles: {
                active: { opacity: "0.5" },
            },
        }),
    };
    return (
        <DndContext
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            sensors={sensors}
        >
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
                <DragOverlay dropAnimation={customDropAnimation}>
                    {!activeTypeItemDrag && null}
                    {activeIdItemDrag &&
                        activeTypeItemDrag === ACTIVE_DRAG_TYPE.COLUMN && (
                            <Column column={activeDataItemDrag} />
                        )}
                    {activeIdItemDrag &&
                        activeTypeItemDrag === ACTIVE_DRAG_TYPE.CARD && (
                            <Card card={activeDataItemDrag} />
                        )}
                </DragOverlay>
            </Box>
        </DndContext>
    );
}

export default BoardContent;
