import {
    AddToDrive,
    BoltSharp,
    Dashboard,
    Filter,
    PersonAdd,
    VpnLock,
} from "@mui/icons-material";
import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from "@mui/material";

function BoardBar() {
    const MenuStyle = {
        paddingX: "5px",
        color: "primary.main",
        bgcolor: "white",
        border: "none",
        borderRadius: "4px",
        "& .MuiSvgIcon-root": {
            color: "primary.main",
        },
        "&:hover": { bgcolor: "primary.50" },
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: (theme) => theme.custom.boardBarHeight,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                overflowX: "auto",
                borderTop: "1px solid #00bfa5",
                paddingX: 2,
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Chip
                    sx={MenuStyle}
                    clickable
                    icon={<Dashboard />}
                    label="LarryLe"
                />
                <Chip
                    sx={MenuStyle}
                    clickable
                    icon={<VpnLock />}
                    label="Public/Private Workspace"
                />
                <Chip
                    sx={MenuStyle}
                    clickable
                    icon={<AddToDrive />}
                    label="Add To Google Drive"
                />
                <Chip
                    sx={MenuStyle}
                    clickable
                    icon={<BoltSharp />}
                    label="Automation"
                />
                <Chip
                    sx={MenuStyle}
                    clickable
                    icon={<Filter />}
                    label="Filter"
                />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Button variant="outlined" startIcon={<PersonAdd />}>
                    Invite
                </Button>
                <AvatarGroup
                    max={3}
                    sx={{
                        "& .MuiAvatar-root": { width: "32px", height: "32px" },
                    }}
                >
                    <Tooltip title="LarryLe">
                        <Avatar
                            alt="Larryle"
                            src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/430862651_1188423722537716_5001893755688629289_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqigqL5dV-58QuFp8DsmWCxqQjD7gYvwvGpCMPuBi_C1J7dMiZOUuVSvmRAw40dhNJDnzL1Hhb0d9FegsPMcVP&_nc_ohc=wFMI4bvDjE8AX-_ol0V&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCAdZp93J0zS-iz6WqGP6cG8L6YPaOFgiFt47ePzr2IMg&oe=65F12628"
                        />
                    </Tooltip>
                    <Tooltip title="LarryLe">
                        <Avatar
                            alt="Larryle"
                            src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/430862651_1188423722537716_5001893755688629289_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqigqL5dV-58QuFp8DsmWCxqQjD7gYvwvGpCMPuBi_C1J7dMiZOUuVSvmRAw40dhNJDnzL1Hhb0d9FegsPMcVP&_nc_ohc=wFMI4bvDjE8AX-_ol0V&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCAdZp93J0zS-iz6WqGP6cG8L6YPaOFgiFt47ePzr2IMg&oe=65F12628"
                        />
                    </Tooltip>
                    <Tooltip title="LarryLe">
                        <Avatar
                            alt="Larryle"
                            src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/430862651_1188423722537716_5001893755688629289_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqigqL5dV-58QuFp8DsmWCxqQjD7gYvwvGpCMPuBi_C1J7dMiZOUuVSvmRAw40dhNJDnzL1Hhb0d9FegsPMcVP&_nc_ohc=wFMI4bvDjE8AX-_ol0V&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCAdZp93J0zS-iz6WqGP6cG8L6YPaOFgiFt47ePzr2IMg&oe=65F12628"
                        />
                    </Tooltip>
                    <Tooltip title="LarryLe">
                        <Avatar
                            alt="Larryle"
                            src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/430862651_1188423722537716_5001893755688629289_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqigqL5dV-58QuFp8DsmWCxqQjD7gYvwvGpCMPuBi_C1J7dMiZOUuVSvmRAw40dhNJDnzL1Hhb0d9FegsPMcVP&_nc_ohc=wFMI4bvDjE8AX-_ol0V&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCAdZp93J0zS-iz6WqGP6cG8L6YPaOFgiFt47ePzr2IMg&oe=65F12628"
                        />
                    </Tooltip>
                    <Tooltip title="LarryLe">
                        <Avatar
                            alt="Larryle"
                            src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/430862651_1188423722537716_5001893755688629289_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqigqL5dV-58QuFp8DsmWCxqQjD7gYvwvGpCMPuBi_C1J7dMiZOUuVSvmRAw40dhNJDnzL1Hhb0d9FegsPMcVP&_nc_ohc=wFMI4bvDjE8AX-_ol0V&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCAdZp93J0zS-iz6WqGP6cG8L6YPaOFgiFt47ePzr2IMg&oe=65F12628"
                        />
                    </Tooltip>
                </AvatarGroup>
            </Box>
        </Box>
    );
}

export default BoardBar;
