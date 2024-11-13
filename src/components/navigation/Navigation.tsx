'use client';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '../LocaleSwitcher';
import NavigationLink from './NavigationLink';
import ThemeSwitcher from '../ThemeSwitcher';
import MobileMenu from './MobileMenu';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function Navigation() {
    const t = useTranslations('common.navigation');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'bg-primary shadow-md' : 'bg-transparent'
            )}
        >
            <nav className="container flex justify-between p-4 text-white">
                {/* Logo */}
                <div className="flex items-center">
                    <NavigationLink href="/" className="text-xl font-semibold">
                        Law Firm
                    </NavigationLink>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6">
                    <NavigationLink href="/">{t('home')}</NavigationLink>
                    <NavigationLink href="/practice-areas">{t('practiceAreas')}</NavigationLink>
                    <NavigationLink href="/attorneys">{t('attorneys')}</NavigationLink>
                    <NavigationLink href="/about">{t('about')}</NavigationLink>
                    <NavigationLink href="/contact">{t('contact')}</NavigationLink>
                </div>

                {/* Right Side Items */}
                <div className="flex items-center gap-4">
                    <LocaleSwitcher />
                    <ThemeSwitcher />
                    <MobileMenu />
                </div>
            </nav>
        </div>
    );
}
