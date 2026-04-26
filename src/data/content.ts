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
      // ... 48 more questions would go here
    ],
    flashcards: [
      { id: "u1-f1", prompt: "The Chinese philosophy emphasizing social hierarchy and filial piety.", answer: "Confucianism" },
      { id: "u1-f2", prompt: "The Islamic state that ruled much of India from the 13th to 16th centuries.", answer: "Delhi Sultanate" }
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
      { id: "u2-f1", prompt: "The Mongol peace that facilitated trade across Eurasia.", answer: "Pax Mongolica" }
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
      { id: "u3-f1", prompt: "The Russian ruler who westernized the empire in the late 17th century.", answer: "Peter the Great" }
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
      { id: "u4-f1", prompt: "The economic theory that trade generates wealth and is stimulated by the accumulation of profitable balances.", answer: "Mercantilism" }
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
      { id: "u5-f1", prompt: "The leader of the Haitian Revolution.", answer: "Toussaint Louverture" }
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
      { id: "u6-f1", prompt: "The belief that Europeans had a duty to 'civilize' other races.", answer: "White Man's Burden" }
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
      { id: "u7-f1", prompt: "The systematic killing of 6 million Jews by the Nazi regime.", answer: "The Holocaust" }
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
      { id: "u8-f1", prompt: "The policy of preventing the spread of communism.", answer: "Containment" }
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
      { id: "u9-f1", prompt: "The rapid increase in agricultural production in the mid-20th century.", answer: "Green Revolution" }
    ]
  }
];