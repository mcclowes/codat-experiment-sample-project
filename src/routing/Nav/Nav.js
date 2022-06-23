import React from "react";
import NavUtil from "../../components/Primitives/Nav";

const LINKS = [
  {
    to: "/",
    text: "Main",
  },
  {
    to: "/companies",
    text: "Companies",
  },
  {
    to: "/data-types",
    text: "Data types",
  },
];

const Nav = () => {
  return <NavUtil logo="Copay" links={LINKS} />;
};

export default Nav;
