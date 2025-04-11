import EventCard from "../../components/EventCard";
import ArtistCard from "../../components/ArtistCard";

function VenueDashboard() {
  return (
    <div className="p-6 space-y-8">
      <section>
        <h2 className="text-xl font-bold text-green-700 mb-4">Your Upcoming Events</h2>
        <EventCard
          title="Basement Beats"
          artist="DJ Reverb"
          location="Montreal Music Hall"
          datetime="June 12, 2025 — 9:00 PM"
        />
        <EventCard
          title="Sunset Sessions"
          artist="Luna Sky"
          location="Montreal Music Hall"
          datetime="July 5, 2025 — 8:30 PM"
        />
      </section>

      <section>
        <h2 className="text-xl font-bold text-green-700 mb-4">Confirmed Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ArtistCard
            name="Luna Sky"
            genres="Indie Pop, Acoustic"
            imageUrl="https://i.pravatar.cc/300?img=13"
            artistId="luna-sky"
          />
          <ArtistCard
            name="DJ Reverb"
            genres="Electronic, House"
            imageUrl="https://i.pravatar.cc/300?img=14"
            artistId="dj-reverb"
          />
        </div>
      </section>
    </div>
  );
}

export default VenueDashboard;
