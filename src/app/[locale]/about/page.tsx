import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/layout/PageLayout';
import dynamic from 'next/dynamic';
import AboutHero from '@/components/sections/about/AboutHero';
import OurValues from '@/components/sections/about/OurValues';

// Dynamic imports with loading fallback
const OurHistory = dynamic(() => import('@/components/sections/about/OurHistory'));
const TeamSection = dynamic(() => import('@/components/sections/about/TeamSection'));

export async function generateMetadata() {
    const t = await getTranslations('metadata.pages.about');
    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function AboutPage() {
    return (
        <PageLayout>
            <AboutHero />
            <OurValues />
            <OurHistory />
            <TeamSection />
        </PageLayout>
    );
}
