import { Link } from "react-router-dom";

function ArtistCard({ name, genres, imageUrl, artistId }) {
  return (
    <Link to={`/artist/${artistId}`} className="block hover:shadow-lg transition-shadow">
      <div className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border border-gray-300"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{genres}</p>
          <p className="text-blue-500 text-sm mt-2">View Profile →</p>
        </div>
      </div>
    </Link>
  );
}

export default ArtistCard;
