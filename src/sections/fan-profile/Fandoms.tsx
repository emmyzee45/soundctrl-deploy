// @mui
import { styled } from "@mui/material/styles";
import { Typography, Stack } from "@mui/material";
import { FandomCard } from "components/cards";
// components

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  overflow: "hidden",
  padding: theme.spacing(10, 10),
  backgroundColor: "rgba(248, 248, 248, 1)",
}));

export default function Fandoms() {
  return (
    <ContentStyle>
      <Typography
        variant='h3'
        sx={{ color: "common.black", fontWeight: 700, textTransform: "uppercase" }}
      >
        Proof of Fandoms
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent='space-between'
        sx={{ marginBlock: 5 }}
      >
        <FandomCard />
        <FandomCard />
        <FandomCard />
      </Stack>
    </ContentStyle>
  );
}
