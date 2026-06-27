import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import Dashboard from "./components/dashboard";
import Settings from "./components/settings";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Welcome />
      <Profile />
      <Dashboard />
      <Settings />
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
