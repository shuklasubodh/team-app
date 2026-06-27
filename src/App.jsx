import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import Dashboard from "./components/dashboard";
import Settings from "./components/settings";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <>
      <div className="navigation">
        <NavBar />
      </div>
      <Welcome />
      <Profile />
      <Dashboard />
      <Settings />
      <Home />
    </>
  );
}

export default App;
