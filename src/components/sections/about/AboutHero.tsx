'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutHero() {
    const t = useTranslations('pages.about');

    return (
        <section className="relative py-20 bg-muted">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl font-bold mb-6">{t('hero.title')}</h1>
                        <p className="text-lg text-muted-foreground mb-6">{t('hero.subtitle')}</p>
                        <div className="grid grid-cols-3 gap-8">
                            <div>
                                <p className="text-3xl font-bold text-primary">25+</p>
                                <p className="text-sm text-muted-foreground">
                                    {t('hero.stats.years')}
                                </p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary">50+</p>
                                <p className="text-sm text-muted-foreground">
                                    {t('hero.stats.lawyers')}
                                </p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary">1000+</p>
                                <p className="text-sm text-muted-foreground">
                                    {t('hero.stats.cases')}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative h-[400px] rounded-lg overflow-hidden"
                    >
                        <Image
                            src="/images/about/about-hero.jpeg"
                            alt="About Our Law Firm"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
