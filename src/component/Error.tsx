import React from "react";
import { Link } from "react-router-dom";

const { BASE_URL } = import.meta.env;

const errorStyle = {
  display: "flex",
  justifyContent: "center",
  height: "100vh",
  alignItems: "center",
  flexDirection: "column",
} as React.CSSProperties;

const Error: React.FC = () => {
  return (
    <div style={errorStyle}>
      <h1>Page Not Found</h1>
      <Link style={{ color: "black", textDecoration: "none" }} to={BASE_URL}>
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
