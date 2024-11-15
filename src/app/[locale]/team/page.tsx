import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/layout/PageLayout';
import TeamList from '@/components/sections/team/TeamList';

export async function generateMetadata() {
    const t = await getTranslations('metadata.pages.team');
    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function AttorneysPage() {
    return (
        <PageLayout>
            <TeamList />
        </PageLayout>
    );
}
