import React, { useEffect, useState } from "react";
import Centercards from "./Centercard";
import axios from "axios";

function Centers(props) {
  const [districtID, setDistrictId] = useState("");
  const [centers, setCenters] = useState([]);
  // useState
  const renderCards = () => {
    centers.map((ele) => {
      return <Centercards centerInfo={ele} />;
    });
  };
  useEffect(() => {
    if (props.currDistrictId !== "" && props.currDistrictId !== districtID) {
      axios
        .get(
          `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${props.currDistrictId}&date=05-02-2022`
        )
        .then(function (response) {
          console.log(response.data.sessions);
          setCenters(response.data.sessions);
          setDistrictId(props.currDistrictId);
        });
    }
  });

  return (
    <div style={{ padding: "5px", overflow: "auto", height: "100vh" }}>
      {renderCards()}
    </div>
  );
}

export default Centers;
