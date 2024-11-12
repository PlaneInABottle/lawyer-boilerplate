'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function OurHistory() {
    const t = useTranslations('About');

    const milestones = [1998, 2005, 2012, 2018, 2023];

    return (
        <section className="py-20 bg-muted">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">{t('history.title')}</h2>
                    <p className="text-muted-foreground">{t('history.subtitle')}</p>
                </motion.div>

                <div className="space-y-12">
                    {milestones.map((year, index) => (
                        <motion.div
                            key={year}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex items-center gap-8 ${
                                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                            }`}
                        >
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-2">{year}</h3>
                                <p className="text-muted-foreground">
                                    {t(`history.milestones.${year}`)}
                                </p>
                            </div>
                            <div className="relative w-64 h-64 rounded-lg overflow-hidden">
                                <Image
                                    src={`/images/about/history-${year}.jpeg`}
                                    alt={`Milestone ${year}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
