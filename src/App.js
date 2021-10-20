import { createContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './App.css';

import Header from './Component/Header/Header';
import ServiceCartDetail from './Component/ServiceCartDetail/ServiceCartDetail';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contact from './Pages/Contact/Contact';

import Doctors from './Pages/Doctors/Doctors';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Services from './Pages/Services/Services';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Footer from "./Component/Footer/Footer";
export const UserContext = createContext();

function App() {
    const localUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    const [loggedInUser, setLoggedInUser] = useState(localUser? {"user":localUser} : null);


    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

            <div className="App">
                <Router>
                    <Header></Header>

                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>


                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/services">
                            <Services></Services>
                        </Route>
                        <PrivateRoute path="/service/:serviceId">
                            <ServiceCartDetail></ServiceCartDetail>
                        </PrivateRoute>
                        <PrivateRoute path="/doctors">
                            <Doctors></Doctors>
                        </PrivateRoute>
                        <PrivateRoute path="/appointment">
                            <Appointment></Appointment>
                        </PrivateRoute>
                        <Route path="/about">
                            <About></About>
                        </Route>
                        <Route path="/contact">
                            <Contact></Contact>
                        </Route>
                        <Route path="/login">
                            <Login></Login>
                        </Route>

                        <Route path="/register">
                            <Register></Register>
                        </Route>

                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </div>
        </UserContext.Provider>

    );
}

export default App;
