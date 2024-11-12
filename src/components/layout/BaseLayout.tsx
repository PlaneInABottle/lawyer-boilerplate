import { clsx } from 'clsx';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ReactNode } from 'react';
import Navigation from '@/components/navigation/Navigation';
import '@/app/styles/globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

type Props = {
    children: ReactNode;
    locale: string;
};

export default async function BaseLayout({ children, locale }: Props) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={clsx(inter.className, 'min-h-screen flex flex-col')}>
                <ThemeProvider>
                    <NextIntlClientProvider messages={messages}>
                        <Navigation />
                        <div className="flex-1">{children}</div>
                        <Footer />
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
