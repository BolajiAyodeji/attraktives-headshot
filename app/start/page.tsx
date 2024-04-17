export default function StartPage() {
  const apps = [
    {
      name: "Headshot Editor",
      url: "/headshot",
    },
    {
      name: "General Editor",
      url: "/editor",
    },
  ];

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Select App:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {apps.map((app, index) => (
          <a
            key={index}
            className="bg-white rounded-lg shadow-md hover:bg-blue-500"
            href={app.url}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2 px-24 py-40">
              {app.name}
            </h2>
          </a>
        ))}
      </div>
    </div>
  );
}
