'use client';

import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
    const t = useTranslations('Contact.info');

    const contactDetails = [
        {
            icon: Mail,
            label: 'email',
            value: 'contact@lawfirm.com',
            href: 'mailto:contact@lawfirm.com',
        },
        {
            icon: Phone,
            label: 'phone',
            value: '+1 (555) 123-4567',
            href: 'tel:+15551234567',
        },
        {
            icon: MapPin,
            label: 'address',
            value: '123 Legal Street, Suite 100\nNew York, NY 10001',
        },
        {
            icon: Clock,
            label: 'hours',
            value: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM',
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
                <p className="text-muted-foreground">{t('subtitle')}</p>
            </div>

            <div className="space-y-6">
                {contactDetails.map((detail) => (
                    <div key={detail.label} className="flex gap-4">
                        <div className="flex-shrink-0">
                            <detail.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-medium">{t(`${detail.label}Title`)}</h3>
                            {detail.href ? (
                                <a
                                    href={detail.href}
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    {detail.value}
                                </a>
                            ) : (
                                <p className="text-muted-foreground whitespace-pre-line">
                                    {detail.value}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Map Embed */}
            <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25436351647!2d-74.11976404950945!3d40.69767006792137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1696431074374!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}
