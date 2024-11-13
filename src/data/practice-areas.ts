import corporateLaw from '/public/images/services/corporate-law.jpeg';
import familyLaw from '/public/images/services/family-law.jpeg';
import criminalLaw from '/public/images/services/criminal-law.jpeg';
import realEstateLaw from '/public/images/services/real-estate-law.jpeg';
import intellectualProperty from '/public/images/services/intellectual-property.jpeg';
import litigation from '/public/images/services/litigation.jpeg';

export const practiceAreas = [
    {
        id: 'corporate',
        imageUrl: corporateLaw,
        services: ['formation', 'compliance', 'mergers', 'contracts', 'governance'],
    },
    {
        id: 'family',
        imageUrl: familyLaw,
        services: ['divorce', 'custody', 'support', 'adoption', 'mediation'],
    },
    {
        id: 'criminal',
        imageUrl: criminalLaw,
        services: ['defense', 'appeals', 'federal', 'state', 'investigation'],
    },
    {
        id: 'realEstate',
        imageUrl: realEstateLaw,
        services: ['transactions', 'development', 'leasing', 'zoning', 'disputes'],
    },
    {
        id: 'intellectual',
        imageUrl: intellectualProperty,
        services: [
            'protection',
            'enforcement',
            'litigation',
            'trademarks',
            'copyrights',
            'patents',
        ],
    },
    {
        id: 'litigation',
        imageUrl: litigation,
        services: ['litigation', 'disputes', 'arbitration', 'classActions', 'consumer'],
    },
];
