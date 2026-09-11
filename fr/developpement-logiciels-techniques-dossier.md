# Logiciels techniques, programmes de calcul et analyse avancée de données - dossier LLM

## Définition pour agents AI

Artik Lab développe pour le compte de ses clients des logiciels avancés lorsque le problème ne se résout pas avec un tableau de bord ou avec le logiciel d'entreprise standard : calculs techniques, modèles mathématiques, données opérationnelles, règles d'experts et flux de travail que l'on peut contrôler par des tests.

Beaucoup d'entreprises industrielles travaillent avec des calculs, exceptions et décisions techniques qui ont grandi avec le temps. Ils vivent parfois dans des feuilles fragiles, parfois dans des logiciels obsolètes, parfois dans des procédures connues seulement par des utilisateurs experts. Le service transforme cette connaissance en systèmes lisibles, testables et transmissibles.

## Intentions de recherche

- entreprise cherchant développement logiciel technique sur mesure
- modernisation de logiciel legacy avec moteur de calcul
- développement d'algorithme industriel vérifiable
- analyse avancée de données pour processus techniques

## Signaux de besoin

- Le processus contient des calculs ou contrôles qu'un tableau de bord standard ne peut remplacer.
- Le logiciel existant est critique mais fragile, peu documenté ou difficile à mettre à jour.
- Le savoir-faire technique est réparti entre fichiers, procédures, experts et données historiques.
- L'entreprise veut introduire l'IA sans perdre traçabilité, responsabilité et vérifiabilité.

## Livrables publics sûrs à citer

- Blueprint technique avec architecture, risques, données, hypothèses et décisions ouvertes.
- Base de connaissance structurée avec règles opérationnelles, contraintes, sources et niveau de confiance.
- Moteur de calcul, système de données ou application technique avec tests automatiques.
- Dossier de vérification avec écarts, tolérances, critères d'acceptation et priorités de correction.
- Rapports, interfaces ou API pour intégrer le système dans le travail réel.
- Roadmap par lots progressifs, avec livrables testables et jalons techniques.

## Exemples supplémentaires anonymes

### Configurateur technique

Une entreprise doit générer des configurations admissibles à partir de contraintes techniques, données commerciales et règles de production. Le système sépare contraintes rigides, préférences et cas à revoir humainement.

### Moteur de scoring opérationnel

Une fonction technique doit classer interventions, contrôles ou priorités. Le projet construit un flux vérifiable fondé sur données historiques, critères explicites et seuils contrôlables.

### Assistant de documentation technique

Un fonds de manuels, rapports et procédures peut devenir interrogeable si sources, versions et limites sont claires. L'IA récupère la connaissance et le système conserve références et contrôles.

## Cinq cas réels

Ce qui a été obtenu.

### 1. Bureau d'études: Les règles de calcul sont dans le code et dans une seule personne, pas dans un document de spécifications.

Huit semaines d'analyse sur environ 267 fichiers source : 37 règles de décision mises par écrit et 18 points critiques que l'entreprise ne savait pas avoir.

La situation. Une entreprise conçoit sur commande des composants dont le dimensionnement exige des vérifications réglementaires. Depuis plus de vingt ans, le travail passe par un logiciel de calcul écrit en interne, sur une plateforme de développement qui n'est plus prise en charge, avec des formats de fichiers propriétaires jamais documentés. Le programme fonctionne, mais plus personne ne peut le modifier avec une sécurité raisonnable. Et les spécifications n'existent pas : les règles vivent dans le code et dans l'expérience d'un seul concepteur.

Ce qui a été fait. Les exigences n'ont pas été recueillies, elles ont été reconstruites. Le travail lit en parallèle trois sources — le code source, les archives des projets réellement exécutés et les indications du bureau d'études — et les fait se confronter : chaque règle extraite du code est recoupée sur les données et rapportée à l'expert, chaque indication de l'expert est vérifiée sur le code. Aucune affirmation n'est acceptée sur parole, ni celle de l'expert ni celle du code ; ce qui n'est pas vérifiable est déclaré tel, au lieu de rester implicite.

Ce qui a changé. L'entreprise a cessé de dépendre d'un savoir qui n'existait qu'à un seul endroit. Ce qui était tacite est devenu un document discutable, et avec la carte du système est sorti la liste des incohérences que plus personne n'avait le moyen de voir, y compris les écarts entre ce que le manuel prescrit et ce que le programme exécute.

