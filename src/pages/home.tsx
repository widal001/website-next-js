import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Billy Daly Portfolio</title>
        <meta name="description" content="Get to know Billy Daly" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="flex items-center bg-blue-100 min-h-screen">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 text-4xl font-normal tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl">
              <div className="row my-4">{"Hi, my name is Billy"}</div>
              <div className="row my-4 mb-8">{"I'm a civic technologist"}</div>
            </h1>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="#about-me"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-full border border-blue-900 hover:bg-blue-900 hover:text-white"
              >
                Get to know me
              </a>
            </div>
          </div>
        </section>
        <section className="flex items-center bg-gray-900 min-h-screen">
          <div id="about-me">
            <h1 className="mb-4 text-4xl font-normal tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              {"Hi, my name is Billy"}
            </h1>
          </div>
        </section>
      </main>
    </>
  );
}
