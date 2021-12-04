import Container from '../components/container'
import Header from '../components/header/header'
import Hero from '../components/hero'
import SectionOne from '../components/section1'
import SectionTwo from '../components/section2'
import SectionThree from '../components/section3'
import SectionFour from '../components/section4'
import Footer from '../components/footer'

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
