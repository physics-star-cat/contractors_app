export type Locale = 'en' | 'de' | 'fr' | 'pl' | 'nl' | 'es'

export const LOCALES: Locale[] = ['en', 'de', 'fr', 'pl', 'nl', 'es']

export const LOCALE_INFO: Record<Locale, {
  name: string
  nativeName: string
  currencyCode: string
  currencySymbol: string
  distanceUnit: string
  distanceUnitShort: string
  defaultMileageRate: number
  hreflang: string
}> = {
  en: { name: 'English', nativeName: 'English', currencyCode: 'GBP', currencySymbol: '£', distanceUnit: 'miles', distanceUnitShort: 'mi', defaultMileageRate: 0.45, hreflang: 'en' },
  de: { name: 'German', nativeName: 'Deutsch', currencyCode: 'EUR', currencySymbol: '€', distanceUnit: 'Kilometer', distanceUnitShort: 'km', defaultMileageRate: 0.30, hreflang: 'de' },
  fr: { name: 'French', nativeName: 'Français', currencyCode: 'EUR', currencySymbol: '€', distanceUnit: 'kilomètres', distanceUnitShort: 'km', defaultMileageRate: 0.30, hreflang: 'fr' },
  pl: { name: 'Polish', nativeName: 'Polski', currencyCode: 'PLN', currencySymbol: 'zł', distanceUnit: 'kilometry', distanceUnitShort: 'km', defaultMileageRate: 0.84, hreflang: 'pl' },
  nl: { name: 'Dutch', nativeName: 'Nederlands', currencyCode: 'EUR', currencySymbol: '€', distanceUnit: 'kilometer', distanceUnitShort: 'km', defaultMileageRate: 0.23, hreflang: 'nl' },
  es: { name: 'Spanish', nativeName: 'Español', currencyCode: 'EUR', currencySymbol: '€', distanceUnit: 'kilómetros', distanceUnitShort: 'km', defaultMileageRate: 0.19, hreflang: 'es' },
}

