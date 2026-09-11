# Software tecnico, programmi di calcolo e analisi dati avanzata.

Artik Lab sviluppa per conto dei clienti software avanzati quando il problema non si risolve con un cruscotto o con il software aziendale standard: calcoli tecnici, modelli matematici, dati operativi, regole esperte e flussi di lavoro da poter controllare con test.

## Quando il know-how aziendale è troppo importante per restare in fogli, codice legacy o nella testa di poche persone.

Molte aziende industriali lavorano ogni giorno con calcoli, eccezioni e decisioni tecniche che sono cresciute nel tempo. A volte vivono in fogli di calcolo fragili, a volte in software obsoleto, a volte in procedure note solo a chi le usa da anni. Il servizio trasforma questa conoscenza in sistemi leggibili, testabili e trasferibili.

## Sistemi per rendere ripetibile ciò che oggi dipende da esperienza, file e controlli manuali.

Il valore nasce dalla combinazione di ingegneria del software, analisi dati e formalizzazione della conoscenza esperta. Il risultato non è un prototipo dimostrativo, ma un sistema con criteri di accettazione, test, documentazione e confini chiari.

### Programmi di calcolo e verifica

Programmi di calcolo che, sugli stessi dati, danno sempre lo stesso risultato: controlli, scenari, simulazioni e verifiche ripetibili.

### Sistemi dati e analisi avanzata

Raccolta, normalizzazione e lettura dei dati operativi per individuare anomalie, pattern, priorità e rischi.

### Aggiornare un software tecnico che nessuno vuole più toccare

Audit del codice esistente, ricostruzione delle logiche, parser di formati storici e riscrittura progressiva.

### Interfacce, report e API

Strumenti utilizzabili da uffici tecnici e funzioni operative: dashboard decisionali, report, export e integrazioni.

## Dal processo tecnico a un sistema che si può testare e ripetere.

1. **Audit tecnico**: Si legge il sistema esistente: dati, formule, flussi, dipendenze, errori noti e rischio operativo.
2. **Mettere per iscritto regole, eccezioni e limiti**: Le regole esperte diventano entità, vincoli, assunzioni, casi limite e criteri decisionali.
3. **Separare il calcolo da schermate, report e AI**: Il nucleo di calcolo viene separato da interfacce, report e componenti AI, così resta controllabile.
4. **Un primo flusso completo: dati in ingresso, calcolo, controllo, risultato**: Si costruisce un flusso minimo completo: dati in ingresso, modello dati, calcolo, verifica e risultato.
5. **Validazione**: Test automatici, casi di prova, ripetizione dei test e confronto con risultati già noti misurano scarti e rischi.
6. **Produzione**: Il sistema viene reso usabile con interfacce, API, report, documentazione e responsabilità di manutenzione.

## Cosa resta all'azienda.

- Documento tecnico con struttura del sistema, rischi, dati, ipotesi e decisioni ancora aperte.
- Base di regole scritte, con vincoli, fonti e grado di certezza.
- Motore di calcolo, sistema dati o applicazione tecnica con test automatici.
- Dossier di verifica con discrepanze, tolleranze, criteri di accettazione e priorità di correzione.
- Report, interfacce o API per integrare il sistema nel lavoro reale.
- Roadmap a pacchetti progressivi, con output collaudabili e controlli tecnici.

## Problemi tipici che il servizio può affrontare.

### Documentazione tecnica fuori controllo

Un ufficio tecnico usa file complessi per prendere decisioni ricorrenti. Il rischio è che le formule non siano più verificabili e che ogni modifica richieda memoria storica. Il progetto ricostruisce le regole, le trasforma in modello dati e aggiunge test per evitare regressioni.

### Software tecnico che funziona ancora, ma nessuno può più modificarlo con sicurezza

Un'applicazione critica funziona ancora, ma dipende da tecnologie datate e da logiche non documentate. Il lavoro parte dall'audit, separa ciò che va preservato da ciò che va riprogettato e costruisce una riscrittura progressiva con confronto sui risultati.

### Dati industriali che non aiutano a prendere decisioni

