import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from 'react-router-dom';
import { register } from '../../config/firebase'
import { useState } from 'react';


function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const login = () => {
    register(email, password, name)
    navigate('/SignIn')
  }
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
        <MDBCardBody className='px-5'>
          <h2 className=" text-center mb-5">Create an account</h2>
          <MDBInput onChange={e => (setName)(e.target.value)} wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />
          <MDBInput onChange={e => (setEmail)(e.target.value)} wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
          <MDBInput onChange={e => (setPassword)(e.target.value)} wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn onClick={login} className='mb-4 w-100 gradient-custom-4' size='lg'>Signup</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignUp;