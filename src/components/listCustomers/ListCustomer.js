import React, { useEffect, useState } from 'react';
import { listCustomers } from '../../services/CustomerServices';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListCustomer = () => {
  const [Customers, setCustomers] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    listCustomers()
      .then((response) => {
        console.log(response.data); // Check data structure
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const addNewCustomer = () => {
    navigator('/add-customer');
  };

  return (
    <div className="container my-4">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-primary">List of Customers</h2>
        <button className="btn btn-success" onClick={addNewCustomer}>
          <i className="bi bi-plus-circle"></i> Add Customer
        </button>
      </div>

      {/* Table Section */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Email Id</th>
              <th>Age</th>
              <th>Aadhaar Number</th>
              <th>Id</th>
            </tr>
          </thead>
          <tbody>
            {Customers.length > 0 ? (
              Customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.name}</td>
                  <td>{customer.mobile}</td>
                  <td>{customer.emailId}</td>
                  <td>{customer.age}</td>
                  <td>{customer.aadhaarNumber}</td>
                  <td>{customer.id}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No customers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListCustomer;
