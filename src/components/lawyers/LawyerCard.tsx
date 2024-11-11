'use client';

import { Lawyer } from '@/types/lawyer';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Mail, Linkedin } from 'lucide-react';

type LawyerCardProps = {
  lawyer: Lawyer;
  variant?: 'default' | 'compact';
};

export default function LawyerCard({ lawyer, variant = 'default' }: LawyerCardProps) {
  const t = useTranslations('Lawyers');

  return (
    <Card className="group h-full overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={lawyer.imageUrl}
          alt={lawyer.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-1">{lawyer.name}</h3>
        <p className="text-muted-foreground mb-4">{t(`roles.${lawyer.role}`)}</p>
        
        {variant === 'default' && (
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">{t('sectionTitles.specialties')}</h4>
              <div className="flex flex-wrap gap-2">
                {lawyer.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="bg-muted px-2 py-1 rounded-md text-sm"
                  >
                    {t(`practiceAreas.${specialty}`)}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-1">{t('sectionTitles.languages')}</h4>
              <div className="flex flex-wrap gap-2">
                {lawyer.languages.map((language) => (
                  <span key={language} className="text-sm text-muted-foreground">
                    {t(`languages.${language}`)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex gap-4">
        <Button asChild variant="outline" size="sm">
          <Link href={`/attorneys/${lawyer.id}`}>
            {t('viewProfile')}
          </Link>
        </Button>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href={`mailto:${lawyer.email}`} aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
          {lawyer.linkedin && (
            <Button variant="ghost" size="icon" asChild>
              <a href={lawyer.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
} 