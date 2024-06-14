import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./prov.css";
import "./signup.css"

const SignUpProvider = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [userNo, setUserNo] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userAdd, setUserAdd] = useState("");
  const [photo, setPhoto] = useState(null);
  const [categories, setCategories] = useState([]);

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setCategories(value);
  };

  return (
    <section className="s-userwrapper">
      <div className="s-usercontainer">
        <div className="left-column">
          <img id="aidelogo" src="./aide-logo.png" alt="aide" />
          <div className="signupcontents">
            <div className="firstsection">
              <div className="divhead">
                <p className="s-upheader headers">
                  Sign Up as a Service Provider
                </p>
              </div>
              <div className="f-lname">
                <label className="body-par" htmlFor="firstname">
                  First Name:
                  <input
                    placeholder="Input first name"
                    id="firstname"
                    name="firstname"
                    type="text"
                    required
                    value={fName}
                    onChange={(e) => setFName(e.currentTarget.value)}
                  />
                </label>
                <label className="body-par" htmlFor="lastname">
                  Last Name:
                  <input
                    placeholder="Input last name"
                    id="lastname"
                    name="lastname"
                    type="text"
                    required
                    value={lName}
                    onChange={(e) => setLName(e.currentTarget.value)}
                  />
                </label>
              </div>
              <div id="label2">
                <label className="body-par" htmlFor="email">
                  Email:
                  <input
                    placeholder="example.email@gmail.com"
                    id="mail"
                    name="email"
                    type="email"
                    required
                    value={userMail}
                    onChange={(e) => setUserMail(e.currentTarget.value)}
                  />
                </label>
              </div>
              <div id="label3">
                <label className="body-par" htmlFor="password">
                  Password:
                  <input
                    placeholder="Enter at least 8+ characters"
                    id="pwd"
                    name="password"
                    type="password"
                    required
                    value={userPwd}
                    onChange={(e) => setUserPwd(e.currentTarget.value)}
                  />
                </label>
              </div>
              <div id="label4">
                <label className="body-par" htmlFor="phoneno">
                  Phone No:
                  <input
                    placeholder=" E.g 08106871191"
                    id="number"
                    name="phoneno"
                    type="text"
                    required
                    value={userNo}
                    onChange={(e) => setUserNo(e.currentTarget.value)}
                  />
                </label>
              </div>
              <div id="label5">
                <label className="body-par" htmlFor="country">
                  Country:
                  <input
                    placeholder="E.g Nigeria"
                    id="country"
                    name="country"
                    type="text"
                    required
                    value={userCountry}
                    onChange={(e) => setUserCountry(e.currentTarget.value)}
                  />
                </label>
              </div>
              <div id="label6">
                <label className="body-par" htmlFor="address">
                  Address:
                  <input
                    placeholder="E.g No 37 G.R.A Rd"
                    id="address"
                    name="address"
                    type="text"
                    required
                    value={userAdd}
                    onChange={(e) => setUserAdd(e.currentTarget.value)}
                  />
                </label>
              </div>
              <div id="label7">
                <label className="body-par" htmlFor="photo">
                  Upload Photo:
                  <input
                    id="photo"
                    name="photo"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                  />
                </label>
              </div>
              <div id="label8">
                <label className="body-par" htmlFor="categories">
                  Service Categories:
                  <select
                    id="categories"
                    name="categories"
                    multiple
                    required
                    value={categories}
                    onChange={handleCategoryChange}
                  >
                    <option value="Cleaning">Cleaning</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Carpentry">Carpentry</option>
                    <option value="Gardening">Gardening</option>
                  </select>
                </label>
              </div>
              <div className="checkbox">
                <input type="checkbox" name="terms" id="terms" required />
                <p className="headers agree">
                  By signing up, I agree with the{" "}
                  <span className="bluetext">
                    Terms of Use & Privacy Policy
                  </span>
                </p>
              </div>
              <button id="secondpagebtn">
                <p className="headers">Sign Up</p>
              </button>
              <p className="userreturn">
                Returning user?{" "}
                <Link to="/signin">
                  <span className="bluetext returnuser">
                    <b>Log in here</b>
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="joinus">
            <img src="./stroke.svg" width={110} height={25} alt="" />
            <p className="headers">Come join us</p>
          </div>
          <div className="joinuspar">
            <div className="joinuspars">
              <img src="./joinuspar1.svg" width={44} height={56} alt="" />
              <p className="body-texts">
                <b>
                  Explore articles, tutorials, and guides on diverse
                  <br />
                  subjects
                </b>
              </p>
            </div>
            <div className="joinuspars">
              <img src="./joinpar2.svg" width={44} height={48} alt="" />
              <p className="body-texts">
                <b>
                  Explore articles, tutorials, and guides on diverse
                  <br />
                  subjects
                </b>
              </p>
            </div>
            <div className="joinuspars">
              <img src="./joinuspar3.svg" width={41} height={42} alt="" />
              <p className="body-texts">
                <b>
                  Explore articles, tutorials, and guides on diverse
                  <br />
                  subjects
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpProvider;
