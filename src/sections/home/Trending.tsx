// @mui
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack } from "@mui/material";
// components

import { ArtistCard } from "components/cards";
import { CARDS } from "data";
import { useAppSelector } from "../../redux/hooks";

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(2, 5),
  backgroundColor: "rgba(248, 248, 248, 1)",
}));

// ----------------------------------------------------------------------

export default function Trending() {
  const artists = useAppSelector((state) => state.artist.artists);
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
          {artists.slice(0,6).map((card, index) => (
            <ArtistCard
              key={index}
              bannerImg={card.bannerImg}
              avatarImg={card.avatarImg}
              username={card.username}
            />
          ))}
        </Box>
      </Container>
    </ContentStyle>
  );
}
