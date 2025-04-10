import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FanDashboard from "./pages/Dashboard/FanDashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Routes>
        <Route path="/dashboard/fan" element={<FanDashboard />} />
        {/* Future: add /dashboard/venue and other routes here */}
      </Routes>
    </div>
  );
}

export default App;
