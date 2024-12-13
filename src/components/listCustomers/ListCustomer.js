import React, { useEffect, useState } from "react";
import { deleteCustomer, listCustomers } from "../../services/CustomerServices";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ListCustomer = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchAllCustomers();
  }, []);

  const fetchAllCustomers = () => {
    listCustomers()
      .then((response) => {
        const customersList = Array.isArray(response.data) ? response.data : [];
        setCustomers(customersList);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAddCustomer = () => {
    navigate("/add-customer");
  };

  const handleUpdateCustomer = (id) => {
    navigate(`/edit-customer/${id}`);
  };

  const handleDeleteCustomer = (id) => {
    deleteCustomer(id)
      .then(() => {
        fetchAllCustomers();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box
      sx={{
        padding: "2rem",
        backgroundColor: "#000000",
        color: "#FFFFFF",
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <Typography variant="h4" sx={{ color: "#FFFFFF" }}>
          List of Customers
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#4CAF50",
            '&:hover': { backgroundColor: "#45A049" },
          }}
          onClick={handleAddCustomer}
        >
          Add Customer
        </Button>
      </Box>

      {/* Table Section */}
      <TableContainer component={Paper} sx={{ backgroundColor: "#333333" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#444444" }}>
              <TableCell sx={{ color: "#FFFFFF" }}>Name</TableCell>
              <TableCell sx={{ color: "#FFFFFF" }}>Mobile Number</TableCell>
              <TableCell sx={{ color: "#FFFFFF" }}>Email Id</TableCell>
              <TableCell sx={{ color: "#FFFFFF" }}>Age</TableCell>
              <TableCell sx={{ color: "#FFFFFF" }}>Aadhaar Number</TableCell>
              <TableCell sx={{ color: "#FFFFFF" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.length > 0 ? (
              customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell sx={{ color: "#FFFFFF" }}>{customer.name}</TableCell>
                  <TableCell sx={{ color: "#FFFFFF" }}>{customer.mobile}</TableCell>
                  <TableCell sx={{ color: "#FFFFFF" }}>{customer.emailId}</TableCell>
                  <TableCell sx={{ color: "#FFFFFF" }}>{customer.age}</TableCell>
                  <TableCell sx={{ color: "#FFFFFF" }}>{customer.aadhaarNumber}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      sx={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}
                      onClick={() => handleUpdateCustomer(customer.id)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#FF0000",
                        color: "#FFFFFF",
                        marginLeft: "1rem",
                        '&:hover': { backgroundColor: "#CC0000" },
                      }}
                      onClick={() => handleDeleteCustomer(customer.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} sx={{ color: "#FFFFFF", textAlign: "center" }}>
                  No customers found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ListCustomer;
