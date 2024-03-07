import Button from "@mui/material/Button";

import HomeIcon from "@mui/icons-material/Home";

import Typography from "@mui/material/Typography";
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    useColorScheme,
} from "@mui/material";
import {
    LightMode as LightModeIcon,
    DarkModeOutlined as DarkModeIcon,
    SettingsBrightness as SettingIcon,
} from "@mui/icons-material";

function App() {
    function SelectSmall() {
        const { mode, setMode } = useColorScheme();
        const handleChange = (event) => {
            setMode(event.target.value);
        };

        return (
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
                <Select
                    labelId="label-select-dark-light-mode"
                    id="select-dark-light-mode"
                    value={mode}
                    label="Mode"
                    onChange={handleChange}
                >
                    <MenuItem value="light">
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            <LightModeIcon />
                            Light
                        </Box>
                    </MenuItem>
                    <MenuItem value="dark">
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            <DarkModeIcon />
                            Dark
                        </Box>
                    </MenuItem>
                    <MenuItem value="system">
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            <SettingIcon />
                            System
                        </Box>
                    </MenuItem>
                </Select>
            </FormControl>
        );
    }

    function ModeToggle() {
        const { mode, setMode } = useColorScheme();

        return (
            <Button
                onClick={() => {
                    setMode(mode === "light" ? "dark" : "light");
                }}
            >
                {mode === "light" ? "Turn dark" : "Turn light"}
            </Button>
        );
    }

    return (
        <>
            <SelectSmall></SelectSmall>
            <ModeToggle></ModeToggle>
            <hr />
            <Typography variant="body2" color={"text.secondary"}>
                Test Typo
            </Typography>
            <Button variant="contained">Hello world</Button>
            <HomeIcon color="primary" />
            <HomeIcon color="secondary" />
            <HomeIcon color="success" />
            <HomeIcon color="action" />
            <HomeIcon color="disabled" />
        </>
    );
}

export default App;
