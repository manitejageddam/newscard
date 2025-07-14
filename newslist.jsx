import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./newscar";
import "./styles.css";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_NEWSAPI_KEY`
      );
      setArticles(response.data.articles);
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1>Latest News</h1>
      {articles.map((article, index) => (
        <NewsCard
          key={index}
          title={article.title}
          description={article.description}
          url={article.link}
          Image={article.url}
        />
      ))}
    </div>
  );
};

export default NewsList;
