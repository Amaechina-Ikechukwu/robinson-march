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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
export default function Testinomials() {
  const services = [
    {
      title: "Darlington Bright",
      description:
        "Robinson March exceeded our expectations with their innovative software solutions. Their professional approach and reliable service have been instrumental in our success.",
    },
    {
      title: "Laura White",
      description:
        "Robinson March's custom software development transformed our operations. Their capable team delivered a solution that not only met but exceeded our requirements.",
    },
    {
      image: tangles,
      title: "Tangles",
      description:
        "Tangle is a modern dating app built with Expo, designed to make connecting with others fun and effortless. With a sleek and intuitive user interface, Tangle offers a seamless experience for users to discover, match, and chat with potential partners",
    },
  ];
  return (
    <div className="space-y-6 bg-zinc-200 h-fit p-5">
      <p className="font-nicoMoji text-xl ">Testinomials</p>
      <div className=" grid gap-4 grid-cols-1 grid-rows-1 md:grid-cols-3 gap-4 ">
        {services.map((service, index) => (
          <div key={index}>
            <Card className="bg-gradient-to-r from-gray-50  to-gray-100  min-h-72">
              <CardHeader>
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-1/6 rounded-full"
                  />
                ) : (
                  <Avatar>
                    <AvatarFallback>
                      {service.title.split("")[0]}
                    </AvatarFallback>
                  </Avatar>
                )}
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
