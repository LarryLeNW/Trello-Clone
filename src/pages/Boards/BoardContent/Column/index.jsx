import { useState } from "react";

import {
    AddCard,
    Cloud,
    ContentCopy,
    ContentCut,
    ContentPaste,
    DeleteForever,
    DragHandle,
    ExpandMoreOutlined,
} from "@mui/icons-material";
import {
    Box,
    Button,
    Divider,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
} from "@mui/material";
import ListCard from "../ListCard";

function Column() {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box
            sx={{
                minWidth: "300px",
                minHeight: "300px",
                backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
                ml: 2,
                borderRadius: "6px",
                height: "fit-content",
                maxHeight: (theme) =>
                    `calc(${theme.custom.contentHeight} - ${theme.spacing(5)})`,
            }}
        >
            {/* Header Card */}
            <Box
                sx={{
                    height: (theme) => theme.custom.columnHeaderHeight,
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Typography sx={{ fontWeight: "bold", cursor: "pointer" }}>
                    COLUMN TITLE
                </Typography>

                <Box>
                    <Tooltip title="More Option">
                        <ExpandMoreOutlined
                            id="basic-column-dropdown"
                            aria-controls={
                                open ? "menu-column-dropdown" : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                        />
                    </Tooltip>

                    <Menu
                        id="menu-column-dropdown"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "basic-column-dropdown",
                        }}
                    >
                        <MenuItem>
                            <ListItemIcon>
                                <AddCard fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Add New Card</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <ContentCut fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Cut</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <ContentCopy fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Copy</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <ContentPaste fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Paste</ListItemText>
                        </MenuItem>

                        <Divider />
                        <MenuItem>
                            <ListItemIcon>
                                <Cloud fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Archive this column</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <DeleteForever fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Remove this column</ListItemText>
                        </MenuItem>
                    </Menu>
                </Box>
            </Box>

            {/* body card */}
            <ListCard />
            {/* footer */}
            <Box
                sx={{
                    height: (theme) => theme.custom.columnFooterHeight,
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Button startIcon={<AddCard />}>Add New Card</Button>
                <Tooltip title="Drag to move ">
                    <DragHandle sx={{ cursor: "pointer" }} />
                </Tooltip>
            </Box>
        </Box>
    );
}

export default Column;
