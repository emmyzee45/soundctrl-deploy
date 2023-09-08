// @mui
import { Box, Button, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  overflow: "hidden",
  padding: theme.spacing(10, 10),
  backgroundColor: "common.white",
}));

export default function BookArtist() {
  return (
    <ContentStyle>
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
    </ContentStyle>
  );
}
