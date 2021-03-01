import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <section
        className="section"
        style={{ background: "linear-gradient(to bottom right, orange, red" }}
      >
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <h1 className="title has-text-white">Stoke</h1>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <a href="https://github.com/mhelmetag/stoke">
                  <span className="icon is-large">
                    <i className="fab fa-lg fa-github has-text-white"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ minHeight: "80vh" }}>
        {children}
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>Built by Maxworld Technologies</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
