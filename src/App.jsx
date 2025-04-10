import Header from "./components/Header";
import EventCard from "./components/EventCard";
import ArtistCard from "./components/ArtistCard";
import TicketCard from "./components/TicketCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4 space-y-6">
        <section>
          <h2 className="text-xl font-bold text-blue-600 mb-4">Upcoming Events</h2>
          <EventCard
            title="Live at The Underground"
            artist="The Echo Band"
            location="Toronto, ON"
            datetime="April 20, 2025 — 8:00 PM"
          />
        </section>

        <section>
          <h2 className="text-xl font-bold text-blue-600 mb-4">Featured Artist</h2>
          <ArtistCard
            name="Luna Sky"
            genres="Indie Pop, Acoustic"
            imageUrl="https://i.pravatar.cc/300?img=13"
          />
        </section>

        <section>
          <h2 className="text-xl font-bold text-blue-600 mb-4">My Tickets</h2>
          <TicketCard
            eventTitle="Basement Beats"
            dateTime="June 12, 2025 — 9:00 PM"
            venue="Montreal Music Hall"
            ticketId="#A82739C"
          />
        </section>
      </main>
    </div>
  );
}

export default App;
