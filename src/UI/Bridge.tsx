import Image from "next/image";
import React from "react";
import Topology from "../../public/images/Topology-1.png";
import { Button } from "@/components/ui/button";
function Bridge() {
  return (
    <div>
      <div className="flex md:flex-row animate-slideUp flex-col justify-between md:items-center items-start z-20 mb-20 md:mb-0">
        <div className="space-y-5 p">
          <h3 className="text-xl font-medium font-nicoMoji">
            Take a break and let us handle it....
          </h3>
          <Button className="bg-black rounded-none py-1 hover:invert">
            Contact Robinson March Today
          </Button>
        </div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert 
           w-full md:w-2/4"
          src={Topology}
          alt="Robinson March Logo"
          width={500}
          height={500}
          priority
        />
      </div>
      <p className="font-semibold leading-loose">
        At Robinson March, we believe in making your life easier. By partnering
        with us, you can focus on what you do best—running your business—while
        we take care of your digital needs. Our comprehensive solutions and
        dedicated support team ensure that you are always ahead of the curve.
        Discover the Robinson March difference. Contact us today to see how we
        can empower your business with innovative digital solutions.
      </p>
    </div>
  );
}

export default Bridge;
