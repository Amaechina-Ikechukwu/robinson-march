import React from "react";
import Topogoly from "../../public/images/Topology-1.png";
import kae from "../../public/images/kae.png";
import tangles from "../../public/images/tangles.png";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
export default function Projects() {
  const services = [
    {
      image: Topogoly,
      title: "TBD",
      description:
        "A service uses QR codes to provide customers with a seamless way to view available times and book appointments. The service is built with Node.js, integrates with Google Calendar API, and provides secure authentication using OAuth2.",
    },
    {
      image: kae,
      title: "Kalance",
      description:
        "Kaelance is an innovative social finance platform designed to help users achieve their financial goals through collective effort and group savings.",
    },
    {
      image: tangles,
      title: "Tangles",
      description:
        "Tangle is a modern dating app built with Expo, designed to make connecting with others fun and effortless. With a sleek and intuitive user interface, Tangle offers a seamless experience for users to discover, match, and chat with potential partners",
    },
  ];
  return (
    <div className="space-y-6 ">
      <p className="font-nicoMoji text-xl">Projects</p>
      <div className=" grid gap-4 grid-cols-3 grid-rows-3 gap-4 max-h-[200px]">
        {services.map((service) => (
          <div>
            <Card className="bg-gradient-to-r from-gray-50  to-gray-100 max-w-max max-h-max">
              <CardHeader>
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-1/6 rounded-full"
                />
                <CardTitle className="font-nicoMoji text-xl tracking-wider">
                  {service.title}
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
