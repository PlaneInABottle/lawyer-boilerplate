import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/layout/PageLayout';
import AboutHero from '@/components/sections/about/AboutHero';
import OurValues from '@/components/sections/about/OurValues';
import OurHistory from '@/components/sections/about/OurHistory';
import TeamSection from '@/components/sections/about/TeamSection';
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
