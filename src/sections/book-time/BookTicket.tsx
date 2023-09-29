// @mui
import { Typography, Stack, Tabs, Tab, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TicketCard } from "components/cards";

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  overflow: "hidden",
  padding: theme.spacing(5, 10),
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
      style={{ paddingBlock: 15 }}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default function BookTicket() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ContentStyle>
      <Typography variant='h2' sx={{ color: "common.black" }}>
        Time tickets
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        justifyContent='space-between'
        alignItems='center'
      >
        <Box sx={{ width: "fit-content" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='time tickets tabs'
            TabIndicatorProps={{
              style: {
                backgroundColor: "rgba(253, 147, 76, .8)",
                height: "1rem",
                marginBottom: ".5rem",
              },
            }}
          >
            <Tab label='New Ticket' {...a11yProps(0)} />
            <Tab label='My Ticket' {...a11yProps(1)} />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <Stack spacing={1} direction='row' flexWrap='wrap' gap={2}>
              <TicketCard />
              <TicketCard />
              <TicketCard />
              <TicketCard />
            </Stack>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <TicketCard />
            <TicketCard />
            <TicketCard />
          </CustomTabPanel>
        </Box>
        <Stack
          spacing={2}
          sx={{
            padding: 4,
            bgcolor: "common.white",
            borderRadius: 5,
            height: "fit-content",
            width: "70%",
          }}
        >
          <Typography variant='h5' sx={{ color: "common.black" }}>
            Appointment Schedule
          </Typography>
          <Stack direction='row'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
            <Stack direction='row' spacing={2}>
              <Stack spacing={1}>
                <Button sx={{ color: "common.black" }}>8:00 - 8:45</Button>
                <Button sx={{ color: "common.black" }}>8:00 - 8:45</Button>
                <Button sx={{ color: "common.black" }}>8:00 - 8:45</Button>
                <Button sx={{ color: "common.black" }}>8:00 - 8:45</Button>
                <Button sx={{ color: "common.black" }}>8:00 - 8:45</Button>
                <Button sx={{ color: "common.black" }}>8:00 - 8:45</Button>
                <Button sx={{ color: "common.black" }}>8:00 - 8:45</Button>
                <Button sx={{ color: "common.black" }}>8:00 - 8:45</Button>
              </Stack>
            </Stack>
          </Stack>
          <Button
            variant='contained'
            sx={{
              bgcolor: "common.black",
              color: "common.white",
              boxShadow: "none",
              ":hover": {
                bgcolor: "common.black",
                color: "rgba(253, 147, 76, 1)",
              },
            }}
          >
            Book sections for 05 Aug
          </Button>
        </Stack>
      </Stack>
    </ContentStyle>
  );
}
