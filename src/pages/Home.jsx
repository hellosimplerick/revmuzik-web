function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to RevMuzik</h1>
      <p className="text-gray-700 text-lg mb-6 max-w-xl">
        This is a platform for artists, venues, and fans to connect through live music.
        Please login to continue or navigate to your dashboard if you're already signed in.
      </p>
      <button className="px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
        Go to Fan Dashboard
      </button>
    </div>
  );
}

export default Home;
