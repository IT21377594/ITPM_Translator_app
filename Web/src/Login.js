import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Mainpg from "./Mainpg";
import Home from "../src/views/home/Home";
import Navbar from "../src/components/navbar/index";
import Footer from "../src/components/footer/Footer";

function Login() {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  const [emailColor, setEmailColor] = useState("white");
  const [passwordColor, setPasswordColor] = useState("white");

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("sanskarPassword").replace(/"/g, "");
    let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(false);
      setFlag(false);
    }
  }

  function handleEmailChange(event) {
    setEmaillog(event.target.value);
    setEmailColor("black");
  }

  function handlePasswordChange(event) {
    setPasswordlog(event.target.value);
    setPasswordColor("black");
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ width: '50%' }}>
        {home ? (
          <form onSubmit={handleLogin} style={{ width: '100%' }}>
            <h3 style={{ textAlign: 'center' }}>LogIn</h3>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={emaillog}
                onChange={handleEmailChange}
                onBlur={() => {
                  if (!emaillog) setEmailColor("white");
                }}
                style={{ width: '100%', height: '40px', backgroundColor: 'white', color: emailColor, padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={passwordlog}
                onChange={handlePasswordChange}
                onBlur={() => {
                  if (!passwordlog) setPasswordColor("white");
                }}
                style={{ width: '100%', height: '40px', backgroundColor: 'white', color: passwordColor, padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="submit" className="btn btn-dark btn-lg" style={{ width: '50%', borderRadius: '5px' }}>
                Login
              </button>
            </div>
            {flag && (
              <Alert variant="warning" style={{ marginTop: '10px' }}>
                Fill correct Info else keep trying.
              </Alert>
            )}
          </form>
        ) : (
          <>
            <Home />
          </>
        )}
      </div>
    </div>
  );
}

export default Login;