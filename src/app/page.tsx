import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Environment from '../components/Environment'
// import WhyUs from '../components/WhyUs'
// import Testimonials from '../components/Testimonials'
// import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Environment />
        <About />
        {/* <WhyUs /> */}
        {/* <Testimonials /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  )
}
