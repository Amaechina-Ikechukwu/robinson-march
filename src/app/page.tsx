import Image from "next/image";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Topology from "../../public/images/Topology-1.png";
import Diamond from "@/UI/Diamond";
import arm from "../../public/images/arm.jpg";
import Reason from "@/UI/Reason";
import Services from "@/UI/Services";
import Products from "@/UI/Projects";
import Projects from "@/UI/Projects";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 w-full space-y-20  md:space-y-40">
      <div className="flex md:flex-row animate-slideUp flex-col justify-between md:items-center items-start z-20 mb-20 md:mb-0">
        <div className="space-y-5 p">
          <h1 className="font-nicoMoji text-3xl">
            Apt. Professional. Capabale.
          </h1>
          <h3 className="text-xl font-medium ">
            We have the capacity to handle your enterprise software needs.
          </h3>
          <Button className="bg-black rounded-none py-1 hover:invert">
            Contact Robinson March Today
          </Button>
        </div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert animate-spinSlow w-full md:w-2/4"
          src={Topology}
          alt="Robinson March Logo"
          width={500}
          height={500}
          priority
        />
      </div>

      <div className=" w-full  items-start flex flex-col md:flex-row justify-between gap-6">
        <div className="gap-4 md:w-3/4">
          <p className=" leading-loose font-bold font-nicoMoji text-2xl">
            At Robinson March,
          </p>
          <p className=" leading-loose font-bold">
            We understand that your enterprise software needs are as unique as
            your business. With our robust capabilities and expertise, we
            provide tailored solutions designed to enhance your operational
            efficiency and drive growth.
          </p>
        </div>
        <div>
          <Image
            src={arm}
            width={500}
            height={300}
            alt={"Robinson March reaches for the stars and beyound"}
            className=" grayscale h-[500px] object-contain  "
          />
        </div>
      </div>
      <Reason />
      <Services />
      <Projects />
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold font-nicoMoji">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold font-nicoMoji">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold font-nicoMoji">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold font-nicoMoji">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
