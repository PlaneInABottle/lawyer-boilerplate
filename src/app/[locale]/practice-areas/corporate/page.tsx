import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/layout/PageLayout';
import CorporateLawService from '@/components/sections/services/corporate/CorporateLawService';

// export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
export async function generateMetadata() {
    const t = await getTranslations('metadata.pages.services');
    return {
        title: `${t('title')} | Law Firm`,
        description: t('description'),
    };
}

export default async function CorporateLawPage() {
    return (
        <PageLayout>
            <CorporateLawService />
        </PageLayout>
    );
}
