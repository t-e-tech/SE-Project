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
        
            <div className="container-fluid">
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example" >
                        <Tab value="one" label="ที่ยังไม่ได้จัดส่ง"/>
                        <Tab value="two" label="จัดส่งแล้ว" />
                        <Tab value="three" label="สำเร็จ" />
                    </Tabs>
                </Box>
                
            </div>
            
        
    );
}