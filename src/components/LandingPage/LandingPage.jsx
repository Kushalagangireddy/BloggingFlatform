import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <section className="landing-page">
      <div className="hero-content">

        <div className="hero-badge">
          ✦ Welcome to the Future of Blogging
        </div>

        <h1>
          Write.
          <span> Share.</span>
          <br />
          Inspire.
        </h1>

        <p>
          Create beautiful stories, share your ideas, and connect
          with readers around the world.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() => navigate("/home")}
          >
            Start Writing
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/home")}
          >
            Explore Blogs
          </button>

        </div>

      </div>

      <div className="hero-visual">
        <div className="glow-circle"></div>

        <div className="floating-card card-one">
          <span>✦</span>
          Creative Ideas
        </div>

        <div className="floating-card card-two">
          <span>✎</span>
          Write Your Story
        </div>

        <div className="floating-card card-three">
          <span>♡</span>
          Connect & Share
        </div>

        <div className="blog-orb">
          <div className="orb-inner">
            ✦
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
 
