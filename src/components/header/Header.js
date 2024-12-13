import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Tabs, Tab, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledTypography = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  cursor: 'pointer',
  color: '#FFFFFF', // White color for contrast against black background
});

const Header = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: '#000000', padding: '0.5rem 2rem' }} position="static">
        <Toolbar>
          {/* Branding */}
          <StyledTypography onClick={() => handleNav('/')}
            sx={{ color: '#FFFFFF' }}
          >
            Customer Management System
          </StyledTypography>

          {/* Tabs for navigation */}
          <Tabs
            sx={{ marginLeft: '50px', flexGrow: 1 }}
            textColor="inherit"
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
            TabIndicatorProps={{ style: { backgroundColor: '#FFFFFF' } }}
          >
            <Tab label="Customer Details" onClick={() => handleNav('/customer-details')} sx={{ color: '#FFFFFF' }} />
            <Tab label="Reports" onClick={() => handleNav('/reports')} sx={{ color: '#FFFFFF' }} />
            <Tab label="Profile" onClick={() => handleNav('/profile')} sx={{ color: '#FFFFFF' }} />
          </Tabs>

          {/* Buttons for actions */}
          <Box>
            <Button
              sx={{
                marginLeft: 'auto',
                backgroundColor: '#333333',
                color: '#FFFFFF',
                '&:hover': { backgroundColor: '#555555', color: '#FFFFFF' },
              }}
              variant="contained"
              onClick={() => handleNav('/login')}
            >
              Login
            </Button>

            <Button
              sx={{
                marginLeft: '10px',
                backgroundColor: '#333333',
                color: '#FFFFFF',
                '&:hover': { backgroundColor: '#555555', color: '#FFFFFF' },
              }}
              variant="contained"
              onClick={() => handleNav('/reg')}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
