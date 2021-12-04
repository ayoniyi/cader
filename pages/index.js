import Container from '../components/Container'
import Header from '../components/header/Header'
import Hero from '../components/Hero'
import SectionOne from '../components/Section1'
import SectionTwo from '../components/Section2'
import SectionThree from '../components/Section3'
import SectionFour from '../components/Section4'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <SectionOne />
        <SectionTwo />
      </Container>
      <SectionThree />
      <Container>
        <SectionFour />
      </Container>
      <Footer />
    </>
  )
}
