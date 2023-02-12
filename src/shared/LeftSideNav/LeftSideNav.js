import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [newsCategories, setNewsCategories] = useState([]);
  useEffect(() => {
    fetch("https://daily-news-server-ten.vercel.app/news-categories")
      .then((res) => res.json())
      .then((data) => setNewsCategories(data));
  }, []);
  return (
    <div>
      {newsCategories.map((newsCategory) => (
        <p key={newsCategory.id}>
          <Link to={`/category/${newsCategory.id}`}>{newsCategory.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
