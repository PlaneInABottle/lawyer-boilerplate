'use client';

import Image from 'next/image';
const StarIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 fill-current text-yellow-500"
        viewBox="0 0 24 24"
    >
        <path d="M12 2l3 6h6l-4.5 3.5 1.5 6.5L12 14l-6.5 4 1.5-6.5L2 8h6z" />
    </svg>
);
// This was a test component, check the span use it later
export default function AboutSection() {
    return (
        <section className="relative h-full min-h-screen bg-background  ">
            <span className="block absolute  w-full top-[12.5rem] bottom-[12.5rem] inset-x-0 bg-primary-rgba/60 "></span>
            <div className="flex relative flex-col md:flex-row items-center justify-center h-screen gap-4 z-10 p-8">
                <div className="flex flex-col items-center h-1/2 w-full md:w-1/2  text-white p-6 rounded-lg">
                    <h2 className="text-3xl font-bold mb-4">About Us</h2>
                    <p className="text-lg">
                        We are dedicated to bringing smiles and promoting health. Our mission is to
                        provide the highest quality services, ensuring every client leaves happier
                        and healthier.
                    </p>
                    <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                        Get Started
                    </button>
                </div>

                <div className="flex relative justify-center w-full h-3/4 md:w-1/2">
                    <Image
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/dental-sbs-2.png"
                        alt="Happy client at our clinic"
                        fill
                        sizes="100vw"
                        className="rounded-lg shadow-lg object-cover"
                    />
                    <div className="absolute -top-8 -right-8">
                        <StarIcon />
                    </div>
                </div>
            </div>{' '}
        </section>
    );
}
