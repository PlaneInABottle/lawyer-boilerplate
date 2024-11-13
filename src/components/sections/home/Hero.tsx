'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';

export default function Hero() {
    const t = useTranslations('pages.home.hero');
    const commonT = useTranslations('common.buttons');
    return (
        <section className="relative min-h-screen">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero/hero-law.jpeg"
                    alt="Law Firm Building"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="container relative h-[calc(100vh-64px)] flex items-center">
                <motion.div
                    className="max-w-2xl text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        {t('title')}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-200">{t('subtitle')}</p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg" className="text-base">
                            <Link href="/contact">
                                {commonT('contactUs')}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="text-base bg-transparent text-white border-white hover:bg-white/10"
                        >
                            <Link href="/practice-areas">
                                {t('learnMore')}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>

                    <div className="flex items-center gap-8 mt-12">
                        <div className="flex items-center gap-2">
                            <span className="text-4xl font-bold">25+</span>
                            <span className="text-sm leading-tight">{t('yearsExperience')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-4xl font-bold">1000+</span>
                            <span className="text-sm leading-tight">{t('casesWon')}</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <div className="flex flex-col items-center text-white">
                    <span className="text-sm mb-2">{t('scrollToExplore')}</span>
                    <motion.div
                        className="w-6 h-10 border-2 border-white rounded-full p-2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
