import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Image from "react-bootstrap/Image";
import { FaUser } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
    .then(() => {})
    .catch((error) => console.error(error))
  }
  return (
    <div className="mb-4">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            Daily News
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">All News</Nav.Link>
            </Nav>
            <Nav className='d-flex align-items-center'>
              {user?.uid ? 
              <><Nav.Link>{user?.displayName}</Nav.Link> <Button onClick={handleLogout} variant="light">Logout</Button></>
              : <><Link style={{textDecoration: 'none'}} to='/login'>Login</Link><Link style={{textDecoration: 'none'}} to='/register'>Register</Link></>
            }
              <Nav.Link>
                {user?.photoURL ? (
                  <Image
                    style={{ height: "30px" }}
                    roundedCircle
                    src={user?.photoURL}
                  ></Image>
                ) : (
                  <FaUser />
                )}
              </Nav.Link>
            </Nav>
            <div className="d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
