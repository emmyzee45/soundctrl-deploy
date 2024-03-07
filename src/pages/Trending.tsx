// @mui
import { styled } from "@mui/material/styles";
// sections
import { Fans, SearchForm, TrendingArtists } from "../sections/search";
import { useStore } from "store/store";
import { useEffect } from "react";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
}));

// ----------------------------------------------------------------------

export default function Trending() {
  const { fansData, artistsData, getFans, getArtists } = useStore();

  useEffect(() => {
    // console.log(fansData);
    // console.log(artistsData);
    // getFans();
    // getArtists();
  }, []);

  return (
    <RootStyle>
      <SearchForm />
      <TrendingArtists />
      <Fans />
    </RootStyle>
  );
}
