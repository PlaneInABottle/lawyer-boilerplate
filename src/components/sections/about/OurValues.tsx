'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Scale, Users, Trophy, Heart } from 'lucide-react';

export default function OurValues() {
    const t = useTranslations('About');

    const values = [
        { icon: Scale, key: 'integrity' },
        { icon: Users, key: 'clientFocus' },
        { icon: Trophy, key: 'excellence' },
        { icon: Heart, key: 'community' },
    ];

    return (
        <section className="py-20">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">{t('values.title')}</h2>
                    <p className="text-muted-foreground">{t('values.subtitle')}</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={value.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                                    <Icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    {t(`values.items.${value.key}.title`)}
                                </h3>
                                <p className="text-muted-foreground">
                                    {t(`values.items.${value.key}.description`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
