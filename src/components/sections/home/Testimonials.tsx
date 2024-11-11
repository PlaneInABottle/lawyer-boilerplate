'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: 'testimonial1.name',
    role: 'testimonial1.role',
    content: 'testimonial1.content',
    rating: 5,
  },
  {
    id: 2,
    name: 'testimonial2.name',
    role: 'testimonial2.role',
    content: 'testimonial2.content',
    rating: 5,
  },
  {
    id: 3,
    name: 'testimonial3.name',
    role: 'testimonial3.role',
    content: 'testimonial3.content',
    rating: 5,
  },
];

export default function Testimonials() {
  const t = useTranslations('Testimonials');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <div className="mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {t(testimonial.content)}
                  </p>
                  <div>
                    <p className="font-semibold">{t(testimonial.name)}</p>
                    <p className="text-sm text-muted-foreground">
                      {t(testimonial.role)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 