import React from "react";
import "./signup.css";
import "./signin.css";
import { useState } from "react";

const SignUpProvider = () => {
    const [providerMail, setProviderMail] = useState("")
    const [providerPwd, setProviderPwd] = useState("");
    return (
      <section className="s-providerwrapper">
        <div className="s-providercontainer">
          <div className="left-column">
            <img id="aidelogo2" src="./aide-logo.png" alt="aide" />
            <div className="signupcontents">
              <div className="firstsection">
                <div className="divhead provhead">
                  <p className="s-upheader headers">Welcome back &#128075;</p>
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
                      value={providerMail}
                      onChange={(e) => setProviderMail(e.currentTarget.value)}
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
                      value={providerPwd}
                      onChange={(e) => setProviderPwd(e.currentTarget.value)}
                    />
                  </label>
                </div>
                <div className="forgotpwd">
                  <div className="checkbox">
                    <input type="checkbox" name="" id="" />
                    <p className="headers agree">
                      Keep me logged in
                      <span className="bluetext bluetxt2">
                        Forgot password?
                      </span>
                    </p>
                  </div>
                </div>
                <button id="secondpagebtn">
                  <p className="headers">Sign In</p>
                </button>
                <div className="or">
                  <div className="lines"></div>
                  <p className="body-par">OR</p>
                  <div className="lines"></div>
                </div>
                <div className="socialicons">
                  <div className="ggldiv">
                    <img src="./google.png" alt="" />
                  </div>
                  <div className="fbdiv">
                    <img src="./facebook.png" alt="" />
                  </div>
                  <div className="applediv">
                    <img src="./apple.png" alt="" />
                  </div>
                </div>
                <p className="userreturn">
                  Not a member yet?{" "}
                  <span className="bluetext returnuser">
                    <b>Register now</b>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default SignUpProvider