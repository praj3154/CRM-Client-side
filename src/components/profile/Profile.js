import React, { useState, useEffect } from "react";
import { Box, Typography, Avatar, Button, Card, CardContent, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API call to fetch profile data
    setProfile({
      name: "Prajwal",
      email: "Prajwal@gmail.com",
      mobile: "7824101243",
      address: "Chikahli Pune - 411062",
      profileImage: "https://via.placeholder.com/150",
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("You have been logged out.");
    navigate("/login");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        color: "#FFFFFF",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          width: "100%",
          backgroundColor: "#333333",
          color: "#FFFFFF",
        }}
      >
        <CardContent>
          <Stack spacing={3} alignItems="center">
            <Avatar
              src={profile.profileImage}
              alt="Profile Picture"
              sx={{ width: 100, height: 100, border: "2px solid #4CAF50" }}
            />
            <Typography variant="h5">{profile.name}</Typography>
            <Typography>Email: {profile.email}</Typography>
            <Typography>Mobile: {profile.mobile}</Typography>
            <Typography>Address: {profile.address}</Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4CAF50",
                color: "#FFFFFF",
                '&:hover': { backgroundColor: "#45A049" },
              }}
            >
              Edit Profile
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF0000",
                color: "#FFFFFF",
                '&:hover': { backgroundColor: "#CC0000" },
              }}
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfilePage;
