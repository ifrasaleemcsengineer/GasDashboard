import React, { useState } from "react";
import "./login.css";
import logo from "./logo.png";
 
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleNavigate = () => {
  //   if (email == "superadmin@gmail.com" && password == "superadmin") {
  //     navigate("/superadmindashboard");
  //   }
  //   if (email == "admin@gmail.com" && password == "admin") {
  //     navigate("/admindashboard");
  //   }
  // };

  return (
    <div>
      <div class="d-lg-flex half">
        <div class="bg order-1 order-md-2">
            <img style={{width: "550px" , marginLeft: "120px", marginTop: "70px"}}src={logo}/>
           
            </div>
        <div class="contents order-2 order-md-1">
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-7">
                <h2 class="login-head">
                  <center>
                    <strong>Login</strong>
                  </center>
                </h2>
                <form action="#" method="post">
                  <div class="form-group first">
                    <label for="username">Username</label>
                    <input
                      type="text"
                      class="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your-email@gmail.com"
                      id="username"
                      className="inputs"
                    />
                  </div>
                  <div class="form-group last mb-3">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      className="inputs"
                    />
                  </div>

                  <input
                    type="submit"
                    value="Log In"
                    class="btn btn-block btn-primary"
                    
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;