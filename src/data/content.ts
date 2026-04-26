export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Flashcard {
  id: string;
  prompt: string;
  answer: string;
}

export interface Unit {
  id: number;
  title: string;
  period: string;
  description: string;
  questions: Question[];
  flashcards: Flashcard[];
}

export const units: Unit[] = [
  {
    id: 1,
    title: "The Global Tapestry",
    period: "1200-1450",
    description: "State building and cultural developments across the globe.",
    questions: [
      {
        id: "u1-q1",
        question: "Which dynasty is credited with the creation of the Grand Canal in China?",
        options: ["Tang", "Song", "Sui", "Yuan"],
        correctAnswer: "Sui",
        explanation: "The Sui Dynasty initiated the Grand Canal, though it was expanded by later dynasties."
      },
      {
        id: "u1-q2",
        question: "The 'Bhakti Movement' originated in which region?",
        options: ["East Asia", "South Asia", "Middle East", "West Africa"],
        correctAnswer: "South Asia",
        explanation: "The Bhakti movement was a Hindu devotional trend that emerged in South Asia."
      }
    ],
    flashcards: [
      { id: "u1-f1", prompt: "Song Dynasty", answer: "(960-1279 CE) The Chinese dynasty that placed much more emphasis on civil administration, industry, education, and arts other than military." },
      { id: "u1-f2", prompt: "Imperial Bureaucracy", answer: "Division of an empire into organized provinces to make it easier to control" },
      { id: "u1-f3", prompt: "Meritocracy", answer: "a system in which promotion is based on individual ability or achievement" },
      { id: "u1-f4", prompt: "Grand Canal", answer: "The 1,100-mile (1,700-kilometer) waterway linking the Yellow and the Yangzi Rivers. It was begun in the Han period and completed during the Sui Empire." },
      { id: "u1-f5", prompt: "Gunpowder", answer: "The formula, brought to China in the 400s or 500s, was first used to make fumigators to keep away insect pests and evil spirits. In later centuries it was used to make explosives and grenades and to propel cannonballs, shot, and bullets." },
      { id: "u1-f6", prompt: "Champa Rice", answer: "Quick-maturing rice that can allow two harvests in one growing season. Originally introduced into Champa from India, it was later sent to China as a tribute gift by the Champa state (as part of the tributary system.)" },
      { id: "u1-f7", prompt: "Proto-industrialization", answer: "Preliminary shift away from agricultural economy in Europe; workers become full- or part-time producers of textile and metal products, working at home but in a capitalist system in which materials, work orders, and ultimate sales depended on urban merchants; prelude to Industrial Revolution." },
      { id: "u1-f8", prompt: "Artisans", answer: "skilled workers who make goods by hand" },
      { id: "u1-f9", prompt: "Scholar-gentry", answer: "Chinese class created by the marital linkage of the local land-holding aristocracy with the office-holding shi; superseded shi as governors of China." },
      { id: "u1-f10", prompt: "Foot Binding", answer: "Practice in Chinese society to mutilate women's feet in order to make them smaller; produced pain and restricted women's movement; made it easier to confine women to the household." },
      { id: "u1-f11", prompt: "woodblock printing", answer: "a form of printing in which an entire page is carved into a block of wood" },
      { id: "u1-f12", prompt: "Buddhism", answer: "A religion based on the teachings of the Buddha." },
      { id: "u1-f13", prompt: "Theravada Buddhism", answer: "Buddhist sect that focuses on the wisdom of the Buddha" },
      { id: "u1-f14", prompt: "Mahayana Buddhism", answer: "Also known as popular Buddhism, is allows people more ways to reach enlightenment and boddhisatvas can help you reach enlightenment." },
      { id: "u1-f15", prompt: "Tibetan Buddhism", answer: "makes great use of ritual" },
      { id: "u1-f16", prompt: "Syncretic", answer: "A religion that combines several traditions" },
      { id: "u1-f17", prompt: "Chan Buddhism", answer: "Known as Zen in Japan; stressed meditation and appreciation of natural and artistic beauty; popular with members of elite Chinese society" },
      { id: "u1-f18", prompt: "Zen Buddhism", answer: "a Japanese school of Mahayana Buddhism emphasizing the value of meditation and intuition." },
      { id: "u1-f19", prompt: "Filial Piety", answer: "In Confucian thought, one of the virtues to be cultivated, a love and respect for one's parents and ancestors." },
      { id: "u1-f20", prompt: "Neo-Confucianism", answer: "term that describes the resurgence of Confucianism and the influence of Confucian scholars during the T'ang Dynasty; a unification of Daoist or Buddhist metaphysics with Confucian pragmatism" },
      { id: "u1-f21", prompt: "Heian Period", answer: "(794 - 1100) move the capital to Heian; 300 years of developing a new culture; growth of large estates; arts and literature of china flourished; elaborate court life; personal diaries (pillow book and the take of genji); moved away from chinese culture" },
      { id: "u1-f22", prompt: "Feudalism", answer: "A political system in which nobles are granted the use of lands that legally belong to their king, in exchange for their loyalty, military service, and protection of the people who live on the land" },
      { id: "u1-f23", prompt: "Mamluk Sultanate", answer: "A political unit in Egypt established by Mamluks. Defeated the Mongols and the Ayyubid Sultanate. Did not set up a consistent, hereditary line of succession. Failed to adapt to new warfare and were eventually defeated by the Ottomans." },
      { id: "u1-f24", prompt: "Seljuk Turks", answer: "nomadic Turks from Asia who conquered Baghdad in 1055 and allowed the caliph to remain only as a religious leader. they governed strictly" },
      { id: "u1-f25", prompt: "Sultan", answer: "Military and political leader with absolute authority over a Muslim country" },
      { id: "u1-f26", prompt: "Mongols", answer: "A people mentioned as early as the Tang Empire, living as nomads in northern Eurasia. After 1206 they established an enormous empire under Genghis Khan." },
      { id: "u1-f27", prompt: "Abbasid Caliphate", answer: "(750-1258 CE) The caliphate, after the Umayyads, who focused more on administration than conquering. Had a bureaucracy that any Muslim could be a part of." },
      { id: "u1-f28", prompt: "Mamluks", answer: "Under the Islamic system of military slavery, Turkic military slaves who formed an important part of the armed forces of the Abbasid Caliphate. Eventually founded their own state in Egypt and Syria." },
      { id: "u1-f29", prompt: "Islam", answer: "A religion based on the teachings of the prophet Mohammed which stresses belief in one god (Allah), Paradise and Hell, and a body of law written in the Quran." },
      { id: "u1-f30", prompt: "Pillars of Islam", answer: "The five core practices required of Muslims: profession of faith, regular prayer, charitable giving, fasting during Ramadan, and pilgrimage to Mecca." },
      { id: "u1-f31", prompt: "Muhammad", answer: "Founder of Islam" },
      { id: "u1-f32", prompt: "Crusaders", answer: "Christians of Europe in the 11th, 12th, and 13th centuries that fought for the recovery of the Holy Land from the Muslims" },
      { id: "u1-f33", prompt: "Sufism", answer: "An Islamic mystical tradition that desired a personal union with God through intuition rather than rational deduction. Contributed greatly to the spread of Islam." },
      { id: "u1-f34", prompt: "House of Wisdom", answer: "a center of learning established in Baghdad in the 800s" },
      { id: "u1-f35", prompt: "Baghdad", answer: "Capital of Abbasid dynasty located in Iraq near ancient Persian capital of Ctesiphon" },
      { id: "u1-f36", prompt: "Nasir al-Din al-Tusi", answer: "Persian scholar who accepted evolution and discussed variation and kinship of nonliving matter, plants, and animals" },
      { id: "u1-f37", prompt: "Vijayanagara Empire", answer: "Important early modern Indian kingdom centered in the Deccan Plateau, known for its land revenue system and elite Nayaka warriors." },
      { id: "u1-f38", prompt: "Rajput Kingdoms", answer: "Set of kingdoms in India that arose after the fall of the Gupta dynasty, ruled by land-owning Kshatriyas." },
      { id: "u1-f39", prompt: "Delhi Sultanate", answer: "(1206-1526 CE) The successors of Mahmud of Ghazni who directed their goals to creating this empire in India." },
      { id: "u1-f40", prompt: "Srivijaya Empire", answer: "flourished from the 600s to 1200s; controlled the Strait of Malacca" },
      { id: "u1-f41", prompt: "proselytize", answer: "to convert someone to a faith, belief, or cause" },
      { id: "u1-f42", prompt: "Bhakti Movement", answer: "An immensely popular development in Hinduism, advocating intense devotion toward a particular deity." },
      { id: "u1-f43", prompt: "Urdu", answer: "A Persian-influenced literary form of Hindi written in Arabic characters and used as a literary language since the 1300s." },
      { id: "u1-f44", prompt: "Mississippian Culture", answer: "Last of the mound-building cultures of North America; featured large towns and ceremonial centers; lacked stone architecture." },
      { id: "u1-f45", prompt: "Matrilineal Society", answer: "a society in which descent & inheritance come through the mother's kinship line" },
      { id: "u1-f46", prompt: "Cahokia", answer: "an ancient settlement of southern Indians, located near present day St. Louis, it served as a trading center." },
      { id: "u1-f47", prompt: "Mound Builders", answer: "native american civilizations of the eastern region of north america that created distinctive earthen works for burial places" },
      { id: "u1-f48", prompt: "city-states", answer: "a city that with its surrounding territory forms an independent state." },
      { id: "u1-f49", prompt: "Mexica", answer: "The name given to themselves by the Aztec people" },
      { id: "u1-f50", prompt: "Theocracy", answer: "A government controlled by religious leaders" },
      { id: "u1-f51", prompt: "human sacrifice", answer: "a person who is killed as part of a religious ritual" },
      { id: "u1-f52", prompt: "Pachacuti", answer: "Ruler of Inca society from 1438 to 1471; launched military campaigns that gave Incas control of the region." },
      { id: "u1-f53", prompt: "Mita System", answer: "The system recruiting workers for particularly difficult and dangerous chores that free laborers would not accept." },
      { id: "u1-f54", prompt: "Carpa Nan", answer: "during Incan rule, this is a massive roadway system made possible by captive labor, stretched 25,000 miles" },
      { id: "u1-f55", prompt: "Temple of the Sun", answer: "Inca religious center located at Cuzco; center of state religion; held mummies of past Incas" },
      { id: "u1-f56", prompt: "Animism", answer: "Belief that objects, such as plants and stones, or natural events, have a discrete spirit and conscious life." },
      { id: "u1-f57", prompt: "Kin-based networks", answer: "Relation between two or more people that is based on common ancestry or marriage" },
      { id: "u1-f58", prompt: "Swahili", answer: "Bantu language with Arabic loanwords spoken in coastal regions of East Africa." },
      { id: "u1-f59", prompt: "Zanj Rebellion", answer: "A series of revolts by slaves working on sugar plantations in Mesopotamia, led by Ali bin Muhammad" },
      { id: "u1-f60", prompt: "Trans-Saharan Trade", answer: "route across the sahara desert. Major trade route that traded for gold and salt." },
      { id: "u1-f61", prompt: "Indian Ocean Trade", answer: "world's richest maritime trading network that was essential for the prosperity of East Africa" },
      { id: "u1-f62", prompt: "Indian Ocean Slave Trade", answer: "E. Africa -> Middle East & India/ Similar conditions to the Atlantic Slave Trade/ Cultural Diffusion" },
      { id: "u1-f63", prompt: "chief", answer: "leader" },
      { id: "u1-f64", prompt: "Ghana", answer: "First known kingdom in sub-Saharan West Africa; famous for gold and salt trade." },
      { id: "u1-f65", prompt: "Mali", answer: "Empire created by indigenous Muslims in western Sudan; famous for its role in the trans-Saharan gold trade." },
      { id: "u1-f66", prompt: "Zimbabwe", answer: "a country of southern Africa where various Bantu peoples migrated during the first millennium." },
      { id: "u1-f67", prompt: "Ethiopia", answer: "A Christian kingdom that developed in the highlands of eastern Africa; retained Christianity in the face of Muslim expansion." },
      { id: "u1-f68", prompt: "Magna Carta", answer: "the royal charter of political rights given to rebellious English barons by King John in 1215" },
      { id: "u1-f69", prompt: "English Parliament", answer: "Firmly established by the 14th century; composed of the House of Lords and the House of Commons." },
      { id: "u1-f70", prompt: "Manors", answer: "Large farm estates of the Middle Ages that were owned by nobles who ruled over the peasants." },
      { id: "u1-f71", prompt: "Manorial System", answer: "an economic system in the Middle Ages that was built around large estates called manors" },
      { id: "u1-f72", prompt: "three-field system", answer: "A rotational system for agriculture in which one field grows grain, one grows legumes, and one lies fallow." },
      { id: "u1-f73", prompt: "Serfs", answer: "A person who lived on and farmed a lords land in feudal times" },
      { id: "u1-f74", prompt: "Primogeniture", answer: "right of inheritance belongs exclusively to the eldest son" },
      { id: "u1-f75", prompt: "Bourgeoisie", answer: "middle class" },
      { id: "u1-f76", prompt: "Burghers", answer: "Merchant class town dwellers" },
      { id: "u1-f77", prompt: "Estates", answer: "social classes" },
      { id: "u1-f78", prompt: "Otto I", answer: "10th century ruler who became emperor of the German states through close ties with the Catholic church" },
      { id: "u1-f79", prompt: "Crusades", answer: "A series of holy wars from 1096-1270 AD undertaken by European Christians to free the Holy Land from Muslim rule." },
      { id: "u1-f80", prompt: "Marco Polo", answer: "Venetian merchant and traveler whose accounts stimulated interest in Asian trade." },
      { id: "u1-f81", prompt: "Renaissance", answer: "rebirth; following the Middle Ages, a movement that centered on the revival of interest in classical learning." },
      { id: "u1-f82", prompt: "Humanism", answer: "A Renaissance intellectual movement in which thinkers studied classical texts and focused on human potential." },
      { id: "u1-f83", prompt: "Lay Investiture Controversy", answer: "A disagreement between Henry IV and Pope Gregory VII about who should appoint church officials." },
      { id: "u1-f84", prompt: "Great Schism", answer: "in 1054 this severing of relations divided medieval Christianity into Eastern Orthodox and Roman Catholic branches." },
      { id: "u1-f85", prompt: "Antisemitism", answer: "Prejudice against Jews" },
      { id: "u1-f86", prompt: "Little Ice Age", answer: "A century-long period of cool climate that began in the 1590s; notable ill effects on agriculture." }
    ]
  },
  {
    id: 2,
    title: "Networks of Exchange",
    period: "1200-1450",
    description: "Trade routes like the Silk Road, Indian Ocean, and Trans-Saharan.",
    questions: [
      {
        id: "u2-q1",
        question: "Which traveler is famous for his 14th-century accounts of the Islamic world?",
        options: ["Marco Polo", "Ibn Battuta", "Zheng He", "Vasco da Gama"],
        correctAnswer: "Ibn Battuta",
        explanation: "Ibn Battuta traveled extensively across Afro-Eurasia, documenting Islamic societies."
      }
    ],
    flashcards: [
      { id: "u2-f1", prompt: "Silk road", answer: "An ancient trade route between China and the Mediterranean Sea" },
      { id: "u2-f2", prompt: "Trans-Saharan Trade Route", answer: "gold-salt trade; linked North and West Africa; across Sahara Desert; spread Islam" },
      { id: "u2-f3", prompt: "Indian Ocean Trade", answer: "connected to Europe, Africa, and China.; worlds richest maritime trading network and an area of rapid Muslim expansion." },
      { id: "u2-f4", prompt: "Mongols", answer: "People from Central Asia when united ended up creating the largest single land empire in history." },
      { id: "u2-f5", prompt: "Camel Saddle", answer: "An invention which gives camel riders more stability on the animal and its invention and basic idea traveled along the Trans-Saharan Caravan Trade Route" },
      { id: "u2-f6", prompt: "Caravans", answer: "Groups of people traveling together for safety over long distances" },
      { id: "u2-f7", prompt: "Ibn Battuta", answer: "Moroccan Muslim scholar, the most widely traveled individual of his time. He wrote a detailed account of his visits to Islamic lands from China to Spain and the western Sudan." },
      { id: "u2-f8", prompt: "Marco Polo", answer: "Venetian merchant and traveler. His accounts of his travels to China offered Europeans a firsthand view of Asian lands and stimulated interest in Asian trade." },
      { id: "u2-f9", prompt: "Margery Kempe", answer: "Wrote the Book of Margery Kempe - considered the 1st autobiography in the Eng. language. Chronicles her pilgrimages to holy sites in Europe and Asia." },
      { id: "u2-f10", prompt: "Genghis Khan", answer: "Also known as Temujin; he united the Mongol tribes into an unstoppable fighting force; created largest single land empire in history." },
      { id: "u2-f11", prompt: "Khanate", answer: "one of several separate territories into which Genghis Khan's empire was split, each under the rule of one of his sons" },
      { id: "u2-f12", prompt: "Bubonic Plague", answer: "disease brought to Europe from the Mongols during the Middle Ages. It killed 1/3 of the population" },
      { id: "u2-f13", prompt: "Caravansaries", answer: "an inn where desert travelers found food and shelter" },
      { id: "u2-f14", prompt: "overgrazing", answer: "Destruction of vegetation caused by too many grazing animals consuming the plants in a particular area so they cannot recover" },
      { id: "u2-f15", prompt: "deforestation", answer: "The removal of trees faster than forests can replace themselves." },
      { id: "u2-f16", prompt: "soil erosion", answer: "wearing away of surface soil by water and wind" },
      { id: "u2-f17", prompt: "Champa Rice", answer: "a quick-maturing, drought resistant rice brought to China from Vietnam" },
      { id: "u2-f18", prompt: "Diffusion", answer: "The process of spread of an item or trend from one place to another over time" },
      { id: "u2-f19", prompt: "Zheng He", answer: "(1371-1433?) Chinese naval explorer who sailed along most of the coast of Asia, Japan, and half way down the east coast of Africa before his death." },
      { id: "u2-f20", prompt: "Lateen sail", answer: "triangular sail that made it possible to sail against the wind; used in the Indian Ocean trade" },
      { id: "u2-f21", prompt: "Stern Rudder", answer: "controls the sailing direction of a ship" },
      { id: "u2-f22", prompt: "Astrolabe", answer: "An instrument used by sailors to determine their location by observing the position of the stars and planets" },
      { id: "u2-f23", prompt: "Magnetic Compass", answer: "Chinese invention that aided navigation by showing which direction was north" },
      { id: "u2-f24", prompt: "Monsoon winds", answer: "The seasonal wind of the Indian Ocean and southern Asia, blowing from the southwest in summer and from the northeast in winter." },
      { id: "u2-f25", prompt: "Diaspora", answer: "A dispersion of people from their homeland" },
      { id: "u2-f26", prompt: "Yuan dynasty", answer: "(1279-1368) Dynasty in China set up by the Mongols under the leadership of Kublai Khan, replaced the Song" },
      { id: "u2-f27", prompt: "Ming Dynasty", answer: "(1368-1644) Chinese dynasty that took over after the fall of the Yuan dynasty" },
      { id: "u2-f28", prompt: "Pax Mongolica", answer: "Era of relative peace and stability created by the Mongol Empire" },
      { id: "u2-f29", prompt: "Junk", answer: "A very large flat bottom sailing ship produced in the Tang and Song Empires, specially designed for long-distance commercial travel." },
      { id: "u2-f30", prompt: "Hanseatic League", answer: "(founded about 1241) An economic and defensive alliance of the free towns in northern Germany, most powerful in the fourteenth century." },
      { id: "u2-f31", prompt: "Nomadic", answer: "wandering from place to place" },
      { id: "u2-f32", prompt: "Mansa Musa", answer: "Emperor of the kingdom of Mali in Africa. He made a famous pilgrimage to Mecca and established trade routes to the Middle East." },
      { id: "u2-f33", prompt: "Ortogh", answer: "Mongol empire, commercial alliances created to minimize risk" },
      { id: "u2-f34", prompt: "Kashgar", answer: "Located on Western edge of China where Northern and Southern routes of the Silk Road met" },
      { id: "u2-f35", prompt: "Samarkand", answer: "City in modern day Uzbekistan, stopping point on the Silk Road between China and Mediterranean" },
      { id: "u2-f36", prompt: "flying cash", answer: "Enabled merchants to deposit good or cash at one location and draw the equivalent in cash or merchandise elsewhere in China." },
      { id: "u2-f37", prompt: "Paper money", answer: "legal currency issued on paper; it developed in China as a convenient alternative to metal coins" },
      { id: "u2-f38", prompt: "Bill of exchange", answer: "a document stating that the holder was legally promised payment of a set amount on a set date" },
      { id: "u2-f39", prompt: "Banking Houses", answer: "an establishment or office in which, or a firm by whom, banking is done, Emerged in Europe" },
      { id: "u2-f40", prompt: "Khan", answer: "A Mongol ruler" },
      { id: "u2-f41", prompt: "Batu", answer: "Grandson of Genghis Khan and ruler of the Golden Horde; invaded Russia in 1236." },
      { id: "u2-f42", prompt: "Golden Horde", answer: "Mongol khanate founded by Genghis Khan's grandson Batu. It was based in southern Russia and quickly adopted both the Turkic language and Islam." },
      { id: "u2-f43", prompt: "Moscow", answer: "Major city in Russia" },
      { id: "u2-f44", prompt: "Hulegu", answer: "Grandson of Genghis Khan and ruler of Ilkhan khanate; captured and destroyed Abbasid Baghdad." },
      { id: "u2-f45", prompt: "Il-Khanate", answer: "Mongol empire that ruled over Iran (Persia) & the Middle East" },
      { id: "u2-f46", prompt: "Kublai Khan", answer: "Mongolian emperor of China and grandson of Genghis Khan who completed his grandfather's conquest of China" },
      { id: "u2-f47", prompt: "White lotus society", answer: "Secret religious society dedicated to overthrow of Yuan dynasty in China; typical of peasant resistance to Mongol rule" },
      { id: "u2-f48", prompt: "Malacca", answer: "(founded about 1400) Port city in the modern Southeast Asian country of Malaysia, trading center on the Strait of Malacca." },
      { id: "u2-f49", prompt: "Gujarat", answer: "Region of western India famous for trade and manufacturing." },
      { id: "u2-f50", prompt: "Swahili City States", answer: "dominated trade along the east African coast" },
      { id: "u2-f51", prompt: "Spice Islands", answer: "Modern day Malaysia and Indonesia, known for its spices like nutmeg, cinnamon, cloves, and cardamom" },
      { id: "u2-f52", prompt: "Calicut", answer: "Great spice port on west coast of India" },
      { id: "u2-f53", prompt: "Mali", answer: "Power trading society in West Africa, rich in gold and ivory" },
      { id: "u2-f54", prompt: "Sundiata", answer: "the founder of Mali empire. He crushed his enemies and won control of the gold trade routes" },
      { id: "u2-f55", prompt: "Songhai Kingdom", answer: "Largest African trading kingdom during its time; Helped rebel against Mali" },
      { id: "u2-f56", prompt: "Timbuktu", answer: "Mali trading city that became a center of wealth and learning" },
      { id: "u2-f57", prompt: "Mecca", answer: "the holiest city of Islam; Muhammad's birthplace" },
      { id: "u2-f58", prompt: "Swahili", answer: "Bantu language with Arabic loanwords spoken in coastal regions of East Africa." },
      { id: "u2-f59", prompt: "Urdu", answer: "official language of Pakistan, mixed grammatical patterns of Hindi with the vocabulary of Arabic and some elements of Farsi" },
      { id: "u2-f60", prompt: "Hangzhou", answer: "China's capital during the Song dynasty, with a population of more than a million people." },
      { id: "u2-f61", prompt: "Constantinople", answer: "Capital of the Byzantine Empire" },
      { id: "u2-f62", prompt: "Money economy", answer: "an economic system based on money rather than barter" }
    ]
  },
  {
    id: 3,
    title: "Land-Based Empires",
    period: "1450-1750",
    description: "The rise of the Manchu, Mughal, Ottoman, and Safavid empires.",
    questions: [
      {
        id: "u3-q1",
        question: "The 'Devshirme' system was used by which empire to recruit soldiers?",
        options: ["Mughal", "Ottoman", "Safavid", "Qing"],
        correctAnswer: "Ottoman",
        explanation: "The Ottomans took Christian boys, converted them, and trained them as Janissaries."
      }
    ],
    flashcards: [
      { id: "u3-f1", prompt: "Qing Dynasty", answer: "The last imperial dynasty of China (1644-1912), founded by the Manchus. Expanded borders to include Taiwan, Tibet, and Mongolia." },
      { id: "u3-f2", prompt: "Manchus", answer: "Northeast Asian peoples who defeated the Ming Dynasty and founded the Qing Dynasty in 1644." },
      { id: "u3-f3", prompt: "Mughal Empire", answer: "Muslim state (1526-1857) exercising dominion over most of India in the sixteenth and seventeenth centuries." },
      { id: "u3-f4", prompt: "Ottoman Empire", answer: "Islamic state founded by Osman in northwestern Anatolia. Based at Istanbul from 1453-1922, encompassing Middle East, North Africa, and SE Europe." },
      { id: "u3-f5", prompt: "Safavids", answer: "A Shi'ite Muslim dynasty that ruled in Persia (16th-18th centuries) with a mixed culture of Persians, Ottomans, and Arabs." },
      { id: "u3-f6", prompt: "Songhai", answer: "West African empire that conquered Mali and controlled trade into the 16th century; eventually defeated by Moroccans." },
      { id: "u3-f7", prompt: "Devshirme", answer: "'Selection' in Turkish. System where Christian boys were taken by the Ottoman state to serve as Janissaries." },
      { id: "u3-f8", prompt: "Janissary", answer: "Elite Ottoman guard recruited from Christian populations through the devshirme system; often converted to Islam." },
      { id: "u3-f9", prompt: "Samurai", answer: "Class of warriors in feudal Japan who pledged loyalty to a noble in return for land." },
      { id: "u3-f10", prompt: "Divine Right", answer: "The idea that monarchs are God's representatives on earth and are therefore answerable only to God." },
      { id: "u3-f11", prompt: "Absolute Monarchy", answer: "System of government where the head of state is a hereditary position and the monarch has almost complete power." },
      { id: "u3-f12", prompt: "Versailles", answer: "Palace constructed by Louis XIV outside of Paris to glorify his rule and subdue the nobility." },
      { id: "u3-f13", prompt: "Zamindars", answer: "Archaic tax system of the Mughal empire where decentralized lords collected tribute for the emperor." },
      { id: "u3-f14", prompt: "Taj Mahal", answer: "Mausoleum at Agra built by Shah Jahan (1649) for his wife; illustrates syncretic blend of Indian and Arabic styles." },
      { id: "u3-f15", prompt: "Tax farming", answer: "System where the government hires private individuals to collect taxes; used by Ottoman rulers to generate money for expansion." },
      { id: "u3-f16", prompt: "Protestant Reformation", answer: "Religious reform movement begun by Martin Luther in 1519; resulted in several new Christian denominations." },
      { id: "u3-f17", prompt: "95 Theses", answer: "Arguments written by Martin Luther against the Catholic church, posted in 1517; led to his excommunication." },
      { id: "u3-f18", prompt: "Martin Luther", answer: "German monk who criticized the Roman Catholic Church and began the Protestant Reformation in 1517." },
      { id: "u3-f19", prompt: "Counter Reformation", answer: "The Catholic Church's reaction to the Reformation; reaffirmed papal authority and created the Jesuits." },
      { id: "u3-f20", prompt: "Jesuits", answer: "Society of Jesus; teaching and missionary order founded to resist the spread of Protestantism." },
      { id: "u3-f21", prompt: "Indulgence", answer: "A pardon given by the Roman Catholic Church in return for repentance for sins." },
      { id: "u3-f22", prompt: "Simony", answer: "The buying and selling of church offices." },
      { id: "u3-f23", prompt: "Inquisition", answer: "Roman Catholic tribunal for investigating and prosecuting charges of heresy." },
      { id: "u3-f24", prompt: "Thirty Years War", answer: "(1618-1648) War within the Holy Roman Empire between Protestants and Catholics; ended with Treaty of Westphalia." },
      { id: "u3-f25", prompt: "John Calvin", answer: "French theologian who developed Calvinism; believed in the doctrine of predestination." },
      { id: "u3-f26", prompt: "Sikhism", answer: "Monotheistic religion founded in northern India (16th century) combining elements of Hinduism and Islam." },
      { id: "u3-f27", prompt: "Shogunate", answer: "Japanese system of government under a shogun (military warlord) while the emperor was a figurehead." },
      { id: "u3-f28", prompt: "Bazaar", answer: "A covered market in Islamic cities." },
      { id: "u3-f29", prompt: "Byzantine Empire", answer: "(330-1453) Eastern half of the Roman Empire; capital was Constantinople (now Istanbul)." },
      { id: "u3-f30", prompt: "Persians", answer: "Ethnic group settled in modern-day Iran; rivals for control of Mesopotamia." },
      { id: "u3-f31", prompt: "Shia Islam", answer: "The sect of Islam practiced primarily in Persia." },
      { id: "u3-f32", prompt: "Sunni Islam", answer: "The denomination of Islam practiced by the majority of Muslims." },
      { id: "u3-f33", prompt: "Tenochtitlan", answer: "Capital of the Aztec Empire, located on an island in Lake Texcoco; Mexico City was built on its ruins." },
      { id: "u3-f34", prompt: "Hernan Cortes", answer: "Spanish conquistador who defeated the Aztecs and conquered Mexico (1485-1547)." },
      { id: "u3-f35", prompt: "Smallpox", answer: "Highly contagious viral disease responsible for killing vast numbers of Native Americans." },
      { id: "u3-f36", prompt: "Mita System", answer: "Tribute system to the Inca government in the form of labor for public service projects." },
      { id: "u3-f37", prompt: "Timbuktu", answer: "City in Mali that became a major terminus of trans-Saharan trade and a center of Islamic learning." },
      { id: "u3-f38", prompt: "Berbers", answer: "North African, primarily Muslim people living in settled or nomadic tribes from Morocco to Egypt." },
      { id: "u3-f39", prompt: "Epic of Sundiata", answer: "Epic poem of the Malinke people telling the story of the founder of the Mali Empire." },
      { id: "u3-f40", prompt: "African Religion", answer: "Traditional beliefs emphasizing ancestral spirits, sacrifices, and charms rather than missionary impulses." },
      { id: "u3-f41", prompt: "Peter the Great", answer: "Russian Tsar (r. 1689-1725) who westernized Russia and moved the capital to St. Petersburg." },
      { id: "u3-f42", prompt: "Eastern Orthodox Church", answer: "Christian followers in the Eastern Roman Empire; split from the Roman Catholic Church." },
      { id: "u3-f43", prompt: "Cossacks", answer: "Peoples of the Russian Empire who lived as herders or mercenaries; led the conquest of Siberia." },
      { id: "u3-f44", prompt: "Boyars", answer: "Russian landholding aristocrats; possessed less political power than western European counterparts." },
      { id: "u3-f45", prompt: "Hagia Sophia", answer: "Famous example of Byzantine architecture; converted into a Mosque by the Ottomans." },
      { id: "u3-f46", prompt: "Shari'ah", answer: "Islamic law code drawn up by scholars to regulate daily life." },
      { id: "u3-f47", prompt: "Imam", answer: "The man who leads prayers in a mosque." },
      { id: "u3-f48", prompt: "The Thousand and One Nights", answer: "Group of tales set in Baghdad, including romances and adventures like Aladdin." },
      { id: "u3-f49", prompt: "Forbidden City", answer: "Ming Dynasty monument in Beijing built for the emperor; commoners and foreigners were forbidden to enter." },
      { id: "u3-f50", prompt: "Aztec Tribute System", answer: "System that brought food and sacrificial victims into the empire from conquered territories." }
    ]
  },
  {
    id: 4,
    title: "Transoceanic Interconnections",
    period: "1450-1750",
    description: "Maritime exploration and the Columbian Exchange.",
    questions: [
      {
        id: "u4-q1",
        question: "Which crop from the Americas had the greatest impact on Afro-Eurasian populations?",
        options: ["Tobacco", "Potato", "Coffee", "Sugar"],
        correctAnswer: "Potato",
        explanation: "The potato provided high caloric value and led to significant population growth."
      }
    ],
    flashcards: [
      { id: "u4-f1", prompt: "Mercantilism", answer: "The economic theory that trade generates wealth and is stimulated by the accumulation of profitable balances." }
    ]
  },
  {
    id: 5,
    title: "Revolutions",
    period: "1750-1900",
    description: "Enlightenment, American, French, and Haitian revolutions.",
    questions: [
      {
        id: "u5-q1",
        question: "Who wrote 'The Wealth of Nations' in 1776?",
        options: ["John Locke", "Adam Smith", "Karl Marx", "Jean-Jacques Rousseau"],
        correctAnswer: "Adam Smith",
        explanation: "Adam Smith is considered the father of modern capitalism."
      }
    ],
    flashcards: [
      { id: "u5-f1", prompt: "Toussaint Louverture", answer: "The leader of the Haitian Revolution." }
    ]
  },
  {
    id: 6,
    title: "Consequences of Industrialization",
    period: "1750-1900",
    description: "Imperialism and the global shift in power.",
    questions: [
      {
        id: "u6-q1",
        question: "The Berlin Conference of 1884-1885 regulated European colonization of which continent?",
        options: ["Asia", "South America", "Africa", "Australia"],
        correctAnswer: "Africa",
        explanation: "The conference formalized the 'Scramble for Africa'."
      }
    ],
    flashcards: [
      { id: "u6-f1", prompt: "White Man's Burden", answer: "The belief that Europeans had a duty to 'civilize' other races." }
    ]
  },
  {
    id: 7,
    title: "Global Conflict",
    period: "1900-present",
    description: "World War I, World War II, and the interwar period.",
    questions: [
      {
        id: "u7-q1",
        question: "The assassination of Archduke Franz Ferdinand triggered which war?",
        options: ["WWII", "WWI", "Cold War", "Crimean War"],
        correctAnswer: "WWI",
        explanation: "The assassination in Sarajevo was the immediate cause of World War I."
      }
    ],
    flashcards: [
      { id: "u7-f1", prompt: "The Holocaust", answer: "The systematic killing of 6 million Jews by the Nazi regime." }
    ]
  },
  {
    id: 8,
    title: "Cold War & Decolonization",
    period: "1900-present",
    description: "The struggle between capitalism and communism.",
    questions: [
      {
        id: "u8-q1",
        question: "The 'Proxy War' in which country ended in a stalemate at the 38th parallel?",
        options: ["Vietnam", "Korea", "Afghanistan", "Angola"],
        correctAnswer: "Korea",
        explanation: "The Korean War ended in an armistice with the border near the original line."
      }
    ],
    flashcards: [
      { id: "u8-f1", prompt: "Containment", answer: "The policy of preventing the spread of communism." }
    ]
  },
  {
    id: 9,
    title: "Globalization",
    period: "1900-present",
    description: "Technological advances and global integration.",
    questions: [
      {
        id: "u9-q1",
        question: "Which organization was created in 1995 to regulate international trade?",
        options: ["UN", "NATO", "WTO", "IMF"],
        correctAnswer: "WTO",
        explanation: "The World Trade Organization replaced the GATT."
      }
    ],
    flashcards: [
      { id: "u9-f1", prompt: "Green Revolution", answer: "The rapid increase in agricultural production in the mid-20th century." }
    ]
  }
];