import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/layout/PageLayout';
import Services from '@/components/sections/services/Services';

// type Props = {
//     params: { locale: string };
// };

// export async function generateMetadata({ params }: Props) {
// const { locale } = await params;
export async function generateMetadata() {
    const t = await getTranslations('metadata.pages.services');
    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function PracticeAreasPage() {
    return (
        <PageLayout>
            <Services />
        </PageLayout>
    );
}
