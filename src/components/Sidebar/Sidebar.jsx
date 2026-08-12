import { useState } from "react";
import { FaSearch, FaEnvelope } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  const [email, setEmail] = useState("");

  const recentPosts = [
    "The Future of Artificial Intelligence",
    "How to Start Your First Blog",
    "10 Tips for Better Web Development",
    "Understanding React Components",
    "Why Full Stack Development Matters",
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <aside className="sidebar">

      {/* Search */}
      <div className="sidebar-card">
        <h3>Search</h3>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search posts..."
          />
          <button>
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="sidebar-card">
        <h3>Recent Posts</h3>

        <div className="recent-posts">
          {recentPosts.map((post, index) => (
            <div className="recent-post" key={index}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{post}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="sidebar-card newsletter-card">
        <div className="newsletter-icon">
          <FaEnvelope />
        </div>

        <h3>Stay Updated</h3>

        <p>
          Subscribe to our newsletter and receive
          the latest posts directly in your inbox.
        </p>

        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">
            Subscribe
          </button>
        </form>
      </div>

    </aside>
  );
}

export default Sidebar;