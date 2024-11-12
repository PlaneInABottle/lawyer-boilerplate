import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/layout/PageLayout';
import ContactForm from '@/components/sections/contact/ContactForm';
import ContactInfo from '@/components/sections/contact/ContactInfo';

export async function generateMetadata() {
    const t = await getTranslations('Contact');
    return {
        title: t('pageTitle'),
        description: t('pageDescription'),
    };
}

export default async function ContactPage() {
    return (
        <PageLayout>
            <div className="grid lg:grid-cols-2 gap-12">
                <ContactInfo />
                <ContactForm />
            </div>
        </PageLayout>
    );
}
