'use client';

import clsx from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';
import { Link } from '@/i18n/routing';

export default function NavigationLink({ href, className, ...rest }: ComponentProps<typeof Link>) {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
    const isActive = pathname === href;

    return (
        <Link
            aria-current={isActive ? 'page' : undefined}
            className={clsx(
                'inline-block px-3 py-2 transition-colors font-medium',
                isActive ? 'text-white' : 'text-white/90 hover:text-white',
                className
            )}
            href={href}
            {...rest}
        />
    );
}