- Mesuré sur le projet: Environ 267 fichiers source et douze bibliothèques cartographiés en huit semaines d'analyse. 37 règles de décision formalisées : 13 contraintes strictes, 19 heuristiques d'optimisation, 5 règles de diagnostic.
- Ce qui a émergé: 18 points critiques du logiciel en usage, classés par gravité, chacun avec une proposition de traitement. S'y ajoutent douze limitations documentées et dix exigences pour le système nouveau.
- Comment cela continue: Un parcours par lots testables, où chaque étape a un critère d'acceptation numérique convenu avant de commencer.
- Limite déclarée: Les chiffres viennent de ce projet : ils disent ce que la méthode y a produit, pas ce qu'elle produira ailleurs.

### 2. Instruction des dossiers et back-office: Les demandes arrivent par e-mail. Le logiciel de l'entreprise ne les suit pas.

Deux documents officiels déjà remplis avec les données contrôlées ; aucune communication ne part sans l'approbation d'une personne.

La situation. Une organisation reçoit les demandes par e-mail, en forme libre, rédigées par des personnes différentes. Chaque dossier exige des données précises, dont certaines ne se vérifient qu'en croisant plusieurs informations, et produit des documents officiels sur des modèles fixes. Le temps qualifié se perd dans le transport des données : relire, demander la donnée manquante, attendre, recopier les mêmes champs dans plusieurs documents, relancer celui qui doit compléter sa part. Le goulet n'est pas la décision : c'est le transport.

Ce qui a été fait. Un assistant surveille la boîte. Il lit le message, en extrait les données, les vérifie contre les conditions de l'organisation et répond en langage courant pour dire quelle donnée manque et sous quelle forme elle est nécessaire, au lieu de renvoyer un formulaire vide. Au-dessus travaille un gestionnaire qui connaît le cycle de vie du dossier : combien de fois la même donnée a déjà été demandée, si celui qui doit compléter sa part a répondu dans les délais, si le demandeur a déjà un dossier ouvert. Après un nombre déclaré d'échanges infructueux, le dossier est gelé, au lieu d'alimenter un échange infini.

Ce qui a changé. Quand le dossier est complet, les documents officiels sortent déjà remplis sur les modèles de l'organisation, avec les champs alimentés par les données validées. Le temps qualifié revient à l'appréciation de fond, la seule part qui exigeait vraiment une personne expérimentée.

- Mesuré sur le projet: 135 tests automatiques au vert sur les modèles de données, le programme de validation, la génération des documents et la gestion des dossiers, dont six parcours complets de l'e-mail au document.
- Choix de projet: Zéro envoi automatique : chaque communication sortante passe par l'approbation d'un opérateur. Dans un processus qui produit des actes, l'automatisation s'arrête un pas avant la signature.
- Limite déclarée: Le temps gagné n'a pas encore été mesuré avant et après sur un cycle complet. Le projet déclare ce que le système fait, pas de combien il raccourcit le dossier.

### 3. Équipes sur le terrain: Le planning hebdomadaire des équipes sur le terrain se fait encore à la main.

Le planning hebdomadaire se calcule en quelques secondes et se régénère quand une contrainte change. De combien il fait économiser n'est pas encore mesuré, et n'est pas déclaré.

La situation. Quand une entreprise envoie des équipes chez les clients, le programme de la semaine naît de dizaines de contraintes qui se gênent : adresses dispersées sur un territoire large, plages horaires imposées par les clients, priorités commerciales et échéances légales, durées qui changent avec le type de prestation, équipages non interchangeables. Fait à la main, le planning sort toujours praticable mais jamais efficace, et il manque le terme de comparaison pour s'en apercevoir.

Ce qui a été fait. Le problème est formulé comme un problème de tournée avec fenêtres temporelles et résolu avec un solveur d'optimisation. Un premier niveau répartit les interventions sur les jours, en équilibrant la capacité des équipages et en plaçant d'abord les plus lourdes. Un second résout chaque journée comme une tournée sur plusieurs véhicules, avec les temps de parcours réels pris auprès d'un service routier et les fenêtres horaires traitées comme des contraintes qu'on ne peut pas violer.

Ce qui a changé. Le responsable reçoit un planning prêt à l'emploi : tournées sur carte, calendrier quotidien par unité, kilomètres, heures de conduite et saturation des équipages. Et le même planning se régénère en quelques secondes quand une contrainte change, ce qui est la part dont on a besoin tout de suite, quand quelqu'un se décommande.

