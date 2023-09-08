// @mui
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack } from "@mui/material";
// components

import { ArtistCard } from "components/cards";
import { CARDS } from "data";

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(2, 5),
  backgroundColor: "rgba(248, 248, 248, 1)",
}));

// ----------------------------------------------------------------------

export default function Trending() {
  return (
    <ContentStyle>
      <Container>
        <Stack justifyContent='space'>
          <Typography variant='h2' sx={{ color: "common.black", fontWeight: 700 }}>
            Trending Creators
          </Typography>
        </Stack>
        <Box
          sx={{
            display: "grid",
            mt: 5,
            gap: { xs: 5, lg: 10 },
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(3, 1fr)",
            },
          }}
        >
          {CARDS.map((card, index) => (
            <ArtistCard
              key={index}
              image={card.image}
              avatar={card.avatar}
              name={card.name}
              handle={card.handle}
            />
          ))}
        </Box>
      </Container>
    </ContentStyle>
  );
}
