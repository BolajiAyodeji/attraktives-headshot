export default function StartPage() {
  const apps = [
    {
      name: "Remove Image Background",
      url: "/bg-remove",
    },
    {
      name: "Add Image Background Color",
      url: "/bg-add",
    },
    {
      name: "General Design Editor",
      url: "/editor",
    },
  ];

  return (
    <div className="flex flex-col h-screen items-center justify-center mx-4">
      <h1 className="text-xl lg:text-3xl font-bold mb-8">Select App:</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8">
        {apps.map((app, index) => (
          <a
            key={index}
            className="bg-white rounded-lg shadow-md hover:bg-blue-500"
            href={app.url}
          >
            <h2 className="text-xl text-center font-semibold text-gray-800 mb-2 px-12 py-14 lg:px-24 lg:py-40">
              {app.name}
            </h2>
          </a>
        ))}
      </div>
    </div>
  );
}
