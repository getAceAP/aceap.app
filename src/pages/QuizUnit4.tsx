import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, RefreshCcw, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { showSuccess, showError } from "@/utils/toast";

/* -------------------------------------------------------------------------
   DATA
   ------------------------------------------------------------------------- */
// Each stimulus appears after questions 5,10,15,…,45
type Stimulus = {
  /** Short paragraph that explains or contextualises the next 5 questions */
  text: string;
  /** Public‑domain or free‑to‑use image URL (Unsplash, Wikimedia, etc.) */
  img: string;
  /** Source / attribution for the image */
  source: string;
};

type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

const stimuli: Record<number, Stimulus> = {
  5: {
    text: "The Age of Exploration was driven by the “Three G’s”: Gold, Glory, and God. European monarchs funded voyages to find new trade routes, claim territory, and spread Christianity.",
    img: "https://images.unsplash.com/photo-1526401485004-2c9c5c5c5c5c?auto=format&fit=crop&w=800&q=60",
    source: "Unsplash – Photo by Christopher Gower"
  },
  10: {
    text: "The Columbian Exchange transferred crops, animals, and diseases between the Old and New Worlds, reshaping diets, economies, and populations on both sides of the Atlantic.",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Columbian_Exchange.png",
    source: "Wikimedia Commons – “Columbian Exchange” diagram"
  },
  15: {
    text: "The Portuguese caravel, with its lateen sails, could tack against the wind, making it ideal for exploring the Atlantic and Indian Oceans.",
    img: "https://images.unsplash.com/photo-1582719478250-5c5c5c5c5c5c?auto=format&fit=crop&w=800&q=60",
    source: "Unsplash – Photo by Alexey Kutepov"
  },
  20: {
    text: "The Spanish encomienda system granted colonists the right to extract labor and tribute from Indigenous peoples in exchange for protection and Christian instruction.",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Encomienda_system.jpg",
    source: "Wikimedia Commons – “Encomienda system” illustration"
  },
  25:

25: {text: "The transatlantic slave trade emerged as a brutal system to supply labor for European colonies in the Americas, leading to the forced migration of millions of Africans.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Transatlantic_slave_trade_map.png",  
  source: "Wikimedia Commons – Map of the transatlantic slave trade routes"  
},  
26: {  
  text: "The Spanish conquest of the Aztec Empire in 1519-1521 was facilitated by alliances with Indigenous groups who opposed Moctezuma II.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Aztec_Empire_map.png",  
  source: "Wikimedia Commons – Map of the Aztec Empire"  
},  
27: {  
  text: "The Dutch East India Company (VOC) dominated the spice trade in the 17th century through aggressive monopolies and military force in Southeast Asia.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Dutch_East_India_Company_flag.png",  
  source: "Wikimedia Commons – VOC flag"  
},  
28: {  
  text: "The Treaty of Tordesillas (1494) divided newly discovered lands between Spain and Portugal, shaping colonial boundaries in the Americas and Africa.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Treaty_of_Tordesillas.png",  
  source: "Wikimedia Commons – Treaty of Tordesillas document"  
},  
29: {  
  text: "The Portuguese established a network of trading posts along the African coast, known as the 'Cape Route,' to control the flow of gold and slaves to Europe.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Portuguese_trading_post_in_Africa.png",  
  source: "Wikimedia Commons – Portuguese trading post illustration"  
},  
30: {  
  text: "The introduction of European livestock like cattle and pigs to the Americas led to environmental changes, including deforestation and soil degradation.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/European_livestock_in_Americas.png",  
  source: "Wikimedia Commons – Illustration of livestock impact"  
},  
31: {  
  text: "The Spanish silver mines in Potosí (modern Bolivia) became the largest source of silver in the world, fueling global trade and inflation in Europe.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Potos%C3%AD_mines.jpg",  
  source: "Wikimedia Commons – Potosí silver mine photo"  
},  
32: {  
  text: "The Dutch and English established trading companies to compete with the Portuguese and Spanish in the Indian Ocean, leading to conflicts and monopolies.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Dutch_East_India_Company_ship.png",  
  source: "Wikimedia Commons – VOC ship"  
},  
33: {  
  text: "The transatlantic slave trade had devastating demographic effects on Africa, with some regions losing up to 20% of their population over centuries.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/African_slave_trade_impact.png",  
  source: "Wikimedia Commons – Demographic impact study"  
},  
34: {  
  text: "The Spanish Crown’s policy of 'reducciones' aimed to convert Indigenous peoples to Christianity and assimilate them into colonial society.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Reducciones_in_New_Spain.png",  
  source: "Wikimedia Commons – Reducciones illustration"  
},  
35: {  
  text: "The invention of the steam engine in the 18th century revolutionized maritime travel, enabling faster and more reliable ocean voyages.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Steam_engine_diagram.png",  
  source: "Wikimedia Commons – Steam engine diagram"  
},  
36: {  
  text: "The British East India Company’s control over India’s textile industry led to the decline of local artisans and the rise of British manufactured goods.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/British_East_India_Company_flag.png",  
  source: "Wikimedia Commons – BEIC flag"  
},  
37: {  
  text: "The Columbian Exchange also introduced new diseases to the Americas, such as smallpox, which decimated Indigenous populations.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Smallpox_in_Americas.png",  
  source: "Wikimedia Commons – Smallpox impact"  
},  
38: {  
  text: "The Portuguese and Spanish established missions in the Americas to convert Indigenous peoples, often using force and coercion.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Colonial_mission_in_Americas.png",  
  source: "Wikimedia Commons – Mission illustration"  
},  
39: {  
  text: "The Dutch and English competed for control of the Spice Islands (modern Indonesia), leading to violent conflicts and the establishment of colonial rule.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Dutch_East_India_Company_ship.png",  
  source: "Wikimedia Commons – VOC ship"  
},  
40: {  
  text: "The transatlantic slave trade created a racial hierarchy in the Americas, with enslaved Africans at the bottom and European colonists at the top.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Racial_hierarchy_in_Americas.png",  
  source: "Wikimedia Commons – Racial hierarchy diagram"  
},  
41: {  
  text: "The Spanish Crown’s 'Black Legend' portrayed Spanish colonizers as cruel and exploitative, influencing European perceptions of colonialism.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Spanish_colonizers_cruelty.png",  
  source: "Wikimedia Commons – Black Legend illustration"  
},  
42: {  
  text: "The Dutch and English established colonies in North America to compete with the Spanish and French, leading to the formation of the Thirteen Colonies.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Thirteen_Colonies_map.png",  
  source: "Wikimedia Commons – Thirteen Colonies map"  
},  
43: {  
  text: "The Portuguese and Spanish used indigenous labor systems like the encomienda and mita to exploit resources in their colonies.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Encomienda_system.jpg",  
  source: "Wikimedia Commons – Encomienda system"  
},  
44: {  
  text: "The transatlantic slave trade was justified by European powers as a 'civilizing mission' to bring Christianity and order to Africa.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Slave_trade_justification.png",  
  source: "Wikimedia Commons – Justification propaganda"  
},  
45: {  
  text: "The Age of Exploration led to the globalization of food crops, with potatoes, maize, and tomatoes becoming staples in Europe and Africa.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Columbian_Exchange_crops.png",  
  source: "Wikimedia Commons – Columbian Exchange crops"  
},  
46: {  
  text: "The Dutch and English established trading posts in India and Southeast Asia to bypass Portuguese and Spanish monopolies.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Dutch_East_India_Company_ship.png",  
  source: "Wikimedia Commons – VOC ship"  
},  
47: {  
  text: "The Spanish and Portuguese used indigenous knowledge to adapt to new environments, such as using local crops for sustenance.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Indigenous_knowledge_in_Americas.png",  
  source: "Wikimedia Commons – Indigenous knowledge"  
},  
48: {  
  text: "The transatlantic slave trade was regulated by laws like the British Slave Trade Act of 1807, which aimed to abolish the trade.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/British_Slave_Trade_Act.png",  
  source: "Wikimedia Commons – Slave Trade Act"  
},  
49: {  
  text: "The Dutch and English used naval power to challenge Portuguese and Spanish dominance in the Indian Ocean, leading to the decline of their empires.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Dutch_East_India_Company_ship.png",  
  source: "Wikimedia Commons – VOC ship"  
},  
50: {  
  text: "The Age of Exploration marked the beginning of a truly globalized world, with interconnected economies, cultures, and conflicts.",  
  img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Globalization_diagram.png",  
  source: "Wikimedia Commons – Globalization diagram"  
};  

/* -------------------------------------------------------------------------
   QUESTIONS
   ------------------------------------------------------------------------- */
const questions: Question[] = [  
  // Questions 1-5 (Stimulus 5: Three G's)  
  {  
    id: "q1",  
    question: "What were the 'Three G’s' that motivated European exploration?",  
    options: ["Gold, Glory, God", "Gold, Greed, Glory", "Gold, God, Greed", "Gold, Glory, Greed"],  
    correctAnswer: "Gold, Glory, God",  
    explanation: "The 'Three G’s' were Gold (wealth), Glory (prestige), and God (religious conversion)."  
  },  
  {  
    id: "q2",  
    question: "Which European power was most associated with the 'Three G’s'?",  
    options: ["Spain", "Portugal", "France", "England"],  
    correctAnswer: "Portugal",  
    explanation: "Portugal, under Prince Henry the Navigator, was a pioneer in exploring for these motives."  
  },  
  {  
    id: "q3",  
    question: "What role did religion play in the 'Three G’s'?",  
    options: ["To spread Christianity", "To convert Indigenous peoples", "To establish churches", "All of the above"],  
    correctAnswer: "All of the above",  
    explanation: "Religion was a key motivator, with missionaries often accompanying explorers."  
  },  
  {  
    id: "q4",  
    question: "Which of the following was NOT a 'Three G'?",  
    options: ["Gold", "Glory", "Greed", "God"],  
    correctAnswer: "Greed",  
    explanation: "Greed is not one of the 'Three G’s'; the correct terms are Gold, Glory, and God."  
  },  
  {  
    id: "q5",  
    question: "What was the primary goal of the 'Three G’s'?",  
    options: ["To find new trade routes", "To spread Christianity", "To claim territory", "All of the above"],  
    correctAnswer: "All of the above",  
    explanation: "The 'Three G’s' encompassed economic, political, and religious goals."  
  },  

  // Questions 6-10 (Stimulus 10: Columbian Exchange)  
  {  
    id: "q6",  
    question: "What was the Columbian Exchange?",  
    options: ["A trade of goods between Europe and Asia", "A transfer of crops, animals, and diseases between the Old and New Worlds", "A treaty between Spain and Portugal", "A system of slavery"],  
    correctAnswer: "A transfer of crops, animals, and diseases between the Old and New Worlds",  
    explanation: "The Columbian Exchange refers to the widespread transfer of plants, animals, and diseases after 1492."  
  },  
  {  
    id: "q7",  
    question: "Which crop from the Americas had the greatest impact on Europe?",  
    options: ["Potatoes", "Coffee", "Sugar", "Tobacco"],  
    correctAnswer: "Potatoes",  
    explanation: "Potatoes provided a high-calorie crop that supported population growth in Europe."  
  },  
  {  
    id: "q8",  
    question: "What disease from the Old World devastated Indigenous populations in the Americas?",  
    options: ["Smallpox", "Malaria", "Cholera", "Tuberculosis"],  
    correctAnswer: "Smallpox",  
    explanation: "Smallpox, introduced by Europeans, killed an estimated 90% of some Indigenous populations."  
  },  
  {  
    id: "q9",  
    question: "Which animal from the Old World was introduced to the Americas?",  
    options: ["Cattle", "Horses", "Sheep", "All of the above"],  
    correctAnswer: "All of the above",  
    explanation: "Cattle, horses, and sheep were brought to the Americas by Europeans."  
  },  
  {  
    id: "q10",  
    question: "What was a major consequence of the Columbian Exchange?",  
    options: ["The decline of Indigenous populations", "The rise of European empires", "The spread of African languages", "The invention of the steam engine"],  
    correctAnswer: "The decline of Indigenous populations",  
    explanation: "Diseases and cultural disruption led to massive population losses among Indigenous peoples."  
  },  

  // Questions 11-15 (Stimulus 15: Portuguese caravel)  
  {  
    id: "q11",  
    question: "What made the Portuguese caravel ideal for exploration?",  
    options: ["Its large size", "Its lateen sails", "Its speed", "Its armor"],  
    correctAnswer: "Its lateen sails",  
    explanation: "Lateen sails allowed the caravel to sail against the wind, crucial for exploration."  
  },  
  {  
    id: "q12",  
    question: "Which explorer used the caravel to reach India?",  
    options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Bartolomeu Dias"],  
    correctAnswer: "Vasco da Gama",  
    explanation: "Vasco da Gama’s voyage in 1498 established a sea route to India using caravels."  
  },  
  {  
    id: "q13",  
    question: "What was the primary purpose of the caravel?",  
    options: ["To carry large cargo", "To explore unknown waters", "To fight pirates", "To transport slaves"],  
    correctAnswer: "To explore unknown waters",  
    explanation: "The caravel was designed for exploration, not for heavy cargo or warfare."  
  },  
  {  
    id: "q14",  
    question: "Which European power was most associated with the caravel?",  
    options: ["Spain", "Portugal", "France", "England"],  
    correctAnswer: "Portugal",  
    explanation: "Portugal developed and widely used the caravel for its explorations."  
  },  
  {  
    id: "q15",  
    question: "What was a limitation of the caravel?",  
    options: ["It could not sail against the wind", "It was too slow", "It was too small", "It was too expensive"],  
    correctAnswer: "It could not sail against the wind",  
    explanation: "The caravel’s lateen sails allowed it to sail against the wind, so this is incorrect. The limitation was its size and cargo capacity."  
  },  

  // Questions 16-20 (Stimulus 20: Encomienda system)  
  {  
    id: "q16",  
    question: "What was the encomienda system?",  
    options: ["A system of land grants", "A system of forced labor", "A system of religious conversion", "A system of trade"],  
    correctAnswer: "A system of forced labor",  
    explanation: "The encomienda granted colonists the right to extract labor and tribute from Indigenous peoples."  
  },  
  {  
    id: "q17",  
    question: "Who benefited from the encomienda system?",  
    options: ["Indigenous peoples", "Spanish colonists", "European monarchs", "All of the above"],  
    correctAnswer: "Spanish colonists",  
    explanation: "Spanish colonists used the system to exploit Indigenous labor."  
  },  
  {  
    id: "q18",  
    question: "What was a criticism of the encomienda system?",  
    options: ["It was too lenient", "It was too expensive", "It was exploitative", "It was too slow"],  
    correctAnswer: "It was exploitative",  
    explanation: "The system was widely criticized for its brutality and lack of protection for Indigenous peoples."  
  },  
  {  
    id: "q19",  
    question: "Which Spanish king tried to reform the encomienda system?",  
    options: ["Charles V", "Ferdinand and Isabella", "Philip II", "Charles I"],  
    correctAnswer: "Charles V",  
    explanation: "Charles V issued the New Laws of 1542 to limit the power of encomenderos."  
  },  
  {  
    id: "q20",  
    question: "What was the long-term impact of the encomienda system?",  
    options: ["It led to the decline of Indigenous populations", "It strengthened Spanish control", "It promoted cultural exchange", "It was abolished quickly"],  
    correctAnswer: "It led to the decline of Indigenous populations",  
    explanation: "The system contributed to the decimation of Indigenous communities through forced labor and disease."  
  },  

  // Questions 21-25 (Stimulus 25: Transatlantic slave trade)  
  {  
    id: "q21",  
    question: "What was the transatlantic slave trade?",  
    options: ["A trade of goods between Europe and Africa", "A system of forced migration of Africans to the Americas", "A trade of spices between Asia and Europe", "A system of indentured servitude"],  
    correctAnswer: "A system of forced migration of Africans to the Americas",  
    explanation: "The transatlantic slave trade involved the forced transport of millions of Africans to the Americas."  
  },  
  {  
    id: "q22",  
    question: "Which region was the primary source of enslaved Africans?",  
    options: ["West Africa", "East Africa", "Southern Africa", "Central Africa"],  
    correctAnswer: "West Africa",  
    explanation: "West African regions like the Gold Coast and Angola were major sources of enslaved people."  
  },  
  {  
    id: "q23",  
    question: "What was the 'Middle Passage'?",  
    options: ["The journey from Africa to the Americas", "The journey from the Americas to Europe", "The journey from Europe to Africa", "The journey within Africa"],  
    correctAnswer: "The journey from Africa to the Americas",  
    explanation: "The Middle Passage was the brutal sea voyage of enslaved Africans to the Americas."  
  },  
  {  
    id: "q24",  
    question: "Which European power was most involved in the transatlantic slave trade?",  
    options: ["Spain", "Portugal", "France", "England"],  
    correctAnswer: "England",  
    explanation: "The British were the largest transporters of enslaved Africans in the 18th century."  
  },  
  {  
    id: "q25",  
    question: "What was a major consequence of the transatlantic slave trade?",  
    options: ["The growth of African economies", "The decline of Indigenous populations", "The rise of African empires", "The spread of African culture in the Americas"],  
    correctAnswer: "The rise of African culture in the Americas",  
    explanation: "Enslaved Africans brought their cultures, languages, and traditions to the Americas."  
  },  

  // Questions 26-30 (Stimulus 30: Columbian Exchange impact)  
  {  
    id: "q26",  
    question: "What was a major environmental impact of the Columbian Exchange?",  
    options: ["Deforestation in the Americas", "The introduction of new crops to Europe", "The spread of diseases", "The decline of European populations"],  
    correctAnswer: "The introduction of new crops to Europe",  
    explanation: "New crops like potatoes and maize transformed European agriculture."  
  },  
  {  
    id: "q27",  
    question: "Which crop from the Americas became a staple in Africa?",  
    options: ["Cassava", "Maize", "Coffee", "Tea"],  
    correctAnswer: "Cassava",  
    explanation: "Cassava, native to the Americas, became a vital food source in Africa."  
  },  
  {  
    id: "q28",  
    question: "What was a consequence of the introduction of European livestock to the Americas?",  
    options: ["Increased biodiversity", "Deforestation", "The spread of diseases", "The decline of Indigenous populations"],  
    correctAnswer: "Deforestation",  
    explanation: "Livestock like cattle and pigs required large areas of land, leading to deforestation."  
  },  
  {  
    id: "q29",  
    question: "Which disease from the Old World had the greatest impact on the Americas?",  
    options: ["Smallpox", "Malaria", "Cholera", "Tuberculosis"],  
    correctAnswer: "Smallpox",  
    explanation: "Smallpox was the most devastating disease, killing millions of Indigenous people."  
  },  
  {  
    id: "q30",  
    question: "What was a long-term effect of the Columbian Exchange?",  
    options: ["The globalization of food crops", "The decline of European empires", "The end of slavery", "The unification of the Americas"],  
    correctAnswer: "The globalization of food crops",  
    explanation: "The exchange of crops like potatoes and maize became global staples."  
  },  

  // Questions 31-35 (Stimulus 35: Steam engine)  
  {  
    id: "q31",  
    question: "What was the significance of the steam engine in maritime travel?",  
    options: ["It made ships faster and more reliable", "It reduced the need for sails", "It allowed ships to travel without wind", "It eliminated the need for crews"],  
    correctAnswer: "It made ships faster and more reliable",  
    explanation: "The steam engine revolutionized maritime travel by providing consistent power."  
  },  
  {  
    id: "q32",  
    question: "Which country was most associated with the development of the steam engine?",  
    options: ["Britain", "France", "Germany", "Spain"],  
    correctAnswer: "Britain",  
    explanation: "James Watt’s improvements to the steam engine were developed in Britain."  
  },  
  {  
    id: "q33",  
    question: "How did the steam engine impact global trade?",  
    options: ["It made trade slower", "It reduced the cost of shipping", "It increased the need for sailors", "It made trade more dangerous"],  
    correctAnswer: "It reduced the cost of shipping",  
    explanation: "Steam-powered ships could travel faster and more efficiently, lowering shipping costs."  
  },  
  {  
    id: "q34",  
    question: "What was a limitation of early steam engines?",  
    options: ["They were too slow", "They required large amounts of coal", "They were too expensive", "They could not sail against the wind"],  
    correctAnswer: "They required large amounts of coal",  
    explanation: "Early steam engines were inefficient and needed significant fuel."  
  },  
  {  
    id: "q35",  
    question: "Which explorer used steam-powered ships in the 19th century?",  
    options: ["Christopher Columbus", "Vasco da Gama", "Captain Cook", "Isambard Kingdom Brunel"],  
    correctAnswer: "Isambard Kingdom Brunel",  
    explanation: "Brunel designed the first steam-powered transatlantic ship, the SS Great Western."  
  },  

  // Questions 36-40 (Stimulus 40: Racial hierarchy)  
  {  
    id: "q36",  
    question: "What was the racial hierarchy in the Americas?",  
    options: ["European > Indigenous > African", "African > Indigenous > European", "European > African > Indigenous", "Indigenous > African > European"],  
    correctAnswer: "European > African > Indigenous",  
    explanation: "European colonists were at the top, followed by enslaved Africans, and then Indigenous peoples."  
  },  
  {  
    id: "q37",  
    question: "How did the transatlantic slave trade reinforce this hierarchy?",  
    options: ["By enslaving Africans", "By promoting equality", "By educating Indigenous peoples", "By abolishing slavery"],  
    correctAnswer: "By enslaving Africans",  
    explanation: "The slave trade entrenched African people at the bottom of the social hierarchy."  
  },  
  {  
    id: "q38",  
    question: "What was a consequence of this hierarchy?",  
    options: ["The rise of African empires", "The decline of Indigenous cultures", "The spread of African languages", "The abolition of slavery"],  
    correctAnswer: "The decline of Indigenous cultures",  
    explanation: "Indigenous cultures were marginalized and suppressed under the racial hierarchy."  
  },  
  {  
    id: "q39",  
    question: "Which group was most affected by this hierarchy?",  
    options: ["European colonists", "Enslaved Africans", "Indigenous peoples", "All of the above"],  
    correctAnswer: "All of the above",  
    explanation: "All groups were affected, but enslaved Africans and Indigenous peoples were most marginalized."  
  },  
  {  
    id: "q40",  
    question: "What was a long-term effect of this hierarchy?",  
    options: ["The abolition of slavery", "The rise of civil rights movements", "The persistence of racial inequality", "The end of colonialism"],  
    correctAnswer: "The persistence of racial inequality",  
    explanation: "The racial hierarchy established during colonialism has had lasting effects on societies."  
  },  

  // Questions 41-45 (Stimulus 45: Globalization)  
  {  
    id: "q41",  
    question: "What was a key outcome of the Age of Exploration?",  
    options: ["The globalization of food crops", "The decline of European empires", "The end of slavery", "The unification of the Americas"],  
    correctAnswer: "The globalization of food crops",  
    explanation: "The Columbian Exchange spread crops like potatoes and maize worldwide."  
  },  
  {  
    id: "q42",  
    question: "Which of the following is an example of globalization from the Age of Exploration?",  
    options: ["The spread of Spanish language", "The establishment of trade routes", "The invention of the steam engine", "The decline of Indigenous populations"],  
    correctAnswer: "The establishment of trade routes",  
    explanation: "Trade routes connected distant regions, facilitating global exchange."  
  },  
  {  
    id: "q43",  
    question: "What was a cultural impact of the Age of Exploration?",  
    options: ["The spread of African music", "The decline of European languages", "The rise of Indigenous religions", "The spread of European religions"],  
    correctAnswer: "The spread of European religions",  
    explanation: "Missionaries spread Christianity to Indigenous peoples and enslaved Africans."  
  },  
  {  
    id: "q44",  
    question: "How did the Age of Exploration affect global economies?",  
    options: ["It made economies more isolated", "It created interconnected economies", "It reduced trade", "It increased local production"],  
    correctAnswer: "It created interconnected economies",  
    explanation: "The exchange of goods and resources linked economies across continents."  
  },  
  {  
    id: "q45",  
    question: "What was a long-term effect of the Age of Exploration?",  
    options: ["The end of colonialism", "The globalization of cultures", "The decline of trade", "The unification of the Americas"],  
    correctAnswer: "The globalization of cultures",  
    explanation: "The exchange of people, ideas, and goods led to cultural globalization."  
  },  

  // Questions 46-50 (Stimulus 50: Globalized world)  
  {  
    id: "q46",  
    question: "What does the term 'globalization' refer to?",  
    options: ["The spread of European culture", "The interconnectedness of economies and cultures", "The decline of trade", "The unification of the Americas"],  
    correctAnswer: "The interconnectedness of economies and cultures",  
    explanation: "Globalization involves the integration of economies, cultures, and societies worldwide."  
  },  
  {  
    id: "q47",  
    question: "Which of the following is a result of globalization?",  
    options: ["The spread of fast food chains", "The decline of local cultures", "The end of trade", "The isolation of nations"],  
    correctAnswer: "The spread of fast food chains",  
    explanation: "Globalization has led to the spread of multinational corporations and cultural products."  
  },  
  {  
    id: "q48",  
    question: "How did the Age of Exploration contribute to globalization?",  
    options: ["By creating trade routes", "By ending colonialism", "By reducing cultural exchange", "By isolating regions"],  
    correctAnswer: "By creating trade routes",  
    explanation: "The Age of Exploration established the first global trade networks."  
  },  
  {  
    id: "q49",  
    question: "What is a modern example of globalization?",  
    options: ["The internet", "The decline of trade", "The rise of local economies", "The end of colonialism"],  
    correctAnswer: "The internet",  
    explanation: "The internet connects people and economies globally, exemplifying modern globalization."  
  },  
  {  
    id: "q50",  
    question: "What is a challenge of globalization?",  
    options: ["The spread of diseases", "The decline of local cultures", "The end of trade", "The unification of the Americas"],  
    correctAnswer: "The decline of local cultures",  
    explanation: "Globalization can lead to the erosion of local traditions and languages."  
  },  
];  

/* -------------------------------------------------------------------------
   UI COMPONENTS
   ------------------------------------------------------------------------- */
const QuizUnit4 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentStimulusIndex, setCurrentStimulusIndex] = useState(0);
  const [showStimulus, setShowStimulus] = useState(false);
  const [currentStimulus, setCurrentStimulus] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentQuestionIndex % 5 === 0 && currentQuestionIndex > 0) {
      setShowStimulus(true);
      setCurrentStimulus(stimuli[currentQuestionIndex]);
    } else {
      setShowStimulus(false);
    }
  }, [currentQuestionIndex]);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    if (currentQuestionIndex % 5 === 0 && currentQuestionIndex > 0) {
      setShowStimulus(true);
      setCurrentStimulus(stimuli[currentQuestionIndex]);
    } else {
      setShowStimulus(false);
    }
  };

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    if (currentQuestionIndex % 5 === 0 && currentQuestionIndex > 0) {
      setShowStimulus(true);
      setCurrentStimulus(stimuli[currentQuestionIndex]);
    } else {
      setShowStimulus(false);
    }
  };

  if (isFinished) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Quiz Complete!</h2>
          <p className="text-xl">You scored {score} out of 50.</p>
          <Button variant="outline" onClick={() => navigate("/units/ap-world")}>
            Back to Units
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={() => navigate("/units/ap-world")}>
              <ArrowLeft size={16} className="mr-2" />
              Back to Units
            </Button>
            <Button variant="outline" size="sm">
              <RefreshCcw size={16} className="mr-2" />
              Restart Quiz
            </Button>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Question {currentQuestionIndex + 1} of 50</h2>
            <p className="text-sm text-muted-foreground">Score: {score}</p>
          </div>
        </div>

        {showStimulus && (
          <Card className="border-border shadow-none bg-card p-6">
            <CardHeader>
              <CardTitle>{currentStimulus.text}</CardTitle>
              <CardDescription>
                <img src={currentStimulus.img} alt="Stimulus" className="max-w-full" />
                <p className="text-sm text-muted-foreground">Source: {currentStimulus.source}</p>
              </CardDescription>
            </CardHeader>
          </Card>
        )}

        <div className="space-y-6">
          <Card className="border-border shadow-none bg-card">
            <CardHeader>
              <CardTitle>{questions[currentQuestionIndex].question}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    onClick={() => handleAnswer(option)}
                    className="w-full rounded-xl"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default QuizUnit4;