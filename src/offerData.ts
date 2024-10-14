import { OfferTyping } from './types';
import offerImage1 from './images/t1.jpg';
import offerImage2 from './images/safari/SUV.jpg';
import offerImage3 from './images/city/view.jpeg';

const offerDataDa: OfferTyping[] = [
    {
        'path': 'offers/the-small-package',
        'type': 'standard',
        'title': 'Den Lille Pakkerejse',
        'longTitle': 'Den lille pakkerejse til Rwanda',
        'description': 'Safaritur I Rwandas vilde natur',
        'images': [{ 'alt': 'safari', 'src': offerImage1 }],
        "dayPlan": [
            {
                "title": "Ankomst i Kigali",
                "description": "Ved ankomsten til Kigali vil du blive mødt af vores venlige guide, som vil sørge for, at du bliver transporteret til dit hotel. Efter indkvartering kan du tage dig tid til at slappe af og nyde den smukke udsigt over byen."
            },
            {
                "title": "Guidede bustur i Kigali",
                "description": "Tag på en spændende guidet bustur gennem Kigali. Du vil få mulighed for at udforske byens vigtigste attraktioner, herunder de historiske steder og kulturelle landemærker, og få et indblik i Kigali's rige historie og kultur."
            },
            {
                "title": "Safaritur ved Akagera nationalpark",
                "description": "Oplev det vilde dyreliv i Akagera Nationalpark på en spændende safari. Du vil have mulighed for at se en række dyrearter, herunder løver, elefanter, giraffer og mange andre, mens du kører gennem parkens naturskønne landskaber."
            },
            {
                "title": "Safaritur ved Akagera nationalpark",
                "description": "Fortæt din safari-oplevelse i Akagera Nationalpark med endnu en dag fyldt med spændende dyreliv og naturskønne udsigter. Udforsk forskellige områder af parken og få en dybere forståelse af Rwandas biodiversitet."
            },
            {
                "title": "Fazenda Sengha Recreational Center",
                "description": "Tilbring en dag på Fazenda Sengha, et rekreativt center, hvor du kan nyde afslappende aktiviteter og smukke omgivelser. Her kan du tage en dukkert i poolen, nyde en lækker middag, eller bare slappe af i de naturskønne omgivelser."
            },
            {
                "title": "Kigali Genocide Memorial",
                "description": "Besøg Kigali Genocide Memorial for at lære om Rwandas historie og mindes de tragiske begivenheder i 1994. Dette monument tilbyder en dybdegående indsigt i den menneskelige kost og den efterfølgende genopbygning af nationen."
            },
            {
                "title": "Besøg ved Kimironko Marked",
                "description": "Udforsk Kimironko Marked, en livlig lokal markedsplads fyldt med farverige stande, der sælger alt fra frugt og grøntsager til håndværk og souvenirs. Det er et perfekt sted at opleve den lokale kultur og købe unikke varer."
            },
            {
                "title": "Besøg ved Kivusøen",
                "description": "Tag på en afslappende tur til Kivusøen, en af de største søer i Afrika. Her kan du nyde bådture, svømme i det krystalklare vand, eller blot nyde den smukke udsigt over søen og dens omgivelser."
            },
            {
                "title": "Madlavningskursus",
                "description": "Deltag i et madlavningskursus og lær at tilberede traditionelle rwandiske retter. Du vil få indsigt i lokale ingredienser og teknikker og have mulighed for at smage på dine egne kreationer."
            },
            {
                "title": "Kigali City Markeder",
                "description": "Afslut din rejse med en tur til Kigali's bymarkeder. Her kan du opleve det lokale liv, handle håndlavede produkter og souvenirs, og nyde de livlige atmosfære og farverige markedsstande."
            }
        ]
    },
    {
        'path': 'offer/cykel',
        'type': 'standard',
        'title': 'Cykeltur',
        'longTitle': 'Cykeltur gennem Rwandas seje landskaber',
        'description': 'Safaritur I Rwandas vilde natur',
        'images': [{ 'alt': 'safari', 'src': offerImage2 }]
    },
    {
        'path': 'offer/tre-uger',
        'type': 'standard',
        'title': 'Tre uger i Rwanda',
        'longTitle': 'Tre fede uger i Rwanda',
        'description': 'Safaritur I Rwandas vilde natur',
        'images': [{ 'alt': 'safari', 'src': offerImage3 }]
    },
    {
        'path': 'offer/tre-uger',
        'type': 'student',
        'title': 'Gymnasieture',
        'longTitle': 'Tre fede uger i Rwanda',
        'description': 'Safaritur I Rwandas vilde natur',
        'images': [{ 'alt': 'safari', 'src': offerImage3 }]
    },
    {
        'path': 'offer/tre-uger',
        'type': 'student',
        'title': 'Universitetstuderende',
        'longTitle': 'Tre fede uger i Rwanda',
        'description': 'Safaritur I Rwandas vilde natur',
        'images': [{ 'alt': 'safari', 'src': offerImage3 }]
    },
];