Il processo produce dati, ma l'azienda li usa soprattutto per report retrospettivi. L'analisi cerca segnali utili per priorità operative, anomalie, previsioni e scelte di controllo, dichiarando anche quando il dato non basta.

### La conoscenza aziendale che non viene mai documentata

Alcune decisioni dipendono dall'esperienza di ruoli chiave. Il progetto rende esplicite regole, eccezioni e soglie di attenzione, così il sapere resta disponibile anche quando cambiano persone, strumenti o volumi di lavoro.

## Cinque casi reali

Che cosa è stato ottenuto.

### 1. Ufficio tecnico: Le regole di calcolo stanno nel codice e in una persona sola, non in un documento di specifiche.

Otto settimane di analisi su circa 267 file sorgente: 37 regole decisionali messe per iscritto e 18 criticità che l'azienda non sapeva di avere.

La situazione. Un'azienda progetta su commessa componenti il cui dimensionamento richiede verifiche normative. Da oltre vent'anni il lavoro passa da un software di calcolo scritto in casa, su una piattaforma di sviluppo non più supportata, con formati di file proprietari mai documentati. Il programma funziona, ma nessuno può più modificarlo con ragionevole sicurezza. E le specifiche non esistono: le regole vivono dentro il codice e nell'esperienza di un solo progettista.

Che cosa è stato fatto. I requisiti non sono stati raccolti, sono stati ricostruiti. Il lavoro legge in parallelo tre fonti — il codice sorgente, l'archivio dei progetti realmente eseguiti e le indicazioni dell'ufficio tecnico — e le fa collidere fra loro: ogni regola estratta dal codice viene riscontrata sui dati e riportata all'esperto, ogni indicazione dell'esperto viene verificata sul codice. Nessuna affermazione è accettata sulla fiducia, né quella dell'esperto né quella del codice; ciò che non è verificabile viene dichiarato tale invece di restare implicito.

Che cosa è cambiato. L'azienda ha smesso di dipendere da un sapere che esisteva in un posto solo. Ciò che era tacito è diventato un documento discutibile, e insieme alla mappa del sistema è uscito l'elenco delle incongruenze che nessuno aveva più modo di vedere, comprese divergenze fra ciò che il manuale prescrive e ciò che il programma esegue.

- Misurato sul progetto: Circa 267 file sorgente e dodici librerie mappati in otto settimane di analisi. 37 regole decisionali formalizzate: 13 vincoli rigidi, 19 euristiche di ottimizzazione, 5 regole diagnostiche.
- Che cosa è emerso: 18 criticità del software in uso, classificate per severità e ciascuna con una proposta di trattamento. A queste si aggiungono dodici limitazioni documentate e dieci requisiti per il sistema nuovo.
- Come continua: Un percorso a pacchetti collaudabili, in cui ogni tappa ha un criterio di accettazione numerico concordato prima di cominciare.
- Limite dichiarato: I numeri vengono da questo progetto: dicono che cosa ha prodotto il metodo lì, non che cosa produrrà altrove.

### 2. Istruttoria e back office: Le richieste arrivano per email. Il software aziendale non le segue.

Due documenti ufficiali già compilati con i dati controllati; nessuna comunicazione parte senza l'approvazione di una persona.

La situazione. Un'organizzazione riceve le richieste via email, in forma libera, scritte da persone diverse. Ogni pratica richiede dati precisi, alcuni verificabili solo incrociando più informazioni, e produce documenti ufficiali su modelli fissi. Il tempo qualificato se ne va nel trasporto dei dati: rileggere, chiedere il dato mancante, aspettare, ricopiare gli stessi campi in più documenti, sollecitare chi deve completare la sua parte. Il collo di bottiglia non è la decisione: è il trasporto.

Che cosa è stato fatto. Un assistente presidia la casella. Legge il messaggio, ne estrae i dati, li verifica contro le condizioni dell'organizzazione e risponde spiegando in italiano corrente quale dato manca e in che forma serve, invece di rispedire un modulo vuoto. Sopra di esso lavora un gestore che conosce il ciclo di vita della pratica: quante volte lo stesso dato è già stato chiesto, se chi deve completare la propria parte ha risposto nei giorni previsti, se il richiedente ha già una pratica aperta. Dopo un numero dichiarato di scambi infruttuosi la pratica si congela, invece di alimentare uno scambio infinito.

