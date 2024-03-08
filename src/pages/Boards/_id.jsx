import { Container } from "@mui/material";
import AppBoard from "../../components/AppBoard";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";
function Board() {
    return (
        <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
            <AppBoard></AppBoard>
            <BoardBar></BoardBar>
            <BoardContent></BoardContent>
        </Container>
    );
}

export default Board;
