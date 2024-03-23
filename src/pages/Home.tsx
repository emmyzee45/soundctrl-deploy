// @mui
import { styled } from "@mui/material/styles";
// sections
import { HomeHero, Questions, Subscribe, Trending } from "../sections/home";
import { useEffect } from "react";
import { makeRequest } from "utils/axios";
import { useAppDispatch } from "../redux/hooks";
import { getArtistsSucces, getArtistsStart, getArtistsFailure } from "../redux/redux-slices/ArtistSlice";
import { getFansFailure, getFansStart, getFansSuccess } from "../redux/redux-slices/FansSlice";

// ---------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "rgba(248, 248, 248, 1)",
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    const getArtists = async() => {
      dispatch(getArtistsStart())
      try {
        const res = await makeRequest.get("/users/artist");
        console.log(res.data)
        dispatch(getArtistsSucces(res.data))
      }catch(err) {
        dispatch(getArtistsFailure())
        console.log(err);
      }
    }
    getArtists();
  },[])

  useEffect(() => {
    const getFans = async() => {
      dispatch(getFansStart())
      try {
        const res = await makeRequest.get("/users/fans");
        console.log(res.data)
        dispatch(getFansSuccess(res.data));
      }catch(err) {
        console.log(err);
        dispatch(getFansFailure())
      }
    }
    getFans();
  }, [])

  return (
    <RootStyle>
      <HomeHero />
      <Trending />
      <Questions />
      <Subscribe />
    </RootStyle>
  );
}
