'use client';

import { useTheme } from '@/context/ThemeContext';
import { Palette } from 'lucide-react';

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    const themes = [
        { value: 'default', label: 'Classic Law' },
        { value: 'modern', label: 'Modern' },
        { value: 'elegant', label: 'Elegant' },
        { value: 'dark', label: 'Dark' },
        { value: 'corporate', label: 'Corporate' },
        { value: 'boutique', label: 'Boutique' },
        { value: 'nature', label: 'Nature' },
        { value: 'sunset', label: 'Sunset' },
        { value: 'ocean', label: 'Ocean' },
        { value: 'vintage', label: 'Vintage' },
        { value: 'nordic', label: 'Nordic' },
        { value: 'minimalist', label: 'Minimalist' },
        { value: 'coastal', label: 'Coastal' },
    ];

    return (
        <div className="flex items-center gap-2">
            <Palette className="h-4 w-4 text-white" />
            <select
                value={theme}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e) => setTheme(e.target.value as any)}
                className="bg-transparent text-white border-none text-sm focus:ring-0 focus:outline-none"
            >
                {themes.map((t) => (
                    <option key={t.value} value={t.value} className="text-primary bg-background">
                        {t.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
