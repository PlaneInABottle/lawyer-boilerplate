'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Award, Scale, Users } from 'lucide-react';
import firmBuilding from '/public/images/about/firm-building.jpeg';

const stats = [
    {
        id: 'experience',
        icon: Scale,
        animationDelay: 0.2,
    },
    {
        id: 'clients',
        icon: Users,
        animationDelay: 0.4,
    },
    {
        id: 'awards',
        icon: Award,
        animationDelay: 0.6,
    },
];

export default function AboutFirm() {
    const t = useTranslations('AboutFirm');

    return (
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative h-[500px] rounded-lg overflow-hidden">
                            <Image
                                src={firmBuilding}
                                alt="Law Firm Building"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Overlay Card */}
                        <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg text-white md:max-w-[240px]">
                            <p className="text-4xl font-bold">{t('established')}</p>
                            <p className="mt-2 text-primary-foreground/80">{t('legacy')}</p>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold">{t('title')}</h2>
                            <p className="text-muted-foreground">{t('subtitle')}</p>
                        </div>

                        <div className="prose prose-gray dark:prose-invert">
                            <p>{t('description')}</p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 py-8">
                            {stats.map((stat) => (
                                <motion.div
                                    key={stat.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: stat.animationDelay }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                                        <stat.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="text-2xl md:text-3xl font-bold">
                                        {t(`stats.${stat.id}.value`)}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {t(`stats.${stat.id}.label`)}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <Button asChild>
                            <Link href="/about" className="flex items-center gap-2">
                                {t('learnMore')}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
