import "./Loading.css";

function Loading() {
  return (
    <div className="loading-page">
      <div className="loading-content">

        <div className="loading-logo">
          B
        </div>

        <h1>BlogSphere</h1>

        <p>Preparing your blogging experience...</p>

        <div className="loading-spinner"></div>

      </div>
    </div>
  );
}

export default Loading;