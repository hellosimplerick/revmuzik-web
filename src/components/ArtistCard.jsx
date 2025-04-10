function ArtistCard({ name, genres, imageUrl }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4">
      <img
        src={imageUrl}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border border-gray-300"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{genres}</p>
        <button className="mt-2 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
          View Profile
        </button>
      </div>
    </div>
  );
}

export default ArtistCard;
