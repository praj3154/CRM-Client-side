import React from 'react'
import { Container } from 'react-bootstrap';
import "./entry.style.css"
import Login from '../../components/login/Login';
import { useState } from 'react';
function Entry() {
const [email , setEmail] = useState('');
const [password, setPassword] = useState('');

const handleOnChange = e  =>{
const {name, value } =e.target

switch(name) {
case'email':
setEmail(value);
break
case'password':
setPassword(value);
break
default:
    break



}

const handleOnSubmit = e=> {
e.preventDefault()

}

}
  return (
    <div className='enrty-page bg-info'>
        <Container className="  p-5 my-5 bg-light rounded   frombox">
        <Login handleOnChange = {handleOnChange} 
        email = {email}
        pass = {password}/>
        </Container>
    </div>
  )
}

export default Entry
