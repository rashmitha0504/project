import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

import "./index.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="header">
          <h1>PITCH LAB</h1>
        </Link>
        <ul className="nav-items">
          <li>
            <Link to="/about" className="nav-link-lg">
              About US
            </Link>
            <Link to="/" className="nav-link-sm">
              <AiFillHome className="small-header-icons" />
            </Link>
          </li>
          <li class="dropdown">
            <p class="dropbtn">Services</p>
            <ul class="dropdown-content">
              <Link className="heading" to="/">
                <li>
                  <p>Pitch deck</p>
                </li>
              </Link>
              <li>
                <p>Financial Model</p>
              </li>
              <li>
                <p>Bussiness plan</p>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/works" className="nav-link-lg">
              Works
            </Link>
            <Link to="/works" className="nav-link-sm">
              <BsFillBriefcaseFill className="small-header-icons" />
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="nav-link-lg">
              Blogs
            </Link>
            <Link to="/blogs" className="nav-link-sm">
              <FaBloggerB className="small-header-icons" />
            </Link>
          </li>
        </ul>
        <Link to="/TalkUsForm">
          <button type="button" className="logout-button-lg">
            Contact Us
          </button>
          <li className="logout-btn-list-item-small">
            <button
              type="button"
              className="logout-button-sm"
              aria-label="Logout"
            >
              <FiLogOut className="logout-icon-sm" />
            </button>
          </li>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
