import Image from "next/image";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Topology from "../../public/images/Topology-1.png";
import Diamond from "@/constants/Diamond";
import arm from "../../public/images/arm.jpg";
import Reason from "@/UI/Reason";
import Services from "@/UI/Services";
import Products from "@/UI/Projects";
import Projects from "@/UI/Projects";
import Testinomials from "@/UI/Testinomials";
import Bridge from "@/UI/Bridge";
import FadeInSection from "@/constants/FadeInSection";
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
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert animate-spinSlow w-96 md:w-2/4"
          src={Topology}
          alt="Robinson March Logo"
          width={600}
          height={600}
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
      <FadeInSection>
        <Reason />
      </FadeInSection>
      <FadeInSection>
        <Services />
      </FadeInSection>
      <FadeInSection>
        <Projects />
      </FadeInSection>
      <FadeInSection>
        <Testinomials />
      </FadeInSection>
      <FadeInSection>
        <Bridge />
      </FadeInSection>
    </main>
  );
}
