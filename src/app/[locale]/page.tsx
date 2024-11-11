import PageLayout from '@/components/layout/PageLayout';
import Hero from '@/components/sections/home/Hero';
import Services from '@/components/sections/home/Services';
import AboutFirm from '@/components/sections/home/AboutFirm';
import Testimonials from '@/components/sections/home/Testimonials';

export default function Home() {
  return (
    <PageLayout fullWidth>
      <Hero />
      <Services />
      <AboutFirm />
      <Testimonials />
    </PageLayout>
  );
}