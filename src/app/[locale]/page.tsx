import PageLayout from '@/components/layout/PageLayout';
import Hero from '@/components/sections/home/Hero';
import Services from '@/components/sections/home/Services';
import AboutFirm from '@/components/sections/home/AboutFirm';
import Testimonials from '@/components/sections/home/Testimonials';
import Lawyers from '@/components/sections/home/Lawyers';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
    const t = await getTranslations('metadata.pages.home');
    return {
        title: t('title'),
        description: t('description'),
    };
}

export default function Home() {
    return (
        <PageLayout fullWidth noPadding>
            <Hero />
            <Services />
            <AboutFirm />
            <Lawyers />
            <Testimonials />
        </PageLayout>
    );
}
