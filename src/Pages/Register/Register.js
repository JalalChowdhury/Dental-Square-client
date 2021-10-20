import React, {useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import {emailRegex, passRegex, usernameRegex} from '../Register/Regex'
import loginBanner from '../../assets/loginBanner.svg'
import {getAuth ,createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import initializeAuthentication from '../../Firebase/firebase.init';
import { Alert } from 'react-bootstrap';

initializeAuthentication();


const Register = () => {

    const [inputError, setInputError] = useState({});
    const [regInfo, setRegInfo] = useState({});
    // const [error, setError] = useState('');
    const [showAlert, setShowAlert] = useState(false)

    // console.log(regInfo);
    const history = useHistory();

    // handle validation 
    const handleInputValidation = (e) => {
      const inputId = e.target.id;
      const inputValue = e.target.value;
      const info = { ...regInfo };
      if (inputId === "email") {
        if (!emailRegex.test(inputValue)) {
         
          setInputError("Please Type a Valid Email !");
          info[inputId] = null;
          setShowAlert(true)
          setRegInfo(info);
        } else {
          
          setInputError('');
          setShowAlert(false)
          info[inputId] = inputValue;
          setRegInfo(info);
        }
      }
      if (inputId === "password") {
        if (!passRegex.test(inputValue)) {
          
          setInputError('Password must be more than 8 chars combine with uppercase and lowercase, and at least one number');
          info[inputId] = null;
          setShowAlert(true)
          setRegInfo(info);
        } else {
         
          setInputError('');
          info[inputId] = inputValue;
          setShowAlert(false)
          setRegInfo(info);
        }
      }

      if (inputId === "username") {
        if (!usernameRegex.test(inputValue)) {
          
          setInputError('Alphanumeric string that may include _ and – having a length of 5 to 10 characters.');
          info[inputId] = null;
          setShowAlert(true)
          setRegInfo(info);
        } else {
         
          setInputError('');
          info[inputId] = inputValue;
          setShowAlert(false)
          setRegInfo(info);
        }
      }
      
    };
    

    // register process 
    const handleRegister = (e) => {
      e.preventDefault();

      if (regInfo.email && regInfo.password && regInfo.username){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, regInfo.email, regInfo.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: regInfo.username
          })
          history.push('/login');
          setInputError('');

        })
        .catch((error) => {
           setInputError(error.message);
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

              {
                showAlert && <Alert key={1} variant="danger" > {inputError} </Alert>
              }

              <div className="p-2 w-75">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  onChange={handleInputValidation}
                  className="custom-input d-block w-100 px-3 py-2 rounded"
                  id="username"
                  placeholder="john"
                  required
                />
              </div>


              <div className="p-2 w-75">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  onChange={handleInputValidation}
                  className="custom-input d-block w-100 px-3 py-2 rounded"
                  id="email"
                  placeholder="Name@example.com"
                  required
                />

              </div>
              <div className="p-2 w-75">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  onChange={handleInputValidation}
                  className="custom-input d-block w-100 px-3 py-2 rounded"
                  id="password"
                  placeholder="Enter Your Secret Code"
                  required
                />

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
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      className="custom-input d-block w-100 px-3 py-2 rounded"
                      id="lastName"
                      placeholder="Doe"
                      required 
                    />
                  </div>
                </div>
              </div>
              {/* <div className="row mb-3 text-danger">{error}</div> */}
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