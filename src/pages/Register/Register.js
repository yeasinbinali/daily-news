import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Register = () => {
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState(null);
  const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user)
      form.reset();
      handleUserProfile(name, photoURL)
      handleEmailVerification();
      toast.success('Please, check your email and verify')
    })
    .catch((e) => {
      const eMessage = e.message;
      setError(eMessage);
    })
  }

  const handleUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    }
    updateUserProfile(profile)
    .then(() => {})
    .catch((error) => console.error(error))
  }

  const handleChecked = event => {
    setAccepted(event.target.checked);
  }

  const handleEmailVerification = () => {
    verifyEmail()
    .then(() => {})
    .catch((error) => console.error(error))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1 style={{textAlign: 'center'}}>Register</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" onClick={handleChecked} label={<>Accept <Link to='/terms'>Terms and conditions</Link></>} />
      </Form.Group>
      <p className='text-danger'>{error}</p>
      <Button variant="primary" disabled={!accepted} type="submit">
        Register
      </Button>
      <p style={{textAlign: 'center'}}>Already registered? <Link to='/login'>Login</Link></p>
    </Form>
  );
};

export default Register;
