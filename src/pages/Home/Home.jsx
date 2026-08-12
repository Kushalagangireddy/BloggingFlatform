import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      <Navbar />

      {/* Background Effects */}
      <div className="home-glow glow-one"></div>
      <div className="home-glow glow-two"></div>

      {/* Hero Section */}
      <section className="blog-hero">

        <div className="blog-hero-content">

          <span className="hero-label">
            ✦ BLOGGING PLATFORM
          </span>

          <h1>
            Share Your
            <span> Ideas With The World.</span>
          </h1>

          <p>
            Write, publish, and discover meaningful stories.
            BloggingPlatform gives everyone a place to share
            knowledge, creativity, experiences, and ideas.
          </p>

          <div className="hero-actions">

            <button
              className="write-btn"
              onClick={() => navigate("/login")}
            >
              ✎ Start Writing
            </button>

            <button
              className="discover-btn"
              onClick={() => navigate("/login")}
            >
              Explore Blogs →
            </button>

          </div>

        </div>

        {/* 3D Blogging Illustration */}
        <div className="blog-visual">

          <div className="blog-orb">
            <div className="orb-letter">B</div>
          </div>

          <div className="floating-blog blog-card-one">
            <span>TECHNOLOGY</span>
            <h3>AI & The Future</h3>
            <p>Explore new ideas and innovations.</p>
          </div>

          <div className="floating-blog blog-card-two">
            <span>PROGRAMMING</span>
            <h3>Learn & Build</h3>
            <p>Share your coding journey.</p>
          </div>

          <div className="floating-blog blog-card-three">
            <span>LIFESTYLE</span>
            <h3>Life & Stories</h3>
            <p>Experiences worth sharing.</p>
          </div>

        </div>

      </section>

      {/* Main Blog Area */}
      <section className="blog-area">

        {/* Blog Content */}
        <main className="blog-content">

          <div className="section-title">

            <div>
              <span>DISCOVER</span>
              <h2>Featured Blogs</h2>
            </div>

            <button
              className="view-all-btn"
              onClick={() => navigate("/login")}
            >
              View All →
            </button>

          </div>

          <div className="blog-grid">

            {/* Blog 1 */}
            <article
              className="blog-post"
              onClick={() => navigate("/login")}
            >

              <div className="post-cover technology">
                AI
              </div>

              <div className="post-body">

                <span className="post-category">
                  Technology
                </span>

                <h3>
                  How Artificial Intelligence Is Changing Our World
                </h3>

                <p>
                  Discover how AI is transforming industries,
                  education, creativity, and everyday life.
                </p>

                <div className="post-footer">
                  <span>By BloggingPlatform</span>

                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      navigate("/login");
                    }}
                  >
                    Read More →
                  </button>
                </div>

              </div>

            </article>

            {/* Blog 2 */}
            <article
              className="blog-post"
              onClick={() => navigate("/login")}
            >

              <div className="post-cover development">
                CODE
              </div>

              <div className="post-body">

                <span className="post-category">
                  Development
                </span>

                <h3>
                  A Beginner's Guide to Modern Web Development
                </h3>

                <p>
                  Learn how modern developers create fast,
                  responsive, and interactive websites.
                </p>

                <div className="post-footer">
                  <span>By BloggingPlatform</span>

                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      navigate("/login");
                    }}
                  >
                    Read More →
                  </button>

                </div>

              </div>

            </article>

            {/* Blog 3 */}
            <article
              className="blog-post"
              onClick={() => navigate("/login")}
            >

              <div className="post-cover creativity">
                WRITE
              </div>

              <div className="post-body">

                <span className="post-category">
                  Creativity
                </span>

                <h3>
                  Why Sharing Your Ideas Matters
                </h3>

                <p>
                  Your experiences and ideas can inspire
                  people around the world.
                </p>

                <div className="post-footer">
                  <span>By BloggingPlatform</span>

                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      navigate("/login");
                    }}
                  >
                    Read More →
                  </button>

                </div>

              </div>

            </article>

          </div>

        </main>

        {/* Sidebar */}
        <aside className="blog-sidebar">

          {/* Search */}
          <div className="sidebar-box">

            <h3>Search Blogs</h3>

            <div className="blog-search">

              <input
                type="text"
                placeholder="Search articles..."
              />

              <button
                onClick={() => navigate("/login")}
              >
                ⌕
              </button>

            </div>

          </div>

          {/* Recent Posts */}
          <div className="sidebar-box">

            <h3>Recent Posts</h3>

            <div
              className="recent-item"
              onClick={() => navigate("/login")}
            >
              <span>01</span>
              <p>Getting Started With React</p>
            </div>

            <div
              className="recent-item"
              onClick={() => navigate("/login")}
            >
              <span>02</span>
              <p>Building Your First Blog</p>
            </div>

            <div
              className="recent-item"
              onClick={() => navigate("/login")}
            >
              <span>03</span>
              <p>Tips For Better Writing</p>
            </div>

            <div
              className="recent-item"
              onClick={() => navigate("/login")}
            >
              <span>04</span>
              <p>Understanding Full Stack Development</p>
            </div>

          </div>

          {/* Newsletter */}
          <div className="sidebar-box newsletter">

            <div className="newsletter-icon">
              ✉
            </div>

            <h3>Stay Connected</h3>

            <p>
              Get the latest articles and blogging tips
              directly in your inbox.
            </p>

            <input
              type="email"
              placeholder="Your email address"
            />

            <button
              onClick={() => navigate("/login")}
            >
              Subscribe
            </button>

          </div>

        </aside>

      </section>

    </div>
  );
}

export default Home;
 
