// @mui
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { FandomCard } from "components/cards";
// components

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  overflow: "hidden",
  padding: theme.spacing(10, 10),
}));

export default function Subscriptions() {
  return (
    <ContentStyle>
      <Grid>
        <FandomCard />
        <FandomCard />
        <FandomCard />
        <FandomCard />
        <FandomCard />
        <FandomCard />
      </Grid>
    </ContentStyle>
  );
}
