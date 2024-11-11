import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { lawyers } from '@/data/lawyers';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
  params: {
    id: string;
  };
};

export default async function LawyerProfile({ params }: Props) {
const {id} = await params;
  const lawyer = lawyers.find((l) => l.id === id);
  
  if (!lawyer) {
    notFound();
  }

  const t = await getTranslations('Lawyers');

  return (
    <PageLayout title={lawyer.name}>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={lawyer.imageUrl}
                alt={lawyer.name}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <Button variant="outline" asChild className="flex-1">
                  <a href={`mailto:${lawyer.email}`}>
                    <Mail className="h-4 w-4 mr-2" />
                    {t('contact')}
                  </a>
                </Button>
                {lawyer.linkedin && (
                  <Button variant="outline" asChild>
                    <a
                      href={lawyer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{t('about')}</h2>
            <p className="text-muted-foreground">{t(`bios.${lawyer.id}`)}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">{t('expertise')}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">{t('sectionTitles.specialties')}</h3>
                <ul className="space-y-1 text-muted-foreground">
                  {lawyer.specialties.map((specialty) => (
                    <li key={specialty}>{t(`practiceAreas.${specialty}`)}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">{t('sectionTitles.barAdmissions')}</h3>
                <ul className="space-y-1 text-muted-foreground">
                  {lawyer.barAdmissions.map((bar) => (
                    <li key={bar}>{t(`barAdmissions.${bar}`)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">{t('sectionTitles.education')}</h2>
            <ul className="space-y-1 text-muted-foreground">
              {lawyer.education.map((edu) => (
                <li key={edu}>{t(`education.${edu}`)}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">{t('sectionTitles.languages')}</h2>
            <ul className="space-y-1 text-muted-foreground">
              {lawyer.languages.map((lang) => (
                <li key={lang}>{t(`languages.${lang}`)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 