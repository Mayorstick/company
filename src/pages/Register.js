import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Style.css";
import logp from "../components/images/logp.png";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app, fireDb } from "../FirebaseConfig.js";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [image, setImage] = useState("");
  //creating a function for the image
  const onchangeImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handle = (e) => {
    e.preventDefault();
    //form validating
    if (fullname === "" || email === "" || Password === "" || image === "") {
      return toast.error("fields can not be empty");
    }
    // uploading image into firebase storage
    const storage = getStorage();
    const storageRef = ref(storage, `/userPhoto/${image.name}`);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, image)
      .then((snapshot) => {
        // get image Url
        getDownloadURL(ref(storage, `/userPhoto/${image.name}`))
          .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'
            const auth = getAuth(app);
            createUserWithEmailAndPassword(auth, email, Password)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;

                // Add a new document in collection "cities"
                setDoc(doc(fireDb, "users", user.uid), {
                  fullname: fullname,
                  email: email,
                  imageURl: url,
                });
                toast.success("account created successful");
                // ...
              })
              .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                toast.error(errorMessage);
                // ..
              });
          })
          .catch((error) => {
            // Handle any errors

            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div style={{ height: "780px", backgroundColor: "#0C356A" }}>
      <div className="container ">
        <div className="row justify-content-center ">
          <div className="col-md-6 " data-aos="zoom-out-up">
            <div className="text-center">
              <img src={logp} width={100} height={100} alt=" " />
            </div>
            <div className="card shadow  p-2 ">
              <h2 className="text-center">Sign Up</h2>
              <div className="card-body ">
                <form onSubmit={handle}>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Full name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="enter your fullname"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </div>
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
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      upload image
                    </label>
                    <input
                      type="file"
                      class="form-control"
                      placeholder="enter password"
                      onChange={(e) => onchangeImage(e)}
                    />
                  </div>
                  <div className="mb-3">
                    {image && (
                      <img
                        src={URL.createObjectURL(image)}
                        alt=""
                        width={100}
                        height={100}
                      />
                    )}
                  </div>
                  {fullname && email && Password && image && (
                    <div class="d-grid gap-2 col-12 mx-auto">
                      <button class="btn btn-primary" type="submit">
                        Sign Up
                      </button>
                    </div>
                  )}
                </form>
              </div>
              <div className="account">
                <small>
                  <Link
                    to="/login"
                    className="text-decoration-none text-dark nav-link"
                  >
                    Already have account{" "}
                    <span className="text-danger">Sign in</span>
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

export default Register;
