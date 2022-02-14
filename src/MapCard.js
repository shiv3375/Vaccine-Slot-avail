import React from "react";

function MapCard(props) {
  return (
    <div>
      <div
        className="card text-dark bg-info mb-3"
        style={{
          width: "18rem",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{props.value.state}</h5>

          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </div>
  );
}

export default MapCard;
