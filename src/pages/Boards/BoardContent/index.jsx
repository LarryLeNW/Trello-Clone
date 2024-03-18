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
  closestCorners,
} from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import Card from "./Card";
import Column from "./Column";
import { cloneDeep, isEmpty } from "lodash";
import { generatePlaceholderCard } from "~/util/formartter";
const ACTIVE_DRAG_TYPE = {
  COLUMN: "COLUMN",
  CARD: "ACTIVE_CARD",
};

function BoardContent({ board }) {
  const [orderedColumns, setOrderedColumns] = useState([]);
  const [activeIdItemDrag, setActiveIdItemDrag] = useState(null);
  const [activeTypeItemDrag, setActiveTypeItemDrag] = useState(null);
  const [activeDataItemDrag, setActiveDataItemDrag] = useState(null);
  const [oldColumnDragging, setOldColumnDragging] = useState(null);

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
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
  }, [board]);

  const handleDragStart = (e) => {
    setActiveIdItemDrag(e?.active?.id);
    setActiveTypeItemDrag(
      e?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_TYPE.CARD
        : ACTIVE_DRAG_TYPE.COLUMN
    );
    setActiveDataItemDrag(e?.active?.data?.current);
    if (e?.active?.data?.current?.columnId) {
      setOldColumnDragging(findColumnByCardId(e?.active?.id));
    }
  };

  let findColumnByCardId = (cardId) => {
    return orderedColumns.find((column) =>
      column?.cards?.map((card) => card._id)?.includes(cardId)
    );
  };

  const handleDragOver = (event) => {
    if (activeTypeItemDrag == ACTIVE_DRAG_TYPE.COLUMN) return;

    const { active, over } = event;

    if (!over || !active) return;

    const {
      id: activeIdCardDragging,
      data: { current: activeDataCardDragging },
    } = active;

    const { id: overIdCard } = over;

    const activeCol = findColumnByCardId(activeIdCardDragging);
    const overCol = findColumnByCardId(overIdCard);

    if (!activeCol || !overCol) return;

    if (activeCol._id !== overCol._id) {
      setOrderedColumns((prevColumns) => {
        const overCardIndex = overCol?.cards?.findIndex(
          (card) => card._id === overIdCard
        );

        let newCardIndex;
        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;

        const modifier = isBelowOverItem ? 1 : 0;

        newCardIndex =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : overCol?.cards?.length + 1;

        const nextCols = cloneDeep(prevColumns);
        const nextActiveColumn = nextCols.find(
          (col) => col._id === activeCol._id
        );
        const nextOverColumn = nextCols.find((col) => col._id === overCol._id);

        if (nextActiveColumn) {
          nextActiveColumn.cards = nextActiveColumn.cards.filter(
            (card) => card._id !== activeIdCardDragging
          );

          //check is empty col then create placeholder cards
          if (isEmpty(nextActiveColumn?.cards)) {
            nextActiveColumn.cards = [
              generatePlaceholderCard(nextActiveColumn),
            ];
          }

          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
            (card) => card._id
          );
        }

        //  New card to the Column the user wants to drop
        if (nextOverColumn) {
          // Check the exit this card in the column you want to remove, if there is one, delete this card
          nextOverColumn.cards = nextOverColumn.cards.filter(
            (card) => card._id !== activeIdCardDragging
          );

          // add card in this col
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(
            newCardIndex,
            0,
            activeDataCardDragging
          );

          // delete the placeholder card if it exists.
          nextOverColumn.cards = nextOverColumn.cards.filter(
            (card) => !card.FE_PlaceholderCard
          );

          // update order col drop
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
            (card) => card._id
          );
        }

        return nextCols;
      });
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || !active || over?.id === active?.id) return;

    if (activeTypeItemDrag == ACTIVE_DRAG_TYPE.CARD) {
      const {
        id: activeIdCardDragging,
        data: { current: activeDataCardDragging },
      } = active;

      const { id: overIdCard } = over;

      const activeCol = findColumnByCardId(activeIdCardDragging);
      const overCol = findColumnByCardId(overIdCard);

      if (!activeCol || !overCol) return;

      if (oldColumnDragging._id === overCol._id) {
        const oldCardIndex = oldColumnDragging?.cards?.findIndex(
          (c) => c._id === active.id
        );
        const newCardIndex = overCol?.cards?.findIndex(
          (c) => c._id === over.id
        );
        const dndOrderedCards = arrayMove(
          oldColumnDragging?.cards,
          oldCardIndex,
          newCardIndex
        );

        setOrderedColumns((prevColumns) => {
          const nextCols = cloneDeep(prevColumns);
          // tìm tới column mà ta đang thả
          const targetColumn = nextCols.find((c) => c._id === overCol._id);
          // cập nhật lại 2 giá trị mới là card và cardOrderIds trong column
          targetColumn.cards = dndOrderedCards;
          targetColumn.cardOrderIds = dndOrderedCards.map((card) => card._id);
          return nextCols;
        });
      } else {
        console.log("drag card into other column ");
      }
    }

    if (activeTypeItemDrag == ACTIVE_DRAG_TYPE.COLUMN) {
      console.log("handle dragend column");
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id);
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id);
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex);
      setOrderedColumns(dndOrderedColumns);
      const dndOrderedColumnIds = dndOrderedColumns.map((c) => c._id);
    }

    setActiveIdItemDrag(null);
    setActiveTypeItemDrag(null);
    setActiveDataItemDrag(null);
    setOldColumnDragging(null);
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
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
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
          {activeIdItemDrag && activeTypeItemDrag === ACTIVE_DRAG_TYPE.CARD && (
            <Card card={activeDataItemDrag} />
          )}
        </DragOverlay>
      </Box>
    </DndContext>
  );
}

export default BoardContent;
