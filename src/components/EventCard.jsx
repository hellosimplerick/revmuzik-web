function EventCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4">
      <h2 className="text-xl font-bold text-gray-800 mb-1">Live at The Underground</h2>
      <p className="text-sm text-gray-600 mb-2">Featuring: The Echo Band</p>
      <p className="text-sm text-gray-600">📍 Toronto, ON</p>
      <p className="text-sm text-gray-600">🗓️ April 20, 2025 — 8:00 PM</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Buy Ticket
      </button>
    </div>
  );
}

export default EventCard;
