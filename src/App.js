
import React, { Component } from 'react';
import GlobalStyle from './globalStyles';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Footer from './components/Footer/Footer';
import Login from "./components/login.component";
import SignUpascustomer from "./components/signup.component";
import SignUpaspharmacy from "./components/pharmacyaccount";
import District from './components/district.component';
import Upload from './components/upload.component';
//import District from "./components/district.component";
//import Upload from "./components/upload.component";


function App() {
  return (<Router>
    <GlobalStyle/>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>ORDER YOUR HEALTH & WELLNESS PRODUCTS ONLINE TODAY!</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up-as-customer"}>Sign up as customer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up-as-pharmacy"}>Sign up as Pharmacy</Link>
                </li>
               {/* <li className="nav-item">
                <Link className="nav-link" to={"/district"}>District</Link>
              </li>  */}
              <li className="nav-item"> 
                <Link className="nav-link" to={"/"}>Home</Link>
    
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch> <Route exact path='/' exact component={Home} /></Switch> 
            
           
            <Switch>
        
          
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up-as-customer" component={SignUpascustomer} />
            <Route path="/sign-up-as-pharmacy" component={SignUpaspharmacy} />
            <Route path="/district" component={District} />
            <Route path="/upload" component={Upload} />
           

        </Switch>
        
        </div>
      
    </Router>
  );
}

export default App;












/*

function App() {
  return (<Router>
    <GlobalStyle/>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>ORDER YOUR HEALTH & WELLNESS PRODUCTS ONLINE TODAY!</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch><Route exact path='/' exact component={Home} /></Switch>
      
          <Switch>
            
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        
        
     
    <Footer/>
    </div>
    </Router>
  );//import Login from "./components/login.component";
//import SignUp from "./components/signup.component";
}


export default App; */