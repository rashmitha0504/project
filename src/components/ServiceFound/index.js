import React, { Component } from "react";
import "./ServiceFound.css";

class ServiceFound extends Component {
  render() {
    return (
      <div className="cont">
        <h1 className="header">Services Offered</h1>
        <div className="container">
          <div className="sub-card">
            <div className="content">
              <h2>Financial Modeling</h2>
              <p>
                Financial modeling is the process of creating a mathematical
                model that represents a business or financial situation.
                Financial models are used to evaluate the performance of a
                business or investment, to forecast future performance, and to
                estimate the value of assets and liabilities.
              </p>
            </div>
          </div>

          <div className="sub-card">
            <div className="content">
              <h2>Business Plan</h2>
              <p>
                Financial modeling is the process of creating a mathematical
                model that represents a business or financial situation.
                Financial models are used to evaluate the performance of a
                business or investment, to forecast future performance, and to
                estimate the value of assets and liabilities.
              </p>
            </div>
          </div>

          <div className="sub-card">
            <div className="content">
              <h2>Pitch Deck</h2>
              <p>
                Financial modeling is the process of creating a mathematical
                model that represents a business or financial situation.
                Financial models are used to evaluate the performance of a
                business or investment, to forecast future performance, and to
                estimate the value of assets and liabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceFound;
