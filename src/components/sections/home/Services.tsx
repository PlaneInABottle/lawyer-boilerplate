'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion'; // You'll need to install framer-motion
const serviceCards = [
    {
        id: 'corporate',
        imageUrl: '/images/services/corporate-law.jpeg',
        translationKey: 'corporate',
    },
    {
        id: 'family',
        imageUrl: '/images/services/family-law.jpeg',
        translationKey: 'family',
    },
    {
        id: 'criminal',
        imageUrl: '/images/services/criminal-law.jpeg',
        translationKey: 'criminal',
    },
    {
        id: 'real-estate',
        imageUrl: '/images/services/real-estate-law.jpeg',
        translationKey: 'realEstate',
    },
    {
        id: 'intellectual',
        imageUrl: '/images/services/intellectual-property.jpeg',
        translationKey: 'intellectual',
    },
    {
        id: 'litigation',
        imageUrl: '/images/services/litigation.jpeg',
        translationKey: 'litigation',
    },
];

export default function ServicesSection() {
    const t = useTranslations('pages.home.services');

    return (
        <section className="py-16 md:py-24 bg-muted">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">{t('description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {serviceCards.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="group hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="p-0">
                                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                                        <Image
                                            src={service.imageUrl}
                                            alt={t(`${service.translationKey}.title`)}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">
                                        {t(`${service.translationKey}.title`)}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {t(`${service.translationKey}.description`)}
                                    </p>
                                </CardContent>
                                <CardFooter className="p-6 pt-0">
                                    <Button
                                        asChild
                                        variant="link"
                                        className="p-0 h-auto font-semibold hover:no-underline"
                                    >
                                        <Link
                                            href={`/services/corporate`}
                                            className="flex items-center gap-2"
                                        >
                                            {t(`${service.translationKey}.learnMore`)}
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
