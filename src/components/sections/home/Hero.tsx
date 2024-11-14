import Image from 'next/image';
import heroImage from '/public/images/hero/hero-law.jpeg';
import HeroContent from './heroContent/HeroContent';

export default function Hero() {
    return (
        <section className="relative min-h-screen -mt-20">
            {/* Optimized Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={heroImage}
                    alt="Law Firm Building"
                    fill
                    priority
                    quality={50} // Reduced quality further
                    placeholder="blur"
                    sizes="100vw" // Simplified sizes as it's full-width
                    className="object-cover"
                    style={{
                        objectPosition: 'center 30%',
                    }}
                    loading="eager"
                    fetchPriority="high"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/30" />
            </div>

            {/* Content */}

            <HeroContent />
        </section>
    );
}