Che cosa è cambiato. Quando la pratica è completa, i documenti ufficiali escono già compilati sui modelli dell'organizzazione, con i campi popolati dai dati validati. Il tempo qualificato torna alla valutazione di merito, che è l'unica parte che richiedeva davvero una persona esperta.

- Misurato sul progetto: 135 test automatici verdi su modelli dati, motore di validazione, generazione documenti e gestione delle pratiche, fra cui sei percorsi completi dall'email al documento.
- Scelta di progetto: Zero invii automatici: ogni comunicazione in uscita passa dall'approvazione di un operatore. In un processo che produce atti, l'automazione si ferma un passo prima della firma.
- Limite dichiarato: Il tempo risparmiato non è ancora stato misurato prima e dopo su un ciclo completo. Il progetto dichiara che cosa il sistema fa, non di quanto accorcia la pratica.

### 3. Squadre sul territorio: Il piano settimanale delle squadre sul territorio si fa ancora a mano.

Il piano settimanale si calcola in pochi secondi e si rigenera quando un vincolo cambia. Di quanto faccia risparmiare non è ancora misurato, e non viene dichiarato.

La situazione. Quando un'azienda manda squadre presso i clienti, il programma settimanale nasce da decine di vincoli che si ostacolano: indirizzi sparsi su un territorio ampio, fasce orarie imposte dai clienti, priorità commerciali e scadenze di legge, durate che cambiano con il tipo di prestazione, equipaggi non intercambiabili. Fatto a mano il piano esce sempre percorribile ma mai efficiente, e manca il termine di paragone per accorgersene.

Che cosa è stato fatto. Il problema è formulato come problema di percorso con finestre temporali e risolto con un solutore di ottimizzazione. Un primo livello distribuisce gli interventi sui giorni, bilanciando la capienza degli equipaggi e collocando per primi quelli più onerosi. Un secondo risolve ogni giornata come percorso su più mezzi, con i tempi di percorrenza reali presi da un servizio stradale e le finestre orarie trattate come vincoli che non si possono violare.

Che cosa è cambiato. Il responsabile riceve un piano pronto all'uso: percorsi su mappa, calendario giornaliero per unità, chilometri, ore di guida e saturazione degli equipaggi. E lo stesso piano si rigenera in pochi secondi quando un vincolo cambia, che è la parte che serve da subito, quando qualcuno dà forfait.

- Come è stato provato: Su un archivio dimostrativo con nomi di fantasia — 35 sedi, 128 persone, due unità mobili — il piano settimanale completo esce in pochi secondi, contro le ore che il lavoro a mano richiede.
- Che cosa restituisce: A ogni esecuzione: chilometri totali, ore di guida e percentuale di saturazione per equipaggio. Sono i numeri che permettono di confrontare due piani, invece di fidarsi del primo.
- Limite dichiarato: Non esiste ancora un confronto misurato prima e dopo su un cliente reale. Finché non c'è, nessuna percentuale di risparmio viene dichiarata: sarebbe una stima presentata come misura.

### 4. Servizi al pubblico: Riconoscere gli articoli del catalogo da una foto, senza una campagna di fotografie classificate a mano.

Aprire una nuova sede significa caricare un file, non raccogliere e classificare a mano le fotografie di ogni articolo.

La situazione. Riconoscere da una foto gli articoli di un catalogo che cambia ogni giorno costa caro se ogni sede deve prima raccogliere e classificare a mano le fotografie. È ciò che rende proibitivi i tempi di attivazione delle soluzioni tradizionali in questo tipo di servizio.

