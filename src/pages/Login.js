import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Style.css";
import logp from "../components/images/logp.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../FirebaseConfig";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //store data to local storage
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/profile");
        // ...
        toast.success("you are successfully login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <div style={{ height: "780px", backgroundColor: "#0C356A" }}>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-md-6  " data-aos="zoom-out-up">
            <div className="text-center">
              <img src={logp} width={100} height={100} alt=" " />
            </div>
            <div className="card shadow  p-3 ">
              <h2 className="text-center">sign in</h2>
              <div className="card-body ">
                <form onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      aria-describedby="emailHelp"
                      placeholder="enter your mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {email && password && (
                    <div class="d-grid gap-2 col-12 mx-auto">
                      <button class="btn btn-primary" type="submit">
                        Login
                      </button>
                    </div>
                  )}
                </form>
              </div>
              <div className="account">
                <small>
                  <Link
                    to="/register"
                    className="text-decoration-none text-dark nav-links"
                  >
                    Don't Have account{" "}
                    <span className="text-danger">Create Account</span>
                  </Link>
                </small>
                <small>
                  <Link
                    to="/forgotten-password"
                    className="text-decoration-none text-dark nav-links "
                  >
                    Foget Password
                  </Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
