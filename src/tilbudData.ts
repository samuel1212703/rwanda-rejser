import { TilbudTyping } from './types';
import tilbud1 from './images/t1.jpg';
import tilbud2 from './images/t2.jpg';
import tilbud3 from './images/t3.jpg';

const tilbudDataDa: TilbudTyping[] = [
    {
        'sti': 'tilbud/lille-pakkerejse',
        'titel': 'Den lille pakkerejse til Rwanda',
        'langTitel': 'Den lille pakkerejse til Rwanda',
        'beskrivelse': 'Safaritur I Rwandas vilde natur',
        'billeder': [{ 'alt': 'safari', 'src': tilbud1 }],
        "dagPlan": [
            {
                "overskrift": "Ankomst i Kigali",
                "beskrivelse": "Ved ankomsten til Kigali vil du blive mødt af vores venlige guide, som vil sørge for, at du bliver transporteret til dit hotel. Efter indkvartering kan du tage dig tid til at slappe af og nyde den smukke udsigt over byen."
            },
            {
                "overskrift": "Guidede bustur i Kigali",
                "beskrivelse": "Tag på en spændende guidet bustur gennem Kigali. Du vil få mulighed for at udforske byens vigtigste attraktioner, herunder de historiske steder og kulturelle landemærker, og få et indblik i Kigali's rige historie og kultur."
            },
            {
                "overskrift": "Safaritur ved Akagera nationalpark",
                "beskrivelse": "Oplev det vilde dyreliv i Akagera Nationalpark på en spændende safari. Du vil have mulighed for at se en række dyrearter, herunder løver, elefanter, giraffer og mange andre, mens du kører gennem parkens naturskønne landskaber."
            },
            {
                "overskrift": "Safaritur ved Akagera nationalpark",
                "beskrivelse": "Fortæt din safari-oplevelse i Akagera Nationalpark med endnu en dag fyldt med spændende dyreliv og naturskønne udsigter. Udforsk forskellige områder af parken og få en dybere forståelse af Rwandas biodiversitet."
            },
            {
                "overskrift": "Fazenda Sengha Recreational Center",
                "beskrivelse": "Tilbring en dag på Fazenda Sengha, et rekreativt center, hvor du kan nyde afslappende aktiviteter og smukke omgivelser. Her kan du tage en dukkert i poolen, nyde en lækker middag, eller bare slappe af i de naturskønne omgivelser."
            },
            {
                "overskrift": "Kigali Genocide Memorial",
                "beskrivelse": "Besøg Kigali Genocide Memorial for at lære om Rwandas historie og mindes de tragiske begivenheder i 1994. Dette monument tilbyder en dybdegående indsigt i den menneskelige kost og den efterfølgende genopbygning af nationen."
            },
            {
                "overskrift": "Besøg ved Kimironko Marked",
                "beskrivelse": "Udforsk Kimironko Marked, en livlig lokal markedsplads fyldt med farverige stande, der sælger alt fra frugt og grøntsager til håndværk og souvenirs. Det er et perfekt sted at opleve den lokale kultur og købe unikke varer."
            },
            {
                "overskrift": "Besøg ved Kivusøen",
                "beskrivelse": "Tag på en afslappende tur til Kivusøen, en af de største søer i Afrika. Her kan du nyde bådture, svømme i det krystalklare vand, eller blot nyde den smukke udsigt over søen og dens omgivelser."
            },
            {
                "overskrift": "Madlavningskursus",
                "beskrivelse": "Deltag i et madlavningskursus og lær at tilberede traditionelle rwandiske retter. Du vil få indsigt i lokale ingredienser og teknikker og have mulighed for at smage på dine egne kreationer."
            },
            {
                "overskrift": "Kigali City Markeder",
                "beskrivelse": "Afslut din rejse med en tur til Kigali's bymarkeder. Her kan du opleve det lokale liv, handle håndlavede produkter og souvenirs, og nyde de livlige atmosfære og farverige markedsstande."
            }
        ]
    },
    {
        'sti': 'tilbud/cykel',
        'titel': 'Cykeltur',
        'langTitel': 'Cykeltur gennem Rwandas seje landskaber',
        'beskrivelse': 'Safaritur I Rwandas vilde natur',
        'billeder': [{ 'alt': 'safari', 'src': tilbud2 }]
    },
    {
        'sti': 'tilbud/tre-uger',
        'titel': 'Tre uger i Rwanda',
        'langTitel': 'Tre fede uger i Rwanda',
        'beskrivelse': 'Safaritur I Rwandas vilde natur',
        'billeder': [{ 'alt': 'safari', 'src': tilbud3 }]
    },
];

