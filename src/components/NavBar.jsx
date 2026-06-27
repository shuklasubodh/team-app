import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <h2 style={{ marginBottom: "0.5rem" }}>NavBar</h2>
      <div>buttons for navigation here</div>
      <ul
        style={{
          display: "flex",
          gap: "1rem",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        <li>
          <Link to="/welcome">Welcome</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
