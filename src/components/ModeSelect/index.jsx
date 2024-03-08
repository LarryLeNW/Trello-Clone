import {
    LightMode as LightModeIcon,
    DarkModeOutlined as DarkModeIcon,
    SettingsBrightness as SettingIcon,
} from "@mui/icons-material";

import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    useColorScheme,
} from "@mui/material";

function ModeSelect() {
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

export default ModeSelect;
