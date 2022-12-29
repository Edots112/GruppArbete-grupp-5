# GruppArbete-grupp-5
 Group 5 Kristmundsson, Nicolai  Karlsson, Fredrik  Husebye, Anton  Mårtensson, Daniel  Farah Mahamud, Zakariya  Strahle, Erik

Hej Janne,
Något att tänka på när du granskar vårt arbete.

1. För att komma till inloggningen för själva bostadsrättsföreningen behöver du scrolla ner på startsidan (index.html) och hitta bilden på "Lågan" som du sedan klickar på. 
 
2. För att logga in kan du använda admin/admin, alternativt följande exempel:
    "username":"jgribbon0",
    "password":"TIVR6NcES5",
    - Har också admin-behörighet
    
    "username":"jgribbon0",
    "password":"TIVR6NcES5",
    - Har inte admin-behörighet
    
    "username":"bwhall2",
    "password":"2ES8DJ9S7D"
    - Har inte admin-behörighet
    
Det finns fler användare i residents.JSON-filen. Vi har tänkt att varje boende tilldelas inloggningsuppgifter när de flyttar in och att det baseras på deras lägenhetsnummer. Som du ser i filen anges de under apartment. Därav kan man inte skapa egna användare. Observera att endast de två översta i filen har admin-behörighet, men det kan du ju naturligtvis ändra om du vill. 

3. I dagsläget fungerar det tyvärr inte att sammanställa röstningen. 
4. Vi skulle även vilja lägga till en funktion som tar bort möjligheten att rösta mer än en gång i ett val, men det kommer vi inte göra.

Nyår!
