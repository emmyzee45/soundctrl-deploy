// @mui
import { Button, Typography, Stack } from "@mui/material";
import SectionContainer from "layouts/main/SectionContainer";

export default function BookArtist() {
  return (
    <SectionContainer>
      <Stack direction={{ xs: "column", md: "row" }} justifyContent='space-between'>
        <Stack spacing={2}>
          <Typography variant='h2' sx={{ color: "common.black" }}>
            Book Time
          </Typography>
          <Button variant='outlined' sx={{ color: "common.black", borderColor: "common.black" }}>
            Enter
          </Button>
        </Stack>
        <Typography variant='h3' sx={{ color: "common.black", width: "35ch", fontWeight: 400 }}>
          Experience a private one on one video conversation with your favorite artist.
        </Typography>
      </Stack>
    </SectionContainer>
  );
}
