import React, { useEffect, useState } from 'react'
import { listCustomers } from '../../services/CustomerServices'
import "./ListCustomer.css"
import { useNavigate } from 'react-router-dom'
const ListCustomer = () => {

     const [ Customers , setCustomers] = useState([])
     const navigator = useNavigate();

     useEffect(()=> {
        listCustomers().then((response)=> {
                setCustomers(response.data);

        }).catch(error => {
            console.error(error)
        }
        )

     },[])
        const addNewCustomer = ()=> {

            navigator('/add-customer')

        }
 
  return (
    <div>
        
        
        <button className='btn btn-primary' onClick={addNewCustomer}>Add Customer</button>
        
            
      <h2>
        List of Customers
      </h2>
      <table >
        <thead>
            <tr>
                <th> Name</th>
                <th> mobile number </th>
                <th> email Id</th>
                <th> Age</th>
                <th> aadhaarNumber</th>
                <th> Id</th>
                

            </tr>
        </thead>
        <tbody>
            {
                Customers.map(customer =>(
                    <tr key={customer.id}>
                        <td>
                            {customer.name}
                        </td>

                        <td>
                            {customer.mobile}
                        </td>

                        <td>
                            {customer.emailId}
                        </td>
                        <td>
                            {customer.age}
                        </td>

                        <td>
                            {customer.aadhaarNumber}
                        </td>
                        <td>
                            {customer.id}
                        </td>




                    </tr>
                ))

            }
           
        </tbody>


      </table>
    
    </div>
  )
}

export default ListCustomer
