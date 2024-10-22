export const MostPopularGuides = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Featured Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-700"
          >
            <img
              src={`https://placehold.co/150x250/7F7F7F/7F7F7F`}
              alt="Guide Thumbnail"
              className=" w-full h-40 object-cover rounded-md mb-4 opacity-9"
            />
            <h3 className="text-lg font-semibold mb-2">
              {["Invoker", "Pudge", "Anti-Mage", "Shadow Fiend"][i - 1]} Guide
              7.37d
            </h3>
            <p className="text-gray-600 mb-4 dark:text-gray-100">
              Learn advanced techniques and strategies...
            </p>
            <a
              href="#"
              className="text-red-600 hover:text-red-900  font-medium"
            >
              View Guide
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