Che cosa è stato fatto. L'approccio alternativo è descrivere il catalogo invece di mostrarlo. Le voci del giorno vengono caricate in forma dichiarativa — nome, categoria, descrizione estesa, ingredienti, quantità — e un modello multimodale generalista riconosce a partire da quelle descrizioni, non da un archivio di immagini etichettate. Il sistema gestisce anche le voci composte, con coefficienti di porzione, così che i valori restino corretti quando in una stessa scelta convivono mezze porzioni di prodotti diversi.

Che cosa è cambiato. Attivare una nuova sede significa caricare il suo catalogo. Non serve hardware dedicato: si usa lo smartphone della persona, senza totem né lettori. E il costo scala con il traffico, invece di essere il costo fisso di un presidio da tenere anche quando passano dieci persone.

- Come si controlla: Una suite di regressione su immagini reali, con la verità di riferimento dichiarata per ogni immagine: una modifica al modello o alle istruzioni si misura su un banco stabile, invece che a impressione.
- Previsto da specifica: Sette lingue sull'intera interfaccia e sui contenuti del catalogo. La localizzazione completa è pianificata, non ancora conclusa.
- Limite dichiarato: Il dato di accuratezza non è ancora dichiarabile: parte delle immagini recenti è priva di verità di riferimento ed è esclusa dai test. È il primo numero che chiunque valuti questa soluzione chiederà, e non viene stimato al posto di misurarlo.

### 5. Sicurezza e formazione: Formazione obbligatoria che scade senza che nessuno se ne accorga.

18 tipi di corso obbligatorio, ciascuno con la propria scadenza; per ogni persona quattro stati (valido, in scadenza, scaduto, mai svolto) e un preavviso che si può regolare.

La situazione. Chi risponde della formazione obbligatoria di decine o centinaia di persone tiene lo stato su fogli di calcolo che invecchiano a ogni assunzione e a ogni cambio di mansione. Il rischio non è teorico: è accorgersi di una scadenza superata durante un'ispezione, con quello che comporta in materia di sicurezza sul lavoro.

Che cosa è stato fatto. Il problema non è calcolare una data. È tenere insieme anagrafiche, storico dei corsi e regole di periodicità diverse per ruolo e per attività, e calcolare per ogni persona e per ogni obbligo uno stato fra quattro: valido, in scadenza entro la soglia, scaduto, mai svolto. Da lì escono la matrice formativa leggibile a colpo d'occhio, i solleciti in registro formale e il report periodico.

Che cosa è cambiato. Quando la matrice esiste, il lavoro diventa programmare i corsi invece di ricostruire lo stato. I dati personali restano sul server dell'organizzazione: nessun invio a servizi esterni, ottenuto come vincolo di architettura e non come dichiarazione di intenti.

- Misurato sul progetto: 18 tipologie di corso obbligatorio modellate, con periodicità da uno a cinque anni e alcune una tantum. Quattro stati calcolati per ogni combinazione fra persona e obbligo, con preavviso predefinito a 90 giorni e configurabile per cliente.
- Come è stato provato: Su un archivio dimostrativo con nomi di fantasia: otto aziende, circa 175 persone e oltre 700 record formativi, con una distribuzione realistica degli stati.
- Limite dichiarato: Il calcolo segue regole fisse e, sugli stessi dati, dà sempre lo stesso risultato, e va bene così: in una regola di periodicità non c'è nulla da affidare a un modello. L'AI serve un passo prima, per portare dentro dati che oggi arrivano disordinati, e un passo dopo, per accorgersi che una regola è cambiata.

## Prima di scegliere consulenza, corso o software, riconoscere il processo.

L'Atlante raccoglie esempi concreti di applicazioni AI per documenti, operations, HR, marketing, software, governance, produzione, formazione e dati. Serve a capire se il bisogno richiede consulenza, analisi dati, sviluppo tecnico o formazione.

Pagina Atlante: https://ar-tik.com/atlante-applicazioni-ai-imprese.md

## L'AI aiuta, ma il calcolo che decide deve restare spiegabile.

Nei sistemi tecnici la parte che non si può spiegare non deve prendere il posto del calcolo controllabile con test. L'AI può aiutare a esplorare dati, spiegare risultati, proporre scenari, leggere documenti o assistere chi usa il sistema. Il calcolo ripetibile, le regole dell'azienda e i test restano il punto di controllo.