const offerDataEn: OfferTyping[] = [
    {
        'path': 'offer/lille-pakkerejse',
        'type': 'standard',
        'title': 'Small Travel Package',
        'longTitle': 'Short trip with a lot to see',
        'description': 'Safaritur I Rwandas vilde natur',
        'images': [{ 'alt': 'safari', 'src': offerImage1 }],
        "dayPlan": [
            {
                "title": "Ankomst i Kigali",
                "description": "Ved ankomsten til Kigali vil du blive mødt af vores venlige guide, som vil sørge for, at du bliver transporteret til dit hotel. Efter indkvartering kan du tage dig tid til at slappe af og nyde den smukke udsigt over byen."
            },
            {
                "title": "Guidede bustur i Kigali",
                "description": "Tag på en spændende guidet bustur gennem Kigali. Du vil få mulighed for at udforske byens vigtigste attraktioner, herunder de historiske steder og kulturelle landemærker, og få et indblik i Kigali's rige historie og kultur."
            },
            {
                "title": "Safaritur ved Akagera nationalpark",
                "description": "Oplev det vilde dyreliv i Akagera Nationalpark på en spændende safari. Du vil have mulighed for at se en række dyrearter, herunder løver, elefanter, giraffer og mange andre, mens du kører gennem parkens naturskønne landskaber."
            },
            {
                "title": "Safaritur ved Akagera nationalpark",
                "description": "Fortæt din safari-oplevelse i Akagera Nationalpark med endnu en dag fyldt med spændende dyreliv og naturskønne udsigter. Udforsk forskellige områder af parken og få en dybere forståelse af Rwandas biodiversitet."
            },
            {
                "title": "Fazenda Sengha Recreational Center",
                "description": "Tilbring en dag på Fazenda Sengha, et rekreativt center, hvor du kan nyde afslappende aktiviteter og smukke omgivelser. Her kan du tage en dukkert i poolen, nyde en lækker middag, eller bare slappe af i de naturskønne omgivelser."
            },
            {
                "title": "Kigali Genocide Memorial",
                "description": "Besøg Kigali Genocide Memorial for at lære om Rwandas historie og mindes de tragiske begivenheder i 1994. Dette monument tilbyder en dybdegående indsigt i den menneskelige kost og den efterfølgende genopbygning af nationen."
            },
            {
                "title": "Besøg ved Kimironko Marked",
                "description": "Udforsk Kimironko Marked, en livlig lokal markedsplads fyldt med farverige stande, der sælger alt fra frugt og grøntsager til håndværk og souvenirs. Det er et perfekt sted at opleve den lokale kultur og købe unikke varer."
            },
            {
                "title": "Besøg ved Kivusøen",
                "description": "Tag på en afslappende tur til Kivusøen, en af de største søer i Afrika. Her kan du nyde bådture, svømme i det krystalklare vand, eller blot nyde den smukke udsigt over søen og dens omgivelser."
            },
            {
                "title": "Madlavningskursus",
                "description": "Deltag i et madlavningskursus og lær at tilberede traditionelle rwandiske retter. Du vil få indsigt i lokale ingredienser og teknikker og have mulighed for at smage på dine egne kreationer."
            },
            {
                "title": "Kigali City Markeder",
                "description": "Afslut din rejse med en tur til Kigali's bymarkeder. Her kan du opleve det lokale liv, handle håndlavede produkter og souvenirs, og nyde de livlige atmosfære og farverige markedsstande."
            }
        ]
    },
    {
        'path': 'offer/cykel',
        'type': 'standard',
        'title': 'Bicycle Journey',
        'longTitle': 'An incredible view of Rwanda',
        'description': 'Safaritur I Rwandas vilde natur',
        'images': [{ 'alt': 'safari', 'src': offerImage2 }]
    },
    {
        'path': 'offer/tre-uger',
        'type': 'standard',
        'title': 'Three wheeks in Rwanda',
        'longTitle': 'Tre fede uger i Rwanda',
        'description': 'Safaritur I Rwandas vilde natur',
        'images': [{ 'alt': 'safari', 'src': offerImage3 }]
    },
    {
        'path': 'offer/tre-uger',
        'type': 'student',
        'title': 'Gymnasieture',
        'longTitle': 'Tre fede uger i Rwanda',
        'description': 'Safaritur I Rwandas vilde natur',
        'images': [{ 'alt': 'safari', 'src': offerImage3 }]
    },
    {
        'path': 'offer/tre-uger',
        'type': 'student',
        'title': 'Universitetstuderende',
        'longTitle': 'Tre fede uger i Rwanda',
        'description': 'Safaritur I Rwandas vilde natur',
        'images': [{ 'alt': 'safari', 'src': offerImage3 }]
    },
];

export default function getOffers(lang: string): OfferTyping[] {
    switch (lang) {
        case 'en':
            return offerDataEn;
        case 'da':
            return offerDataDa;
        default:
            return offerDataEn; // Default Language Object
    }
}
