import React, { useState, useContext } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from 'react-icons/fc'
import { Link, useHistory, useLocation } from 'react-router-dom';
import loginBanner from '../../assets/loginBanner.svg';
import './Login.css'
import initializeAuthentication from '../../Firebase/firebase.init';
import {
  getAuth, signInWithPopup,
  signInWithEmailAndPassword, GoogleAuthProvider
} from "firebase/auth";

// using context 
import { UserContext } from '../../App';
import { Alert } from 'react-bootstrap';



initializeAuthentication();

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [signInInfo, setaSignInInfo] = useState();
  const [error, setError] = useState('');
  const history = useHistory();
  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false)

  // decleare after login location 
  const { from } = location.state || { from: { pathname: "/" } };

  const auth = getAuth();

  // Signin Process 
  const handleInput = (e) => {
    e.preventDefault()
    const info = { ...signInInfo }
    info[e.target.name] = e.target.value
    setaSignInInfo(info)

  }

  const handleSignIn = e => {
    if(signInInfo && signInInfo.email && signInInfo.password ){
    signInWithEmailAndPassword(auth, signInInfo.email, signInInfo.password)
      .then((userCredential) => {

        // Signed in 
        const user = userCredential.user;

        //using local storage for not log out with refreshing 
        localStorage.setItem('user', JSON.stringify(user))
        const localUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        setLoggedInUser({ "user": localUser });
        history.push(from);

        setShowAlert(false)
        setError('');
        // ...
      })
      .catch((error) => {
        setShowAlert(true)

        setError(error.message);
      });
    }
  }




  // Google Sign in Process 
  const handleGoogleSignIn = e => {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {

        const user = result.user;
        console.log(user);  
        localStorage.setItem('user', JSON.stringify(user))
        const localUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        setLoggedInUser(localUser? { "user": localUser }:null);

        history.push(from)
        setError('');

      })
      .catch((error) => {
        setError(error.message);
      });
  }




  return (
    <section className="" style={{ marginTop: "130px" }}>
      <div
        className="container d-flex justify-content-center align-items-center"
      >
        <div className="row">
          <div className="col-md-7 shadow-sm rounded-3 border p-4 d-flex flex-column justify-center align-items-center">
            <h3 className='text-brand'>Enter Your Credential</h3>

            {
                showAlert && <Alert key={1} variant="danger" > {error} </Alert>
              }

            <div className="w-75 py-2">
              <HiOutlineMail className="fs-4 my-2 text-brand" />
              <label htmlFor="email" className="px-1">
                Email
              </label>
              <input
                onChange={handleInput}
                name="email"
                type="email"
                className="custom-input d-block w-100 px-3 py-3 rounded"
                placeholder="John@Example.com"

              />
            </div>
            <div className="w-75 py-2">
              <RiLockPasswordLine className="fs-4 my-2 text-brand" />
              <label htmlFor="email" className="px-1">
                Password
              </label>
              <input
                onChange={handleInput}
                name="password"
                type="password"
                className="custom-input d-block w-100 px-3 py-3 rounded"
                placeholder="Must be at-least 6 Characters"

              />
            </div>
            {/* <div className="row mb-3 text-danger">{error}</div> */}
            <button
              onClick={handleSignIn}
              className="btn-brand-outline w-50 mt-2">Login</button>

            <button
              className="btn btn-outline-info w-50 mt-2"
              onClick={handleGoogleSignIn}
            >
              <FcGoogle /> Login With Google
            </button>
            <div className="w-75 text-center py-3">
              <p>New to Dental Square ?</p>
              <div className="d-md-flex justify-content-evenly">
                <Link to="/register">
                  <button className="btn-brand-outline rounded-pill mb-2">
                    Register
                  </button>
                </Link>

              </div>
            </div>
          </div>
          <div className="col-md-5 d-flex justify-content-center align-items-center py-5">
            <img className="img-fluid" src={loginBanner} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;