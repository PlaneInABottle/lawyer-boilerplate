import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    const t = useTranslations('Navigation');

    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Law Firm</h3>
                        <p className="text-primary-foreground/80 text-sm">
                            Providing exceptional legal services with integrity and dedication since
                            1990.
                        </p>
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
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    {t('home')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/practice-areas"
                                    className="text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    {t('practiceAreas')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/attorneys"
                                    className="text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    {t('attorneys')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    {t('about')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    {t('contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3 text-primary-foreground/80">
                                <Mail className="h-5 w-5" />
                                <span>contact@lawfirm.com</span>
                            </li>
                            <li className="flex items-center space-x-3 text-primary-foreground/80">
                                <Phone className="h-5 w-5" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3 text-primary-foreground/80">
                                <MapPin className="h-5 w-5" />
                                <span>
                                    123 Legal Street, Suite 100
                                    <br />
                                    New York, NY 10001
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Office Hours */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Office Hours</h3>
                        <ul className="space-y-2 text-primary-foreground/80">
                            <li className="flex justify-between">
                                <span>Monday - Friday:</span>
                                <span>9:00 AM - 6:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday:</span>
                                <span>10:00 AM - 2:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday:</span>
                                <span>Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-primary-foreground/10">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-primary-foreground/80">
                            © {new Date().getFullYear()} Law Firm. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm text-primary-foreground/80">
                            <a href="#" className="hover:text-primary-foreground">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-primary-foreground">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-primary-foreground">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
