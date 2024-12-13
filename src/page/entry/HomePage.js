import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
          Welcome to Customer Management System
        </Typography>
        <Typography variant="h6" sx={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          Manage your customers efficiently with our seamless platform.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#4CAF50',
            color: '#FFFFFF',
            '&:hover': { backgroundColor: '#45A049' },
          }}
          href="/reg"
        >
          Get Started
        </Button>
      </Box>

      {/* Features Section */}
      <Grid container spacing={4} sx={{ maxWidth: '1200px', marginBottom: '2rem' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#333333', color: '#FFFFFF' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Customer Details
              </Typography>
              <Typography>
                Store and access all your customer information in one place with ease.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#333333', color: '#FFFFFF' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Reports
              </Typography>
              <Typography>
                Generate insightful reports to help you make informed decisions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#333333', color: '#FFFFFF' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                User Profile
              </Typography>
              <Typography>
                Manage your profile and account settings effortlessly.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      
      <Box component="footer" sx={{ textAlign: 'center', padding: '1rem' }}>
        <Typography variant="body2">
         
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
