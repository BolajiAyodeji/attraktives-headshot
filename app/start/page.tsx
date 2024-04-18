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
      <p className="pb-8 text-center">
        Apps marked with &quot;DEV&quot; can only be tested in development for
        now. You can learn how to setup the code locally in{" "}
        <a
          href="https://github.com/BolajiAyodeji/attraktives-headshot"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline decoration-wavy"
        >
          this GitHub repository.
        </a>
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8">
        {apps.map((app, index) => (
          <a
            key={index}
            className="bg-white rounded-lg shadow-md hover:bg-blue-200"
            href={app.url}
          >
            <span
              className={`inline-flex items-center justify-center w-10 h-10 text-xs font-semibold text-black rounded-br-xl ${
                app.isProduction ? "bg-green-400" : "bg-red-400"
              }`}
            >
              {app.isProduction ? "PROD" : "DEV"}
            </span>
            <p className="text-xl text-center font-semibold text-gray-800 mb-2 px-12 py-14 lg:px-24 lg:py-32">
              {app.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
