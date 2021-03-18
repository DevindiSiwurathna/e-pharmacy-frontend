import React, { Component } from "react";
//import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pharmacies from "./pharmacies.component";
import "./district.css";
import upload from "./upload.component";
class District extends Component {
  constructor(props) {
    super(props);
    // this.handle
    this.state = {
      PharmacyName: "",
    };
  }

  changeHandler = (pharmacyName) => {
    this.setState({ 
      PharmacyName: pharmacyName,
    });
  };

  render() {
    return (
      <div className="container district">
        <div className="row1">
          <h2>Select your District and Nearby Pharmacy</h2>
        </div>
        <div className="row">
          <div className="column">
            <Pharmacies
              district="Matara"
              handlechange={this.changeHandler.bind(this)}
            />
            <Pharmacies
              district="Galle"
              handlechange={this.changeHandler.bind(this)}
            />
            <Pharmacies
              district="Hambantota"
              handlechange={this.changeHandler.bind(this)}
            />
            <Pharmacies
              district="Kalutara"
              handlechange={this.changeHandler.bind(this)}
            />
            <Pharmacies
              district="Colombo"
              handlechange={this.changeHandler.bind(this)}
            />
          </div>
          <div className="column">
            <Pharmacies
              district="Gampaha"
              handlechange={this.changeHandler.bind(this)}
            />
            <Pharmacies
              district="Rathnapura"
              handlechange={this.changeHandler.bind(this)}
            />
            <Pharmacies
              district="Kurunegala"
              handlechange={this.changeHandler.bind(this)}
            />
            <Pharmacies
              district="Monaragala"
              handlechange={this.changeHandler.bind(this)}
            />
            <Pharmacies
              district="Anuradhapura"
              handlechange={this.changeHandler.bind(this)}
            />
          </div>
          <div className="column">
            <Pharmacies
              district="Polonnaruwa"
              handlechange={this.changeHandler.bind(this)}
            />
            <Pharmacies district="Kandy" />
            <Pharmacies
              district="Nuwara Eliya"
              handlechange={this.changeHandler.bind(this)}
            />
            <Pharmacies
              district="Kegalla"
              handlechange={this.changeHandler.bind(this)}
            />
            <Pharmacies
              district="Matale"
              handlechange={this.changeHandler.bind(this)}
            />
          </div>
          <div className="column">
            <Pharmacies
              district="Badulla"
              handlechange={this.changeHandler.bind(this)}
            />
            <Pharmacies
              district="Ampara"
              handlechange={this.changeHandler.bind(this)}
            />
            <Pharmacies
              district="Puttalam"
              handlechange={this.changeHandler.bind(this)}
            />
            <Pharmacies
              district="Trincomalee"
              handlechange={this.changeHandler.bind(this)}
            />
            <Pharmacies
              district="Batticaloa"
              handlechange={this.changeHandler.bind(this)}
            />
          </div>
          <div className="column">
            <Pharmacies
              district="Mannar"
              handlechange={this.changeHandler.bind(this)}
            />
            <Pharmacies
              district="Vavuniya"
              handlechange={this.changeHandler.bind(this)}
            />
            <Pharmacies
              district="Mulaitivu"
              handlechange={this.changeHandler.bind(this)}
            />
            <Pharmacies
              district="Kilinochchi"
              handlechange={this.changeHandler.bind(this)}
            />
            <Pharmacies
              district="Jaffna"
              handlechange={this.changeHandler.bind(this)}
            />
          </div>
        </div>

        <div>
          <br />
          <Link to={{
            pathname: "/upload",
            pharmacyName: this.state.PharmacyName,
            }}
          >
            <button
              type="button"
              className="districtSelectButton"
              value="Add Prescription"
            >
              Add Prescription
            </button>
          </Link>
        </div>
        <br />
      </div>
    );
  }
}

export default District;


/*import React,{ Component } from 'react';
//import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pharmacies from './pharmacies.component';
import './district.css';
import upload from "./upload.component";
class District extends Component{
    constructor(props){
        super(props);
        // this.handle
    }

    
    render(){
        return(

            <div className="container district">
                <div className="row1">
                    <h2>Select your District and Nearby Pharmacy</h2>
                </div>
            <div className="row">
                <div className="column">
                <Pharmacies district="Matara"/>
                <Pharmacies district="Galle"/>
                <Pharmacies district="Hambantota"/>
                <Pharmacies district="Kalutara"/>
                <Pharmacies district="Colombo"/>
                </div>
                <div className="column">
                <Pharmacies district="Gampaha"/>
                <Pharmacies district="Rathnapura"/>
                <Pharmacies district="Kurunegala"/>
                <Pharmacies district="Monaragala"/>
                <Pharmacies district="Anuradhapura"/>
                </div>
                <div className="column">
                <Pharmacies district="Polonnaruwa"/>
                <Pharmacies district="Kandy"/>
                <Pharmacies district="Nuwara Eliya"/>
                <Pharmacies district="Kegalla"/>
                <Pharmacies district="Matale"/>
                </div>
                <div className="column">
                <Pharmacies district="Badulla"/>
                <Pharmacies district="Ampara"/>
                <Pharmacies district="Puttalam"/>
                <Pharmacies district="Trincomalee"/>
                <Pharmacies district="Batticaloa"/>
                </div>
                <div className="column">
                <Pharmacies district="Mannar"/>
                <Pharmacies district="Vavuniya"/>
                <Pharmacies district="Mulaitivu"/>
                <Pharmacies district="Kilinochchi"/>
                <Pharmacies district="Jaffna"/>
                </div>
            </div>

                <div>
                   <br/>
                   <Link to = "/upload" ><button type="button" className="districtSelectButton" value = "Add Prescription" >Add Prescription</button></Link>
                
                </div>
                    <br/>
            </div>
             
            
            
        )
    }
}

export default District*/