## Dove passa il confine: il calcolo resta ripetibile, l'AI lavora sopra.

Cinque progetti diversi, la stessa scelta: ciò che decide è un calcolo ripetibile e controllabile con test, l'AI lavora sopra. Ogni scheda dice dove passa il confine e come lo si controlla.

### 1. Ufficio tecnico: Il software calcola, ma le decisioni le prende una persona sola

Le scelte di chi ha vent'anni di mestiere diventano regole scritte nel programma di calcolo; i controlli di norma restano un calcolo ripetibile.

In molti uffici tecnici il programma esegue le verifiche, mentre le scelte che portano a una soluzione efficiente restano di chi ha vent'anni di mestiere: da dove partire, come correggere quando le verifiche non tornano, quando una soluzione formalmente corretta non è ragionevole.

Il progetto trasforma queste decisioni in vincoli, euristiche e regole diagnostiche esplicite, che diventano parametri del motore di calcolo. Sopra il nucleo lavorano agenti specializzati, istruiti sui casi storici e sulle soluzioni davvero adottate: uno propone la configurazione di partenza per un problema nuovo, uno sceglie la strategia correttiva quando l'ottimizzazione non converge, uno confronta il risultato con i casi analoghi e segnala quando è matematicamente corretto ma atipico.

I due piani restano separati. Le verifiche normative sono deterministiche e riproducibili, l'AI lavora sopra il calcolo e non dentro, e l'esperto resta nel ciclo a validare, correggere e arricchire.

- Come si controlla: 695 test automatici sul motore, eseguiti a ogni integrazione. Il motore ricostruito riproduce 58 casi di verifica su 63 alla cifra stampata, e 44 archivi storici su 44 vengono riletti senza eccezioni da decodificatori scritti senza avere la documentazione dei formati.
- Che cosa manca, dichiarato: La base dei fatti raggiunge il 98,8% di completezza — 399 voci su 404 — e le 5 che restano sono dichiarate e motivate invece che omesse.
- Verifica indipendente: Otto campagne condotte da agenti incaricati di confutare il lavoro fatto. Le confutazioni trovate sono state riparate prima della consegna, non archiviate.

### 2. Istruttoria e back office: L'intelligenza artificiale scrive la bozza, le regole dell'azienda decidono l'esito.

Le condizioni per accettare o rifiutare una pratica stanno in un file che l'ufficio modifica senza toccare il codice. L'intelligenza artificiale prepara i dati e comunica l'esito, non lo stabilisce.

Su un processo che produce documenti ufficiali, il testo può essere scritto dall'intelligenza artificiale; se la pratica è accettata o no lo decidono le regole, non il modello.

Le condizioni per accettare o rifiutare una pratica stanno in un file di configurazione leggibile che l'ufficio tecnico aggiorna da sé quando una regola cambia, senza passare dallo sviluppo. L'intelligenza artificiale legge le email, estrae i dati e compone la risposta; il programma di calcolo decide l'esito e lo motiva.

E l'invio resta un gesto umano: la bozza è pronta, la firma è di chi risponde.

- Come si controlla: 135 test automatici verdi, fra cui sei percorsi completi dall'email al documento generato.
- Dove passa il confine: Il 100% delle comunicazioni in uscita passa dall'approvazione di un operatore. Nessun invio automatico, per scelta di progetto e non per limite tecnico.

### 3. Squadre sul territorio: Il piano delle squadre elenca anche gli interventi che non si riescono a inserire, e perché.

Il programma può lasciare fuori un intervento, e lo dichiara con un costo legato alla priorità, invece di produrre un piano che sulla carta sta in piedi e in strada no.

Il valore non è solo il percorso più corto: è sapere che cosa resta fuori e perché.

Invece di forzare un programma infattibile, il programma può lasciare fuori un intervento e lo dichiara con un costo legato alla priorità. Quello che il responsabile riceve è un piano eseguibile più l'elenco motivato di ciò che non era pianificabile — capacità insufficiente, finestra oraria incompatibile — invece di interventi che spariscono in silenzio.

