import React, { useState } from "react";

function DistrictCard(props) {
  // useState
  return (
    <div>
      <div className="card text-dark bg-info mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h4>INDIA</h4>
          <div>
            <h5
              className="card-title"
              style={{ hover: "backgroundColor" }}
              onClick={() => {
                props.data.renderDistrict();
              }}
            >
              {props.data.district}
            </h5>
          </div>
          {/* <h1>hello</h1> */}
        </div>
      </div>
    </div>
  );
}

export default DistrictCard;
