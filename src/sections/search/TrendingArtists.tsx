import { Grid, Typography } from "@mui/material";
import { ArtistCommunityCard } from "components/cards";
// @mui
import { styled } from "@mui/material/styles";
import { COMMUNITYCARDS } from "data";
import { useAppSelector } from "../../redux/hooks";
import { ArtistProps, UserProps } from "@types";

const ContentStyle = styled("div")(({ theme }) => ({
  // overflow: "hidden",
  position: "relative",
  backgroundColor: "common.white",
  padding: theme.spacing(2, 10),
}));

type ArtistListProps = {
  trending: ArtistProps[]
}

export default function TrendingArtists({trending}: ArtistListProps) {

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
        {trending.slice(0,6).map((card, index) => (
          <Grid item key={index}>
            <ArtistCommunityCard avatarImg={card.avatarImg} username={card.username} />
          </Grid>
        ))}
      </Grid>
    </ContentStyle>
  );
}
