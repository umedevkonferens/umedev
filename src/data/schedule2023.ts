import { Schedule } from "@/model/Schedule";

export const schedule2023: Schedule = {
  openingKeynote: {
    title: "Opening keynote: Nya analyser möjliga med fjärranalys och AI",
    description: "Fjärranalys används för att på ett effektivt sätt kartlägga och observera det som sker på jorden med hjälp av data som samlats in från ovan. Med nya satelliter och nationella laserskanningar öppnar sig nya möjligheter att studera och övervaka natur och miljö från ovan. Detta har drivit en våg av innovativa tilltag, särskilt kopplat till skogssektorn. Nu testas också greppet att ta till AI för att i högre grad nyttja de stora datamängderna för att ta fram helt nya eller förbättrade analyser.",
    speakers: [
      {
        name: "Johanna Skarpman Sundholm",
        company: "Metria",
        title: "Data Scientist",
        about: "Johanna Skarpman Sundholm började jobba med data science på Metria 2018. Hon läste teknisk fysik på KTH med masterprogrammet inom maskininlärning. Efter examen flyttade hon till Luleå och jobbade några år som algoritmutvecklare på en start-up i Luleå Science Park innan hon hamnade på Metria. Skarpman Sundholm har ena benet i Metrias GIS och fjärranalyskonsultverksamhet och det andra i företagets karttjänstutveckling."
      }
    ]
  },
  closingKeynote: {
    title: "Ending Keynote: Att vara superhjälte när superskurkarna använder kod!",
    description: "Olika typer av elakartad kod i olika komplexa arkitekturer används i en allt större utsträckning vid attacker över hela internet och världen. Ungdomar kan köpa virus och verktyg med virtuella valutor i dataspel för att automatisera attacker och använda mot sina motspelare, och regeringsfinansierade aktörer nyttjar mjukvara för att påverka infrastruktur vid förberedelser inför militära åtgärder och invasioner. Den här presentationen kommer att ge en introduktion till hur mjukvara och kod nyttjas, men också ge några rekommendationer hur vi kan skydda oss mot liknande kampanjer.",
    speakers: [
      {
        name: "Johan Lindfors",
        company: "Truesec",
        title: "CINO",
        about: "Johan Lindfors har jobbat med Microsofts ekosystem sedan 1998 och är en återkommande talare vid olika evenemang, oftast med fokus på programmering och säkerhet. Under 2011 grundade han företaget Coderox som fokuserade uteslutande på Microsofts plattform med olika tekniker, allt från XAML och C# till C++ och DirectX. Innan dess jobbade han på Microsoft och sedan 2021 är han anställd på Truesec där han leder ett affärsområde med konsulter som jobbar med och utbildar i säker utveckling."
      }
    ]
  },
  slots: [
    {
      time: "08.30 - 08.45",
      bookings: [
        {
          title: "Inledning",
          speakers: [{
            name: "Jenny Odeblom",
            company: "Umedev"
          }],
          room: "Samtliga Spår"
        }
      ]
    },
    {
      time: "08.45 - 09.30",
      bookings: [
        {
          title: "Opening Keynote: Nya analyser möjliga med fjärranalys och AI",
          description: "Fjärranalys används för att på ett effektivt sätt kartlägga och observera det som sker på jorden med hjälp av data som samlats in från ovan. Med nya satelliter och nationella laserskanningar öppnar sig nya möjligheter att studera och övervaka natur och miljö från ovan. Detta har drivit en våg av innovativa tilltag, särskilt kopplat till skogssektorn. Nu testas också greppet att ta till AI för att i högre grad nyttja de stora datamängderna för att ta fram helt nya eller förbättrade analyser.",
          speakers: [{
            name: "Johanna Skarpman Sundholm",
            company: "Metria"
          }],
          room: "Samtliga spår"
        }
      ]
    },
    {
      time: "09.30 - 10.00",
      bookings: [
        {
          title: "Fika",
          room: ""
        }
      ]
    },
    {
      time: "10.00 - 10.40",
      bookings: [
        {
          title: "Intro till Actor-baserad utveckling med Project Orleans",
          description: "I den här presentationen så tittar vi på vad det menas med att utveckla med en actor-baserad modell. Och framförallt på hur vi gör detta rent praktiskt med Project Orleans",
          speakers: [
            {
              name: "Chris Klug",
              company: "Active Solution"
            }
          ],
          room: "Spår 1"
        },
        {
          title: "Säkerheten genom historien",
          description: "Detta pass kommer gå igenom hur man sett på säkerhet och teknik genom historien. Vilka säkerhetsaspekter användes förr och hur har dessa utvecklats över åren? Detta pass är för den som älskar historia, säkerhet och teknik. Inga förkunskapskrav krävs, kom och luta dig tillbaka för en resa genom vår teknologiska historia.",
          speakers: [{
            name: "Emilia Modig",
            company: "Omegapoint"
          }],
          room: "Spår 2"
        },
        {
          title: "Design systems - Less decisions, more time",
          description: "In this talk we will explain how design systems help you free time, to focus on solving real problems. One key element in a successful design system is bridging the gap between design and code. Coming from both a design and tech background, we will share our insights on this.",
          speakers: [
            {
              name: "Joakim Olsson",
              company: "Daresay by Knightec"
            },
            {
              name: "Anna Viklund",
              company: "Daresay by Knightec"
            }
          ],
          room: "Spår 3"
        },
      ]
    },
    {
      time: "10.50 - 11.30",
      bookings: [
        {
          title: "10 sätt att misslyckas med Kubernetes",
          description: "Kubernetes har tagit IT-världen med storm senaste åren och används i produktion av 64% av organisationerna i en nylig studie från Linux Foundation. Vanliga motiv att börja använda Kubernetes är skalbarhet, förenklad releasehantering, och ökad produktivitet för utvecklare. I kontrast till detta har Johan på nära håll följt ett flertal misslyckade införandeprojekt där effekterna helt uteblir. Detta talk diskuterar dessa erfarenheter och fokuserar på förutsättningarna för att lyckas med Kubernetes. \n\nSpoiler: Kubernetes är egentligen en PaaS. Det finns ingen gratislunch utan applikationsutvecklare behöver göra en (hel) del jobb, det är bara inte alltid tydligt vad. ",
          speakers: [
            {
              name: "Johan Tordsson",
              company: "Elastisys"
            }
          ],
          room: "Spår 1"
        },
        {
          title: "HARA, TARA vänta bara - Utveckling av säkra maskinstyrsystem",
          description: "Vi tar ofta för givet att maskiner i vår omgivning är säkra för såväl operatören som för förbipasserande, men vad innebär det egentligen och hur utvecklas dessa maskiner så att de blir säkra? Här går vi igenom översiktligt hur projekt inom maskinsäkerhet kan se ut.",
          speakers: [
            {
              name: "Claes Gahlin",
              company: "Ålö AB"
            }
          ],
          room: "Spår 2"
        },
        {
          title: "Feedback loops and how to refine them",
          description: "Short Feedback loops and limiting context switching is one of the most important cornerstones in developer efficiency and developer experience. This talk will show were you can find improvements and tools to use.",
          speakers: [
            {
              name: "Mikael Svensson",
              company: "Nasdaq Umeå"
            }
          ],
          room: "Spår 3"
        }
      ]
    },
    {
      time: "11.40 - 12.50",
      bookings: [
        {
          title: "Lunch",
          room: ""
        }
      ]
    },
    {
      time: "12.50 - 13.30",
      bookings: [
        {
          title: "Low latency video over public internet",
          description: "Att sända live-video över välfungerande nätverk är enkelt. Den här föreläsningen går igenom de problem och lösningar som krävs för att sända live-video när det är allt annat än enkelt. En lösning som ska göra det bästa av situationen oavsett om du har 3G/4G/5G, Wi-Fi, KA-SAT, Starlink, fiber eller något annat.",
          speakers: [
            {
              name: "Anders Martinsson",
              company: "Intinor"
            }
          ],
          room: "Spår 1"
        },
        {
          title: "Agil säkerhet",
          description: "Säkerhet blir alltför ofta bortglömt i vår agila värld, där fokus ligger på effektivitet och snabba leveranser. Detta trots att säkerhet är en avgörande faktor för framgångsrik mjukvaruutveckling.\n\nFrån början till slut och alla steg däremellan, kommer vi att se på helhetsbilden av vilken typ av säkerhetsåtgärder som passar var, samt ge konkreta exempel som du kan ta med dig och börja implementera direkt.",
          speakers: [
            {
              name: "Cecilia Wirén",
              company: "Active Solution"
            }
          ],
          room: "Spår 2"
        },
        {
          title: "Hack the Accessibility Crisis",
          description: "Trots lagkrav och riktlinjer så är fortfarande stora delar av webben otillgänglig för användare med funktionsnedsättningar och funktionsvariationer. \n\nPå detta pass kommer jag live-testa en sidas tillgänglighet, visa vilka verktyg jag använder för att identifiera olika tillgänglighetsbuggar, samt rätta till det jag hittar i koden. ",
          speakers: [
            {
              name: "Andrea Berglund",
              company: "Omegapoint"
            }
          ],
          room: "Spår 3"
        },
      ]
    },
    {
      time: "13.40 - 14.00",
      bookings: [
        {
          title: "I, ChatGPT. En kort överblick.",
          description: "För dig som är intresserad men inte expert på AI, neurala nät eller machine learning. OpenAI:s ChatGPT är en av många large language models (LLM) som slagit världen med häpnad på väldigt kort tid. Vid första anblicken är det lätt att tro att ChatGPT ger dig fakta, men det visar sig snart inte stämma. ChatGPT är kreativ till den grad att vissa kallar den hallucinogen. Vi kommer att titta på vad en LLM är, vad ChatGPT kan göra bra, dåligt, och vad du kan få den att göra trots dess inbyggda spärrar.",
          speakers: [
            {
              name: "Jonas Andersson",
              company: "Algoryx"
            }
          ],
          room: "Spår 1"
        },
        {
          title: "Huruvida du ska, eller inte ska, använda kö:er i din arkitektur",
          description: "Meddelandeköer används av många företag över hela världen för att underlätta smidig, enkel skalning under tillväxt eller som ett sätt för applikationsmikrotjänster att kommunicera. Detta föredrag ger en översikt över hur en kö passar in i en arkitektur ur RabbitMQs perspektiv.",
          speakers: [
            {
              name: "Lovisa Johansson",
              company: "CloudAMQP by 84codes"
            }
          ],
          room: "Spår 2"
        },
        {
          title: "Vanliga Myter om Scrum",
          description: "Scrum är det mest kända agila ramverket och många organisationer använder sig av det i sin produktutveckling. Men det cirkulerar också många myter och felaktigheter om Scrum. Vi kommer att gå igenom några av dessa och försöka förklara var de kommer från.",
          speakers: [
            {
              name: "Rikard Skelander",
              company: "Trygg-Hansa"
            }
          ],
          room: "Spår 3"
        },
      ]
    },
    {
      time: "14.00 - 14.30",
      bookings: [
        {
          title: "Fika",
          room: ""
        }
      ]
    },
    {
      time: "14.30 - 15.10",
      bookings: [
        {
          title: "The Developers Guide to Awesome Code: 5 questions that will boost your career",
          description: "Om du är som mig, gillar du att jobba med kod och projekt med hög kvalité. Utvecklare som du berättar för mig att även fast de föredrar att fokusera på kodkvalité, är inte alltid företaget eller kollegorna intresserade. Känner du igen dig? Denna presentation ger dig verktyg som är enkla att använda för att förbättra denna situation, förbättra kvalitén på din kod och ditt projekt, även om ditt team inte är intresserade. Under denna presentation kommer du att (1) lära dig 5 frågor som är enkla att använda och som kommer hjälpa dig i din karriär (2) få en förståelse för varför personer runt dig inte gör det som är bäst för dem eller deras karriär och (3) införa en process som hjälper dig och ditt team förbättra kodkvalitén på ert projekt NU!",
          speakers: [
            {
              name: "Markus Westergren",
              company: "Umecon AB"
            }
          ],
          room: "Spår 1"
        },
        {
          title: "Från vilda gissningar till mätbara leveranser",
          description: "Visst är vi alla måna om att det vi lägger 8 timmar på per dag ska generera värde?\n\nVälkommen till panelsamtal med tips o trix på hur vi tar oss från den vilda gissningen till en värdefull leverans. \n\nMed i panelen sitter Mia Petersson, Andrea Berglund, Paul Alvarado Mendoza och Tea Berglund som alla jobbar med design i olika kontexter idag.",
          speakers: [
            {
              name: "Mia Petersson",
              company: "Umecon"
            },
            {
              name: "Paul Alvarado Mendoza",
              company: "Sartorius"
            },
            {
              name: "Andrea Berglund",
              company: "Omegapoint"
            },
            {
              name: "Tea Berglund",
              company: "VK media"
            }
          ],
          room: "Spår 2"
        },
        {
          title: "Terapi-kaffe-samtal med en smula sammanbrott?",
          description: "Du känner säkert igen dig i den gnagande känslan av att något inte stämmer efter en lång planeringsdag. Urban är agilcoach och Adam är systemutvecklare, dom ska tillsammans gräva i de saker som vi suckar åt i våra arbetssätt. \n\nSe det lite som en fina mellan en agilcoach och en utvecklare efter en utpumpande planering.",
          speakers: [
            {
              name: "Adam Sernheim",
              company: "Kvadrat AB"
            },
            {
              name: "Urban Sandström",
              company: "Kvadrat AB"
            }
          ],
          room: "Spår 3"
        },

      ]
    },
    {
      time: "15.20 - 16.05",
      bookings: [
        {
          title: "Ending Keynote: Att vara superhjälte när superskurkarna använder kod!",
          description: "Olika typer av elakartad kod i olika komplexa arkitekturer används i en allt större utsträckning vid attacker över hela internet och världen. Ungdomar kan köpa virus och verktyg med virtuella valutor i dataspel för att automatisera attacker och använda mot sina motspelare, och regeringsfinansierade aktörer nyttjar mjukvara för att påverka infrastruktur vid förberedelser inför militära åtgärder och invasioner. Den här presentationen kommer att ge en introduktion till hur mjukvara och kod nyttjas, men också ge några rekommendationer hur vi kan skydda oss mot liknande kampanjer.",
          speakers: [
            {
              name: "Johan Lindfors",
              company: "Truesec"
            }
          ],
          room: "Samtliga spår"
        },
      ]
    },
    {
      time: "16.05 - 16.20",
      bookings: [
        {
          title: "Avslutning",
          room: "Samtliga spår",
          speakers: []
        }
      ]
    }
  ]
}