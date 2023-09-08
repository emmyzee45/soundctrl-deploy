// @mui
import { styled } from "@mui/material/styles";
// sections
import { Fans, SearchForm, Trending } from "../sections/search";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
}));

// ----------------------------------------------------------------------

export default function Search() {
  return (
    <RootStyle>
      <SearchForm />
      <Trending />
      <Fans />
    </RootStyle>
  );
}
