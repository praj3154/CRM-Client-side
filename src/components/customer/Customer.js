import React, { useEffect, useState } from "react";
import { createCustomer, getCustomer, updateCustomer } from "../../services/CustomerServices";
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Button, Box, Typography, Card, CardContent, Stack } from "@mui/material";

const Customer = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [emailId, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [aadhaarNumber, setAadhar] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    emailId: "",
    age: "",
    aadhaarNumber: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getCustomer(id)
        .then((response) => {
          setName(response.data.name);
          setMobile(response.data.mobile);
          setEmail(response.data.emailId);
          setAge(response.data.age);
          setAadhar(response.data.aadhaarNumber);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "mobile":
        setMobile(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "age":
        setAge(value);
        break;
      case "aadhar":
        setAadhar(value);
        break;
      default:
        break;
    }
  };

  const saveOrUpdateCustomer = (e) => {
    e.preventDefault();
    if (validate()) {
      const customer = { name, mobile, emailId, age, aadhaarNumber };

      if (id) {
        const updatedCustomer = { name, mobile, emailId, age, aadhaarNumber, id };
        updateCustomer(updatedCustomer)
          .then((response) => {
            console.log(response.data);
            navigate("/customer-details");
          })
          .catch((error) => {
            console.error("Error updating customer:", error);
            alert("Error updating customer: " + error.message);
          });
      } else {
        createCustomer(customer)
          .then((response) => {
            navigate("/customer-details");
          })
          .catch((error) => {
            console.error("Error creating customer:", error);
            alert("Error creating customer: " + error.message);
          });
      }
    }
  };

  const validate = () => {
    let valid = true;
    const errorsCopy = { ...errors };

    if (!name.trim()) {
      errorsCopy.name = "Customer Name is required";
      valid = false;
    } else {
      errorsCopy.name = "";
    }

    if (!mobile.trim()) {
      errorsCopy.mobile = "Customer Mobile Number is required";
      valid = false;
    } else {
      errorsCopy.mobile = "";
    }

    if (!emailId.trim()) {
      errorsCopy.emailId = "Customer Email ID is required";
      valid = false;
    } else {
      errorsCopy.emailId = "";
    }

    if (!age || age <= 0) {
      errorsCopy.age = "Customer Age is required";
      valid = false;
    } else {
      errorsCopy.age = "";
    }

    if (!aadhaarNumber.trim()) {
      errorsCopy.aadhaarNumber = "Customer Aadhar Number is required";
      valid = false;
    } else {
      errorsCopy.aadhaarNumber = "";
    }

    setErrors(errorsCopy);
    return valid;
  };

  const pageTitle = () => {
    return id ? (
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "2rem" }}>
        Update Customer
      </Typography>
    ) : (
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "2rem" }}>
        Add Customer
      </Typography>
    );
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
          {pageTitle()}
          <form onSubmit={saveOrUpdateCustomer}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Customer Name"
                name="name"
                value={name}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ style: { color: "#FFFFFF" } }}
                error={!!errors.name}
                helperText={errors.name}
                sx={{
                  backgroundColor: "#444444",
                  input: { color: "#FFFFFF" },
                  label: { color: "#FFFFFF" },
                }}
              />
              <TextField
                fullWidth
                label="Customer Mobile"
                name="mobile"
                value={mobile}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ style: { color: "#FFFFFF" } }}
                error={!!errors.mobile}
                helperText={errors.mobile}
                sx={{
                  backgroundColor: "#444444",
                  input: { color: "#FFFFFF" },
                  label: { color: "#FFFFFF" },
                }}
              />
              <TextField
                fullWidth
                label="Customer Email"
                name="email"
                value={emailId}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ style: { color: "#FFFFFF" } }}
                error={!!errors.emailId}
                helperText={errors.emailId}
                sx={{
                  backgroundColor: "#444444",
                  input: { color: "#FFFFFF" },
                  label: { color: "#FFFFFF" },
                }}
              />
              <TextField
                fullWidth
                label="Customer Age"
                name="age"
                value={age}
                onChange={handleChange}
                variant="outlined"
                type="number"
                InputLabelProps={{ style: { color: "#FFFFFF" } }}
                error={!!errors.age}
                helperText={errors.age}
                sx={{
                  backgroundColor: "#444444",
                  input: { color: "#FFFFFF" },
                  label: { color: "#FFFFFF" },
                }}
              />
              <TextField
                fullWidth
                label="Customer Aadhar Number"
                name="aadhar"
                value={aadhaarNumber}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ style: { color: "#FFFFFF" } }}
                error={!!errors.aadhaarNumber}
                helperText={errors.aadhaarNumber}
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
                {id ? "Update Customer" : "Add Customer"}
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Customer;
