import Header from "./components/Header";
import EventCard from "./components/EventCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <h2 className="text-xl font-bold text-blue-600 mb-4">
          Upcoming Events
        </h2>
        <EventCard
          title="Live at The Underground"
          artist="The Echo Band"
          location="Toronto, ON"
          datetime="April 20, 2025 — 8:00 PM"
        />
        <EventCard
          title="Sunset Sessions"
          artist="Luna Sky"
          location="New York, NY"
          datetime="May 3, 2025 — 7:30 PM"
        />
        <EventCard
          title="Basement Beats"
          artist="DJ Reverb"
          location="Montreal, QC"
          datetime="June 12, 2025 — 9:00 PM"
        />
      </main>
    </div>
  );
}

export default App;
