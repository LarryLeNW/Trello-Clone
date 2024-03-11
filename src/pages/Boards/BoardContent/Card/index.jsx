import { AttachFile, Group, ModeComment } from "@mui/icons-material";
import {
    Button,
    Card as MuiCard,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";

function Card({ hideMedia }) {
    if (hideMedia) {
        return (
            <MuiCard
                sx={{
                    cursor: "pointer",
                    boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                    overflow: "unset",
                }}
            >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                    <Typography>LE BA TRINH</Typography>
                </CardContent>
            </MuiCard>
        );
    }

    return (
        <MuiCard
            sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                overflow: "unset",
            }}
        >
            <CardMedia
                sx={{ height: 140 }}
                image="https://t4.ftcdn.net/jpg/06/44/73/07/360_F_644730710_9TMS6TRLVTwD20Jis58GSXrzhsTze7tS.jpg"
                title="green iguana"
            />
            <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>LE BA TRINH</Typography>
            </CardContent>
            <CardActions sx={{ p: "0 4px 8px 4px" }}>
                <Button size="small" startIcon={<Group />}>
                    20
                </Button>
                <Button size="small" startIcon={<ModeComment />}>
                    9
                </Button>
                <Button size="small" startIcon={<AttachFile />}>
                    10
                </Button>
            </CardActions>
        </MuiCard>
    );
}

export default Card;
