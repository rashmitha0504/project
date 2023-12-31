import React, { Component } from "react";
import "./Talk.css";

class Talk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      country: "",
      phoneNumber: "",
      service: "",
      message: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", this.state);
  };

  render() {
    return (
      <div>
        <div className="main-container">
          <div className="sub-container">
            <h2 className="head">Talk to Us</h2>
          </div>
          <div className="sub-container">
            <h2 className="head">Sub Container 2</h2>
            <form onSubmit={this.handleSubmit} className="box">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={this.state.fullName}
                onChange={this.handleChange}
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />

              <label htmlFor="country">Select Country:</label>
              <select
                id="country"
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
              >
                <option value="">Select</option>
                <option value="India">India (+91)</option>
                <option value="USA">USA</option>
                <option value="Canada">CANADA</option>
                <option value="UK">UK</option>
              </select>

              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
              />

              <label htmlFor="service">Select Service:</label>
              <select
                id="service"
                name="service"
                value={this.state.service}
                onChange={this.handleChange}
              >
                <option value="">Select</option>
                <option value="pitchDesk">Pitch Desk</option>
                <option value="financialDesk">Financial Desk</option>
                <option value="businessPlan">Business Plan</option>
                <option value="businessConsultancy">
                  Business Consultancy
                </option>
                <option value="others">Others</option>
              </select>

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Talk;
