// @mui
import { styled } from "@mui/material/styles";
import { BookTicket, BookTimeDetails, BookTimeHero } from "sections/book-time";
// sections

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
}));

export default function BookTime() {
  return (
    <RootStyle>
      <BookTimeHero />
      <BookTimeDetails />
      <BookTicket />
    </RootStyle>
  );
}
