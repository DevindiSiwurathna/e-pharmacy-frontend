import React, { Component } from "react";

import axios from "axios";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    const pharmacyName = this.props.location.pharmacyName;
    this.state = {
      Date_time: "",
      Status: "",
      Status2: "",
      CustomerName: "",
      PatientName: "",
      PatientAge: 0,
      Address: "",
      Email: "",
      TeleNo: 0,
      Customer_id: 1,
      Pharmacy_id: 1,
      PharmacyName: pharmacyName ? pharmacyName : "",
      ImageData: null,
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler = (e) => {
    if (e.target.name === "ImageData") {
      this.setState({
        ImageData: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      this.setState({ 
        [e.target.name]: e.target.value,
      });
    }
    console.log("final payload", this.state)
  };

  submitHandler = (e) => {
    console.log("e", e)
    e.preventDefault();
    console.log(this.state);
    axios
      .post("/api/Orders", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {
      Date_time,
      Status,
      Status2,
      CustomerName,
      PatientName,
      PatientAge,
      Address,
      Email,
      TeleNo,
      Customer_id,
      Pharmacy_id,
      ImageData,
    } = this.state;
    return (
      <div className="outer">
        <div className="inner2">
          <form onSubmit={this.submitHandler}>
            <h3>Upload Your Prescription Below</h3>
            <p>
              Please upload an image of your medical prescription issued by a
              SLMC registered doctor.{" "}
            </p>

            <p>
              Prescription drugs will only be issued if a valid prescription
              image is provided.
            </p>

            <hr />

            <div className="form-group">
              <label>
                Enter the prescription items and qty.
                <br /> <br /> Eg : Amoxillin 5mg – 10 Qty / Amoxillin 10mg – 10
                Qty
              </label>
              <br />
              <textarea
                rows="4"
                cols="50"
                name="description"
                id="description"
              ></textarea>{" "}
              <br />
              <label>Upload prescription File.</label>
              <br />
              <input
                type="file"
                name="ImageData"
                placeholder="Upload Your Prescription Here"
                onChange={this.changeHandler}
              />
              <img src={ImageData} style={{width: '50px'}}/>
            </div>

            <div class="field text required" id="payment_options">
              <label class="label" for="payment">
                <span style={{ fontWeight: "bold" }}> Enter Your details</span>
              </label>
              <br />

              <div className="form-group">
                <input
                  placeholder="Date_time"
                  name="Date_time"
                  value={Date_time}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Status"
                  name="Status"
                  value={Status}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Status : 2"
                  name="Status2"
                  value={Status2}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Customer  Name"
                  name="CustomerName"
                  value={CustomerName}
                  onChange={this.changeHandler}
                />
              </div>

              <div className="form-group">
                <input
                  placeholder="Patient  Name"
                  name="PatientName"
                  value={PatientName}
                  onChange={this.changeHandler}
                />
              </div>

              <div className="form-group">
                <input
                  placeholder="Patient  Age"
                  name="PatientAge"
                  value={PatientAge}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Address"
                  name="Address"
                  value={Address}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Email"
                  name="Email"
                  value={Email}
                  onChange={this.changeHandler}
                />
              </div>

              <div className="form-group">
                <input
                  placeholder="Contact Number"
                  name="TeleNo"
                  value={TeleNo}
                  onChange={this.changeHandler}
                />
              </div>
              <label class="label" for="payment">
                <span style={{ fontWeight: "bold" }}></span>
                <span
                  name="Customer_id"
                  value={1}
                  zonChange={this.changeHandler}
                ></span>
              </label>
              <br />

              <label class="label" for="payment">
                <span style={{ fontWeight: "bold" }}></span>
                <span
                  name="Pharmacy_id"
                  value={1}
                  zonChange={this.changeHandler}
                ></span>
              </label>
              <br />

              <label class="label" for="payment">
                <span>Payment Options</span>
              </label>
              <select
                id="payment"
                name="payment"
                class="form-control select-dropdown"
              >
                <option value="0">Card Payment </option>
              </select>
            </div>
            <div>
              <br />
              <button
                type="submit"
                class="action save primary"
                title="Submit Prescription"
              >
                <span>Submit Prescription</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


/*import React, { Component} from "react";

import axios from 'axios'


export default class Upload extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
            Date_time:'',
            Status:'',
            Status2:'',
            CustomerName:'',
            PatientName:'',
            PatientAge:0,
            Address:'',
            Email:'',
            TeleNo:0,
            Customer_id:1,
            Pharmacy_id:1,
            ImageData: null,
          
            




        }
        this.changeHandler = this.changeHandler.bind(this)
    }


    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value,
            [e.target.ImageData]: URL.createObjectURL(e.target.ImageData[0])
        })
        
    }
  submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
           .post('/api/Orders', this.state)
           .then(response => {
               console.log(response)
           })
           .catch(error => {
               console.log(error)
           })
    }

    


   
    render() {
        const { Date_time, Status, Status2, CustomerName ,PatientName, PatientAge, Address, Email, TeleNo,Customer_id,Pharmacy_id,ImageData} = this.state
        return (
            <div className="outer">
      
        <div className="inner2">
            <form onSubmit={this.submitHandler}>

                <h3>Upload Your Prescription Below</h3>
                <p>Please upload an image of your medical prescription issued by a SLMC registered doctor. </p>

                <p>Prescription drugs will only be issued if a valid prescription image is provided.</p>

                <hr/>

                <div className="form-group">
                    <label>Enter the prescription items and qty.<br/> <br/> Eg : Amoxillin 5mg – 10 Qty / Amoxillin 10mg – 10 Qty</label><br/>
                    <textarea rows="4" cols="50" name="description" id="description"></textarea> <br/>  
                    <label>Upload prescription File.</label><br/>

                  <input type="file" name="ImageData"  placeholder="Upload Your Prescription Here" value={ImageData} onChange={this.changeHandler}  /> 
                  <img src={ImageData}/>
                 
                </div>


                <div class="field text required" id="payment_options">
                <label class="label" for="payment"><span style={{fontWeight: "bold"}} > Enter Your details</span></label><br/>


                <div className="form-group">
                <input  placeholder="Date_time" name="Date_time"  value={Date_time} onChange={this.changeHandler}/>

              </div>
              <div className="form-group">
                <input  placeholder="Status" name="Status" value={Status} onChange={this.changeHandler} />

              </div>
              <div className="form-group">
                <input  placeholder="Status : 2" name="Status2"  value={Status2} onChange={this.changeHandler}/>

              </div>
              <div className="form-group">
                <input  placeholder="Customer  Name" name="CustomerName" value={CustomerName} onChange={this.changeHandler} />

              </div>

              <div className="form-group">
                <input  placeholder="Patient  Name" name="PatientName"  value={PatientName} onChange={this.changeHandler}/>

              </div>


              <div className="form-group">
                <input  placeholder="Patient  Age" name="PatientAge"  value={PatientAge} onChange={this.changeHandler}/>

              </div>
              <div className="form-group">
                <input  placeholder="Address" name="Address" value={Address} onChange={this.changeHandler}/>

              </div>
              <div className="form-group">
                <input  placeholder="Email" name="Email"  value={Email} onChange={this.changeHandler}/>

              </div>

              <div className="form-group">
                <input  placeholder="Contact Number" name="TeleNo" value={TeleNo} onChange={this.changeHandler}/>

              </div>
              <label class="label" for="payment"><span style={{fontWeight: "bold"}} ></span><span name="Customer_id" value={1} zonChange={this.changeHandler}></span></label><br/>

              <label class="label" for="payment"><span style={{fontWeight: "bold"}} ></span><span name="Pharmacy_id" value={1} zonChange={this.changeHandler}></span></label><br/>
              

                <label class="label" for="payment"><span>Payment Options</span></label>
                <select id="payment" name="payment" class="form-control select-dropdown">
                    
                        <option value="0">
                            Card Payment                        </option>
                                    </select>
            </div>
            <div>
            <br/><button type="submit" class="action save primary" title="Submit Prescription"><span>Submit Prescription</span></button>
            </div>

                
            </form>
            </div>
            </div>
        );
    }
}*/
