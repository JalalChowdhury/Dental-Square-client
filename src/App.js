// import logo from './logo.svg';
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
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Services/Services';

function App() {
    return (
        <div className="">
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
                    <Route path="/service/:serviceId">
                        <ServiceCartDetail></ServiceCartDetail>
                    </Route>
                    <Route  path="/doctors">
                        <Doctors></Doctors>
                    </Route>
                    <Route path="/appointment">
                        <Appointment></Appointment>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="/contact">
                        <Contact></Contact>
                    </Route>
                    
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
