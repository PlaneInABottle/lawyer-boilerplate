'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import TeamMemberCard from '@/components/team-members/TeamMemberCard';
import { teamMembers } from '@/data/team-members';
import { ArrowRight } from 'lucide-react';

export default function TeamSection() {
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

    // Only show first 3 lawyers on homepage
    const featuredTeamMembers = teamMembers.slice(0, 3);

    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
                        <p className="text-muted-foreground max-w-2xl">{t('subtitle')}</p>
                    </div>
                    <Button asChild>
                        <Link href="/team" className="flex items-center gap-2">
                            {t('viewAll')}
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {featuredTeamMembers.map((teamMember) => (
                        <motion.div key={teamMember.id} variants={itemVariants}>
                            <TeamMemberCard teamMember={teamMember} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
