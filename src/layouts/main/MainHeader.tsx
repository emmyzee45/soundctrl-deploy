import { useLocation } from "react-router-dom";
// @mui
import { styled, useTheme } from "@mui/material/styles";
import { Box, Button, AppBar, Toolbar, Container, Link } from "@mui/material";
// hooks
import useOffSetTop from "../../hooks/useOffSetTop";
import useResponsive from "../../hooks/useResponsive";
// utils
import cssStyles from "../../utils/cssStyles";
// config
import { HEADER } from "../../config";
// components
import { Logo } from "../../assets/";
import Image from "../../components/Image";
//
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import navConfig from "./MenuConfig";
import { useContext } from "react";
import { AuthContext } from "contexts/JWTContext";

// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("md")]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled("div")(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: "auto",
  borderRadius: "50%",
  position: "absolute",
  width: `calc(100% - 48px)`,
  // boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export default function MainHeader() {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);

  const theme = useTheme();

  const { pathname } = useLocation();

  const isDesktop = useResponsive("up", "md");

  const isHome = pathname === "/";

  const authContext = useContext(AuthContext);

  const authenticated = authContext?.isAuthenticated;

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: "transparent" }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image src={Logo} alt='logo' />
          <Box sx={{ flexGrow: 1 }} />

          {/* {isDesktop && <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />} */}

          {authenticated ? (
            <>
              <Link href='/'>Home</Link>
              <Link href='/trending'>Explore</Link>
              <Link href='/chat'>Superfan Chat</Link>
              <Link href='/profile'>Profile</Link>
              <Link onClick={() => authContext?.logout}>LOG OUT</Link>
            </>
          ) : (
            <>
              <Link href='/login'>LOG IN</Link>
              <Link href='/register'>SIGN UP</Link>
            </>
          )}

          {/* {!isDesktop && <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />} */}
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
