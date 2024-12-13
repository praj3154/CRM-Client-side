import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        padding: '1rem 2rem',
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2" sx={{ fontSize: '1rem' }}>
        All rights reserved 2024 by Prajwal Bahekar
      </Typography>
    </Box>
  );
};

export default Footer;
