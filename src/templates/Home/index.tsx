import Hero from "@/components/Hero"
import SectionAbout from "@/components/SectionAbout"
import SectionServices from "@/components/SectionServices"

import Base from "../Base"

const Home = () => {
  return (
    <Base>
      <Hero />
      <SectionServices />
      <SectionAbout />
    </Base>
  )
}

export default Home
