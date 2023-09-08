import { styled } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";
import { FansCard } from "components/cards";
import { FANCARDS } from "data";

const ContentStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(10, 8),
  backgroundColor: "rgba(248, 248, 248, 1)",
  margin: "auto",
  overflow: "hidden",
}));

export default function Fans({}) {
  return (
    <ContentStyle>
      <Typography
        variant='h3'
        sx={{
          color: "common.black",
          textTransform: "uppercase",
          fontWeight: "bold",
          fontFamily: "Dela Gothic One, cursive",
        }}
      >
        Top Fans of the Week
      </Typography>
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
