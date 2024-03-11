import {
    Cloud,
    ContentCopy,
    ContentCut,
    ContentPaste,
    Logout,
    PersonAdd,
    Settings,
} from "@mui/icons-material";
import {
    Avatar,
    Box,
    Button,
    Divider,
    ListItemIcon,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
} from "@mui/material";
import { useState } from "react";

function Profiles() {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <Tooltip title="Your Account">
                <Button
                    id="basic-button-workspaces"
                    aria-controls={open ? "basic-menu-workspaces" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{ color: "white" }}
                >
                    <Avatar sx={{ width: 32, height: 32 }} />
                </Button>
            </Tooltip>

            <Menu
                id="basic-menu-workspaces"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button-workspaces",
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> My account
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default Profiles;
