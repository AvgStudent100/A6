import React, { Component } from "react";
import "./welcome.css";
class  Welcome extends Component {
  render() {
    return (
      <div class="div-main">
        <div class="div-welcome">
          <h1>WELCOME!</h1>
        </div>
        <div class="div-already-registered">
          <h3>ALREADY REGISTERED?</h3>
          <input
            type="email"
            placeholder="Email address"
            class="input-email-1"
          ></input>
          <br />
          <input
            type="password"
            placeholder="Password"
            class="input-password-1"
          ></input>
          <br />
          <a href="#" class="forgot-password">
            I forgot password
          </a>
          <br />
          <button class="signin-button">SIGN IN</button>
          <br />
          <span class="radio-remember">
            <input type="radio"></input>
            <label>Remember</label>
          </span>
        </div>

        <div class="div-new-customer">
          <h3>NEW CUSTOMER?</h3>
          <input
            type="email"
            placeholder="Email address"
            class="input-email-2"
          ></input>
          <br />
          <input
            type="password"
            placeholder="Password"
            class="input-password-2"
          ></input>
          <br />
          <input
            type="password"
            placeholder="Confirm Password"
            class="confirm-password-2"
          ></input>
          <br />
          <button class="create-account-button">CREATE ACCOUNT</button>
        </div>
      </div>
    );
  }
}

export default Welcome;