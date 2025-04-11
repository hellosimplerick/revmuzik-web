import { useParams } from "react-router-dom";

const artistData = {
  "luna-sky": {
    name: "Luna Sky",
    genres: "Indie Pop, Acoustic",
    imageUrl: "https://i.pravatar.cc/300?img=13",
    bio: "Luna Sky is a rising indie singer-songwriter known for her ethereal vocals and intimate live performances. She has played sold-out shows across the country and is currently booking her summer tour.",
    youtubeUrl: "https://www.youtube.com/embed/MR3zJ68Yj2o"
  },
  "dj-reverb": {
    name: "DJ Reverb",
    genres: "Electronic, House",
    imageUrl: "https://i.pravatar.cc/300?img=14",
    bio: "DJ Reverb brings high-energy house and electronic mixes to clubs and festivals around the world. Known for immersive audio/visual experiences.",
    youtubeUrl: "https://www.youtube.com/embed/JGwWNGJdvx8"
  }
};

function ArtistProfile() {
  const { artistId } = useParams();
  const artist = artistData[artistId];

  if (!artist) {
    return (
      <div className="p-6 text-center text-red-600 font-semibold">
        Artist not found.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={artist.imageUrl}
          alt={artist.name}
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-600"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{artist.name}</h1>
          <p className="text-gray-600 mb-2">Genres: {artist.genres}</p>
          <p className="text-gray-700 mb-4">{artist.bio}</p>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Follow
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Invite to Event
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Media</h2>
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe
            className="w-full h-64 rounded"
            src={artist.youtubeUrl}
            title={`${artist.name} - Media`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ArtistProfile;
