import React from 'react'
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'

const Login = ( {handleOnChange , email ,pass}) => {
  return (
  <Container>
<Row>
<Col>
<center>
<h1>
    Admin Login 
</h1>
</center>

<br/>

<Form>
<FormGroup>
    <FormLabel> Email Id</FormLabel>
    <FormControl
    type='email'
    name='email'
    value={email}
    onChange={handleOnChange}
    placeholder='Enter Email'
    required  />
</FormGroup>
<br/>
<FormGroup>
    <FormLabel> Password</FormLabel>
    <FormControl
    type='password'
    name='password'
    value={pass}
    onChange={handleOnChange}
    placeholder='Enter password'
    required  />
</FormGroup>
<br/>
<br/>
<Button type='submit' > Login</Button>


</Form>


</Col>

</Row>

  </Container>
  )
}

export default Login
