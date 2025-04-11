import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import FanDashboard from "./pages/Dashboard/FanDashboard";
import VenueDashboard from "./pages/Dashboard/VenueDashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/fan" element={<FanDashboard />} />
        <Route path="/dashboard/venue" element={<VenueDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
