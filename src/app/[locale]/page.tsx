import PageLayout from '@/components/layout/PageLayout';
import Hero from '@/components/sections/home/Hero';
import Services from '@/components/sections/home/Services';
import AboutFirm from '@/components/sections/home/AboutFirm';

export default function Home() {
  return (
    <PageLayout fullWidth>
      <Hero />
      <Services />
      <AboutFirm />
      {/* Add other sections here */}
    </PageLayout>
  );
}