export const LatestPatches = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Latest Patch Notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Patch 7.37b</h3>
          <p className="text-gray-600 mb-4">
            Major gameplay changes and hero balancing...
          </p>
          <a
            href="/patch/7.37b"
            className="text-red-600 hover:text-red-800 font-medium"
          >
            Read More
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Patch 7.37c</h3>
          <p className="text-gray-600 mb-4">
            Major gameplay changes and hero balancing...
          </p>
          <a
            href="/patch/7.37c"
            className="text-red-600 hover:text-red-800 font-medium"
          >
            Read More
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Patch 7.37d</h3>
          <p className="text-gray-600 mb-4">
            Major gameplay changes and hero balancing...
          </p>
          <a
            href="/patch/7.37d"
            className="text-red-600 hover:text-red-800 font-medium"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};
