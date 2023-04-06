import React from "react";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";

export default function Setdescription() {
    const [value, setValue] = React.useState('');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <div className="container-fluid">
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value="one" label="Item One" />
                        <Tab value="two" label="Item Two" />
                        <Tab value="three" label="Item Three" />
                    </Tabs>
                </Box>
            </div>
        </div>
    );
}