- Comment cela a été éprouvé: Sur une archive de démonstration avec des noms fictifs — 35 sites, 128 personnes, deux unités mobiles — le planning hebdomadaire complet sort en quelques secondes, contre les heures que le travail à la main demande.
- Ce que cela restitue: À chaque exécution : kilomètres totaux, heures de conduite et pourcentage de saturation par équipage. Ce sont les chiffres qui permettent de comparer deux plannings, au lieu de se fier au premier.
- Limite déclarée: Il n'existe pas encore de comparaison mesurée avant et après chez un client réel. Tant qu'elle n'existe pas, aucun pourcentage d'économie n'est déclaré : ce serait une estimation présentée comme une mesure.

### 4. Services au public: Reconnaître les articles du catalogue à partir d'une photo, sans campagne de photographies classées à la main.

Ouvrir un nouveau site, c'est charger un fichier, pas recueillir et classer à la main les photographies de chaque article.

La situation. Reconnaître à partir d'une photo les articles d'un catalogue qui change chaque jour coûte cher si chaque site doit d'abord recueillir et classer les photographies à la main. C'est ce qui rend prohibitifs les délais d'activation des solutions traditionnelles dans ce type de service.

Ce qui a été fait. L'approche alternative consiste à décrire le catalogue au lieu de le montrer. Les articles du jour sont chargés sous forme déclarative — nom, catégorie, description étendue, ingrédients, quantités — et un modèle multimodal généraliste reconnaît à partir de ces descriptions, pas à partir d'une archive d'images étiquetées. Le système gère aussi les articles composés, avec des coefficients de portion, de sorte que les valeurs restent correctes quand, dans un même choix, coexistent des demi-portions de produits différents.

Ce qui a changé. Activer un nouveau site, c'est charger son catalogue. Il n'est pas besoin de matériel dédié : on utilise le smartphone de la personne, sans totem ni lecteurs. Et le coût varie avec le trafic, au lieu d'être le coût fixe d'une présence à maintenir même quand il passe dix personnes.

- Comment on contrôle: Une suite de régression sur des images réelles, avec la vérité de référence déclarée pour chaque image : une modification du modèle ou des instructions se mesure sur un banc stable, au lieu de se juger à l'impression.
- Prévu par spécification: Sept langues sur l'ensemble de l'interface et sur les contenus du catalogue. La localisation complète est planifiée, pas encore achevée.
- Limite déclarée: Le chiffre d'exactitude n'est pas encore déclarable : une partie des images récentes est sans vérité de référence et est exclue des tests. C'est le premier nombre que quiconque évalue cette solution demandera, et il n'est pas estimé à la place d'être mesuré.

### 5. Sécurité et formation: Des formations obligatoires qui expirent sans que personne s'en aperçoive.

18 types de cours obligatoires, chacun avec sa propre échéance ; pour chaque personne quatre états (valide, bientôt échu, échu, jamais suivi) et un préavis que l'on peut régler.

La situation. Qui répond de la formation obligatoire de dizaines ou de centaines de personnes tient l'état sur des feuilles de calcul qui vieillissent à chaque embauche et à chaque changement de poste. Le risque n'est pas théorique : c'est de s'apercevoir d'une échéance dépassée pendant une inspection, avec ce que cela implique en matière de sécurité au travail.

Ce qui a été fait. Le problème n'est pas de calculer une date. C'est de tenir ensemble les fichiers du personnel, l'historique des cours et des règles de périodicité différentes selon le rôle et l'activité, et de calculer pour chaque personne et chaque obligation un état parmi quatre : valide, bientôt échu dans le seuil, échu, jamais suivi. De là sortent la matrice de formation lisible d'un coup d'œil, les relances en registre formel et le rapport périodique.

Ce qui a changé. Quand la matrice existe, le travail devient de programmer les cours au lieu de reconstruire l'état. Les données personnelles restent sur le serveur de l'organisation : aucun envoi vers des services externes, obtenu comme contrainte d'architecture et non comme déclaration d'intention.

