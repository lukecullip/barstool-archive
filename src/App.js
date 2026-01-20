import React, { useEffect, useState } from "react";
import ArticleList from "./ArticleList";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch(
          "https://www.jalirani.com/files/barstool.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        console.log("Raw data from barstool.json:", data);

        setArticles(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load articles.");
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading articles...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Barstool Archive</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;