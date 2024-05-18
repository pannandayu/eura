import { Link } from "react-router-dom";

const Error: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Page Not Found</h1>
      <Link style={{ color: "black", textDecoration: "none" }} to={"/"}>
        Back to Home
      </Link>
    </div>
  );
};

export default Error;