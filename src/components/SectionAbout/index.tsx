import Link from "next/link"
import React from "react"

const SectionAbout: React.FC = () => {
  return (
    <section className="py-20 lg:py-36">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-2/3">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-2/3 lg:w-full">
                <div className="mb-10">
                  <div className="mb-2 text-sm font-semibold uppercase text-gray-600">
                    Welcome to Onovo
                  </div>
                  <h2 className="mb-4 text-5xl font-bold leading-tight lg:text-6xl">
                    A Design Agency
                    <br />
                    Delivering Success by
                    <br />
                    Winning Hearts
                  </h2>
                </div>
              </div>
              <div className="mb-10 w-full px-4 md:w-1/3 lg:hidden">
                <CircularNumber />
              </div>
            </div>

            <div className="-mx-4 flex flex-wrap">
              <div className="mb-8 w-full px-4 md:w-1/2">
                <h3 className="mb-4 text-lg font-semibold uppercase">
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  From the moment our company was founded we have helped our
                  clients find{" "}
                  <strong>exceptional solutions for their businesses</strong>{" "}
                  memorable brands and digital products. Our expertise grows
                  with each year, and our accumulated experience.
                </p>
              </div>
              <div className="mb-8 w-full px-4 md:w-1/2">
                <h3 className="mb-4 text-lg font-semibold uppercase">
                  Our Goal
                </h3>
                <p className="mb-4 text-gray-700">
                  Our goal is to deliver amazing experiences that make people
                  talk, and build strategic value for brands, tech,
                  entertainment.
                </p>
                <Link
                  href="/about-us"
                  className="inline-flex items-center justify-center rounded-full border border-transparent bg-black px-6 py-3 text-base font-medium text-white transition-colors duration-200 hover:bg-gray-800">
                  <span className="mr-2">More About Us</span>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden w-full px-4 lg:block lg:w-1/3">
            <CircularNumber />
          </div>
        </div>
      </div>
    </section>
  )
}

const CircularNumber: React.FC = () => {
  const circleText = "Years of Digital Solutions Experience"
  return (
    <div className="relative flex h-64 w-64 flex-col items-center justify-center rounded-full border border-black text-center">
      <div className="number text-shadow relative top-2 text-8xl font-bold leading-none">
        14
      </div>
      <div className="circle-text-label absolute left-[5%] top-[5%] h-[90%] w-[90%] text-sm font-bold uppercase leading-none">
        {circleText.split("").map((char, i) => (
          <span
            key={i}
            className="absolute"
            style={{
              transform: `rotate(${i * (360 / circleText.length)}deg)`,
              transformOrigin: "0 111px"
            }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SectionAbout
