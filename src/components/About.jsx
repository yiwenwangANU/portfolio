import Code from "./code";

function About() {
  return (
    <div className="2xl:px-96 xl:px-40 md:px-16 px-10 pt-20 text-white">
      <div className="text-white text-4xl font-bold">About Me</div>
      <div className="flex flex-row justify-between">
        <div className="text-gray-400 text-xl leading-8 py-3 flex flex-col gap-14 w-2/3">
          <p>
            Hello! I am{" "}
            <span className="text-white font-semibold">Yiwen Wang</span>.
            I&apos;m a developer passionate about continuous self-learning. My
            journey started with a foundation in <Code>HTML</Code>,{" "}
            <Code>CSS</Code>,<Code>JavaScript</Code>, <Code>SQL</Code>, and{" "}
            <Code>PHP</Code>
            at university. After graduating, I expanded into <Code>
              AWS
            </Code>, <Code>Kubernetes</Code>,<Code>MongoDB</Code>,{" "}
            <Code>Node.js</Code>, <Code>Express</Code>, <Code>React</Code>, and{" "}
            <Code>Next.js</Code> to build{" "}
            <span className="text-white font-semibold">
              dynamic web applications
            </span>
            .
          </p>
          <p>
            I&apos;m also keen on{" "}
            <span className="text-white font-semibold">machine learning</span>.
            I studied its theories and algorithms during my university years.
            Post-graduation, I applied this knowledge using models from{" "}
            <Code>scikit-learn</Code>, participated in Kaggle challenges, and
            learned <Code>TensorFlow</Code>, earning a certification.
          </p>
        </div>
        <div>
          <img
            src="photo.jpg"
            alt="photo.jpg"
            className="rounded-full h-[420px] -translate-x-10"
          />
        </div>
      </div>
      <div className="text-gray-400 text-xl leading-8 py-3">
        <p>
          Through this continuous journey of learning and application, I strive
          to{" "}
          <span className="text-white font-semibold">
            blend my expertise in web development and machine learning
          </span>{" "}
          to contribute innovative solutions to complex problems. I&apos;m
          excited about the future of technology and look forward to the
          opportunities that lie ahead.
        </p>
      </div>
    </div>
  );
}

export default About;
