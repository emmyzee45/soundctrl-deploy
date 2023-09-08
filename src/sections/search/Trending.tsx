import { Grid, Typography } from "@mui/material";
import { ArtistCommunityCard } from "components/cards";
// @mui
import { styled } from "@mui/material/styles";
import { COMMUNITYCARDS } from "data";

const ContentStyle = styled("div")(({ theme }) => ({
  // overflow: "hidden",
  position: "relative",
  backgroundColor: "common.white",
  padding: theme.spacing(2, 10),
}));

export default function Trending() {
  return (
    <ContentStyle>
      <Typography
        variant='h3'
        sx={{
          color: "common.black",
          width: "16ch",
          textTransform: "uppercase",
          fontWeight: "bold",
          fontFamily: "Dela Gothic One, cursive",
        }}
      >
        Trending Communities
      </Typography>
      <Grid container spacing={2} sx={{ my: 5, justifyContent: "center", width: "100%" }}>
        {COMMUNITYCARDS.map((card, index) => (
          <Grid item key={index}>
            <ArtistCommunityCard image={card.image} name={card.name} handle={card.handle} />
          </Grid>
        ))}
      </Grid>
    </ContentStyle>
  );
}
