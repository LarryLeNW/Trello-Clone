import { AttachFile, Group, ModeComment } from "@mui/icons-material";
import {
    Button,
    Card as MuiCard,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";

function Card({ card }) {
    return (
        <MuiCard
            sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                overflow: "unset",
            }}
        >
            {card?.cover && (
                <CardMedia sx={{ height: 140 }} image={card?.cover} />
            )}

            <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>{card?.title}</Typography>
            </CardContent>
            <CardActions sx={{ p: "0 4px 8px 4px" }}>
                <Button size="small" startIcon={<Group />}>
                    {!!card?.memberIds ? card?.memberIds.length : "0"}
                </Button>
                <Button size="small" startIcon={<ModeComment />}>
                    {!!card?.comments ? card?.comments.length : "0"}
                </Button>
                <Button size="small" startIcon={<AttachFile />}>
                    {!!card?.attachments ? card?.attachments.length : "0"}
                </Button>
            </CardActions>
        </MuiCard>
    );
}

export default Card;
