import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null);
  const {signIn, setLoading} = useContext(AuthContext);
  const formNavigate = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      form.reset();
      if(user.emailVerified){
        navigate(formNavigate, {replace: true});
      }else{
        toast.error('Your email is not verified. Please check your email and verify!!!')
      }
    })
    .catch((e) => {
      const eMessage = e.message;
      setError(eMessage);
    })
    .finally(() => {
      setLoading(false);
    })
  }
  return (
    <Form onSubmit={handleLogin}>
      <h1 style={{textAlign: 'center'}}>Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required/>
      </Form.Group>
      <p className='text-danger'>{error}</p>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p style={{textAlign: 'center'}}>New user? <Link to='/register'>Register</Link></p>
    </Form>
  );
};

export default Login;
