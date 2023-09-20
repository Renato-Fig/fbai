import { Navigation } from '../components/Navigation/Navigation'
import { Footer } from '../components/Footer/Footer'
import { Intro } from '../components/Intro/Intro'
import { Hero } from '../components/Hero/Hero'
import { Features } from '../components/Features/Features'
import { CallToAction } from '../components/CallToAction/CallToAction'

export function LandingPage() {
    return(
        <>
            <Navigation/>
            <Hero/>
            <Intro/>
            <Features/>
            <CallToAction/>
            <Footer/>
        </>
    )
}