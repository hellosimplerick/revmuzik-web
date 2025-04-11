function ArtistProfile() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src="https://i.pravatar.cc/300?img=13"
          alt="Luna Sky"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-600"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Luna Sky</h1>
          <p className="text-gray-600 mb-2">Genres: Indie Pop, Acoustic</p>
          <p className="text-gray-700 mb-4">
            Luna Sky is a rising indie singer-songwriter known for her ethereal vocals
            and intimate live performances. She has played sold-out shows across the country
            and is currently booking her summer tour.
          </p>
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
            src="https://www.youtube.com/embed/MR3zJ68Yj2o"
            title="Luna Sky - Live Performance"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ArtistProfile;
