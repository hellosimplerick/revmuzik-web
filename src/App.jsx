import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import FanDashboard from "./pages/Dashboard/FanDashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/fan" element={<FanDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
