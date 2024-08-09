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
import { LayoutPanelLeft, Scale3D, Webhook } from "lucide-react";
export default function Services() {
  const services = [
    {
      icon: <Webhook />,
      title: "Website (Seo Optimized)",
      description:
        "Enhance your online visibility with our expertly crafted websites, designed to rank higher in search engines and attract more visitors.",
    },
    {
      icon: <LayoutPanelLeft />,
      title: "Cross Platform Apps",
      description:
        "Reach a wider audience with our seamless, high-performance apps that run flawlessly on multiple devices and operating systems.",
    },
    {
      icon: <Scale3D />,
      title: "Scalable Serveless Services",
      description:
        "Ensure your digital infrastructure can handle increased demand with our scalable, serverless backend solutions that offer flexibility and reliability.",
    },
  ];
  return (
    <div className="space-y-6 shadow-2xl bg-transparent p-5">
      <p className="font-nicoMoji text-xl">Services</p>
      <div className="flex flex-col md:flex-row gap-4">
        {services.map((service, index) => (
          <div key={index}>
            <Card>
              <CardHeader>
                {service.icon}
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
