import React from "react";
import tipsAndArticleImage from "../images/blog/tiparticle.png"

const TipsArticles = () => {
  const articles = [
    {
      id: 1,
      tag: "Perfect | Tips",
      title: "9 Popular Travel Destinations on Sale in 2025",
      description:
        "Out of the top 10 Trending Destinations, 9 have seen an extraordinary year-over-year growth in interest. These are eight Asian locations.",
      buttonText: "Read More",
    },
    {
      id: 2,
      tag: "Tips | Travel",
      title: "How Are We Going to Travel in 2025",
      description:
        "Travel trends in 2025 show communities around the world are embracing a growing desire for more authentic travel.",
      buttonText: "Read More",
    },
    {
      id: 3,
      tag: "Stories | Tips",
      title: "Travel Stories For Now and the Future",
      description:
        "Discover inspiring travel stories that capture the essence of adventure, exploration, and cultural connections.",
      image: tipsAndArticleImage, 
      buttonText: "Read More",
    },
  ];

  return (
    <div className="container my-5">
      <div className="mb-4 d-flex justify-content-between align-items-center">
        <div>
          <h2 className="fw-bold">Tips & Article</h2>
          <p className="text-muted">
            Explore expert advice, insightful travel guides, and helpful tips to make your next journey unforgettable.
          </p>
        </div>
        <button className="btn btn-dark">View more</button>
      </div>

      <div className="row g-4">
        {/* Left Articles */}
        <div className="gap-4 col-md-6 d-flex flex-column">
          {articles.slice(0, 2).map((article) => (
            <div
              key={article.id}
              className="p-4 rounded shadow-sm"
              style={{ backgroundColor: "#fff", border: "1px solid #eaeaea" }}
            >
              <small className="text-muted">{article.tag}</small>
              <h5 className="mt-2 fw-bold">{article.title}</h5>
              <p className="text-muted">{article.description}</p>
              <button className="btn btn-outline-dark">{article.buttonText}</button>
            </div>
          ))}
        </div>

        {/* Right Featured Article */}
        <div className="col-md-6">
          <div
            className="rounded shadow-sm h-100"
            style={{
              backgroundColor: "#fff",
              border: "1px solid #eaeaea",
            }}
          >
            <img
              src={articles[2].image}
              alt={articles[2].title}
              className="w-100 rounded-top"
              style={{ height: "592px", objectFit: "cover" }}
            />
            <div className="p-4">
              <small className="text-muted">{articles[2].tag}</small>
              <h5 className="mt-2 fw-bold">{articles[2].title}</h5>
              <p className="text-muted">{articles[2].description}</p>
              <button className="btn btn-outline-dark">{articles[2].buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsArticles;
