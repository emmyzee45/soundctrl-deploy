// @mui
import { styled } from "@mui/material/styles";
// sections
import { HomeHero, Questions, Subscribe, Trending } from "../sections/home";

// ---------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "rgba(248, 248, 248, 1)",
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <RootStyle>
      <HomeHero />
      <Trending />
      <Questions />
      <Subscribe />
    </RootStyle>
  );
}
