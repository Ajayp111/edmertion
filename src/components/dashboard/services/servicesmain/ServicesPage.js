import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AspiralGptpage from "../aspiralgpt/AspiralGpt";
import CourseNetAIpage from "../coursenetai/CourseNetAi";
import VidyaGrantpage from "../vidyagrant/VidyaGrant";
import Finastrapage from "../finastra/Finastra";

const ServicesPage = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
          <TabList onChange={handleChange} sx={{ marginBottom: 2 }}>
            <Tab label="AspiralGpt" value="1" />
            <Tab label="CourseNetAI" value="2" />
            <Tab label="VidyaGrant" value="3" />
            <Tab label="Finastra" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <AspiralGptpage />
        </TabPanel>
        <TabPanel value="2">
          <CourseNetAIpage />
        </TabPanel>
        <TabPanel value="3">
          <VidyaGrantpage />
        </TabPanel>
        <TabPanel value="4">
          <Finastrapage />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ServicesPage;
