import "./navbar.css";
import { useState, useEffect } from "react";
import MaterialUISwitch from "./switch";

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
        <a href="/" className="logo">
          <img src="./aide-logo.png" alt="Logo" />
        </a>
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
            <a className="headers" href="/products">
              <b>Explore</b>
            </a>
          </li>
          <li>
            <a className="headers" href="/about">
              <b>How it works</b>
            </a>
          </li>
          <li>
            <a className="headers" href="/contact">
              <b>Vendors</b>
            </a>
          </li>
          <li>
            <a className="headers" href="/about">
              <b>About Us</b>
            </a>
          </li>
          <li>
            <div>
              <a className="headers" id="getsup" href="/contact">
                <b>Get support</b>
                <img
                  src="./telephone.png"
                  width={17}
                  height={17}
                  alt="Telephone"
                />
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="/cart" className="cart-icon">
          <img
            id="cart"
            src="./shopping-cart.png"
            width={27}
            height={27}
            alt="Cart"
          />
          <span className="cart-count">0</span>
        </a>
        <a href="/account" className="user-icon">
          <div className="circleuser">
            <p className="headers">
              <b>V</b>
            </p>
          </div>
        </a>
        <MaterialUISwitch />
        <a href="#" onClick={toggleDrawer}>
          <img
            id="menu"
            src="./categories.png"
            width={27}
            height={27}
            alt="Menu"
          />
        </a>
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
              <a className="headers draweritems " href="/products">
                <b>Orders</b>
              </a>
            </li>

            <li>
              <a className="headers draweritems " href="/products">
                <b>Notification</b>
              </a>
            </li>

            <li>
              <a className="headers draweritems " href="/products">
                <b>Account settings</b>
              </a>
            </li>

            <li>
              <a className="headers draweritems " href="/products">
                <b>Switch account type</b>
              </a>
            </li>

            <li>
              <a className="headers draweritems " href="/products">
                <b>Favorites</b>
              </a>
            </li>

            <li>
              <a className="headers draweritems " href="/products">
                <b>Todays scheduled</b>
              </a>
            </li>
            <div id="line" ></div>
            <div className="respitems">
              <li>
                <a className="headers draweritems " href="/products">
                  <b>Explore</b>
                </a>
              </li>
              <li>
                <a className="headers draweritems" href="/about">
                  <b>How it works</b>
                </a>
              </li>
              <li>
                <a className="headers draweritems" href="/contact">
                  <b>Vendors</b>
                </a>
              </li>
              <li>
                <a className="headers draweritems" href="/about">
                  <b>About Us</b>
                </a>
              </li>
              <li>
                <div>
                  <a
                    className="headers draweritems"
                    id="getsup"
                    href="/contact"
                  >
                    <b>Get support</b>
                    <img
                      src="./telephone.png"
                      width={17}
                      height={17}
                      alt="Telephone"
                    />
                  </a>
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
