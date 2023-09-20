// @mui
import { Typography, Tabs, Tab, Box, Stack, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Dashboard, Earnings, Fans } from "sections/artist-dashboard";
import TimeTickets from "sections/artist-dashboard/TimeTickets";
import ArtistSettings from "./ArtistSettings";

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  padding: theme.spacing(10, 10),
  backgroundColor: "rgba(248, 248, 248, 1)",
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default function ArtistDashboard() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <RootStyle>
      <Box sx={{ display: "grid", gridTemplateColumns: ".5fr 3.5fr" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='dashboard tab'
            orientation='vertical'
          >
            <Tab label='Overview' {...a11yProps(0)} />
            <Tab label='Dashboard' {...a11yProps(1)} />
            <Tab label='My Bookings' {...a11yProps(2)} />
            <Tab label='My Fans' {...a11yProps(3)} />
            <Tab label='Earnings' {...a11yProps(4)} />
            <Tab label='Settings' {...a11yProps(5)} />
          </Tabs>
        </Box>

        <Box>
          <CustomTabPanel value={value} index={0}>
            hi
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Dashboard />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <TimeTickets />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <Fans />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <Earnings />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            <ArtistSettings />
          </CustomTabPanel>
        </Box>
      </Box>
    </RootStyle>
  );
}
