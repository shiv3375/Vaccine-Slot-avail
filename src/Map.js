import React from "react";
import States from "./compoents/Resource/States";
import MapCard from "./MapCard";

function Map() {
  const Display = () => {
    return States.map((st) => {
      return (
        <MapCard
          value={{ state: st["state_name"], stateId: st["state_id"] }}
          key={st.state_id}
        />
      );
    });
  };
  return (
    <div style={{ padding: "5px", overflow: "auto", height: "100vh" }}>
      {Display()}
    </div>
  );
}

export default Map;
