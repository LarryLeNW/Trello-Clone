import {
    Badge,
    Box,
    Button,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import ModeSelect from "~/components/ModeSelect";
import { Apps as AppsIcon } from "@mui/icons-material";
import WorkSpaces from "./Menus/WorkSpaces";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Profiles from "./Menus/Profiles";
function AppBoard() {
    return (
        <Box
            px={2}
            sx={{
                backgroundColor: "primary.light",
                width: "100%",
                height: (theme) => theme.custom.appBarHeight,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <AppsIcon />
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "primary.main",
                    }}
                >
                    <div> Icon</div>
                    <Typography variant="span">Trello</Typography>
                </Box>
                <WorkSpaces />
                <Recent />
                <Starred />
                <Templates />
                <Button variant="outlined">Create </Button>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <TextField
                    id="outlined-search"
                    label="Search ..."
                    type="search"
                    size="small"
                ></TextField>
                <ModeSelect />
                <Tooltip title="Notifications">
                    <Badge
                        color="secondary"
                        variant="dot"
                        sx={{ cursor: "pointer" }}
                    >
                        <NotificationsActiveIcon />
                    </Badge>
                </Tooltip>

                <Tooltip title="Help">
                    <HelpOutlineOutlinedIcon />
                </Tooltip>

                <Profiles />
            </Box>
        </Box>
    );
}

export default AppBoard;
