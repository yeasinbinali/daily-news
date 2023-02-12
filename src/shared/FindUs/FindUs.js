import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaFacebook,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h5>Find us on</h5>
      <ListGroup>
        <ListGroup.Item className="mb-2">
          <FaFacebook /> Facebook
        </ListGroup.Item>
        <ListGroup.Item className="mb-2">
          <FaWhatsapp /> Whatsapp
        </ListGroup.Item>
        <ListGroup.Item className="mb-2">
          <FaTwitter /> Twitter
        </ListGroup.Item>
        <ListGroup.Item className="mb-2">
          <FaTwitch /> Twitch
        </ListGroup.Item>
        <ListGroup.Item className="mb-2">
          <FaYoutube /> Youtube
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default FindUs;
