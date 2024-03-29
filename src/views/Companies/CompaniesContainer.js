import React, { useState, useEffect } from "react";
import Companies from "./Companies";

//const baseUrl = "http://0.0.0.0:8080/https://api.codat.io/companies?page=1&pageSize=50";
const baseUrl =
  "https://cors-anywhere.herokuapp.com/https://api.codat.io/companies?page=1&pageSize=50";

const fetchCompanies = async (callback) => {
  const encodedKey = Buffer.from(process.env.REACT_APP_API_KEY).toString(
    "base64"
  );

  const result = await fetch(baseUrl, {
    method: "GET",
    headers: {
      authorization: "Basic " + encodedKey,
      "Access-Control-Allow-Origin": "*",
    },
  }).then((response) => response.json());

  callback(result.results);
};

const CompaniesContainer = (props) => {
  const [companies, setCompanies] = useState(undefined);

  useEffect(() => {
    fetchCompanies(setCompanies);
  }, []);

  return <Companies companies={companies} />;
};

export default CompaniesContainer;
