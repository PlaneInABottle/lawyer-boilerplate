import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

export default function Hero() {
    const t = useTranslations('pages.home.hero');
    const commonT = useTranslations('common.buttons');

    return (
        <section className="relative min-h-screen ">
            {/* Optimized Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Law Firm Building"
                    fill
                    priority
                    quality={50}
                    sizes="100vw"
                    className="object-cover"
                    loading="eager"
                    fetchPriority="high"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/30" />
            </div>

            {/* Content */}
            <div className="container relative h-[calc(100vh-64px)] flex items-center">
                <div className="max-w-2xl text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        {t('title')}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-200">{t('subtitle')}</p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg" className="text-base">
                            <Link href="/contact">
                                {commonT('contactUs')}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="text-base bg-transparent text-white border-white hover:bg-white/10"
                        >
                            <Link href="/services">
                                {t('learnMore')}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8 mt-12">
                        <div className="flex items-center gap-2">
                            <span className="text-4xl font-bold">25+</span>
                            <span className="text-sm leading-tight">{t('yearsExperience')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-4xl font-bold">1000+</span>
                            <span className="text-sm leading-tight">{t('casesWon')}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Static Scroll Indicator */}
            <div className="absolute  bottom-8 left-1/2 -translate-x-1/2">
                <div className="flex flex-col items-center text-white">
                    <span className="text-sm mb-4">{t('scrollToExplore')}</span>
                    <div className="animate-bounce w-6 h-10 border-2 border-white rounded-full p-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
