import React from "react";
import Diamond from "./Diamond";
import girltech from "../../public/images/girltech.jpg";
import space from "../../public/images/space.jpg";
import thinktank from "../../public/images/thinktank.jpg";
import Image from "next/image";
function Reason() {
  const reasons = [
    {
      title: "Aptitude For Innovation",
      description:
        "Our team of seasoned professionals stays ahead of industry trends, ensuring that your software solutions are not only up-to-date but also cutting-edge.",
    },
    {
      title: "Professional Excellence",
      description:
        "We pride ourselves on our commitment to delivering excellence in every project. From initial consultation to deployment and support, our focus is on providing superior service and results.",
    },
    {
      title: "Capable and Reliable",
      description:
        "With a proven track record of success, Robinson March is equipped to handle your most complex enterprise software challenges. Our scalable solutions are designed to grow with your business, providing flexibility and reliability every step of the way.",
    },
  ];
  const images = [
    {
      image: girltech,
      alt: "Lady in Robinson March",
    },
    {
      image: space,
      alt: "Engineering at Robinson March",
    },
    {
      image: thinktank,
      alt: "Think tank at Robinson March",
    },
  ];

  return (
    <div className="space-y-16">
      <div className="space-y-6">
        <p className=" leading-loose font-bold font-nicoMoji text-2xl">
          Why Robinson March?
        </p>
        {reasons.map((reason) => (
          <div className="flex space-x-5 items-start" key={reason.title}>
            <Diamond size="w-3 h-3" />
            <div>
              <h6 className="font-nicoMoji font-bold text-xl">
                {reason.title}
              </h6>
              <p className="md:w-3/4">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-4 shadow-2xl bg-black p-10 ">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative md:w-4/12 h-[500px] bg-neutral-900 rounded-tl-lg rounded-br-lg border border-gray-200 "
          >
            <Image
              src={img.image}
              width={500}
              height={500}
              alt={img.alt}
              className=" grayscale object-cover object-center h-full  hover:object-contain hover:h-auto "
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black "></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reason;
