import React, { useState } from "react";
import { TextField, Button, Box, Typography, Card, CardContent, Stack } from "@mui/material";
import { logIn } from "../../services/CustomerServices";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  const loginUser = (e) => {
    e.preventDefault();
    const user = { username, password };
    logIn(user)
    .then((res) => {
      if (res.data && res.data.jwtToken) {
        console.log(res.data);

        
        localStorage.setItem("token", JSON.stringify(res.data.jwtToken));
        alert("Log in Success");
        navigate("/");
      } else {
        alert("Login failed: Invalid response from server.");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Login failed: " + error.message);
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
            Login
          </Typography>
          <form onSubmit={loginUser}>
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
                Log In
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignIn;
