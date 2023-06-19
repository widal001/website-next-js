import Head from "next/head";
import Typewriter from "typewriter-effect";
import Navbar from "@/components/partials/Navbar";

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
        <Navbar />
        <div className="snap-mandatory snap-y h-screen overflow-x-clip overflow-y-scroll scroll-smooth">
          <section
            id="hero"
            className="snap-start flex items-center bg-blue-200 min-h-screen"
          >
            <div className="mx-auto max-w-screen-xl text-center">
              <h1 className="mb-4 text-3xl font-normal tracking-tight leading-none text-neutral-900 md:text-4xl lg:text-5xl ">
                <div className="row my-4">{"Hi, my name is Billy and"}</div>
                <div className="row my-4 mb-8">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(100)
                        .typeString("I'm a software engineer")
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
          <section
            id="about-me"
            className="snap-start flex items-center bg-neutral-100 min-h-screen"
          >
            <div className="mx-auto px-6 max-w-screen-xl">
              <h1 className="mb-4 text-xl font-semibold tracking-tight leading-none text-blue-700 ">
                {"About Me"}
              </h1>
              <h2 className="text-4xl mb-4 font-bold tracking-tight leading-tight">
                {"Tackling hard problems with data and technology"}
              </h2>
              <p className="mb-4 max-w-3xl text-xl font-light tracking-normal leading-tight text-neutral-900">
                {"I'm a software and data engineer based in Baltimore "}
                {"who believes that it can and should be easier to do good. "}
                {"The focus of my career has been to develop the technical "}
                {"solutions that enable organizations to expand their impact. "}
                {"This work has shown me that every movement needs its "}
                {"pencil pushers, and that I happen to love Ticonderogas."}
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
