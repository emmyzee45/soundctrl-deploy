import { styled } from "@mui/material/styles";
import { Typography, Grid, Stack } from "@mui/material";
import { FansCard } from "components/cards";
import { FANCARDS } from "data";

const ContentStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(10, 8),
  backgroundColor: "rgba(248, 248, 248, 1)",
  margin: "auto",
  overflow: "hidden",
}));

export default function Favorites() {
  return (
    <ContentStyle>
      <Stack spacing={1} direction='row'>
        <Typography
          variant='h3'
          sx={{
            color: "common.black",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          Favorite Fandoms
        </Typography>
        <Typography
          variant='h3'
          sx={{
            color: "rgba(253, 147, 76, 1)",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          Top 4
        </Typography>
      </Stack>
      <Grid container spacing={3} sx={{ justifyContent: "center", mt: 5 }}>
        {FANCARDS.map((card, index) => (
          <Grid item key={index}>
            <FansCard
              index={index}
              avatar={card.avatar}
              handle={card.handle}
              count={card.count}
              fandom={card.fandom}
            />
          </Grid>
        ))}
      </Grid>
    </ContentStyle>
  );
}
