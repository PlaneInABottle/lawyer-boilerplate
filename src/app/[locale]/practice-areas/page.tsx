import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/layout/PageLayout';
import PracticeAreas from '@/components/sections/practice-areas/PracticeAreas';

// type Props = {
//     params: { locale: string };
// };

// export async function generateMetadata({ params }: Props) {
// const { locale } = await params;
export async function generateMetadata() {
    const t = await getTranslations('metadata.pages.practiceAreas');
    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function PracticeAreasPage() {
    return (
        <PageLayout>
            <PracticeAreas />
        </PageLayout>
    );
}
