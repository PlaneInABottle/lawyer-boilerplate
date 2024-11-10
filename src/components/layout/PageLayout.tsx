import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: ReactNode;
  fullWidth?: boolean;
};

export default function PageLayout({ children, title, fullWidth = false }: Props) {
  return (
    <main className="min-h-screen bg-background">
      {title && (
        <div className="bg-primary py-20">
          <div className="container relative">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              {title}
            </h1>
          </div>
        </div>
      )}
      <div className={fullWidth ? 'w-full' : 'container py-8 md:py-12'}>
        {children}
      </div>
    </main>
  );
}