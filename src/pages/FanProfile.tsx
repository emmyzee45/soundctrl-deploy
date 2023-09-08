// @mui
import { styled } from "@mui/material/styles";
import {
  FanProfileHero,
  Fandoms,
  Favorites,
  Hated,
  ProfileSummary,
  TimeTickets,
} from "sections/fan-profile";
// sections

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
}));

export default function FanProfile() {
  return (
    <RootStyle>
      <FanProfileHero />
      <ProfileSummary />
      <Fandoms />
      <TimeTickets />
      <Favorites />
      <Hated />
    </RootStyle>
  );
}