export const UI_STRINGS: Record<Locale, {
  // Nav
  navEstimate: string
  navGuides: string
  navAbout: string
  navTools: string
  // Footer
  footerAbout: string
  footerPrivacy: string
  // Landing
  tagline: string
  subtitle: string
  howItWorks: string
  step1: string
  step2: string
  step3: string
  exampleOutput: string
  startEstimate: string
  recentEstimates: string
  seoP1: string
  seoP2: string
  // Estimator
  projectDetails: string
  projectName: string
  clientName: string
  profitMargin: string
  jobDuration: string
  estimatedDays: string
  hourlyRate: string
  hoursPerDay: string
  complexity: string
  baseLaborCost: string
  extraWorkers: string
  addWorker: string
  ratePerHour: string
  daysBlankAll: string
  perDay: string
  total: string
  travel: string
  travelTimeMins: string
  siteVisits: string
  effective: string
  includeReturnTrip: string
  trafficVariability: string
  distance: string
  ratePer: string
  baseTravelCost: string
  lineItems: string
  addItem: string
  noItemsYet: string
  itemName: string
  cost: string
  category: string
  risk: string
  summary: string
  materials: string
  durationLabor: string
  subtotal: string
  profit: string
  totalEstimate: string
  runSimulation: string
  simulating: string
  addItemToRun: string
  // Results
  recommendedQuote: string
  percentile80Desc: string
  conservative: string
  recommended: string
  safe: string
  p50Desc: string
  p80Desc: string
  p90Desc: string
  costBreakdown: string
  p50Likely: string
  p80Safe: string
  saveEstimate: string
  customerPdf: string
  detailedPdf: string
  newEstimate: string
  editEstimate: string
  iterations: string
  converged: string
  confidence: string
  yes: string
  no: string
  estimateSaved: string
  // Categories
  catMaterial: string
  catLabor: string
  catSubcontractor: string
  catOther: string
  // Risk levels
  riskCertain: string
  riskLow: string
  riskMedium: string
  riskHigh: string
  riskWild: string
  // Complexity
  compRoutine: string
  compModerate: string
  compComplex: string
  compUnknown: string
  // Traffic
  traffPredictable: string
  traffVariable: string
  traffHigh: string
  // Guide CTAs
  startEstimating: string
  readTheGuide: string
  // About
  aboutTitle: string
  aboutWhatIs: string
  aboutHowMC: string
  aboutYourData: string
}> = {
  en: {
    navEstimate: '[ESTIMATE]', navGuides: '[GUIDES]', navAbout: '[ABOUT]', navTools: '[TOOLS]',
    footerAbout: 'about', footerPrivacy: 'all data stays in your browser',
    tagline: 'stop guessing // start simulating', subtitle: 'monte carlo cost projections for contractors',
    howItWorks: 'How it works',
    step1: 'Enter your line items, duration, and travel with uncertainty levels',
    step2: 'Monte Carlo simulation runs 10,000 cost scenarios',
    step3: 'Get a statistically safe quote — not a guess',
    exampleOutput: 'Example output', startEstimate: '[START ESTIMATE]', recentEstimates: 'Recent estimates',
    seoP1: 'LowRiskQuotes uses Monte Carlo simulation to help contractors and tradespeople build quotes that account for real-world uncertainty. Instead of adding a flat contingency percentage, simulate thousands of cost scenarios to find the price point where you are unlikely to lose money.',
    seoP2: 'Works offline. No account needed. Your data never leaves your browser.',
    projectDetails: 'Project details', projectName: 'Project name', clientName: 'Client name (optional)',
    profitMargin: 'Profit margin (%)', jobDuration: 'Job duration', estimatedDays: 'Estimated days',
    hourlyRate: 'Hourly rate', hoursPerDay: 'Hours/day', complexity: 'Complexity',
    baseLaborCost: 'base labor', extraWorkers: 'Extra workers', addWorker: '[+ ADD WORKER]',
    ratePerHour: 'Rate/hr', daysBlankAll: 'Days (blank=all)', perDay: '/day', total: 'total',
    travel: 'Travel', travelTimeMins: 'Travel time (mins, one-way)', siteVisits: 'Site visits (0=auto)',
    effective: 'effective', includeReturnTrip: 'Include return trip', trafficVariability: 'Traffic variability',
    distance: 'Distance', ratePer: 'Rate per', baseTravelCost: 'base travel',
    lineItems: 'Line items', addItem: '[+ ADD ITEM]', noItemsYet: 'no items yet — add your first cost item',
    itemName: 'item name', cost: 'Cost', category: 'Category', risk: 'Risk',
    summary: 'Summary', materials: 'Materials', durationLabor: 'Duration / labor',
    subtotal: 'Subtotal', profit: 'Profit', totalEstimate: 'Total estimate',
    runSimulation: '[ RUN SIMULATION ]', simulating: '[ SIMULATING... ]',
    addItemToRun: 'add at least one line item to run simulation',
    recommendedQuote: 'recommended quote', percentile80Desc: '80th percentile — 80% chance your costs will be under this',
    conservative: 'conservative', recommended: 'recommended', safe: 'safe',
    p50Desc: '50/50 chance — risky', p80Desc: '80% chance under this', p90Desc: 'very unlikely to lose money',
    costBreakdown: 'Cost breakdown', p50Likely: 'P50 (likely)', p80Safe: 'P80 (safe)',
    saveEstimate: '[SAVE ESTIMATE]', customerPdf: '[CUSTOMER PDF]', detailedPdf: '[DETAILED PDF]',
    newEstimate: '[NEW ESTIMATE]', editEstimate: '[EDIT ESTIMATE]',
    iterations: 'iterations', converged: 'converged', confidence: 'confidence', yes: 'yes', no: 'no',
    estimateSaved: 'Estimate saved',
    catMaterial: 'Material', catLabor: 'Labor', catSubcontractor: 'Subcontractor', catOther: 'Other',
    riskCertain: 'Certain', riskLow: 'Low Risk', riskMedium: 'Medium Risk', riskHigh: 'High Risk', riskWild: 'Wild Guess',
    compRoutine: 'Routine', compModerate: 'Moderate', compComplex: 'Complex', compUnknown: 'Unknown Scope',
    traffPredictable: 'Predictable', traffVariable: 'Variable', traffHigh: 'High Variability',
    startEstimating: '[START ESTIMATING]', readTheGuide: '[READ THE GUIDE]',
    aboutTitle: 'about lowriskquotes', aboutWhatIs: 'What is this', aboutHowMC: 'How Monte Carlo works', aboutYourData: 'Your data',
  },
  de: {
    navEstimate: '[KALKULATION]', navGuides: '[RATGEBER]', navAbout: '[ÜBER UNS]', navTools: '[WERKZEUGE]',
    footerAbout: 'über uns', footerPrivacy: 'alle Daten bleiben in Ihrem Browser',
    tagline: 'nicht raten // simulieren', subtitle: 'Monte-Carlo-Kostenprognosen für Handwerker',
    howItWorks: 'So funktioniert es',
    step1: 'Geben Sie Ihre Positionen, Dauer und Anfahrt mit Unsicherheitsstufen ein',
    step2: 'Monte-Carlo-Simulation berechnet 10.000 Kostenszenarien',
    step3: 'Erhalten Sie ein statistisch sicheres Angebot — keine Vermutung',
    exampleOutput: 'Beispielausgabe', startEstimate: '[KALKULATION STARTEN]', recentEstimates: 'Letzte Kalkulationen',
    seoP1: 'LowRiskQuotes nutzt Monte-Carlo-Simulation, um Handwerkern und Bauunternehmern zu helfen, Angebote zu erstellen, die reale Unsicherheiten berücksichtigen. Anstatt einen pauschalen Aufschlag hinzuzufügen, simulieren Sie tausende Kostenszenarien.',
    seoP2: 'Funktioniert offline. Kein Konto erforderlich. Ihre Daten verlassen nie Ihren Browser.',
    projectDetails: 'Projektdetails', projectName: 'Projektname', clientName: 'Kundenname (optional)',
    profitMargin: 'Gewinnmarge (%)', jobDuration: 'Auftragsdauer', estimatedDays: 'Geschätzte Tage',
    hourlyRate: 'Stundensatz', hoursPerDay: 'Stunden/Tag', complexity: 'Komplexität',
    baseLaborCost: 'Basis-Arbeitskosten', extraWorkers: 'Zusätzliche Arbeiter', addWorker: '[+ ARBEITER HINZUFÜGEN]',
    ratePerHour: 'Satz/Std', daysBlankAll: 'Tage (leer=alle)', perDay: '/Tag', total: 'Gesamt',
    travel: 'Anfahrt', travelTimeMins: 'Fahrzeit (Min., einfach)', siteVisits: 'Baustellenbesuche (0=auto)',
    effective: 'effektiv', includeReturnTrip: 'Rückfahrt einbeziehen', trafficVariability: 'Verkehrslage',
    distance: 'Entfernung', ratePer: 'Satz pro', baseTravelCost: 'Basis-Fahrkosten',
    lineItems: 'Positionen', addItem: '[+ POSITION HINZUFÜGEN]', noItemsYet: 'noch keine Positionen — fügen Sie Ihre erste Kostenposition hinzu',
    itemName: 'Bezeichnung', cost: 'Kosten', category: 'Kategorie', risk: 'Risiko',
    summary: 'Zusammenfassung', materials: 'Material', durationLabor: 'Dauer / Arbeit',
    subtotal: 'Zwischensumme', profit: 'Gewinn', totalEstimate: 'Gesamtkalkulation',
    runSimulation: '[ SIMULATION STARTEN ]', simulating: '[ BERECHNUNG LÄUFT... ]',
    addItemToRun: 'Mindestens eine Position hinzufügen, um die Simulation zu starten',
    recommendedQuote: 'Empfohlenes Angebot', percentile80Desc: '80. Perzentil — 80% Wahrscheinlichkeit, dass Ihre Kosten darunter liegen',
    conservative: 'konservativ', recommended: 'empfohlen', safe: 'sicher',
    p50Desc: '50/50 Chance — riskant', p80Desc: '80% Wahrscheinlichkeit darunter', p90Desc: 'sehr unwahrscheinlich, Geld zu verlieren',
    costBreakdown: 'Kostenaufschlüsselung', p50Likely: 'P50 (wahrscheinlich)', p80Safe: 'P80 (sicher)',
    saveEstimate: '[KALKULATION SPEICHERN]', customerPdf: '[KUNDEN-PDF]', detailedPdf: '[DETAIL-PDF]',
    newEstimate: '[NEUE KALKULATION]', editEstimate: '[KALKULATION BEARBEITEN]',
    iterations: 'Iterationen', converged: 'konvergiert', confidence: 'Konfidenz', yes: 'ja', no: 'nein',
    estimateSaved: 'Kalkulation gespeichert',
    catMaterial: 'Material', catLabor: 'Arbeit', catSubcontractor: 'Subunternehmer', catOther: 'Sonstiges',
    riskCertain: 'Sicher', riskLow: 'Niedriges Risiko', riskMedium: 'Mittleres Risiko', riskHigh: 'Hohes Risiko', riskWild: 'Grobe Schätzung',
    compRoutine: 'Routine', compModerate: 'Moderat', compComplex: 'Komplex', compUnknown: 'Unbekannter Umfang',
    traffPredictable: 'Vorhersehbar', traffVariable: 'Variabel', traffHigh: 'Hohe Variabilität',
    startEstimating: '[KALKULATION STARTEN]', readTheGuide: '[RATGEBER LESEN]',
    aboutTitle: 'über lowriskquotes', aboutWhatIs: 'Was ist das', aboutHowMC: 'Wie Monte Carlo funktioniert', aboutYourData: 'Ihre Daten',
  },
  fr: {
    navEstimate: '[DEVIS]', navGuides: '[GUIDES]', navAbout: '[À PROPOS]', navTools: '[OUTILS]',
    footerAbout: 'à propos', footerPrivacy: 'toutes les données restent dans votre navigateur',
    tagline: 'arrêtez de deviner // commencez à simuler', subtitle: 'projections de coûts Monte Carlo pour artisans',
    howItWorks: 'Comment ça marche',
    step1: 'Entrez vos postes, durée et déplacements avec les niveaux d\'incertitude',
    step2: 'La simulation Monte Carlo calcule 10 000 scénarios de coûts',
    step3: 'Obtenez un devis statistiquement sûr — pas une estimation',
    exampleOutput: 'Exemple de résultat', startEstimate: '[CRÉER UN DEVIS]', recentEstimates: 'Devis récents',
    seoP1: 'LowRiskQuotes utilise la simulation Monte Carlo pour aider les artisans et entrepreneurs à créer des devis qui tiennent compte de l\'incertitude réelle. Au lieu d\'ajouter un pourcentage forfaitaire, simulez des milliers de scénarios de coûts.',
    seoP2: 'Fonctionne hors ligne. Aucun compte requis. Vos données ne quittent jamais votre navigateur.',
    projectDetails: 'Détails du projet', projectName: 'Nom du projet', clientName: 'Nom du client (optionnel)',
    profitMargin: 'Marge bénéficiaire (%)', jobDuration: 'Durée du chantier', estimatedDays: 'Jours estimés',
    hourlyRate: 'Taux horaire', hoursPerDay: 'Heures/jour', complexity: 'Complexité',
    baseLaborCost: 'coût main-d\'œuvre de base', extraWorkers: 'Ouvriers supplémentaires', addWorker: '[+ AJOUTER UN OUVRIER]',
    ratePerHour: 'Taux/h', daysBlankAll: 'Jours (vide=tous)', perDay: '/jour', total: 'total',
    travel: 'Déplacements', travelTimeMins: 'Temps de trajet (min, aller)', siteVisits: 'Visites chantier (0=auto)',
    effective: 'effectif', includeReturnTrip: 'Inclure le retour', trafficVariability: 'Variabilité du trafic',
    distance: 'Distance', ratePer: 'Tarif par', baseTravelCost: 'coût déplacement de base',
    lineItems: 'Postes de coûts', addItem: '[+ AJOUTER UN POSTE]', noItemsYet: 'aucun poste — ajoutez votre premier poste de coût',
    itemName: 'nom du poste', cost: 'Coût', category: 'Catégorie', risk: 'Risque',
    summary: 'Résumé', materials: 'Matériaux', durationLabor: 'Durée / main-d\'œuvre',
    subtotal: 'Sous-total', profit: 'Bénéfice', totalEstimate: 'Estimation totale',
    runSimulation: '[ LANCER LA SIMULATION ]', simulating: '[ CALCUL EN COURS... ]',
    addItemToRun: 'ajoutez au moins un poste pour lancer la simulation',
    recommendedQuote: 'devis recommandé', percentile80Desc: '80e percentile — 80% de chances que vos coûts soient inférieurs',
    conservative: 'conservateur', recommended: 'recommandé', safe: 'prudent',
    p50Desc: '50/50 — risqué', p80Desc: '80% de chances en dessous', p90Desc: 'très peu probable de perdre de l\'argent',
    costBreakdown: 'Ventilation des coûts', p50Likely: 'P50 (probable)', p80Safe: 'P80 (sûr)',
    saveEstimate: '[SAUVEGARDER]', customerPdf: '[PDF CLIENT]', detailedPdf: '[PDF DÉTAILLÉ]',
    newEstimate: '[NOUVEAU DEVIS]', editEstimate: '[MODIFIER LE DEVIS]',
    iterations: 'itérations', converged: 'convergé', confidence: 'confiance', yes: 'oui', no: 'non',
    estimateSaved: 'Devis sauvegardé',
    catMaterial: 'Matériau', catLabor: 'Main-d\'œuvre', catSubcontractor: 'Sous-traitant', catOther: 'Autre',
    riskCertain: 'Certain', riskLow: 'Risque faible', riskMedium: 'Risque moyen', riskHigh: 'Risque élevé', riskWild: 'Estimation hasardeuse',
    compRoutine: 'Routine', compModerate: 'Modéré', compComplex: 'Complexe', compUnknown: 'Portée inconnue',
    traffPredictable: 'Prévisible', traffVariable: 'Variable', traffHigh: 'Forte variabilité',
    startEstimating: '[COMMENCER]', readTheGuide: '[LIRE LE GUIDE]',
    aboutTitle: 'à propos de lowriskquotes', aboutWhatIs: 'Qu\'est-ce que c\'est', aboutHowMC: 'Comment fonctionne Monte Carlo', aboutYourData: 'Vos données',
  },
  pl: {
    navEstimate: '[WYCENA]', navGuides: '[PORADNIKI]', navAbout: '[O NAS]', navTools: '[NARZĘDZIA]',
    footerAbout: 'o nas', footerPrivacy: 'wszystkie dane pozostają w Twojej przeglądarce',
    tagline: 'przestań zgadywać // zacznij symulować', subtitle: 'prognozy kosztów Monte Carlo dla wykonawców',
    howItWorks: 'Jak to działa',
    step1: 'Wprowadź pozycje kosztowe, czas trwania i dojazd z poziomami niepewności',
    step2: 'Symulacja Monte Carlo oblicza 10 000 scenariuszy kosztowych',
    step3: 'Otrzymaj statystycznie bezpieczną wycenę — nie zgadywankę',
    exampleOutput: 'Przykładowy wynik', startEstimate: '[ROZPOCZNIJ WYCENĘ]', recentEstimates: 'Ostatnie wyceny',
    seoP1: 'LowRiskQuotes wykorzystuje symulację Monte Carlo, aby pomóc wykonawcom i rzemieślnikom tworzyć wyceny uwzględniające rzeczywistą niepewność. Zamiast dodawać ryczałtowy procent, symuluj tysiące scenariuszy kosztowych.',
    seoP2: 'Działa offline. Nie wymaga konta. Twoje dane nigdy nie opuszczają przeglądarki.',
    projectDetails: 'Szczegóły projektu', projectName: 'Nazwa projektu', clientName: 'Nazwa klienta (opcjonalnie)',
    profitMargin: 'Marża zysku (%)', jobDuration: 'Czas trwania zlecenia', estimatedDays: 'Szacowane dni',
    hourlyRate: 'Stawka godzinowa', hoursPerDay: 'Godziny/dzień', complexity: 'Złożoność',
    baseLaborCost: 'bazowy koszt pracy', extraWorkers: 'Dodatkowi pracownicy', addWorker: '[+ DODAJ PRACOWNIKA]',
    ratePerHour: 'Stawka/godz', daysBlankAll: 'Dni (puste=wszystkie)', perDay: '/dzień', total: 'razem',
    travel: 'Dojazd', travelTimeMins: 'Czas dojazdu (min, w jedną stronę)', siteVisits: 'Wizyty na budowie (0=auto)',
    effective: 'efektywne', includeReturnTrip: 'Uwzględnij powrót', trafficVariability: 'Zmienność ruchu',
    distance: 'Odległość', ratePer: 'Stawka za', baseTravelCost: 'bazowy koszt dojazdu',
    lineItems: 'Pozycje kosztowe', addItem: '[+ DODAJ POZYCJĘ]', noItemsYet: 'brak pozycji — dodaj pierwszą pozycję kosztową',
    itemName: 'nazwa pozycji', cost: 'Koszt', category: 'Kategoria', risk: 'Ryzyko',
    summary: 'Podsumowanie', materials: 'Materiały', durationLabor: 'Czas / robocizna',
    subtotal: 'Suma częściowa', profit: 'Zysk', totalEstimate: 'Łączna wycena',
    runSimulation: '[ URUCHOM SYMULACJĘ ]', simulating: '[ OBLICZANIE... ]',
    addItemToRun: 'dodaj przynajmniej jedną pozycję, aby uruchomić symulację',
    recommendedQuote: 'zalecana wycena', percentile80Desc: '80. percentyl — 80% szans, że koszty będą niższe',
    conservative: 'ostrożna', recommended: 'zalecana', safe: 'bezpieczna',
    p50Desc: '50/50 szans — ryzykowne', p80Desc: '80% szans poniżej', p90Desc: 'bardzo mało prawdopodobna strata',
    costBreakdown: 'Rozbicie kosztów', p50Likely: 'P50 (prawdopodobne)', p80Safe: 'P80 (bezpieczne)',
    saveEstimate: '[ZAPISZ WYCENĘ]', customerPdf: '[PDF DLA KLIENTA]', detailedPdf: '[PDF SZCZEGÓŁOWY]',
    newEstimate: '[NOWA WYCENA]', editEstimate: '[EDYTUJ WYCENĘ]',
    iterations: 'iteracje', converged: 'zbieżność', confidence: 'pewność', yes: 'tak', no: 'nie',
    estimateSaved: 'Wycena zapisana',
    catMaterial: 'Materiał', catLabor: 'Robocizna', catSubcontractor: 'Podwykonawca', catOther: 'Inne',
    riskCertain: 'Pewny', riskLow: 'Niskie ryzyko', riskMedium: 'Średnie ryzyko', riskHigh: 'Wysokie ryzyko', riskWild: 'Szacunek na oko',
    compRoutine: 'Rutynowe', compModerate: 'Umiarkowane', compComplex: 'Złożone', compUnknown: 'Nieznany zakres',
    traffPredictable: 'Przewidywalny', traffVariable: 'Zmienny', traffHigh: 'Wysoka zmienność',
    startEstimating: '[ROZPOCZNIJ]', readTheGuide: '[CZYTAJ PORADNIK]',
    aboutTitle: 'o lowriskquotes', aboutWhatIs: 'Co to jest', aboutHowMC: 'Jak działa Monte Carlo', aboutYourData: 'Twoje dane',
  },
  nl: {
    navEstimate: '[OFFERTE]', navGuides: '[GIDSEN]', navAbout: '[OVER ONS]', navTools: '[TOOLS]',
    footerAbout: 'over ons', footerPrivacy: 'alle gegevens blijven in uw browser',
    tagline: 'stop met gokken // begin met simuleren', subtitle: 'Monte Carlo-kostenprognoses voor aannemers',
    howItWorks: 'Hoe het werkt',
    step1: 'Voer uw posten, looptijd en reistijd in met onzekerheidsniveaus',
    step2: 'Monte Carlo-simulatie berekent 10.000 kostenscenario\'s',
    step3: 'Ontvang een statistisch veilige offerte — geen gok',
    exampleOutput: 'Voorbeeldresultaat', startEstimate: '[START OFFERTE]', recentEstimates: 'Recente offertes',
    seoP1: 'LowRiskQuotes gebruikt Monte Carlo-simulatie om aannemers en vaklieden te helpen offertes te maken die rekening houden met werkelijke onzekerheid. In plaats van een vast opslagpercentage toe te voegen, simuleert u duizenden kostenscenario\'s.',
    seoP2: 'Werkt offline. Geen account nodig. Uw gegevens verlaten nooit uw browser.',
    projectDetails: 'Projectgegevens', projectName: 'Projectnaam', clientName: 'Klantnaam (optioneel)',
    profitMargin: 'Winstmarge (%)', jobDuration: 'Opdracht duur', estimatedDays: 'Geschatte dagen',
    hourlyRate: 'Uurtarief', hoursPerDay: 'Uren/dag', complexity: 'Complexiteit',
    baseLaborCost: 'basis arbeidskosten', extraWorkers: 'Extra werknemers', addWorker: '[+ WERKNEMER TOEVOEGEN]',
    ratePerHour: 'Tarief/uur', daysBlankAll: 'Dagen (leeg=alle)', perDay: '/dag', total: 'totaal',
    travel: 'Reistijd', travelTimeMins: 'Reistijd (min, enkele reis)', siteVisits: 'Locatiebezoeken (0=auto)',
    effective: 'effectief', includeReturnTrip: 'Retour inbegrepen', trafficVariability: 'Verkeersvariabiliteit',
    distance: 'Afstand', ratePer: 'Tarief per', baseTravelCost: 'basis reiskosten',
    lineItems: 'Kostenposten', addItem: '[+ POST TOEVOEGEN]', noItemsYet: 'nog geen posten — voeg uw eerste kostenpost toe',
    itemName: 'postnaam', cost: 'Kosten', category: 'Categorie', risk: 'Risico',
    summary: 'Samenvatting', materials: 'Materialen', durationLabor: 'Duur / arbeid',
    subtotal: 'Subtotaal', profit: 'Winst', totalEstimate: 'Totale offerte',
    runSimulation: '[ SIMULATIE STARTEN ]', simulating: '[ BEREKENING LOOPT... ]',
    addItemToRun: 'voeg ten minste één post toe om de simulatie te starten',
    recommendedQuote: 'aanbevolen offerte', percentile80Desc: '80e percentiel — 80% kans dat uw kosten lager zijn',
    conservative: 'conservatief', recommended: 'aanbevolen', safe: 'veilig',
    p50Desc: '50/50 kans — risicovol', p80Desc: '80% kans eronder', p90Desc: 'zeer onwaarschijnlijk om geld te verliezen',
    costBreakdown: 'Kostenverdeling', p50Likely: 'P50 (waarschijnlijk)', p80Safe: 'P80 (veilig)',
    saveEstimate: '[OFFERTE OPSLAAN]', customerPdf: '[KLANT PDF]', detailedPdf: '[DETAIL PDF]',
    newEstimate: '[NIEUWE OFFERTE]', editEstimate: '[OFFERTE BEWERKEN]',
    iterations: 'iteraties', converged: 'geconvergeerd', confidence: 'betrouwbaarheid', yes: 'ja', no: 'nee',
    estimateSaved: 'Offerte opgeslagen',
    catMaterial: 'Materiaal', catLabor: 'Arbeid', catSubcontractor: 'Onderaannemer', catOther: 'Overig',
    riskCertain: 'Zeker', riskLow: 'Laag risico', riskMedium: 'Gemiddeld risico', riskHigh: 'Hoog risico', riskWild: 'Ruwe schatting',
    compRoutine: 'Routine', compModerate: 'Gemiddeld', compComplex: 'Complex', compUnknown: 'Onbekende scope',
    traffPredictable: 'Voorspelbaar', traffVariable: 'Variabel', traffHigh: 'Hoge variabiliteit',
    startEstimating: '[BEGINNEN]', readTheGuide: '[GIDS LEZEN]',
    aboutTitle: 'over lowriskquotes', aboutWhatIs: 'Wat is dit', aboutHowMC: 'Hoe Monte Carlo werkt', aboutYourData: 'Uw gegevens',
  },
  es: {
    navEstimate: '[PRESUPUESTO]', navGuides: '[GUÍAS]', navAbout: '[ACERCA DE]', navTools: '[HERRAMIENTAS]',
    footerAbout: 'acerca de', footerPrivacy: 'todos los datos permanecen en su navegador',
    tagline: 'deja de adivinar // empieza a simular', subtitle: 'proyecciones de costes Monte Carlo para contratistas',
    howItWorks: 'Cómo funciona',
    step1: 'Introduzca sus partidas, duración y desplazamientos con niveles de incertidumbre',
    step2: 'La simulación Monte Carlo calcula 10.000 escenarios de costes',
    step3: 'Obtenga un presupuesto estadísticamente seguro — no una suposición',
    exampleOutput: 'Ejemplo de resultado', startEstimate: '[CREAR PRESUPUESTO]', recentEstimates: 'Presupuestos recientes',
    seoP1: 'LowRiskQuotes utiliza simulación Monte Carlo para ayudar a contratistas y profesionales a crear presupuestos que tienen en cuenta la incertidumbre real. En lugar de añadir un porcentaje fijo, simule miles de escenarios de costes.',
    seoP2: 'Funciona sin conexión. No requiere cuenta. Sus datos nunca salen de su navegador.',
    projectDetails: 'Detalles del proyecto', projectName: 'Nombre del proyecto', clientName: 'Nombre del cliente (opcional)',
    profitMargin: 'Margen de beneficio (%)', jobDuration: 'Duración del trabajo', estimatedDays: 'Días estimados',
    hourlyRate: 'Tarifa por hora', hoursPerDay: 'Horas/día', complexity: 'Complejidad',
    baseLaborCost: 'coste base mano de obra', extraWorkers: 'Trabajadores adicionales', addWorker: '[+ AÑADIR TRABAJADOR]',
    ratePerHour: 'Tarifa/h', daysBlankAll: 'Días (vacío=todos)', perDay: '/día', total: 'total',
    travel: 'Desplazamientos', travelTimeMins: 'Tiempo de viaje (min, ida)', siteVisits: 'Visitas a obra (0=auto)',
    effective: 'efectivo', includeReturnTrip: 'Incluir vuelta', trafficVariability: 'Variabilidad del tráfico',
    distance: 'Distancia', ratePer: 'Tarifa por', baseTravelCost: 'coste base desplazamiento',
    lineItems: 'Partidas', addItem: '[+ AÑADIR PARTIDA]', noItemsYet: 'sin partidas — añada su primera partida de coste',
    itemName: 'nombre de partida', cost: 'Coste', category: 'Categoría', risk: 'Riesgo',
    summary: 'Resumen', materials: 'Materiales', durationLabor: 'Duración / mano de obra',
    subtotal: 'Subtotal', profit: 'Beneficio', totalEstimate: 'Presupuesto total',
    runSimulation: '[ EJECUTAR SIMULACIÓN ]', simulating: '[ CALCULANDO... ]',
    addItemToRun: 'añada al menos una partida para ejecutar la simulación',
    recommendedQuote: 'presupuesto recomendado', percentile80Desc: 'percentil 80 — 80% de probabilidad de que sus costes sean inferiores',
    conservative: 'conservador', recommended: 'recomendado', safe: 'seguro',
    p50Desc: '50/50 — arriesgado', p80Desc: '80% probabilidad por debajo', p90Desc: 'muy improbable perder dinero',
    costBreakdown: 'Desglose de costes', p50Likely: 'P50 (probable)', p80Safe: 'P80 (seguro)',
    saveEstimate: '[GUARDAR]', customerPdf: '[PDF CLIENTE]', detailedPdf: '[PDF DETALLADO]',
    newEstimate: '[NUEVO PRESUPUESTO]', editEstimate: '[EDITAR PRESUPUESTO]',
    iterations: 'iteraciones', converged: 'convergido', confidence: 'confianza', yes: 'sí', no: 'no',
    estimateSaved: 'Presupuesto guardado',
    catMaterial: 'Material', catLabor: 'Mano de obra', catSubcontractor: 'Subcontratista', catOther: 'Otros',
    riskCertain: 'Seguro', riskLow: 'Riesgo bajo', riskMedium: 'Riesgo medio', riskHigh: 'Riesgo alto', riskWild: 'Estimación a ojo',
    compRoutine: 'Rutina', compModerate: 'Moderado', compComplex: 'Complejo', compUnknown: 'Alcance desconocido',
    traffPredictable: 'Predecible', traffVariable: 'Variable', traffHigh: 'Alta variabilidad',
    startEstimating: '[COMENZAR]', readTheGuide: '[LEER LA GUÍA]',
    aboutTitle: 'acerca de lowriskquotes', aboutWhatIs: 'Qué es esto', aboutHowMC: 'Cómo funciona Monte Carlo', aboutYourData: 'Sus datos',
  },
}
