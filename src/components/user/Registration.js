import React, { useState } from "react";
import { reg } from "../../services/CustomerServices";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Card, CardContent, Stack } from "@mui/material";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  const registerUser = (e) => {
    e.preventDefault();
    const user = { username, password };
    reg(user)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        alert("Registration failed: " + error.message);
      });
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
      <Card sx={{ width: "400px", backgroundColor: "#333333", color: "#FFFFFF" }}>
        <CardContent>
          <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "2rem" }}>
            User Registration
          </Typography>
          <form onSubmit={registerUser}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={username}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ style: { color: "#FFFFFF" } }}
                sx={{
                  backgroundColor: "#444444",
                  input: { color: "#FFFFFF" },
                  label: { color: "#FFFFFF" },
                }}
              />
              <TextField
                fullWidth
                type="password"
                label="Password"
                name="password"
                value={password}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ style: { color: "#FFFFFF" } }}
                sx={{
                  backgroundColor: "#444444",
                  input: { color: "#FFFFFF" },
                  label: { color: "#FFFFFF" },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#4CAF50",
                  color: "#FFFFFF",
                  '&:hover': { backgroundColor: "#45A049" },
                }}
              >
                Register
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Registration;
