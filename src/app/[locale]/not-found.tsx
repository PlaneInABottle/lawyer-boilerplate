'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { Home } from 'lucide-react';

export default function NotFound() {
    const t = useTranslations('errors.notFound');

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-4">{t('title')}</h2>
            <p className="text-muted-foreground mb-8 max-w-md">{t('message')}</p>
            <Button asChild>
                <Link href="/" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    {t('backHome')}
                </Link>
            </Button>
        </div>
    );
}
