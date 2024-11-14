'use client';

// import { useTranslations } from 'next-intl';
// import { Button } from '@/components/ui/button';
// import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
// import { Link } from '@/i18n/routing';
import heroImage from '/public/images/hero/hero-law.jpeg';
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

// Properly typed intersection observer hook
const useInView = (options = {}): [React.RefObject<HTMLDivElement>, boolean] => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return [ref, isInView];
};

export default function Hero() {
    const t = useTranslations('pages.home.hero');
    // const commonT = useTranslations('common.buttons');
    // const [contentRef, isContentInView] = useInView({ threshold: 0.1 });
    const [scrollRef, isScrollInView] = useInView({ threshold: 0.1 });

    return (
        <section className="relative min-h-screen -mt-20">
            {/* Optimized Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={heroImage}
                    alt="Law Firm Building"
                    fill
                    priority
                    quality={40}
                    placeholder="blur"
                    sizes="100vw"
                    className="object-cover"
                    style={{
                        objectPosition: 'center 30%',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/30" />
            </div>

            {/* Content */}
            {/* <div className="container relative h-[calc(100vh-64px)] flex items-center">
                <div
                    ref={contentRef}
                    className={`max-w-2xl text-white transform transition-all duration-700 ease-out
                        ${
                            isContentInView
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-4 opacity-0'
                        }`}
                >
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
                            <Link href="/practice-areas">
                                {t('learnMore')}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>

                    <div className="flex items-center gap-8 mt-12">
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
            </div> */}

            {/* Scroll Indicator */}
            <div
                ref={scrollRef}
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500
                    ${isScrollInView ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className="flex flex-col items-center text-white">
                    <span className="text-sm mb-2">{t('scrollToExplore')}</span>
                    <div className="w-6 h-10 border-2 border-white rounded-full p-2 relative">
                        <div className="w-1.5 h-1.5 bg-white rounded-full absolute left-1/2 -translate-x-1/2 animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    );
}
