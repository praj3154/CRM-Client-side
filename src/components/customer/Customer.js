import React, { useState } from 'react'
import { createCustomer } from '../../services/CustomerServices';
import {useNavigate} from "react-router-dom"
const Customer = () => {
  const [name , setName]  = useState("");
  const [mobile , setMobile] = useState("");
  const[emailId , setEmail] = useState('')
  const [age , setAge] =  useState(0);
  const [aadhaarNumber , setAadhar] =useState("");
  const navigator = useNavigate();
    const handleChange = e => {
        const {name ,value} = e.target

        switch (name){
        case "name":
            setName(value);
            break;
        
        case "mobile" : 
        setMobile(value)
          break;

          case "email" : 
        setEmail(value)
          break;

          case "age" : 
        setAge(value)
          break;

          case "aadhar" : 
        setAadhar(value)
          break;
        }


    }

    const saveCustomer = (e) => {


        e.preventDefault();

        const Customer = {name, mobile,emailId,age,aadhaarNumber}

            console.log(Customer);
            createCustomer(Customer).then((response) => {
              navigator("/")
            })
           
            


    }

  return (
    <div className='container'>
      <div className='row'>
        <div className='card col-md-6  offset-md-3 offset-md-3'>
            <h2 className='text-center'> Add Customer </h2>
            <div className='card-body' >
                <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'> Customer Name</label>
                            <input
                            type='text'
                            placeholder='Enter Cutomer Name'
                            name='name'
                            value={name}
                            className='form-control'
                            onChange={handleChange}
                            ></input>

                        </div>

                        <div className='form-group mb-2'>
                        

                         <label className='form-label'> Customer Mobile Number</label>
                            <input
                            type='text'
                            placeholder='Enter Cutomer mobile'
                            name='mobile'
                            value={mobile}
                            className='form-control'
                            onChange={handleChange}
                            ></input>
                        </div>

                        <div className='form-group mb-2'>
                        

                        <label className='form-label'> Email</label>
                           <input
                           type='text'
                           placeholder='Enter Cutomer Email'
                           name='email'
                           value={emailId}
                           className='form-control'
                           onChange={handleChange}
                           ></input>
                       </div>

                       <div className='form-group mb-2'>
                        

                        <label className='form-label'> Age</label>
                           <input
                           type='number'
                           placeholder='Enter Cutomer age'
                           name='age'
                           value={age}
                           className='form-control'
                           onChange={handleChange}
                           ></input>
                       </div>

                       <div className='form-group mb-2'>
                        

                        <label className='form-label'> Aadhar number</label>
                           <input
                           type='text'
                           placeholder='Enter Cutomer aadhar'
                           name='aadhar'
                           value={aadhaarNumber}
                           className='form-control'
                           onChange={handleChange}
                           ></input>
                       </div>

                       <button className='btn btn-success' onClick={saveCustomer}>Submit</button>

                </form>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Customer
