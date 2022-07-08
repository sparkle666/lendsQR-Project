import React from "react";
import { FaRegBell, FaBell, FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";

const TopNav = () => {
  return (
    <nav>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/lendersqr.svg"}
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <div class="field has-addons">
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Search for anything"
                  />
                </div>
                <div class="control">
                  <a class="button is-primary">
                    <FaSearch style={{ color: "white" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <a href="#">Docs</a>
            </div>
            <div className="navbar-item">
              <a href="#">
                <FaRegBell />
              </a>
            </div>
            <div className="navbar-item">
              <a href="#">
                <figure class="image is-32x32">
                  <img
                    src={process.env.PUBLIC_URL + "/images/avatar.jpg"}
                    className="is-rounded"
                  />
                </figure>
              </a>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Jamesly</a>
              <div class="navbar-dropdown">
                <a class="navbar-item">Profile</a>
                <a class="navbar-item">Log out</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default TopNav;
