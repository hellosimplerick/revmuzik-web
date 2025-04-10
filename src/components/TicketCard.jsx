function TicketCard({ eventTitle, dateTime, venue, ticketId }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4">
      <h3 className="text-lg font-semibold text-gray-800">{eventTitle}</h3>
      <p className="text-sm text-gray-600">🗓️ {dateTime}</p>
      <p className="text-sm text-gray-600">📍 {venue}</p>
      <p className="text-sm text-gray-500 italic">🎫 Ticket ID: {ticketId}</p>
      <button className="mt-3 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
        View Ticket
      </button>
    </div>
  );
}

export default TicketCard;
