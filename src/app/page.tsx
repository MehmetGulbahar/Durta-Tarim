"use client";

import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { FeatureShowcase } from "@/components/sections/feature-showcase"
import { Gallery } from "@/components/sections/gallery"
import { WhyUs } from "@/components/sections/why-us"
import { Contact } from "@/components/sections/contact"
import { Map } from "@/components/sections/map"
import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <FeatureShowcase />
      <Features />
      <Gallery />
      <WhyUs />
      <Contact />
      <Map />
      <Footer />
    </main>
  )
}
