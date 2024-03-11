import { Container } from "@mui/material";
import AppBoard from "~/components/AppBoard";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";
import { mockData } from "~/apis/mock-data";

function Board() {
    return (
        <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
            <AppBoard />
            <BoardBar board={mockData.board} />
            <BoardContent board={mockData.board} />
        </Container>
    );
}

export default Board;
