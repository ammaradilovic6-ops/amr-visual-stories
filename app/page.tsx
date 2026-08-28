import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { SelectedWork } from '@/components/selected-work'
import { FeaturedWork } from '@/components/featured-work'
import { ShortForm } from '@/components/short-form'
import { WhatIDo } from '@/components/what-i-do'
import { Experience } from '@/components/experience'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <SelectedWork />
        <FeaturedWork />
        <ShortForm />
        <WhatIDo />
        <Experience />
        {/* CLIENT FEEDBACK section hidden until real testimonials are provided — see components/testimonials.tsx */}
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
