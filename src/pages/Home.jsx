import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="h-[80vh] bg-cover bg-center flex items-center justify-center text-center px-4 relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/60 p-8 rounded-lg text-white max-w-xl">
        <h1 className="text-4xl font-bold mb-4">Welcome to RevMuzik</h1>
        <p className="text-lg mb-6">
          This is a platform for artists, venues, and fans to connect through live music.
          Please login to continue or navigate to your dashboard if you're already signed in.
        </p>
        <button
          onClick={() => navigate("/dashboard/fan")}
          className="px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go to Fan Dashboard
        </button>
      </div>
    </div>
  );
}

export default Home;
