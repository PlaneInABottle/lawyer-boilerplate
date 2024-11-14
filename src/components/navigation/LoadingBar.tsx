'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LoadingBar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timeout);
    }, [pathname, searchParams]);

    return (
        <>
            {isLoading && (
                <motion.div
                    className="fixed top-0 left-0 right-0 z-50 h-1 bg-accent"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                />
            )}
        </>
    );
}
