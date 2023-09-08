// @mui
import { styled } from "@mui/material/styles";
import { Button, Box, Container, Typography, Tabs, Tab, Stack } from "@mui/material";
import { AcceptedTicketCard, FandomCard, TicketCard } from "components/cards";
import { useState } from "react";
// components

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  overflow: "hidden",
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

export default function TimeTickets() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ContentStyle>
      <Typography variant='h3' sx={{ color: "common.black", fontWeight: 700 }}>
        MY TIME TICKETS
      </Typography>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label='ticket tabs '>
          <Tab label='Hold' {...a11yProps(0)} />
          <Tab label='Used' {...a11yProps(1)} />
          <Tab label='Upcoming' {...a11yProps(2)} />
        </Tabs>

        <CustomTabPanel value={value} index={0}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <AcceptedTicketCard />
            <AcceptedTicketCard />
            <TicketCard />
            <TicketCard />
          </Stack>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Used
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Upcoming
        </CustomTabPanel>
      </Box>
    </ContentStyle>
  );
}
