'use client';

import { useTranslations } from 'next-intl';
import NavigationLink from '@/components/navigation/NavigationLink';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { useEffect, useState } from 'react';

// TODO: Add a logo and mobile menu, also fix the links
export default function FloatingNav() {
    const [scrolled, setScrolled] = useState(false);
    const t = useTranslations('common.navigation');

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
            className={`fixed left-1/2 transition-[top,width] duration-300 -translate-x-1/2 z-50 ${
                scrolled ? 'top-0 w-full' : 'w-[94%] top-8'
            }`}
        >
            <div
                className={`bg-primary shadow-lg px-6 py-3 flex justify-around items-center gap-8 transition-[border-radius] duration-300 ${
                    scrolled ? 'rounded-none' : 'rounded-xl'
                }`}
            >
                <div className="flex items-center gap-4">
                    {/* Logo and Name */}
                    <Link href="/">
                        {/* <Logo /> */}
                        <span className="text-white text-lg font-bold">Law Firm Name</span>
                    </Link>
                </div>
                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-4">
                    <NavigationLink href="/">{t('home')}</NavigationLink>
                    <NavigationLink href="/practice-areas">{t('practiceAreas')}</NavigationLink>
                    <NavigationLink href="/attorneys">{t('attorneys')}</NavigationLink>
                    <NavigationLink href="/about">{t('about')}</NavigationLink>
                </div>

                {/* Contact Actions */}
                <div className="flex items-center gap-4 border-l border-white/20 pl-4">
                    <a
                        href="tel:+15551234567"
                        className="text-white/90 hover:text-white flex items-center gap-2"
                    >
                        <Phone className="h-4 w-4" />
                        <span className="hidden lg:inline">+1 (555) 123-4567</span>
                    </a>
                    <a
                        href="mailto:contact@lawfirm.com"
                        className="text-white/90 hover:text-white flex items-center gap-2"
                    >
                        <Mail className="h-4 w-4" />
                        <span className="hidden lg:inline">contact@lawfirm.com</span>
                    </a>
                    <Button asChild size="sm" variant="secondary">
                        <Link href="/contact">{t('contact')}</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
