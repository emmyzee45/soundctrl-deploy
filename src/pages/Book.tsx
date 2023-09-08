// @mui
import { styled } from "@mui/material/styles";

// sections
import { BookArtist, BookingHero, ExploreChat } from "../sections/book";

// ---------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
}));

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
}));

// ----------------------------------------------------------------------

export default function Book() {
  return (
    <RootStyle>
      <BookingHero />
      <ContentStyle>
        <BookArtist />
        <ExploreChat />
      </ContentStyle>
    </RootStyle>
  );
}
