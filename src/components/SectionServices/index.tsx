import Image from "next/image"
import React from "react"

export default function SectionServices() {
  const services = [
    {
      title: "Creation",
      image: "/images/serv-icon1.png",
      description:
        "Developing websites is about so much more than marketing. It's also about aesthetics."
    },
    {
      title: "Websites",
      image: "/images/serv-icon2.png",
      description:
        "Developing websites is about so much more than marketing. It's also about aesthetics."
    },
    {
      title: "Studio",
      image: "/images/serv-icon3.png",
      description:
        "Developing websites is about so much more than marketing. It's also about aesthetics."
    }
  ]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="-mx-4 flex flex-wrap">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ServiceItem = ({
  title,
  image,
  description
}: {
  title: string
  image: string
  description: string
}) => (
  <div className="mb-8 w-full px-4 md:w-1/3">
    <div
      className={`group relative flex aspect-square h-full flex-col items-center justify-center rounded-full bg-white p-8 text-center transition-colors duration-300 hover:bg-[#D8FF36]`}>
      <div className="relative z-10">
        <div className="mx-auto mb-4 h-[60px] w-[60px]">
          <Image
            src={image}
            alt={title}
            width={60}
            height={60}
            className="h-full w-full object-contain"
          />
        </div>
        <h5 className="mb-3 text-2xl font-semibold">{title}</h5>
        <div className="text-gray-600">
          <p>{description}</p>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute bottom-[-20%] right-[-10%] h-[65px] w-[65px] scale-[0.3] rounded-full bg-primary opacity-0 group-hover:animate-bubbleOne"></div>
        <div className="absolute bottom-[0%] left-[-40%] h-[45px] w-[45px] scale-[0.25] rounded-full bg-primary opacity-0 group-hover:animate-bubbleTwo"></div>
        <div className="absolute bottom-[30%] left-[30%] h-[35px] w-[35px] scale-[0.5] rounded-full bg-primary opacity-0 group-hover:animate-bubbleThree"></div>
      </div>
    </div>
  </div>
)
