export default function StartPage() {
  const apps = [
    {
      name: "Remove Image Background",
      url: "/bg-remove",
      isProduction: true,
    },
    {
      name: "Add Image Background Color",
      url: "/bg-add",
      isProduction: false,
    },
    {
      name: "General Design Editor",
      url: "/editor",
      isProduction: false,
    },
  ];

  return (
    <div className="flex flex-col h-screen items-center justify-center mx-4">
      <h2 className="text-xl lg:text-3xl font-bold mb-4">Select App</h2>
      <p className="mb-12 text-center text-sm lg:text-md">
        Apps with the <span className="text-red-400">red</span> tag can only be
        tested in development for now{" "}
        <a
          href="https://github.com/BolajiAyodeji/attraktives-headshot?tab=readme-ov-file#getting-started"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted hover:no-underline"
        >
          (learn how!)
        </a>
        .
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8">
        {apps.map((app, index) => (
          <a
            key={index}
            className="mb-2 px-12 py-16 lg:py-36 bg-white rounded-lg shadow-md hover:bg-blue-200"
            href={app.url}
          >
            <p className="flex flex-col items-center justify-center text-center text-xl font-semibold text-gray-800">
              <span
                className={`h-4 px-8 mb-4 rounded-full ${
                  app.isProduction ? "bg-green-400" : "bg-red-400"
                }`}
              ></span>
              {app.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