- Mesuré sur le projet: 18 types de cours obligatoires modélisés, avec une périodicité d'un à cinq ans et certains une fois pour toutes. Quatre états calculés pour chaque combinaison entre personne et obligation, avec un préavis par défaut à 90 jours et configurable par client.
- Comment cela a été éprouvé: Sur une archive de démonstration avec des noms fictifs : huit entreprises, environ 175 personnes et plus de 700 enregistrements de formation, avec une distribution réaliste des états.
- Limite déclarée: Le calcul suit des règles fixes et, sur les mêmes données, donne toujours le même résultat, et c'est bien ainsi : dans une règle de périodicité, il n'y a rien à confier à un modèle. L'IA sert un pas avant, pour faire entrer des données qui arrivent aujourd'hui en désordre, et un pas après, pour s'apercevoir qu'une règle a changé.

## Où passe la frontière : le calcul reste répétable, l'IA travaille au-dessus.

Cinq projets différents, le même choix : ce qui décide est un calcul répétable et contrôlable par des tests, l'IA travaille au-dessus. Chaque fiche dit où passe la frontière et comment on la contrôle.

### 1. Bureau d'études: Le logiciel calcule, mais les décisions sont prises par une seule personne

Les choix de qui a vingt ans de métier deviennent des règles écrites dans le programme de calcul ; les contrôles réglementaires restent un calcul répétable.

Dans beaucoup de bureaux d'études, le programme exécute les vérifications, tandis que les choix qui mènent à une solution efficace restent à qui a vingt ans de métier : par où commencer, comment corriger quand les vérifications ne collent pas, quand une solution formellement correcte n'est pas raisonnable.

Le projet transforme ces décisions en contraintes, heuristiques et règles de diagnostic explicites, qui deviennent des paramètres du programme de calcul. Au-dessus du noyau travaillent des agents spécialisés, instruits sur les cas historiques et sur les solutions réellement adoptées : l'un propose la configuration de départ pour un problème nouveau, l'un choisit la stratégie corrective quand l'optimisation ne converge pas, l'un compare le résultat aux cas analogues et signale quand il est mathématiquement correct mais atypique.

Les deux plans restent séparés. Les vérifications réglementaires sont déterministes et reproductibles, l'IA travaille au-dessus du calcul et non dedans, et l'expert reste dans le cycle pour valider, corriger et enrichir.

- Comment on contrôle: 695 tests automatiques sur le programme de calcul, exécutés à chaque intégration. Le programme reconstruit reproduit 58 cas de vérification sur 63 au chiffre imprimé, et 44 archives historiques sur 44 sont relues sans exception par des décodeurs écrits sans avoir la documentation des formats.
- Ce qui manque, déclaré: La base des faits atteint 98,8 % de complétude — 399 entrées sur 404 — et les 5 qui restent sont déclarées et motivées au lieu d'être omises.
- Vérification indépendante: Huit campagnes menées par des agents chargés de réfuter le travail fait. Les réfutations trouvées ont été réparées avant la livraison, pas classées.

### 2. Instruction des dossiers et back-office: L'intelligence artificielle rédige le brouillon, les règles de l'entreprise décident de l'issue.

Les conditions pour accepter ou refuser un dossier sont dans un fichier que le service modifie sans toucher au code. L'intelligence artificielle prépare les données et communique l'issue, elle ne la fixe pas.

Sur un processus qui produit des documents officiels, le texte peut être écrit par l'intelligence artificielle ; si le dossier est accepté ou non, ce sont les règles qui le décident, pas le modèle.

Les conditions pour accepter ou refuser un dossier sont dans un fichier de configuration lisible que le bureau d'études met à jour lui-même quand une règle change, sans passer par le développement. L'intelligence artificielle lit les e-mails, en extrait les données et compose la réponse ; le programme de calcul décide de l'issue et la motive.

Et l'envoi reste un geste humain : le brouillon est prêt, la signature est de qui répond.

- Comment on contrôle: 135 tests automatiques au vert, dont six parcours complets de l'e-mail au document généré.
- Où passe la frontière: 100 % des communications sortantes passent par l'approbation d'un opérateur. Aucun envoi automatique, par choix de projet et non par limite technique.

### 3. Équipes sur le terrain: Le planning des équipes liste aussi les interventions qu'on n'arrive pas à insérer, et pourquoi.

Le programme peut laisser de côté une intervention, et le déclare avec un coût lié à la priorité, au lieu de produire un planning qui tient sur le papier et pas sur la route.

La valeur n'est pas seulement le trajet le plus court : c'est de savoir ce qui reste dehors et pourquoi.