Anche il tempo di calcolo è dichiarato in partenza: è un parametro di progetto, non un effetto collaterale di quanto è grande il problema.

- Come si controlla: Gli indicatori restituiti a ogni esecuzione — chilometri, ore di guida, saturazione per equipaggio — rendono confrontabili due piani diversi, che è l'unico modo per sapere se il secondo è migliore del primo.
- Limite dichiarato: Nessun confronto misurato prima e dopo su un cliente reale, quindi nessuna percentuale di risparmio dichiarata.

### 4. Servizi al pubblico: Quando il riconoscimento da foto sbaglia, la correzione è già prevista e limitata.

La correzione offerta alla persona mostra solo alternative visivamente simili, e non i prezzi.

Un sistema di riconoscimento in mano al pubblico si giudica da come tratta i casi in cui sbaglia.

Qui la qualità dell'immagine viene valutata prima dell'invio, e viene chiesto di rifarla quando è sfocata o incompleta. Dopo il riconoscimento la persona conferma o corregge, ma la correzione è progettata per non diventare una scappatoia: l'elenco delle alternative contiene solo voci visivamente simili, e i prezzi non sono visibili.

L'onere della verifica si sposta sull'utente senza aprire la porta all'abuso, ed è questa scelta, più del modello, a determinare se il sistema regge in esercizio.

- Come si controlla: Una suite di regressione su immagini reali con verità di riferimento dichiarata: le modifiche al modello o alle istruzioni si misurano su un banco stabile.
- Limite dichiarato: L'accuratezza non è ancora un numero dichiarabile, perché parte del banco è priva di verità di riferimento. Viene detto, invece di essere stimato.

### 5. Analisi e report: I numeri li calcola il codice, la narrativa la scrive l'AI

Nessun numero del report nasce da un modello: le grandezze sono calcolate da un programma che, sugli stessi dati fermi, dà sempre lo stesso risultato.

Nei report la separazione è netta. Le grandezze sono calcolate da un programma che, sugli stessi dati fermi, dà sempre lo stesso risultato, con test che le riproducono identiche a ogni esecuzione; il testo è scritto ancorato a quei numeri e alle citazioni reali.

Il documento finito viene poi riletto da personas sintetiche con una soglia di qualità dichiarata, sotto la quale non si consegna.

E quando la metrica ovvia non discrimina — categorie dove tutte le attività stanno sopra 4,8 stelle — il report lo dice, invece di costruirci sopra un verdetto.

- Come si controlla: Una rete di test riproduce i report già consegnati byte per byte: una modifica al codice che alteri un numero già consegnato non passa.
- Come è scritto ogni numero: Ogni numero porta il proprio denominatore e la propria fonte. Le affermazioni che non trovano riscontro nel corpus vengono corrette, anche quando erano già circolate.

## Segnali che indicano che è il momento di intervenire.

- Calcoli importanti dipendono da fogli non documentati o difficili da verificare.
- Un software tecnico funziona ancora, ma nessuno vuole più modificarlo.
- I dati operativi esistono, ma non guidano ancora priorità, anomalie o previsioni.
- Le decisioni tecniche dipendono da poche persone esperte e non da un sistema condiviso.
- La direzione deve investire, ma non ha un dossier tecnico chiaro su rischio, valore e fattibilità.

## Domande frequenti

### È un servizio di sviluppo software generico?

No. È pensato per problemi in cui servono dominio tecnico, dati, matematica, algoritmi, test e criteri di verifica.

### Serve avere già specifiche complete?

No. Spesso il primo lavoro è proprio ricostruire specifiche, regole, assunzioni e casi limite dal sistema esistente e dalle persone esperte.

### L'AI decide al posto dei tecnici?

No. Nei contesti tecnici l'AI viene usata come supporto. Le parti critiche restano spiegabili, testate e sottoposte a responsabilità umana.

### Come viene protetto il know-how?

Il progetto lavora con perimetri, accessi, dati e materiali concordati. Negli esempi pubblici vengono usate solo descrizioni anonimizzate e non riconducibili al cliente.
