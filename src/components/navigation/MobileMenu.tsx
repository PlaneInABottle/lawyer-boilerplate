'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import NavigationLink from './NavigationLink';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('common.navigation');

    const menuVariants = {
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2,
            },
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
            },
        },
    };

    const linkVariants = {
        closed: {
            opacity: 0,
            x: -20,
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.2,
            },
        },
    };

    const containerVariants = {
        open: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    return (
        <div className="lg:hidden">
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2"
                aria-label="Toggle menu"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isOpen ? (
                        <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="absolute top-full left-0 right-0 bg-primary shadow-lg"
                    >
                        <motion.div variants={containerVariants} className="flex flex-col p-4">
                            <motion.div variants={linkVariants}>
                                <NavigationLink onClick={() => setIsOpen(false)} href="/">
                                    {t('home')}
                                </NavigationLink>
                            </motion.div>

                            <motion.div variants={linkVariants}>
                                <NavigationLink
                                    onClick={() => setIsOpen(false)}
                                    href="/practice-areas"
                                >
                                    {t('services')}
                                </NavigationLink>
                            </motion.div>

                            <motion.div variants={linkVariants}>
                                <NavigationLink onClick={() => setIsOpen(false)} href="/team">
                                    {t('team')}
                                </NavigationLink>
                            </motion.div>

                            <motion.div variants={linkVariants}>
                                <NavigationLink onClick={() => setIsOpen(false)} href="/about">
                                    {t('about')}
                                </NavigationLink>
                            </motion.div>

                            <motion.div variants={linkVariants}>
                                <NavigationLink onClick={() => setIsOpen(false)} href="/contact">
                                    {t('contact')}
                                </NavigationLink>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
