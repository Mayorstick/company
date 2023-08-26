import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./css/Style.css";
import logp from "../components/images/logp.png";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../FirebaseConfig";
import { toast } from "react-toastify";

function Forgotten() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        toast.success("email successfully sent");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        // ..
      });
  };

  return (
    <div style={{height:"780px", backgroundColor:"#0C356A"}}>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-md-6  " data-aos="zoom-out-up">
            <div className="text-center">
              <img src={logp} width={100} height={100} alt=" " />
            </div>
            <div className="card shadow  p-3 ">
              <h2 className="text-center text-dark">Reset password</h2>
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

                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button class="btn btn-primary" type="submit">
                      Send password Token
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgotten;
