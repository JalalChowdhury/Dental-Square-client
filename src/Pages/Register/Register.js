import React, {useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import {emailRegex, passRegex} from '../Register/Regex'
import loginBanner from '../../assets/loginBanner.svg'
import {getAuth , signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword } from 'firebase/auth';
import initializeAuthentication from '../../Firebase/firebase.init';

initializeAuthentication();


const Register = () => {

    const [inputError, setInputError] = useState({});
    const [regInfo, setRegInfo] = useState({});
    // console.log(regInfo);
    const history = useHistory();

    const handleInputValidation = (e) => {
      const inputId = e.target.id;
      const inputValue = e.target.value;
      const info = { ...regInfo };
      if (inputId === "email") {
        if (!emailRegex.test(inputValue)) {
          setInputError({
            ...inputError,
            name: inputId,
            errorMessage: "Please Type a Valid Email !",
          });
          info[inputId] = null;
          setRegInfo(info);
        } else {
          setInputError(null);
          info[inputId] = inputValue;
          setRegInfo(info);
        }
      }
      if (inputId === "password") {
        if (!passRegex.test(inputValue)) {
          setInputError({
            ...inputError,
            name: inputId,
            errorMessage:
              "Must be more than 8 chars combine with uppercase and lowercase, and at least one number",
          });
          info[inputId] = null;
          setRegInfo(info);
        } else {
          setInputError(null);
          info[inputId] = inputValue;
          setRegInfo(info);
        }
      }
    };
  
    const handleRegister = (e) => {
      e.preventDefault();
      if (regInfo.email && regInfo.password){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, regInfo.email, regInfo.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          history.push('/login')

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorMessage);
          // ..
        });
      }
    };

    return (
        <section style={{marginTop:"130px"}}>
        <div
          className="container py-5 d-flex justify-content-center align-items-center"
        >
          <div className="row">
            <div className="col-md-7 shadow-sm rounded-3 border p-4 d-flex flex-column justify-center align-items-center">
              <h3 className='text-brand'>Create Your Account</h3>
              <div className="p-2 w-75">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  onChange={handleInputValidation}
                  className="custom-input d-block w-100 px-3 py-2 rounded"
                  id="email"
                  placeholder="Name@example.com"
                />
                {inputError?.name === "email" && (
                  <p className="text-danger text-center">
                    {inputError?.errorMessage}
                  </p>
                )}
              </div>
              <div className="p-2 w-75">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  onChange={handleInputValidation}
                  className="custom-input d-block w-100 px-3 py-2 rounded"
                  id="password"
                  placeholder="Enter Your Secret Code"
                />
                {inputError?.name === "password" && (
                  <p className="text-danger text-center">
                    {inputError?.errorMessage}
                  </p>
                )}
              </div>
              <div className="p-2 w-75">
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      className="custom-input d-block w-100 px-3 py-2 rounded"
                      id="firstName"
                      placeholder="John"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      className="custom-input d-block w-100 px-3 py-2 rounded"
                      id="lastName"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>
              <p className="p-2">
                By registering, you agree to our{" "}
                <span>
                  <Link to="/" className='text-decoration-none'>Terms & Conditions.</Link>
                </span>
              </p>
              <button
                onClick={handleRegister}
                className="btn-brand-outline w-50"
              >
                Register Now
              </button>
              <div className="w-75 text-center py-3">
                <p>
                  Have an Account ? Please{" "}
                  <Link to="/login">
                    <button className="btn border">Login</button>
                  </Link>
                </p>
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

export default Register;