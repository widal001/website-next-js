import Typewriter from "typewriter-effect";

export default function TypewriterText() {
  return (
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
  );
}
