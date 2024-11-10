'use client';

import { useTheme } from '@/context/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onChange={(e) => setTheme(e.target.value as any)}
      className="bg-primary text-primary-foreground border border-border rounded-md px-2 py-1"
    >
      <option value="default">Classic Law</option>
      <option value="modern">Modern</option>
      <option value="elegant">Elegant</option>
    </select>
  );
}