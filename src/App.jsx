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
        <EventCard />
        <EventCard />
        <EventCard />
      </main>
    </div>
  );
}

export default App;
