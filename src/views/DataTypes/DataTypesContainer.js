import React, { useState, useEffect } from "react";
import DataTypes from "./DataTypes";

//const baseUrl = "http://0.0.0.0:8080/https://api.codat.io/profile/syncSettings";
const baseUrl = "https://api.codat.io/profile/syncSettings";

const arrayOfSetOfValues = (arr) => {
  return Array.from(new Set(arr));
};

const fetchDataTypes = async (callback) => {
  const encodedKey = Buffer.from(process.env.REACT_APP_API_KEY).toString(
    "base64"
  );

  const result = await fetch(baseUrl, {
    method: "GET",
    headers: { authorization: "Basic " + encodedKey },
  }).then((response) => response.json());

  callback(result.settings);
};

const CompaniesContainer = (props) => {
  const [dataTypes, setDataTypes] = useState(undefined);

  useEffect(() => {
    fetchDataTypes(setDataTypes);
  }, []);

  const settingsArr = arrayOfSetOfValues(dataTypes);

  return <DataTypes dataTypes={settingsArr} />;
};

export default CompaniesContainer;
