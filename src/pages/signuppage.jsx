import React from "react";
import "./signup.css";
import { useState } from "react";

const SignUp = () => {
  const [togglePage, setTogglePage] = useState(true);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [userNo, setUserNo] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userAdd, setUserAdd] = useState("");
  const presentPageHandler = () => {
    setTogglePage(true);
  };

  //   const nextPageHandler = () => {
  //     SetNextPage(true);
  //     SetPrevPage(false);
  //   };

  return (
    <section className="s-userwrapper">
      <div className="s-usercontainer">
        <div className="left-column">
          <img id="aidelogo" src="./aide-logo.png" alt="aide" />
          <div className="signupcontents">
            {togglePage ? (
              <div className="firstsection">
                <div className="divhead">
                  <p className="s-upheader headers">Begin your journey</p>{" "}
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
                <button onClick={() => setTogglePage((prev) => !prev)}>
                  <img src="./angle-circle-right.png" alt="" />
                </button>
                <div className="or">
                  <div className="lines"></div>
                  <p className="body-par">OR</p>
                  <div className="lines"></div>
                </div>
                <div className="socialicons">
                  <div className="ggldiv"><img src="./google.png" alt="" /></div>
                 <div className="fbdiv"><img src="./facebook.png" alt="" /></div>
                  <div className="applediv" ><img src="./apple.png" alt="" /></div>
                </div>
                <p className="userreturn" >Returning user? <span className="bluetext returnuser" ><b>Log in here</b></span></p>
              </div>
            ) : (
              <div className="secondsection">
                <button
                  id="back"
                  onClick={() => setTogglePage((prev) => !prev)}
                >
                  <img src="./angle-circle-left.png" alt="" />
                </button>
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
                  <label className="body-par" htmlFor="password">
                    Address:
                    <input
                      placeholder="E.g No 37 G.R.A Rd"
                      id="address"
                      name="password"
                      type="text"
                      required
                      value={userAdd}
                      onChange={(e) => setUserAdd(e.currentTarget.value)}
                    />
                  </label>
                </div>
                <div className="checkbox" >
                  <input type="checkbox" name="" id="" />
                  <p className="headers agree" >By signing up, I agree with the <span className="bluetext" >Terms of Use & Privacy Policy</span></p>
                </div>
                <button id="secondpagebtn">
                  <p className="headers">Sign Up</p>
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="right-column">
          <img src="./man-animation.gif" alt="" />
          <div className="joinus">
            <p className="headers">Come join us</p>
            <img src="./stroke.svg" width={110} height={25} alt="" />
          </div>
          <div className="joinuspar">
            <div className="joinuspars">
              <img src="./joinuspar1.svg" width={44} height={56} alt="" />
              <p className="body-texts">
                <b>
                  Explore articles, tutorials, and guides on diverse<br></br>
                  subjects
                </b>
              </p>
            </div>
            <div className="joinuspars">
              <img src="./joinpar2.svg" width={44} height={48} alt="" />
              <p className="body-texts">
                <b>
                  Explore articles, tutorials, and guides on diverse<br></br>
                  subjects
                </b>
              </p>
            </div>
            <div className="joinuspars">
              <img src="./joinuspar3.svg" width={41} height={42} alt="" />
              <p className="body-texts">
                <b>
                  Explore articles, tutorials, and guides on diverse<br></br>
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
export default SignUp;
