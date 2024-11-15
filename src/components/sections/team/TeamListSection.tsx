'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import TeamMemberCard from '@/components/team-members/TeamMemberCard';
import { teamMembers } from '@/data/team-members';

export default function TeamListSection() {
    const t = useTranslations('pages.team');

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

    return (
        <>
            <section className="py-12 md:py-16 bg-muted">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
                        <p className="text-muted-foreground">{t('subtitle')}</p>
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
                        {teamMembers.map((teamMember) => (
                            <motion.div key={teamMember.id} variants={itemVariants}>
                                <TeamMemberCard teamMember={teamMember} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
