// import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Clock } from 'lucide-react';

export default function EventsHero() {
    // const t = useTranslations('pages.events');

    const events = [
        {
            date: {
                day: '26',
                month: 'Mar 2024',
            },
            title: '30% offer on all services',
            time: '12:00AM - 02:00PM',
        },
        {
            date: {
                day: '17',
                month: 'Apr 2024',
            },
            title: '15% offer on dermal fillers services',
            time: '12:00AM - 02:00PM',
        },
        {
            date: {
                day: '12',
                month: 'May 2024',
            },
            title: '40% offer on micro needling services',
            time: '12:00AM - 02:00PM',
        },
    ];

    return (
        <section className="relative bg-[#FDF8F4] py-16 md:py-24">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="relative w-[500px] h-[500px] mx-auto">
                            <Image
                                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
                                alt="Beauty Treatment"
                                fill
                                className="object-cover rounded-full p-4"
                                priority
                            />
                            {/* Decorative leaf */}
                            <div className="absolute -bottom-8 left-8 w-32 h-32">
                                <Image
                                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/leaf-2.svg"
                                    alt=""
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <span className="text-orange-400 font-medium">OUR EVENTS</span>
                            <h1 className="text-4xl md:text-5xl font-bold mt-2">Upcoming Events</h1>
                        </div>

                        <div className="space-y-6">
                            {events.map((event, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-6 bg-white p-4 rounded-lg shadow-sm"
                                >
                                    <div className="text-center bg-[#FDF8F4] px-6 py-3 rounded-lg">
                                        <div className="text-2xl font-bold">{event.date.day}</div>
                                        <div className="text-sm text-gray-600">
                                            {event.date.month}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg">{event.title}</h3>
                                        <div className="flex items-center gap-2 text-gray-600 mt-1">
                                            <Clock className="w-4 h-4" />
                                            <span className="text-sm">{event.time}</span>
                                        </div>
                                    </div>
                                    <Button>Buy Ticket</Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
