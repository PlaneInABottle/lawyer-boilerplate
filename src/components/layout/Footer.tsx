import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    const t = useTranslations('common.footer');

    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Law Firm</h3>
                        <p className="text-primary-foreground/80 text-sm">{t('description')}</p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-accent" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="hover:text-accent" aria-label="Twitter">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">{t('quickLinks')}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    {t('links.home')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    {t('links.services')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/team"
                                    className="text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    {t('links.team')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    {t('links.about')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    {t('links.contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">{t('contactUs')}</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3 text-primary-foreground/80">
                                <Mail className="h-5 w-5" />
                                <span>{t('email')}</span>
                            </li>
                            <li className="flex items-center space-x-3 text-primary-foreground/80">
                                <Phone className="h-5 w-5" />
                                <span>{t('phone')}</span>
                            </li>
                            <li className="flex items-center space-x-3 text-primary-foreground/80">
                                <MapPin className="h-5 w-5" />
                                <span>{t('address')}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Office Hours */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">{t('officeHoursTitle')}</h3>
                        <ul className="space-y-2 text-primary-foreground/80">
                            <li className="flex justify-between">
                                <span>
                                    {t('days.monday')} - {t('days.friday')}
                                </span>
                                <span>9:00 AM - 6:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>{t('days.saturday')}</span>
                                <span>10:00 AM - 2:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>{t('days.sunday')}</span>
                                <span>{t('close')}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-primary-foreground/10">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-primary-foreground/80">
                            © {new Date().getFullYear()} {t('allRightsReserved')}
                        </p>
                        <div className="flex space-x-6 text-sm text-primary-foreground/80">
                            <a href="#" className="hover:text-primary-foreground">
                                {t('privacyPolicy')}
                            </a>
                            <a href="#" className="hover:text-primary-foreground">
                                {t('termsOfService')}
                            </a>
                            <a href="#" className="hover:text-primary-foreground">
                                {t('cookiePolicy')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
