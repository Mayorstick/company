import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, fireDb } from "../FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";

function Profile() {
  const [data, setData] = useState([]);

  //onauthChanged
  const auth = getAuth(app);
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // console.log(uid);
      // // retrieve User Data
      const docRef = doc(fireDb, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        setData(docSnap.data())
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } else {
      // User is signed out
      // ...
    }
  });

  return (
    <DefaultLayout>
      <div className="container">
        <div className="row justify-content-center ">
          <h2 className="text-center">Profile</h2>
          <div className="col-md-6 " data-aos="zoom-out-up">
            <div className="card shadow" >
              <div className="card-body">
              <img src={data.imageURl} alt={data.fullname}  className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5" data-aos="zoom-out-up">
            <div className="card shadow ">
              <div className="card-body">
                <h5 className=" col-12 text-dark">welcome {data.fullname}</h5>
                <h6 className="text-dark">EMAIL:{data.email}</h6>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </DefaultLayout>
  );
}

export default Profile;
