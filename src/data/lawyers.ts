import { Lawyer } from '@/types/lawyer';

export const lawyers: Lawyer[] = [
  {
    id: 'jane-doe',
    name: 'Jane Doe',
    role: 'seniorPartner',
    imageUrl: '/images/lawyers/jane-doe.jpg',
    specialties: ['corporate', 'mergers', 'securities'],
    education: ['harvard', 'yale'],
    barAdmissions: ['newYorkBar', 'californiaBar'],
    languages: ['english', 'spanish'],
    email: 'jane.doe@lawfirm.com',
    linkedin: 'https://linkedin.com/in/jane-doe'
  },
  // Add more lawyers...
]; 