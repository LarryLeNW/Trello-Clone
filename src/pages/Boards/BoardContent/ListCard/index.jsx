import { Box } from "@mui/material";
import Card from "../Card";

function ListCard({ listCard }) {
    console.log("🚀 ~ ListCard ~ listCard:", listCard);
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                p: 2,
                boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                overflowX: "hidden",
                overflowY: "auto",
                maxHeight: (theme) =>
                    `calc(${theme.custom.contentHeight} - ${theme.spacing(
                        5
                    )} - ${theme.custom.columnHeaderHeight} - ${
                        theme.custom.columnFooterHeight
                    })`,
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#ced0da",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#bfc2cf",
                },
            }}
        >
            {listCard?.map((card) => (
                <Card key={card._id} card={card} />
            ))}
        </Box>
    );
}

export default ListCard;
