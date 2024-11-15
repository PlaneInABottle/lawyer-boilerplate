'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '@/data/practice-areas';
import Link from 'next/link';

export default function Services() {
    const t = useTranslations('pages.services');
    // const commonT = useTranslations('common');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <section className="py-12 md:py-16 bg-muted">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
                        <p className="text-muted-foreground">{t('description')}</p>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {services.map((area) => (
                            <motion.div key={area.id} variants={itemVariants}>
                                <Card className="group h-full hover:shadow-lg transition-shadow duration-300">
                                    <CardHeader className="p-0">
                                        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                                            <Image
                                                src={area.imageUrl}
                                                alt={t(`areas.${area.id}.title`)}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <h2 className="text-xl font-semibold mb-2">
                                            {t(`areas.${area.id}.title`)}
                                        </h2>
                                        <p className="text-muted-foreground mb-4">
                                            {t(`areas.${area.id}.description`)}
                                        </p>
                                        <ul className="space-y-2">
                                            {area.services.map((service) => (
                                                <li
                                                    key={service}
                                                    className="flex items-center gap-2"
                                                >
                                                    <ArrowRight className="h-4 w-4 text-primary" />
                                                    <span className="text-sm">
                                                        {t(`areas.${area.id}.services.${service}`)}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="p-6 pt-0">
                                        <Button asChild variant="outline">
                                            <Link
                                                href={`/practice-areas/${area.id}`}
                                                className="flex items-center gap-2"
                                            >
                                                {t(`areas.${area.id}.learnMore`)}
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
