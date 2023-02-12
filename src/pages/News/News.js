import React from "react";
import { useLoaderData } from "react-router";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  const { title, image_url, details, rating, author, category_id } = news;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="d-flex justify-content-between p-2">
          <div>
            <p>
              <small>
                <b>Author:</b> {author.name}
              </small>
            </p>
          </div>
          <div>
            <p>
              <small>
                <b>Published Date:</b> {author.published_date}
              </small>
            </p>
          </div>
          <div>
            <FaStar className="text-warning me-2" />
            <span>
              <small>{rating.number}</small>
            </span>
          </div>
        </div>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">All news in this category</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
