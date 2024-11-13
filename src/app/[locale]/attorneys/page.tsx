import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/layout/PageLayout';
import AttorneysList from '@/components/sections/attorneys/AttorneysList';

export async function generateMetadata() {
    const t = await getTranslations('metadata.pages.attorneys');
    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function AttorneysPage() {
    return (
        <PageLayout>
            <AttorneysList />
        </PageLayout>
    );
}
