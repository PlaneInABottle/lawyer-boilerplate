import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className="relative bg-gradient-to-b from-primary/10 to-transparent pt-32 pb-16 md:pt-40 md:pb-24">
            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                            {t('title')}
                            <span className="text-primary block mt-2">{t('subtitle')}</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-200 max-w-xl">
                            {t('description')}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg">
                                <Link href="/contact">
                                    {t('contactButton')}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="/practice-areas">{t('practiceAreasButton')}</Link>
                            </Button>
                        </div>

                        <div className="flex items-center gap-8 pt-4">
                            <div className="flex items-center gap-2">
                                <span className="text-4xl font-bold text-primary dark:text-primary-foreground">
                                    25+
                                </span>
                                <span className="text-sm text-gray-600 dark:text-gray-300 leading-tight">
                                    {t('yearsExperience')}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-4xl font-bold text-primary dark:text-primary-foreground">
                                    1000+
                                </span>
                                <span className="text-sm text-gray-600 dark:text-gray-300 leading-tight">
                                    {t('casesWon')}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[400px] lg:h-[600px]">
                        <Image
                            src={'/images/hero/hero-law.jpeg'}
                            alt="Law Firm Building"
                            fill
                            className="object-cover rounded-lg shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full" />
                <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full" />
            </div>
        </section>
    );
}
