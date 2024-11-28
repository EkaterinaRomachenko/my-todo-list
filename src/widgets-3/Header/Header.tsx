import { FC } from 'react';
import logo from '../../shared-6/assets/images/logo.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import SwitchTheme from '../../features-4/SwitchTheme';
import { Typography } from '@mui/material';

const Header: FC = () => {
  return (
    <header style={{ padding: '20px 0 0' }}>
      <Box
        sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        margin={{ md: '0 60px', xs: '0 20px' }}
      >
        <Grid container spacing={{ xs: 1, md: 2 }} alignItems={'center'}>
          <Box
            component="img"
            src={logo}
            alt="Логотип"
            sx={{
              width: {
                xs: '80px',
                md: '110px',
              },
              height: {
                xs: '80px',
                md: '110px',
              },
              objectFit: 'contain',
            }}
          />
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              textTransform: 'uppercase',
              color: 'var(--text-color)',
            }}
          >
            my todo list
          </Typography>
        </Grid>
        <Grid container spacing={{ xs: 1, md: 2 }} display={'flex'} alignItems={'center'} gap={3}>
          <Typography
            component="p"
            sx={{
              fontSize: { xs: '1rem', md: '1.5rem' },
              color: 'var(--text-color)',
              textDecoration: 'underline',
              cursor: 'pointer',
              '&:hover': {
                color: 'var(--text-color-hover)',
              },
            }}
          >
            Demo
          </Typography>
          <SwitchTheme />
        </Grid>
      </Box>
    </header>
  );
};

export default Header;
