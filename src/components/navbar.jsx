import "./navbar.css";
import { useState, useEffect } from "react";
import MaterialUISwitch from "./switch";
import SearchAppBar from "./searchbar";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [category, setCategory] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setCategory(category);
    console.log(category);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (drawerOpen && !event.target.closest(".drawer")) {
        closeDrawer();
      }
    };

    if (drawerOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [drawerOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img src="./aide-logo.png" alt="Logo" />
        </Link>
        <div id="signupcon">
          <p className="headers" id="header1">
            <b>SIGN UP</b>
          </p>
          <select
            id="signup"
            name="category"
            value={category}
            onChange={(event) => handleCategoryChange(event.target.value)}
          >
            <option value="User">User</option>
            <option value="Provider">Provider</option>
          </select>
        </div>
        <p className="headers" id="header2">
          <b>SIGN IN</b>
        </p>
        <div className="navbar-toggle" onClick={toggleDrawer}>
          <img src="./categories.png" width={27} height={27} alt="" />
        </div>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link className="headers" to="/products">
              <b>Explore</b>
            </Link>
          </li>
          <li>
            <Link className="headers" to="/about">
              <b>How it works</b>
            </Link>
          </li>
          <li>
            <Link className="headers" to="/contact">
              <b>Vendors</b>
            </Link>
          </li>
          <li>
            <Link className="headers" to="/about">
              <b>About Us</b>
            </Link>
          </li>
          <li>
            <div>
              <Link className="headers" id="getsup" to="/contact">
                <b>Get support</b>
                <img
                  src="./telephone.png"
                  width={17}
                  height={17}
                  alt="Telephone"
                />
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <SearchAppBar />
      <div className="navbar-right">
        <Link to="/cart" className="cart-icon">
          <img
            id="cart"
            src="./shopping-cart.png"
            width={27}
            height={27}
            alt="Cart"
          />
          <span className="cart-count">0</span>
        </Link>
        <Link to="/account" className="user-icon">
          <div className="circleuser">
            <p className="headers">
              <b>V</b>
            </p>
          </div>
        </Link>
        <MaterialUISwitch id="switchbtn" />
        <div onClick={toggleDrawer}>
          <img
            id="menubtn"
            src="./categories.png"
            width={27}
            height={27}
            alt="Menu"
          />
        </div>
      </div>
      <div
        className={`overlay ${drawerOpen ? "active" : ""}`}
        onClick={closeDrawer}
      ></div>
      <div className={`drawer ${drawerOpen ? "open" : ""}`}>
        <div className="drawer-content">
          <div className="drawer-header">
            <img
              src="./close.png"
              onClick={toggleDrawer}
              width={40}
              height={40}
              alt=""
            />
          </div>
          <ul className="nav-links respnavlinks">
            <li>
              <Link className="headers draweritems" to="/products">
                <b>Orders</b>
              </Link>
            </li>

            <li>
              <Link className="headers draweritems" to="/products">
                <b>Notification</b>
              </Link>
            </li>

            <li>
              <Link className="headers draweritems" to="/products">
                <b>Account settings</b>
              </Link>
            </li>

            <li>
              <Link className="headers draweritems" to="/products">
                <b>Switch account type</b>
              </Link>
            </li>

            <li>
              <Link className="headers draweritems" to="/products">
                <b>Favorites</b>
              </Link>
            </li>

            <li>
              <Link className="headers draweritems" to="/products">
                <b>Todays scheduled</b>
              </Link>
            </li>
            <div id="line"></div>
            <div className="respitems">
              <li>
                <Link className="headers draweritems" to="/products">
                  <b>Explore</b>
                </Link>
              </li>
              <li>
                <Link className="headers draweritems" to="/about">
                  <b>How it works</b>
                </Link>
              </li>
              <li>
                <Link className="headers draweritems" to="/contact">
                  <b>Vendors</b>
                </Link>
              </li>
              <li>
                <Link className="headers draweritems" to="/about">
                  <b>About Us</b>
                </Link>
              </li>
              <li>
                <div>
                  <Link
                    className="headers draweritems"
                    id="getsup"
                    to="/contact"
                  >
                    <b>Get support</b>
                    <img
                      src="./telephone.png"
                      width={17}
                      height={17}
                      alt="Telephone"
                    />
                  </Link>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
