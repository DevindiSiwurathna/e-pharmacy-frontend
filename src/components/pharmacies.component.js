import React, { Component } from "react";
import "./district.css";
class Pharmacies extends Component {
  constructor(props) {
    super(props);
    // this.handle
  }

  dropdownChangeHandler = () => {
    this.props.handlechange(this.props.district);
  };

  render() {
    return (
      <div className="row districtelement">
        {/* <label>
                    {props.district}
                </label> */}
        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">
          {this.props.district}
        </label>
        <select
          class="custom-select my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          onChange={this.dropdownChangeHandler}
        >
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    );
  }
}
export default Pharmacies;


/*import React,{ Component } from 'react';
import './district.css';
class Pharmacies extends Component{
    constructor(props){
        super(props);
        // this.handle
    }

    

    
    render(){
        return(
            <div className="row districtelement">
                {/* <label>
                    {props.district}
                </label> }
             /* <label class="my-1 mr-2" for="inlineFormCustomSelectPref">{this.props.district}</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>  

            </div>
        )
    }
}
export default Pharmacies*/