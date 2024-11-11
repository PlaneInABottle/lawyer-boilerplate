'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Users, Building2, Scale, FileText } from 'lucide-react';
import corporateLaw from '/public/images/services/corporate-law.jpeg';

export default function CorporateLawService() {
    const t = useTranslations('PracticeAreas.areas.corporate');
    const commonT = useTranslations('Common');

    const features = [
        { icon: Building2, key: 'formation' },
        { icon: Scale, key: 'compliance' },
        { icon: Users, key: 'mergers' },
        { icon: FileText, key: 'contracts' },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="py-12 md:py-16 bg-muted">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
                            <p className="text-muted-foreground mb-6">{t('longDescription')}</p>
                            <Button asChild>
                                <a href="#contact" className="flex items-center gap-2">
                                    {commonT('contactUs')}
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </Button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden"
                        >
                            <Image
                                src={corporateLaw}
                                alt={t('title')}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-12 md:py-16">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature) => (
                            <Card key={feature.key}>
                                <CardContent className="p-6">
                                    <feature.icon className="h-8 w-8 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">
                                        {t(`services.${feature.key}`)}
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        {t(`serviceDescriptions.${feature.key}`)}
                                    </p>
                                    <ul className="space-y-2">
                                        {[1, 2, 3].map((item) => (
                                            <li key={item} className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-primary" />
                                                <span className="text-sm">
                                                    {t(`serviceFeatures.${feature.key}.${item}`)}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
