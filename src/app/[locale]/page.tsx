import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import PageLayout from '@/components/layout/PageLayout';
import Hero from '@/components/sections/home/Hero';
import LoadingSkeleton from '@/components/LoadingSkeleton';

const Services = dynamic(() => import('@/components/sections/home/Services'));
const AboutFirm = dynamic(() => import('@/components/sections/home/AboutFirm'));
const Lawyers = dynamic(() => import('@/components/sections/home/Lawyers'));
const Testimonials = dynamic(() => import('@/components/sections/home/Testimonials'));

export default function Home() {
    return (
        <PageLayout fullWidth>
            <Hero />
            <Suspense fallback={<LoadingSkeleton />}>
                <Services />
                <AboutFirm />
                <Lawyers />
                <Testimonials />
            </Suspense>
        </PageLayout>
    );
}