const tilbudDataEn: TilbudTyping[] = [
    {
        'sti': 'tilbud/lille-pakkerejse',
        'titel': 'Small travelpackage for Rwanda',
        'langTitel': 'Den lille pakkerejse til Rwanda',
        'beskrivelse': 'Safaritur I Rwandas vilde natur',
        'billeder': [{ 'alt': 'safari', 'src': tilbud1 }],
        "dagPlan": [
            {
                "overskrift": "Ankomst i Kigali",
                "beskrivelse": "Ved ankomsten til Kigali vil du blive mødt af vores venlige guide, som vil sørge for, at du bliver transporteret til dit hotel. Efter indkvartering kan du tage dig tid til at slappe af og nyde den smukke udsigt over byen."
            },
            {
                "overskrift": "Guidede bustur i Kigali",
                "beskrivelse": "Tag på en spændende guidet bustur gennem Kigali. Du vil få mulighed for at udforske byens vigtigste attraktioner, herunder de historiske steder og kulturelle landemærker, og få et indblik i Kigali's rige historie og kultur."
            },
            {
                "overskrift": "Safaritur ved Akagera nationalpark",
                "beskrivelse": "Oplev det vilde dyreliv i Akagera Nationalpark på en spændende safari. Du vil have mulighed for at se en række dyrearter, herunder løver, elefanter, giraffer og mange andre, mens du kører gennem parkens naturskønne landskaber."
            },
            {
                "overskrift": "Safaritur ved Akagera nationalpark",
                "beskrivelse": "Fortæt din safari-oplevelse i Akagera Nationalpark med endnu en dag fyldt med spændende dyreliv og naturskønne udsigter. Udforsk forskellige områder af parken og få en dybere forståelse af Rwandas biodiversitet."
            },
            {
                "overskrift": "Fazenda Sengha Recreational Center",
                "beskrivelse": "Tilbring en dag på Fazenda Sengha, et rekreativt center, hvor du kan nyde afslappende aktiviteter og smukke omgivelser. Her kan du tage en dukkert i poolen, nyde en lækker middag, eller bare slappe af i de naturskønne omgivelser."
            },
            {
                "overskrift": "Kigali Genocide Memorial",
                "beskrivelse": "Besøg Kigali Genocide Memorial for at lære om Rwandas historie og mindes de tragiske begivenheder i 1994. Dette monument tilbyder en dybdegående indsigt i den menneskelige kost og den efterfølgende genopbygning af nationen."
            },
            {
                "overskrift": "Besøg ved Kimironko Marked",
                "beskrivelse": "Udforsk Kimironko Marked, en livlig lokal markedsplads fyldt med farverige stande, der sælger alt fra frugt og grøntsager til håndværk og souvenirs. Det er et perfekt sted at opleve den lokale kultur og købe unikke varer."
            },
            {
                "overskrift": "Besøg ved Kivusøen",
                "beskrivelse": "Tag på en afslappende tur til Kivusøen, en af de største søer i Afrika. Her kan du nyde bådture, svømme i det krystalklare vand, eller blot nyde den smukke udsigt over søen og dens omgivelser."
            },
            {
                "overskrift": "Madlavningskursus",
                "beskrivelse": "Deltag i et madlavningskursus og lær at tilberede traditionelle rwandiske retter. Du vil få indsigt i lokale ingredienser og teknikker og have mulighed for at smage på dine egne kreationer."
            },
            {
                "overskrift": "Kigali City Markeder",
                "beskrivelse": "Afslut din rejse med en tur til Kigali's bymarkeder. Her kan du opleve det lokale liv, handle håndlavede produkter og souvenirs, og nyde de livlige atmosfære og farverige markedsstande."
            }
        ]
    },
    {
        'sti': 'tilbud/cykel',
        'titel': 'Cykeltur',
        'langTitel': 'Cykeltur gennem Rwandas seje landskaber',
        'beskrivelse': 'Safaritur I Rwandas vilde natur',
        'billeder': [{ 'alt': 'safari', 'src': tilbud2 }]
    },
    {
        'sti': 'tilbud/tre-uger',
        'titel': 'Tre uger i Rwanda',
        'langTitel': 'Tre fede uger i Rwanda',
        'beskrivelse': 'Safaritur I Rwandas vilde natur',
        'billeder': [{ 'alt': 'safari', 'src': tilbud3 }]
    },
];

export default function getOffers(lang: string): TilbudTyping[] {
    switch (lang) {
        case 'da':
            return tilbudDataDa;
        case 'en':
            return tilbudDataEn;
        default:
            return tilbudDataEn; // Default to English
    }
}
