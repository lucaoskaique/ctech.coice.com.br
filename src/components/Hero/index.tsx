import Image from "next/image"
import { useState } from "react"

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <section className="relative h-screen bg-gray-600">
      <div className="absolute inset-0 h-full w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          id="heroVideo"
          className="h-full w-full object-cover object-center">
          <source src="/images/stvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 bg-black opacity-35"></div>
      </div>
      <div className="container relative z-20 flex h-full flex-col justify-center pt-24">
        <h1 className="m-0 text-7xl font-medium text-white md:text-8xl lg:text-9xl">
          <span className="block">
            We Make <br />
            Everything
            <span className="relative -mt-2 ml-4 inline-block h-[1em] w-8">
              <Image src="/images/title_icon.svg" alt="Separator" fill />
            </span>
          </span>
        </h1>
        <div className="mb-10 ml-0 mt-10 max-w-lg text-2xl text-white md:ml-[710px] md:text-3xl">
          <div>
            Creative studio at the <br /> intersection of art, design <br /> and
            technology.
          </div>
        </div>
        <button
          className={`absolute bottom-16 right-3 z-30 h-16 w-16 ${isPlaying ? "active" : ""}`}
          onClick={() => setIsPlaying(!isPlaying)}>
          <span className="absolute inset-0 rounded-full border border-white">
            <span className="absolute -inset-2.5 animate-ping rounded-full border border-white opacity-30"></span>
          </span>
          <span className="absolute left-1/2 top-1/2 -ml-2 -mt-2 h-4 w-4">
            <span className="absolute bottom-0 left-0 h-4 w-0.5 bg-white"></span>
            <span className="absolute bottom-0 left-1 h-3.5 w-0.5 bg-white"></span>
            <span className="absolute bottom-0 left-2 h-2.5 w-0.5 bg-white"></span>
            <span className="absolute bottom-0 left-3 h-3 w-0.5 bg-white"></span>
          </span>
        </button>
      </div>
    </section>
  )
}
