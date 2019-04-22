import { useState, useEffect } from "react";

const API_KEY = "82bc2e7cce2646248b255090955bbc90";

export function useNewsArticles() {
  const headlines = [
    { title: "First title", url: "https://news.com/first-title" },
    { title: "Second title", url: "https://news.com/second-title" },
    { title: "Third title", url: "https://news.com/third-title" },
    { title: "Fourth title", url: "https://news.com/fourth-title" }
  ];

  const [loading, setLoading] = useState(true);

  useEffect(
    //Determines how the hook will run
    // the effect
    () => {
      getHeadlines();
      setLoading(false);
    },
    // the dependencies
    []
  );

  return {
    loading,
    headlines,
    error: null
  };

  function getHeadlines() {
    const url =
      "https://newsapi.org/v2/top-headlines?country=au&apiKey=${API_KEY}";
    fetch(url)
      .then(res => res.json()) //Need to wait for this to finish so we separate
      .then(res => console.log(res))
      .then(articles =>
        articles.map(article => ({
          title: article.title,
          url: article.url
        }))
      );
  }
}
