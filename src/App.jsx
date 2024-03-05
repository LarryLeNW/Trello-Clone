import Button from "@mui/material/Button";

import HomeIcon from "@mui/icons-material/Home";

function App() {
    return (
        <>
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
