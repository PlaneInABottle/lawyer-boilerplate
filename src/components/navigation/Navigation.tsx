'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import LocaleSwitcher from '../LocaleSwitcher';
import NavigationLink from './NavigationLink';
import ThemeSwitcher from '../ThemeSwitcher';
import MobileMenu from './MobileMenu';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const t = useTranslations('common.navigation');
    const pathname = usePathname();
    const isHome = pathname === '/tr' || pathname === '/en' || pathname === '/ar';
    const navigationLinks = [
        { href: '/', label: t('home') },
        { href: '/services', label: t('services') },
        { href: '/team', label: t('team') },
        { href: '/about', label: t('about') },
        { href: '/contact', label: t('contact') },
    ];
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                scrolled || !isHome ? 'bg-primary shadow-md' : 'bg-primary-rgba/50 backdrop-blur-sm'
            }`}
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
                    {navigationLinks.map((link) => (
                        <NavigationLink key={link.href} href={link.href}>
                            {link.label}
                        </NavigationLink>
                    ))}
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
