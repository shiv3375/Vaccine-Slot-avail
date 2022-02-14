import StateCard from "./StateCard";
import States from "./Resource/States";
import { useState } from "react";
function State(props) {
  // useState
  const renderCards = () => {
    return States.map((element) => {
      return (
        <StateCard
          data={{
            state: element["state_name"],
            stateId: element["state_id"],
            renderDistrict: () => {
              props.setCurrStateId(element["state_id"]);
            },
          }}
        />
      );
    });
  };

  return (
    <div className="col-3" style={{ padding: "5px" }}>
      {renderCards()}
    </div>
  );
}

export default State;
