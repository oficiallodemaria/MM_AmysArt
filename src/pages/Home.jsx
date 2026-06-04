import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Servicios from "../components/Servicios"
import Trabajos from "../components/Trabajos"
import Promos from "../components/Promos"
import Info from "../components/Info"
import Footer from "../components/Footer"

const CALENDLY_URL = "https://calendly.com/tu-usuario"

export default function Home() {
  return (
    <>
      <Navbar calendlyUrl={CALENDLY_URL} />
      <Hero calendlyUrl={CALENDLY_URL} />
      <Servicios />
      <Trabajos />
      <Promos />
      <Info calendlyUrl={CALENDLY_URL} />
      <Footer calendlyUrl={CALENDLY_URL} />
    </>
  )
}