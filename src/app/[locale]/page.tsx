import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/layout/PageLayout';
import Hero from '@/components/sections/home/Hero';
import dynamic from 'next/dynamic';

// Dynamic imports for below-the-fold sections
const Services = dynamic(() => import('@/components/sections/home/Services'), {
    loading: () => (
        <div className="w-full h-[400px] flex items-center justify-center bg-gray-50">
            <p className="text-xl">Loading Services...</p>
        </div>
    ),
});

const AboutFirm = dynamic(() => import('@/components/sections/home/AboutFirm'), {
    loading: () => (
        <div className="w-full h-[400px] flex items-center justify-center bg-gray-50">
            <p className="text-xl">Loading About Section...</p>
        </div>
    ),
});

const Lawyers = dynamic(() => import('@/components/sections/home/Team'), {
    loading: () => (
        <div className="w-full h-[400px] flex items-center justify-center bg-gray-50">
            <p className="text-xl">Loading Lawyers Section...</p>
        </div>
    ),
});

const Testimonials = dynamic(() => import('@/components/sections/home/Testimonials'), {
    loading: () => (
        <div className="w-full h-[400px] flex items-center justify-center bg-gray-50">
            <p className="text-xl">Loading Testimonials...</p>
        </div>
    ),
});

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
