import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/layout/PageLayout';
import AttorneysList from '@/components/sections/attorneys/AttorneysList';

export async function generateMetadata() {
    const t = await getTranslations('Lawyers');
    return {
        title: `${t('title')} | Law Firm`,
        description: t('subtitle'),
    };
}

export default async function AttorneysPage() {
    return (
        <PageLayout>
            <AttorneysList />
        </PageLayout>
    );
}
