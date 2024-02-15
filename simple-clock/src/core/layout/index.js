import React from "react";

export const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <header>
        <div className="d-flex bg-gradient">
          <div className="d-flex flex-grow-1">
            <nav className="courseTitle">
              <button className="navbar-brand border-0">
                <img src={require("../../logo.png")} alt="logo" />
              </button>
            </nav>
            <div className="flex-grow-1">
              <div className="ReactTitle ps-3  d-flex align-items-center">
                <img src={require("../../react-2@2x.png")} alt="logo" />
                <h3 className="mb-0">Reactjs Apps</h3>
              </div>
              <div className="d-flex ps-3 align-items-center">
                <div className="flex-grow-1">
                  <h4>Analogue Clock</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main role="main" className="container pt-5">
        {children}
      </main>

      <footer className="footer footer-dark">
        <div className="d-flex justify-content-between px-5">
          <div>ALL RIGHTS RESERVED BRS STUDIO 2022</div>
          <div>
            <img src={require("../../footer-logo.png")} alt="logo" />
          </div>
        </div>
      </footer>
    </>
  );
};
