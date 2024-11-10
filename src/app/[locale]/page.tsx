import PageLayout from '@/components/layout/PageLayout';

import Hero from '@/components/sections/home/Hero';
export default function Home() {
  return (
    <PageLayout fullWidth>
      <Hero />
      {/* Add other sections here */}
    </PageLayout>
  );
}