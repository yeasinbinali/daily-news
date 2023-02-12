import { GoogleAuthProvider } from "@firebase/auth";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import FindUs from "../FindUs/FindUs";

const RightSideNav = () => {
  const {providerLogin} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => console.error(error))
  }
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle/> Login Google</Button>
        <Button variant="outline-dark"><FaGithub/> Login Github</Button>
      </ButtonGroup>
      <div className='mt-4'>
          <FindUs></FindUs>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
