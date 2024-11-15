import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/layout/PageLayout';
import TeamListSection from '@/components/sections/team/TeamListSection';

export async function generateMetadata() {
    const t = await getTranslations('metadata.pages.team');
    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function TeamPage() {
    return (
        <PageLayout>
            <TeamListSection />
        </PageLayout>
    );
}
