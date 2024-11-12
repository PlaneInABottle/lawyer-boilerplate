'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { lawyers } from '@/data/lawyers';
import LawyerCard from '@/components/lawyers/LawyerCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function TeamSection() {
    const t = useTranslations('About');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    // Filter senior partners and partners for leadership section
    const leadershipTeam = lawyers.filter(
        (lawyer) => lawyer.role === 'seniorPartner' || lawyer.role === 'partner'
    );

    return (
        <section className="py-20">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">{t('team.title')}</h2>
                    <p className="text-muted-foreground">{t('team.subtitle')}</p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {leadershipTeam.map((lawyer) => (
                        <motion.div key={lawyer.id} variants={itemVariants}>
                            <LawyerCard lawyer={lawyer} />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Button asChild size="lg">
                        <Link href="/attorneys" className="flex items-center gap-2">
                            {t('team.viewAll')}
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>

                {/* Team Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
                    {['offices', 'lawyers', 'experience', 'success'].map((stat) => (
                        <motion.div
                            key={stat}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <p className="text-4xl font-bold text-primary mb-2">
                                {t(`team.stats.${stat}.value`)}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {t(`team.stats.${stat}.label`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