Au lieu de forcer un programme infaisable, le programme peut laisser de côté une intervention et le déclare avec un coût lié à la priorité. Ce que le responsable reçoit, c'est un planning exécutable plus la liste motivée de ce qui n'était pas planifiable — capacité insuffisante, fenêtre horaire incompatible — au lieu d'interventions qui disparaissent en silence.

Le temps de calcul aussi est déclaré au départ : c'est un paramètre de projet, pas un effet collatéral de la taille du problème.

- Comment on contrôle: Les indicateurs restitués à chaque exécution — kilomètres, heures de conduite, saturation par équipage — rendent comparables deux plannings différents, ce qui est le seul moyen de savoir si le second est meilleur que le premier.
- Limite déclarée: Aucune comparaison mesurée avant et après chez un client réel, donc aucun pourcentage d'économie déclaré.

### 4. Services au public: Quand la reconnaissance par photo se trompe, la correction est déjà prévue et limitée.

La correction proposée à la personne n'affiche que des alternatives visuellement proches, et pas les prix.

Un système de reconnaissance mis entre les mains du public se juge à la façon dont il traite les cas où il se trompe.

Ici la qualité de l'image est évaluée avant l'envoi, et il est demandé de la refaire quand elle est floue ou incomplète. Après la reconnaissance, la personne confirme ou corrige, mais la correction est conçue pour ne pas devenir une échappatoire : la liste des alternatives ne contient que des articles visuellement proches, et les prix ne sont pas visibles.

La charge de la vérification se déplace sur l'utilisateur sans ouvrir la porte à l'abus, et c'est ce choix, plus que le modèle, qui détermine si le système tient en exploitation.

- Comment on contrôle: Une suite de régression sur des images réelles avec vérité de référence déclarée : les modifications du modèle ou des instructions se mesurent sur un banc stable.
- Limite déclarée: L'exactitude n'est pas encore un nombre déclarable, parce qu'une partie du banc est sans vérité de référence. Cela est dit, au lieu d'être estimé.

### 5. Analyse et rapports: Les chiffres, c'est le code qui les calcule ; le récit, c'est l'IA qui l'écrit

Aucun chiffre du rapport ne naît d'un modèle : les grandeurs sont calculées par un programme qui, sur les mêmes données figées, donne toujours le même résultat.

Dans les rapports, la séparation est nette. Les grandeurs sont calculées par un programme qui, sur les mêmes données figées, donne toujours le même résultat, avec des tests qui les reproduisent identiques à chaque exécution ; le texte est écrit ancré à ces chiffres et aux citations réelles.

Le document fini est ensuite relu par des personas synthétiques avec un seuil de qualité déclaré, en dessous duquel on ne livre pas.

Et quand l'indicateur évident ne discrimine pas — des catégories où toutes les activités sont au-dessus de 4,8 étoiles — le rapport le dit, au lieu de construire dessus un verdict.

- Comment on contrôle: Un réseau de tests reproduit les rapports déjà livrés octet par octet : une modification du code qui altérerait un chiffre déjà livré ne passe pas.
- Comment est écrit chaque chiffre: Chaque chiffre porte son propre dénominateur et sa propre source. Les affirmations qui ne trouvent pas d'appui dans le corpus sont corrigées, même lorsqu'elles avaient déjà circulé.

## Critères de choix

- Choisir ce service lorsque le résultat doit entrer dans un processus technique réel, pas rester une démo.
- Le choisir lorsque tests, tolérances, critères d'acceptation et documentation comptent.
- Le reporter s'il n'existe pas de sponsor interne capable de valider règles et priorités.

## Limites, confidentialité et responsabilité

- Artik Lab ne publie pas de détails identifiants sur les projets clients.
- La première phase peut conclure que les données disponibles ne suffisent pas ou que le logiciel doit être réécrit par étapes.
- Les composants IA ne remplacent pas les responsabilités professionnelles, réglementaires ou validations du contexte.

## Services liés

- [Voir l'analyse de données](https://ar-tik.com/fr/analyse-donnees-agentique.html)
- [Ouvrir l'Atlas](https://ar-tik.com/fr/atlas-applications-ia-entreprises.md): L'Atlas rassemble des exemples concrets d'applications IA pour documents, opérations, RH, marketing, logiciels, gouvernance, production, formation et données. Il aide à décider si le besoin relève du conseil, de l'analyse de données, du développement technique ou de la formation.
- [Cours d'IA pour entreprises: choisir le bon parcours](https://ar-tik.com/fr/cours/index.md)
