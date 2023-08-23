// @mui
import { styled } from '@mui/material/styles';
// sections
import {
  HomeHero,
  HomeMinimal,
  HomeDarkMode,
  HomeLookingFor,
  HomeAdvertisement,
  HomeCleanInterfaces,
} from '../sections/home';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <RootStyle>
      <HomeHero />
      <ContentStyle>
        <HomeMinimal />

        <HomeDarkMode />

        <HomeCleanInterfaces />

        <HomeLookingFor />

        <HomeAdvertisement />
      </ContentStyle>
    </RootStyle>
  );
}
