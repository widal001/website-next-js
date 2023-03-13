import Head from "next/head";
import { Inter } from "next/font/google";
import Typewriter from "typewriter-effect";

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
      <main className="snap-mandatory snap-y h-screen overflow-scroll scroll-smooth">
        <section className="snap-start flex items-center bg-blue-200 min-h-screen">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 text-3xl font-normal tracking-tight leading-none text-neutral-900 md:text-4xl lg:text-5xl ">
              <div className="row my-4">{"Hi, my name is Billy and I'm"}</div>
              <div className="row my-4 mb-8">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(250)
                      .typeString("a software engineer")
                      .pauseFor(250)
                      .deleteChars("software engineer".length)
                      .typeString("civic technologist")
                      .pauseFor(250)
                      .deleteChars("a civic technologist".length)
                      .typeString("pleased to meet you")
                      .start();
                  }}
                />
              </div>
            </h1>
            <div className="flex-initial flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="#about-me"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-neutral-900 rounded-full border border-blue-700 hover:bg-blue-700 hover:text-white"
              >
                Get to know me
              </a>
            </div>
          </div>
        </section>
        <section className="snap-start flex items-center bg-neutral-100 min-h-screen">
          <div
            id="about-me"
            className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
          >
            <h1 className="mb-4 text-4xl font-normal tracking-tight leading-none text-neutral-900 md:text-5xl lg:text-6xl">
              {"Hi, my name is Billy"}
            </h1>
          </div>
        </section>
      </main>
    </>
  );
}
