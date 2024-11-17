import React from "react";
import articleImage1 from "../images/blog/article-image1.png";
import articleImage2 from "../images/blog/article-image2.png";

const BlogPost = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Main Content */}
        <div className="col-lg-8">
          {/* Featured Article */}
          <div className="mb-5">
            <img
              src={articleImage1}
              alt="Main Article"
              className="rounded img-fluid"
            />
            <h2 className="mt-4 fw-bold">Discover the Joy of Travel</h2>
            <p className="text-muted">
              Embark on a journey of a lifetime, exploring stunning destinations and creating unforgettable memories.
            </p>
            <p>
              Traveling is not just about visiting new places but also about immersing yourself in different cultures,
              meeting new people, and gaining new perspectives on life. Whether you're a seasoned traveler or a
              first-time explorer, every journey has something unique to offer.
            </p>
          </div>

          {/* Secondary Article */}
          <div className="mb-5">
            <img
              src={articleImage2}
              alt="Secondary Article"
              className="rounded img-fluid"
            />
            <h3 className="mt-4 fw-bold">How Phylex Travel and Tours Changed My Life</h3>
            <p>
              Phylex Travel and Tours offers tailored travel packages designed to meet your unique interests and
              preferences. Discover why thousands of travelers trust us to make their dreams come true.
            </p>
            <p>
              With personalized service and attention to detail, Phylex makes every trip unforgettable. Whether you're
              seeking adventure or relaxation, we've got you covered.
            </p>
          </div>

          {/* Article Footer */}
          <div className="mb-4 d-flex justify-content-between align-items-center">
            <small className="text-muted">Tags: Travel, Adventure</small>
            <div>
              <a href="/#" className="text-dark me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="/#" className="text-dark me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="/#" className="text-dark">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Leave a Reply */}
          <div>
            <h4 className="fw-bold">Leave a Reply</h4>
            <p>Your email address will not be published. Required fields are marked *</p>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name *
                </label>
                <input type="text" id="name" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email *
                </label>
                <input type="email" id="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="comment" className="form-label">
                  Comment *
                </label>
                <textarea id="comment" className="form-control" rows="4" required></textarea>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  id="saveInfo"
                  className="form-check-input"
                />
                <label htmlFor="saveInfo" className="form-check-label">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>
              <button type="submit" className="btn btn-dark">
                Post Comment
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          {/* Recent Posts */}
          <div className="mb-4">
            <h4 className="fw-bold">Recent Posts</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/#" className="text-dark">
                  Discover Hidden Gems Around the World
                </a>
              </li>
              <li className="mb-2">
                <a href="/#" className="text-dark">
                  Top 10 Travel Hacks for 2025
                </a>
              </li>
              <li className="mb-2">
                <a href="/#" className="text-dark">
                  Exploring the Best Food Destinations
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="mb-4">
            <h4 className="fw-bold">Categories</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/#" className="text-dark">
                  Tips
                </a>
              </li>
              <li className="mb-2">
                <a href="/#" className="text-dark">
                  Travel
                </a>
              </li>
              <li className="mb-2">
                <a href="/#" className="text-dark">
                  Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Box */}
          <div className="p-4 text-white" style={{ backgroundColor: "#000" }}>
            <h5>Have Any Questions?</h5>
            <p className="small">Feel free to reach out to us anytime.</p>
            <p  className="mb-1 text-white d-block">
            +234 703 152 2572
            </p>
            <p  className="text-white">
            info@phyleetravels.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
