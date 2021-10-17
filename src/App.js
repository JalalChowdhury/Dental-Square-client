// import logo from './logo.svg';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
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
                <Route path="/about">
                    <About></About>
                </Route>
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
