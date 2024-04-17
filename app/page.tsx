import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <p className="text-center text-lg border-b border-gray-600 pb-6 pt-8 backdrop-blur-2xl lg:rounded-xl lg:border lg:p-4">
        A simple web application that enables you to craft an attractive profile
        picture for social media platforms built with {""}
        <a
          href="https://img.ly/docs/cesdk?utm_source=bolajiayodeji.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          CreativeEditor Engine/SDK {""}
        </a>
        and{" "}
        <a
          href="https://clerk.dev?utm_source=bolajiayodeji.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clerk Auth
        </a>
        .
      </p>

      <div className="items-center lg:max-w-4xl lg:w-full my-2">
        <Image
          src="/demo-2.png"
          alt="Screenshot of the Headshot App"
          width={1000}
          height={1000}
          priority
        />
      </div>

      <div className="mb-20 lg:mb-32 grid lg:grid-cols-3 text-center lg:max-w-5xl lg:w-full lg:text-left">
        <a
          href="/start"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-blue-500`}>
            Get Started{" "}
            <span className="ml-4 animate-bounce inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              ☞
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the headshot background editor or general editor.
          </p>
        </a>
        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Read Tutorial{" "}
            <span className="ml-4 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              ☞
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn how this demo was built by reading a comprehensive blogpost.
          </p>
        </a>

        <a
          href="https://github.com/BolajiAyodeji/attraktives-headshot"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            OSS Code{" "}
            <span className="ml-4 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              ☞
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the public code of this demo on GitHub and maybe contribute
            to it.
          </p>
        </a>
      </div>

      <div className="fixed bottom-0 w-full py-4 bg-black">
        <hr className="my-4 lg:my-0 border-gray-600 pb-0 lg:pb-4" />
        <p className="text-center">
          &copy;{" "}
          <a
            href="https://bolajiayodeji.com?utm_source=attraktives-headshot"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bolaji Ayodeji
          </a>{" "}
          | 2024 - {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}
