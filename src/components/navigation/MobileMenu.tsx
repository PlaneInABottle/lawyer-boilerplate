'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import NavigationLink from './NavigationLink';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('common.navigation');

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
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-primary shadow-lg">
                    <div className="flex flex-col p-4">
                        <NavigationLink onClick={() => setIsOpen(false)} href="/">
                            {t('home')}
                        </NavigationLink>

                        <NavigationLink onClick={() => setIsOpen(false)} href="/practice-areas">
                            {t('practiceAreas')}
                        </NavigationLink>
                        <NavigationLink onClick={() => setIsOpen(false)} href="/attorneys">
                            {t('attorneys')}
                        </NavigationLink>
                        <NavigationLink onClick={() => setIsOpen(false)} href="/about">
                            {t('about')}
                        </NavigationLink>
                        <NavigationLink onClick={() => setIsOpen(false)} href="/contact">
                            {t('contact')}
                        </NavigationLink>
                    </div>
                </div>
            )}
        </div>
    );
}
