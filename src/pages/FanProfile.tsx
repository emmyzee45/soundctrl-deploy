// @mui
import { styled } from "@mui/material/styles";
import { useAppSelector } from "../redux/hooks";
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
  const user = useAppSelector((state) => state.user.currentUser);
  return (
    <RootStyle>
      <FanProfileHero/>
      <ProfileSummary {...user} />
      <Fandoms />
      <TimeTickets />
      <Favorites />
      <Hated />
    </RootStyle>
  );
}
