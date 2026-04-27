import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { units } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, MapPin, Info, Download } from "lucide-react";
import { motion } from "framer-motion";

const StudyGuide = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const unit = units.find((u) => u.id === Number(unitId));

  if (!unit) return null;

  const isUnit1 = unit.id === 1;
  const isUnit2 = unit.id === 2;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate("/units/ap-world")} 
              className="text-muted-foreground -ml-2"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Units
            </Button>
            <Button variant="outline" size="sm" className="rounded-lg">
              <Download className="mr-2 h-4 w-4" />
              Export PDF
            </Button>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
              <BookOpen size={14} />
              Comprehensive Study Guide
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Unit {unit.id}: {unit.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                {unit.period}
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={14} />
                Global Context
              </div>
            </div>
          </div>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate dark:prose-invert max-w-none bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-sm space-y-12"
        >
          {isUnit1 ? (
            <>
              {/* Unit 1 Content */}
              <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
                  <Info className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Big Picture Overview</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Unit 1 (1200-1450) examines how states across the globe established and maintained power through religious legitimization, bureaucratic innovations, and trade expansion. This period shows both continuity in traditional power structures and innovation in response to growing populations and expanding trade networks.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 not-prose">
                  <div className="border border-border rounded-xl p-4 bg-muted/30">
                    <div className="text-2xl font-bold text-primary">1200</div>
                    <div className="text-xs text-muted-foreground">Period Start</div>
                  </div>
                  <div className="border border-border rounded-xl p-4 bg-muted/30">
                    <div className="text-2xl font-bold">1325</div>
                    <div className="text-xs text-muted-foreground">Peak of Mongol Empire</div>
                  </div>
                  <div className="border border-border rounded-xl p-4 bg-muted/30">
                    <div className="text-2xl font-bold text-primary">1450</div>
                    <div className="text-xs text-muted-foreground">Period End</div>
                  </div>
                </div>
              </div>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">1.1 Developments in East Asia</h2>
                
                <div className="bg-muted/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">The Song Dynasty (960-1279 CE)</h3>
                  <p className="mb-4">The Song Dynasty represents a golden age of Chinese civilization, marked by economic revolution, bureaucratic sophistication, and cultural achievement.</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-primary">Political Structure</h4>
                      <ul className="space-y-2 text-sm">
                        <li><span className="font-semibold">Imperial Bureaucracy:</span> Massive administrative apparatus with appointed officials managing taxation, infrastructure, and law.</li>
                        <li><span className="font-semibold">Civil Service Exams:</span> Merit-based system testing Confucian classics. Though theoretically open to all, in practice favored wealthy families who could afford years of study.</li>
                        <li><span className="font-semibold">Scholar-Gentry Class:</span> Land-owning aristocracy who passed exams and dominated government positions.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-primary">Economic Innovations</h4>
                      <ul className="space-y-2 text-sm">
                        <li><span className="font-semibold">Champa Rice:</span> Fast-ripening, drought-resistant rice from Vietnam. Enabled 2 harvests/year → population explosion (doubled to ~120 million).</li>
                        <li><span className="font-semibold">Grand Canal Expansion:</span> Linked Yellow River (north) to Yangtze River (south). Facilitated rice shipment to capital, creating world's largest internal market.</li>
                        <li><span className="font-semibold">Proto-Industrialization:</span> Rural households produced surplus silk, porcelain, and tea for market sale.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-900/20 rounded-r-xl p-4">
                  <h4 className="font-bold mb-2">Key Concept: Neo-Confucianism</h4>
                  <p className="text-sm">Synthesis of Confucian ethics with Buddhist and Daoist metaphysics. Emphasized filial piety, social hierarchy, and cultivation of moral character. Became state ideology and basis for civil service exams.</p>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">1.2 Developments in Dar al-Islam</h2>
                
                <p className="text-lg">Following the fragmentation of the Abbasid Caliphate, new Islamic political entities emerged, predominantly led by Turkic peoples who converted to Islam.</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-400">New Islamic States</h3>
                    <ul className="space-y-3">
                      <li>
                        <span className="font-bold">Seljuk Empire:</span>
                        <p className="text-sm mt-1">Turkic nomads who conquered Persia and Anatolia. Adopted Persian culture and Islamic administration. Took title "Sultan" (holder of power).</p>
                      </li>
                      <li>
                        <span className="font-bold">Mamluk Sultanate (Egypt):</span>
                        <p className="text-sm mt-1">Military elite of Turkic slave soldiers who seized power. Defeated Mongols at Battle of Ain Jalut (1260). Controlled Red Sea trade.</p>
                      </li>
                      <li>
                        <span className="font-bold">Delhi Sultanate:</span>
                        <p className="text-sm mt-1">Turkic rulers in Northern India. Established Islamic rule over Hindu majority. Built Qutb Minar and other monuments.</p>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-400">Intellectual & Cultural Achievements</h3>
                    <ul className="space-y-3">
                      <li>
                        <span className="font-bold">House of Wisdom (Baghdad):</span>
                        <p className="text-sm mt-1">Library and translation center. Preserved Greek philosophy, Indian mathematics, and Persian literature.</p>
                      </li>
                      <li>
                        <span className="font-bold">Nasir al-Din al-Tusi:</span>
                        <p className="text-sm mt-1">Polymath who contributed to astronomy, trigonometry, and ethics. Built Maragheh observatory.</p>
                      </li>
                      <li>
                        <span className="font-bold">Sufism:</span>
                        <p className="text-sm mt-1">Mystical Islam emphasizing direct personal experience of God. Missionaries spread Islam to Southeast Asia and Africa through cultural adaptation.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">1.3 Developments in South & Southeast Asia</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">South Asia: Hindu & Islamic Synthesis</h3>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                      <h4 className="font-bold">Vijayanagara Empire</h4>
                      <p className="text-sm mt-1">Hindu kingdom in Deccan Plateau. Served as bulwark against Islamic expansion from north. Promoted Sanskrit learning and temple architecture.</p>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                      <h4 className="font-bold">Rajput Kingdoms</h4>
                      <p className="text-sm mt-1">Decentralized Hindu warrior clans in Rajasthan. Practised <em>sati</em> (widow immolation) and <em>jauhar</em> (mass suicide to avoid capture).</p>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                      <h4 className="font-bold">Bhakti Movement</h4>
                      <p className="text-sm mt-1">Devotional Hinduism emphasizing personal relationship with deities (Vishnu, Shiva). Used vernacular languages instead of Sanskrit. Similar to Sufism.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Southeast Asia: Maritime Trade Empires</h3>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                      <h4 className="font-bold">Srivijaya Empire (Sumatra)</h4>
                      <p className="text-sm mt-1">Buddhist maritime empire controlling Strait of Malacca. Collected tolls from passing ships. Center of Vajrayana Buddhism.</p>
                    </div>

                    <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                      <h4 className="font-bold">Majapahit Kingdom (Java)</h4>
                      <p className="text-sm mt-1">Hindu-Buddhist thalassocracy. Controlled sea lanes through naval power. Built Borobudur temple complex.</p>
                    </div>

                    <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                      <h4 className="font-bold">Khmer Empire (Angkor)</h4>
                      <p className="text-sm mt-1">Built Angkor Wat (largest religious structure in world). Complex hydraulic system for rice cultivation. Hindu then Buddhist.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">1.4 State Building in the Americas</h2>
                
                <p className="text-lg">American civilizations developed sophisticated state structures independent of Afro-Eurasian influences, with unique agricultural and administrative innovations.</p>

                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 pl-6 py-4 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3">The Mexica (Aztec) Empire</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">Political Structure</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Triple Alliance: Tenochtitlan, Texcoco, Tlacopan</li>
                          <li>• <em>Huey Tlatoani</em>: Supreme ruler with semi-divine status</li>
                          <li>• Conquered city-states paid tribute</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Economic System</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• <strong>Tribute System:</strong> Conquered peoples paid food, luxury goods, and captives</li>
                          <li>• <strong>Chinampas:</strong> "Floating gardens" for intensive agriculture</li>
                          <li>• <strong>Markets:</strong> Tlatelolco market served 60,000+ daily</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-red-200">
                      <h4 className="font-bold text-lg mb-2">Religious Practices</h4>
                      <p className="text-sm">Human sacrifice to sustain cosmic order. Believed gods sacrificed themselves to create world; humans must reciprocate. Used <em>atlatl</em> (spear-thrower) in Flower Wars to capture prisoners.</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 pl-6 py-4 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3">The Inca Empire</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">Administrative System</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Highly centralized state with emperor (<em>Sapa Inca</em>) as divine ruler</li>
                          <li>• <strong>Quipu:</strong> Knotted string system for record-keeping</li>
                          <li>• <strong>Mit'a:</strong> Mandatory public service labor tax</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Infrastructure</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• <strong>Qhapaq Ñan:</strong> 25,000-mile road system with suspension bridges</li>
                          <li>• <strong>Waru Waru:</strong> Raised agricultural beds with irrigation channels</li>
                          <li>• <strong>Terracing:</strong> Mountain agriculture supporting 12+ million people</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 pl-6 py-4 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3">Mississippian Culture (North America)</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-bold text-lg">Cahokia</h4>
                        <p className="text-sm mt-1">Urban center near modern St. Louis. Population ~20,000 at peak.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Monks Mound</h4>
                        <p className="text-sm mt-1">Largest pre-Columbian earthwork in Americas. 100 ft tall, 14-acre base.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Social Structure</h4>
                        <p className="text-sm mt-1">Rigid hierarchy led by "Great Sun" chief. Long-distance trade network.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">1.5 State Building in Africa</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🐪</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Mali Empire</h3>
                    <p className="text-sm text-muted-foreground mb-3">West Africa's dominant state (1235-1600)</p>
                    <ul className="space-y-2 text-sm">
                      <li><span className="font-semibold">Economy:</span> Gold-Salt trade via Trans-Saharan routes</li>
                      <li><span className="font-semibold">Timbuktu:</span> Center of Islamic learning and trade</li>
                      <li><span className="font-semibold">Mansa Musa:</span> Famous pilgrimage (1324) demonstrated wealth</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🦁</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Great Zimbabwe</h3>
                    <p className="text-sm text-muted-foreground mb-3">East African trading state (1100-1450)</p>
                    <ul className="space-y-2 text-sm">
                      <li><span className="font-semibold">Architecture:</span> Massive stone walls (30 ft high)</li>
                      <li><span className="font-semibold">Economy:</span> Gold trade with Swahili coast</li>
                      <li><span className="font-semibold">Trade:</span> Connected to Indian Ocean network</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">⛪</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Ethiopia</h3>
                    <p className="text-sm text-muted-foreground mb-3">Christian kingdom in Horn of Africa</p>
                    <ul className="space-y-2 text-sm">
                      <li><span className="font-semibold">Religion:</span> Orthodox Christianity (isolated from Islam)</li>
                      <li><span className="font-semibold">Architecture:</span> Rock-hewn churches of Lalibela</li>
                      <li><span className="font-semibold">Trade:</span> Red Sea commerce</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">1.6 Developments in Europe</h2>
                
                <p className="text-lg">Europe remained politically fragmented compared to large empires in Afro-Eurasia, characterized by feudal decentralization and manorial economics.</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">Feudalism (Social/Political System)</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">King</span>
                        <div className="text-sm">
                          <p>Grants land (fiefs) to nobles in exchange for military service and loyalty</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">Lord</span>
                        <div className="text-sm">
                          <p>Receives fief from king, grants portions to knights, provides protection to serfs</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">Knight</span>
                        <div className="text-sm">
                          <p>Military service to lord in exchange for land (manor)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">Serf</span>
                        <div className="text-sm">
                          <p>Bound to land, provides labor and crops to lord in exchange for protection</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200">Manorialism (Economic System)</h3>
                    <div className="space-y-3">
                      <p className="text-sm">Self-sufficient agricultural estates where serfs lived and worked.</p>
                      <ul className="space-y-2 text-sm">
                        <li><span className="font-semibold">Three-Field System:</span> Innovation rotating crops (2 planted, 1 fallow) → increased yields</li>
                        <li><span className="font-semibold">Heavy Plow:</span> Iron plowshare for northern Europe's heavy soils</li>
                        <li><span className="font-semibold">Water/ Wind Power:</span> Mills for grinding grain, fulling cloth</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-3 text-purple-800 dark:text-purple-200">The Catholic Church: Europe's Centralizing Force</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">Unified Authority</h4>
                      <p className="text-sm">Only centralized institution across fragmented Europe. Pope claimed authority over kings.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Cultural Unity</h4>
                      <p className="text-sm">Latin language, sacraments, and canon law provided shared identity.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">The Crusades (1096-1270)</h4>
                      <p className="text-sm">Holy wars to retake Jerusalem. Increased European contact with Islamic world, stimulated Mediterranean trade.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">1.7 Comparative Analysis: Methods of State Power (1200-1450)</h2>
                
                <p className="text-lg mb-6">Despite vast geographic and cultural differences, states in this period employed similar strategies to establish and maintain authority.</p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="p-4 text-left border border-primary/30">Method of Power</th>
                        <th className="p-4 text-left border border-primary/30">East Asia</th>
                        <th className="p-4 text-left border border-primary/30">Dar al-Islam</th>
                        <th className="p-4 text-left border border-primary/30">South Asia</th>
                        <th className="p-4 text-left border border-primary/30">Americas</th>
                        <th className="p-4 text-left border border-primary/30">Africa</th>
                        <th className="p-4 text-left border border-primary/30">Europe</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 font-semibold bg-muted/50">Religious Legitimization</td>
                        <td className="p-4 border-l border-border">Confucianism, Ancestor Worship</td>
                        <td className="p-4 border-l border-border">Islam (Sunni/Shia)</td>
                        <td className="p-4 border-l border-border">Hinduism, Bhakti, Islam</td>
                        <td className="p-4 border-l border-border">Human sacrifice, Polytheism</td>
                        <td className="p-4 border-l border-border">Islam (Mali), Christianity (Ethiopia)</td>
                        <td className="p-4 border-l border-border">Roman Catholicism</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-semibold bg-muted/50">Bureaucratic Administration</td>
                        <td className="p-4 border-l border-border">Civil Service Exams, Scholar-Gentry</td>
                        <td className="p-4 border-l border-border">Viziers, Diwans, Turkic elites</td>
                        <td className="p-4 border-l border-border">Zamindars, Local rajas</td>
                        <td className="p-4 border-l border-border">Tribute collection, Quipu records</td>
                        <td className="p-4 border-l border-border">Sultan's court, Provincial governors</td>
                        <td className="p-4 border-l border-border">Manorial lords, Church hierarchy</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-semibold bg-muted/50">Trade Networks</td>
                        <td className="p-4 border-l border-border">Grand Canal, Silk Road, Maritime routes</td>
                        <td className="p-4 border-l border-border">Silk Roads, Indian Ocean, Trans-Saharan</td>
                        <td className="p-4 border-l border-border">Indian Ocean trade</td>
                        <td className="p-4 border-l border-border">Regional exchange networks</td>
                        <td className="p-4 border-l border-border">Trans-Saharan, Indian Ocean</td>
                        <td className="p-4 border-l border-border">Mediterranean, Hanseatic League</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-semibold bg-muted/50">Military Power</td>
                        <td className="p-4 border-l border-border">Professional army, Gunpowder weapons</td>
                        <td className="p-4 border-l border-border">Cavalry, Slave soldiers (Mamluks)</td>
                        <td className="p-4 border-l border-border">War elephants, Cavalry</td>
                        <td className="p-4 border-l border-border">Captive warriors, Atl-atl</td>
                        <td className="p-4 border-l border-border">Cavalry, Professional armies</td>
                        <td className="p-4 border-l border-border">Knights, Castles</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold bg-muted/50">Key Innovation</td>
                        <td className="p-4 border-l border-border">Champa Rice, Paper Money</td>
                        <td className="p-4 border-l border-border">Madrasas, Paper manufacture</td>
                        <td className="p-4 border-l border-border">Syncretic religious movements</td>
                        <td className="p-4 border-l border-border">Chinampas, Road systems</td>
                        <td className="p-4 border-l border-border">Gold trade, Stone architecture</td>
                        <td className="p-4 border-l border-border">Three-field system, Heavy plow</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mt-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Exam Tip: Comparative Questions</h3>
                  <p className="text-sm leading-relaxed">
                    AP World History frequently asks you to compare how different states maintained power. Use this framework: 1) Identify the method (religious, bureaucratic, economic, military), 2) Provide specific examples from at least two regions, 3) Analyze similarities and differences in implementation. For example: "Both the Song Dynasty and Mali Empire used trade networks to consolidate power, but while the Song relied on internal waterways (Grand Canal), Mali depended on trans-regional routes (Trans-Saharan trade)."
                  </p>
                </div>
              </section>

              <section className="space-y-6 border-t-2 border-primary/20 pt-8">
                <h2 className="text-3xl font-bold">Key Terms & Vocabulary</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-primary">Political Systems</h3>
                    <div className="grid md:grid-cols-2 gap-2 text-sm">
                      <span className="bg-muted px-3 py-1 rounded">Bureaucracy</span>
                      <span className="bg-muted px-3 py-1 rounded">Meritocracy</span>
                      <span className="bg-muted px-3 py-1 rounded">Feudalism</span>
                      <span className="bg-muted px-3 py-1 rounded">Manorialism</span>
                      <span className="bg-muted px-3 py-1 rounded">Tribute System</span>
                      <span className="bg-muted px-3 py-1 rounded">Mit'a System</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-primary">Trade & Economy</h3>
                    <div className="grid md:grid-cols-2 gap-2 text-sm">
                      <span className="bg-muted px-3 py-1 rounded">Silk Roads</span>
                      <span className="bg-muted px-3 py-1 rounded">Indian Ocean</span>
                      <span className="bg-muted px-3 py-1 rounded">Trans-Saharan</span>
                      <span className="bg-muted px-3 py-1 rounded">Grand Canal</span>
                      <span className="bg-muted px-3 py-1 rounded">Proto-industrialization</span>
                      <span className="bg-muted px-3 py-1 rounded">Champa Rice</span>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-blue-600">Religious Terms</h3>
                    <div className="space-y-1 text-sm">
                      <span className="bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded inline-block">Neo-Confucianism</span>
                      <span className="bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded inline-block">Sufism</span>
                      <span className="bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded inline-block">Bhakti Movement</span>
                      <span className="bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded inline-block">Filial Piety</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-green-600">States & Empires</h3>
                    <div className="space-y-1 text-sm">
                      <span className="bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded inline-block">Song Dynasty</span>
                      <span className="bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded inline-block">Mamluk Sultanate</span>
                      <span className="bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded inline-block">Mali Empire</span>
                      <span className="bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded inline-block">Aztec Empire</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-orange-600">Technologies</h3>
                    <div className="space-y-1 text-sm">
                      <span className="bg-orange-50 dark:bg-orange-900/30 px-3 py-1 rounded inline-block">Gunpowder</span>
                      <span className="bg-orange-50 dark:bg-orange-900/30 px-3 py-1 rounded inline-block">Paper Money</span>
                      <span className="bg-orange-50 dark:bg-orange-900/30 px-3 py-1 rounded inline-block">Quipu</span>
                      <span className="bg-orange-50 dark:bg-orange-900/30 px-3 py-1 rounded inline-block">Chinampas</span>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : isUnit2 ? (
            <>
              {/* Unit 2 Content - Twice as long */}
              <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
                  <Info className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Big Picture Overview</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Unit 2 (1200-1450) focuses on the intensification of existing trade networks and the creation of new ones. This period saw the Mongol Empire facilitate unprecedented connections across Eurasia, while maritime technologies enabled global exchange. Key developments include the expansion of the Silk Roads, the rise of Indian Ocean trade, and the Trans-Saharan network that connected Africa to the Islamic world.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 not-prose">
                  <div className="border border-border rounded-xl p-4 bg-muted/30">
                    <div className="text-2xl font-bold text-primary">1200</div>
                    <div className="text-xs text-muted-foreground">Period Start</div>
                  </div>
                  <div className="border border-border rounded-xl p-4 bg-muted/30">
                    <div className="text-2xl font-bold">1325</div>
                    <div className="text-xs text-muted-foreground">Peak of Mongol Empire</div>
                  </div>
                  <div className="border border-border rounded-xl p-4 bg-muted/30">
                    <div className="text-2xl font-bold text-primary">1450</div>
                    <div className="text-xs text-muted-foreground">Period End</div>
                  </div>
                </div>
              </div>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">2.1 The Silk Roads</h2>
                
                <p className="text-lg">The Silk Roads represented the most significant network of exchange during this period, connecting East Asia, South Asia, the Middle East, and Europe.</p>

                <div className="bg-muted/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Historical Context & Development</h3>
                  <p className="mb-4">The Silk Roads flourished during the Pax Mongolica (Mongol Peace), when the Mongol Empire provided security and stability across Eurasia, allowing merchants to travel safely from China to the Mediterranean.</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-primary">Key Routes</h4>
                      <ul className="space-y-2 text-sm">
                        <li><span className="font-semibold">Northern Route:</span> Connected China to Europe via Central Asia, passing through Samarkand and Kashgar</li>
                        <li><span className="font-semibold">Southern Route:</span> Connected China to India and the Middle East via the Tarim Basin</li>
                        <li><span className="font-semibold">Maritime Route:</span> Connected China to Southeast Asia, India, and the Middle East via sea</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-primary">Mongol Impact</h4>
                      <ul className="space-y-2 text-sm">
                        <li><span className="font-semibold">Yam System:</span> Postal relay system enabling rapid communication</li>
                        <li><span className="font-semibold">Pax Mongolica:</span> Period of relative peace and stability</li>
                        <li><span className="font-semibold">Ortogh:</span> Commercial alliances to minimize risk</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-900/20 rounded-r-xl p-4">
                  <h4 className="font-bold mb-2">Key Cities & Trade Centers</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold">Kashgar</h5>
                      <p>Western edge of China where Northern and Southern routes met</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Samarkand</h5>
                      <p>Major trading center in Central Asia, known for its bazaars</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Constantinople</h5>
                      <p>Eastern terminus of the Silk Roads, controlled by Byzantine Empire</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">2.2 Indian Ocean Trade Network</h2>
                
                <p className="text-lg">The Indian Ocean network became the world's richest maritime trading system, connecting East Africa, the Middle East, South Asia, and Southeast Asia.</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-400">Maritime Technologies</h3>
                    <ul className="space-y-3">
                      <li>
                        <span className="font-bold">Lateen Sail:</span>
                        <p className="text-sm mt-1">Triangular sail that allowed ships to sail against the wind, enabling year-round trade</p>
                      </li>
                      <li>
                        <span className="font-bold">Astrolabe:</span>
                        <p className="text-sm mt-1">Navigation instrument for determining latitude by measuring the angle of stars</p>
                      </li>
                      <li>
                        <span className="font-bold">Magnetic Compass:</span>
                        <p className="text-sm mt-1">Chinese invention that improved navigation accuracy</p>
                      </li>
                      <li>
                        <span className="font-bold">Stern Rudder:</span>
                        <p className="text-sm mt-1">Improved steering control for larger ocean-going vessels</p>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-400">Key Trade Centers</h3>
                    <ul className="space-y-3">
                      <li>
                        <span className="font-bold">Malacca:</span>
                        <p className="text-sm mt-1">Strategic port controlling the Strait of Malacca, connecting Pacific and Indian Oceans</p>
                      </li>
                      <li>
                        <span className="font-bold">Calicut:</span>
                        <p className="text-sm mt-1">Major spice port on the west coast of India</p>
                      </li>
                      <li>
                        <span className="font-bold">Gujarat:</span>
                        <p className="text-sm mt-1">Region in western India famous for textile production and trade</p>
                      </li>
                      <li>
                        <span className="font-bold">Swahili City States:</span>
                        <p className="text-sm mt-1">Coastal trading centers like Kilwa and Mombasa connecting Africa to Indian Ocean trade</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-teal-800 dark:text-teal-200">Seasonal Trade Patterns</h3>
                  <p className="text-sm mb-4">Monsoon winds dictated trade schedules. Ships sailed with the southwest monsoon (April-September) from India to Southeast Asia, and returned with the northeast monsoon (October-March).</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-1">Northbound (Oct-Mar)</h4>
                      <ul className="space-y-1">
                        <li>• Spices from Southeast Asia</li>
                        <li>• Textiles from India</li>
                        <li>• Precious stones from Sri Lanka</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Southbound (Apr-Sep)</h4>
                      <ul className="space-y-1">
                        <li>• Chinese porcelain and silk</li>
                        <li>• Arabian horses</li>
                        <li>• Persian luxury goods</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">2.3 Trans-Saharan Trade Network</h2>
                
                <p className="text-lg">The Trans-Saharan network connected West Africa to the Islamic world, facilitating the exchange of gold, salt, and ideas.</p>

                <div className="space-y-6">
                  <div className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 pl-6 py-4 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3">Key Trade Routes</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">Eastern Route</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Connected Ghana to Egypt via Egypt</li>
                          <li>• Controlled by Muslim merchants</li>
                          <li>• Major trade in gold and slaves</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Western Route</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Connected Mali to Morocco</li>
                          <li>• Controlled by Berber traders</li>
                          <li>• Major trade in salt and gold</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-border rounded-xl p-6">
                      <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🧂</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Salt Trade</h3>
                      <p className="text-sm text-muted-foreground mb-3">Salt was as valuable as gold in West Africa</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Sources: Taghaza, Awiligh</li>
                        <li>• Used for food preservation</li>
                        <li>• Currency in some regions</li>
                      </ul>
                    </div>

                    <div className="border border-border rounded-xl p-6">
                      <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🏛️</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Gold Trade</h3>
                      <p className="text-sm text-muted-foreground mb-3">West Africa's most valuable export</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Sources: Wangara, Bambuk</li>
                        <li>• Mined in forest regions</li>
                        <li>• Used for coinage in Mediterranean</li>
                      </ul>
                    </div>

                    <div className="border border-border rounded-xl p-6">
                      <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">📚</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Cultural Exchange</h3>
                      <p className="text-sm text-muted-foreground mb-3">Ideas and religion traveled with trade</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Islam spread to West Africa</li>
                        <li>• Arabic script adopted</li>
                        <li>• Universities established in Timbuktu</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">2.4 Maritime Technologies & Navigation</h2>
                
                <p className="text-lg">Advancements in maritime technology revolutionized long-distance trade and exploration during this period.</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Ship Design Innovations</h3>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-bold">Caravel</h4>
                      <p className="text-sm mt-1">Portuguese ship with lateen sails and rudder. Could sail against wind and navigate shallow waters. Key for exploration.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-bold">Carrack</h4>
                      <p className="text-sm mt-1">Large merchant vessel with high sterncastle and forecastle. Could carry heavy loads for long voyages.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-bold">Junk</h4>
                      <p className="text-sm mt-1">Chinese ship with watertight compartments and sternpost rudder. Could carry 500+ tons.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">Navigation Systems</h3>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-bold">Celestial Navigation</h4>
                      <p className="text-sm mt-1">Using stars, sun, and moon to determine position. Astrolabe and quadrant were key instruments.</p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-bold">Dead Reckoning</h4>
                      <p className="text-sm mt-1">Calculating position based on speed, direction, and time elapsed. Less accurate but widely used.</p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-bold">Portolan Charts</h4>
                      <p className="text-sm mt-1">Detailed nautical maps showing coastlines, harbors, and compass directions. Used by Mediterranean traders.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-purple-800 dark:text-purple-200">Impact of Navigation Advances</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">Increased Trade Volume</h4>
                      <p className="text-sm">Larger ships and better navigation allowed for more goods to be transported, reducing costs and increasing profits.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Longer Voyages</h4>
                      <p className="text-sm">Ships could now travel longer distances, enabling direct trade between distant regions without intermediaries.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Cultural Exchange</h4>
                      <p className="text-sm">Increased contact between different cultures led to the exchange of ideas, technologies, and diseases.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">2.5 Economic Systems & Financial Innovations</h2>
                
                <p className="text-lg">The expansion of trade networks led to significant innovations in economic systems and financial practices.</p>

                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 pl-6 py-4 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3">Chinese Financial Innovations</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">Flying Cash</h4>
                        <p className="text-sm">Early form of paper currency that allowed merchants to deposit goods in one location and draw equivalent value elsewhere. Reduced risk of robbery during long journeys.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Paper Money</h4>
                        <p className="text-sm">First developed during the Song Dynasty. Initially used as certificates of deposit, later became legal tender. Revolutionized trade by eliminating the need to transport heavy metal coins.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-6 py-4 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3">Islamic Banking Systems</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">Sakks (Bills of Exchange)</h4>
                        <p className="text-sm">Documents that guaranteed payment of a specific amount at a future date. Allowed merchants to conduct business without carrying large sums of money.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Hawala System</h4>
                        <p className="text-sm">Informal value transfer system based on trust networks. No physical money changed hands; debts were settled through agents across different regions.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 pl-6 py-4 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3">European Financial Innovations</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">Double-Entry Bookkeeping</h4>
                        <p className="text-sm">Accounting system where every transaction affects at least two accounts. Improved accuracy and transparency in business operations.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Joint-Stock Companies</h4>
                        <p className="text-sm">Business organizations where investors pooled capital and shared profits. Enabled large-scale trade ventures like the Dutch East India Company.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">2.6 Cultural Exchange & Diffusion</h2>
                
                <p className="text-lg">The expansion of trade networks facilitated unprecedented cultural exchange, leading to the spread of ideas, religions, and technologies.</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Religious Diffusion</h3>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-bold">Islam in Africa</h4>
                      <p className="text-sm mt-1">Spread through trade networks, particularly along the Trans-Saharan routes. Sufi missionaries adapted Islamic teachings to local cultures.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-bold">Buddhism in Southeast Asia</h4>
                      <p className="text-sm mt-1">Spread via maritime trade routes. Theravada Buddhism became dominant in Thailand, Cambodia, and Burma.</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-bold">Christianity in Europe</h4>
                      <p className="text-sm mt-1">The Crusades increased contact with the Middle East, leading to the exchange of ideas and technologies.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">Technological Exchange</h3>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-bold">Paper Technology</h4>
                      <p className="text-sm mt-1">Invented in China, spread through Islamic world to Europe. Revolutionized record-keeping and communication.</p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-bold">Gunpowder</h4>
                      <p className="text-sm mt-1">Invented in China, spread through Mongol conquests. Transformed warfare in Europe and the Islamic world.</p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-bold">Agricultural Techniques</h4>
                      <p className="text-sm mt-1">Crops like rice and citrus fruits spread through trade networks, improving agricultural productivity in new regions.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-orange-800 dark:text-orange-200">Syncretism & Cultural Blending</h3>
                  <p className="text-sm mb-4">The increased contact between different cultures led to the blending of traditions and the creation of new cultural forms.</p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-1">Swahili Culture</h4>
                      <p>Bantu language with Arabic loanwords. Blend of African and Islamic traditions in architecture, cuisine, and religion.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Mughal Architecture</h4>
                      <p>Blend of Islamic and Indian architectural styles. Examples include the Taj Mahal and Red Fort.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Philippine Culture</h4>
                      <p>Blend of indigenous, Chinese, Islamic, and Spanish influences following trade and colonization.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-primary/20 pb-2 pt-4">2.7 Comparative Analysis: Trade Networks (1200-1450)</h2>
                
                <p className="text-lg mb-6">While all trade networks facilitated exchange, they differed significantly in their organization, technologies, and cultural impact.</p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="p-4 text-left border border-primary/30">Network</th>
                        <th className="p-4 text-left border border-primary/30">Key Routes</th>
                        <th className="p-4 text-left border border-primary/30">Major Goods</th>
                        <th className="p-4 text-left border border-primary/30">Technologies</th>
                        <th className="p-4 text-left border border-primary/30">Cultural Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 font-semibold bg-muted/50">Silk Roads</td>
                        <td className="p-4 border-l border-border">Overland routes across Eurasia</td>
                        <td className="p-4 border-l border-border">Silk, spices, precious metals, paper</td>
                        <td className="p-4 border-l border-border">Camels, caravansans, Yam system</td>
                        <td className="p-4 border-l border-border">Spread of Buddhism, Islam, technologies</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-semibold bg-muted/50">Indian Ocean</td>
                        <td className="p-4 border-l border-border">Maritime routes connecting East Africa to East Asia</td>
                        <td className="p-4 border-l border-border">Spices, textiles, porcelain, precious stones</td>
                        <td className="p-4 border-l border-border">Lateen sails, astrolabe, monsoon navigation</td>
                        <td className="p-4 border-l border-border">Spread of Islam, Hindu-Buddhist syncretism</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-semibold bg-muted/50">Trans-Saharan</td>
                        <td className="p-4 border-l border-border">Desert routes across North Africa</td>
                        <td className="p-4 border-l border-border">Gold, salt, slaves, ivory</td>
                        <td className="p-4 border-l border-border">Camel caravans, oasis settlements</td>
                        <td className="p-4 border-l border-border">Islamization of West Africa, Arabic script</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold bg-muted/50">European</td>
                        <td className="p-4 border-l border-border">Mediterranean, Baltic, Hanseatic League</td>
                        <td className="p-4 border-l border-border">Wool, timber, fish, manufactured goods</td>
                        <td className="p-4 border-l border-border">Cog ships, portolan charts, banking</td>
                        <td className="p-4 border-l border-border">Rise of merchant class, capitalism</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mt-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Exam Tip: Trade Network Questions</h3>
                  <p className="text-sm leading-relaxed">
                    When comparing trade networks, focus on: 1) Geographic factors (terrain, climate), 2) Technological adaptations, 3) Cultural exchanges, and 4) Economic impacts. For example: "The Silk Roads facilitated the spread of Buddhism from India to China, while the Indian Ocean network spread Islam from Arabia to Southeast Asia. Both networks used different technologies - camel caravans versus lateen sails - to overcome their respective geographic challenges."
                  </p>
                </div>
              </section>

              <section className="space-y-6 border-t-2 border-primary/20 pt-8">
                <h2 className="text-3xl font-bold">Key Terms & Vocabulary</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-primary">Trade Networks</h3>
                    <div className="grid md:grid-cols-2 gap-2 text-sm">
                      <span className="bg-muted px-3 py-1 rounded">Silk Roads</span>
                      <span className="bg-muted px-3 py-1 rounded">Indian Ocean Trade</span>
                      <span className="bg-muted px-3 py-1 rounded">Trans-Saharan Trade</span>
                      <span className="bg-muted px-3 py-1 rounded">Maritime Routes</span>
                      <span className="bg-muted px-3 py-1 rounded">Caravans</span>
                      <span className="bg-muted px-3 py-1 rounded">Monsoon Trade</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-primary">Technologies</h3>
                    <div className="grid md:grid-cols-2 gap-2 text-sm">
                      <span className="bg-muted px-3 py-1 rounded">Lateen Sail</span>
                      <span className="bg-muted px-3 py-1 rounded">Astrolabe</span>
                      <span className="bg-muted px-3 py-1 rounded">Compass</span>
                      <span className="bg-muted px-3 py-1 rounded">Caravel</span>
                      <span className="bg-muted px-3 py-1 rounded">Paper Money</span>
                      <span className="bg-muted px-3 py-1 rounded">Bill of Exchange</span>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-blue-600">Cultural Terms</h3>
                    <div className="space-y-1 text-sm">
                      <span className="bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded inline-block">Pax Mongolica</span>
                      <span className="bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded inline-block">Sufism</span>
                      <span className="bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded inline-block">Syncretism</span>
                      <span className="bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded inline-block">Swahili Culture</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-green-600">Economic Terms</h3>
                    <div className="space-y-1 text-sm">
                      <span className="bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded inline-block">Flying Cash</span>
                      <span className="bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded inline-block">Joint-Stock Company</span>
                      <span className="bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded inline-block">Double-Entry Bookkeeping</span>
                      <span className="bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded inline-block">Hawala System</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-orange-600">Key Cities</h3>
                    <div className="space-y-1 text-sm">
                      <span className="bg-orange-50 dark:bg-orange-900/30 px-3 py-1 rounded inline-block">Samarkand</span>
                      <span className="bg-orange-50 dark:bg-orange-900/30 px-3 py-1 rounded inline-block">Malacca</span>
                      <span className="bg-orange-50 dark:bg-orange-900/30 px-3 py-1 rounded inline-block">Timbuktu</span>
                      <span className="bg-orange-50 dark:bg-orange-900/30 px-3 py-1 rounded inline-block">Calicut</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6 border-t-2 border-primary/20 pt-8">
                <h2 className="text-3xl font-bold">Practice Questions</h2>
                <div className="space-y-6">
                  <div className="bg-muted/50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">Essay Question</h3>
                    <p className="text-sm mb-4">Compare and contrast the Silk Roads and Indian Ocean trade networks. Analyze how each network overcame geographic challenges and facilitated cultural exchange.</p>
                    <div className="text-sm space-y-2">
                      <p><strong>Thesis:</strong> Both networks facilitated global exchange but differed in their geographic challenges, technological adaptations, and cultural impacts.</p>
                      <p><strong>Body Paragraph 1:</strong> Geographic challenges - Silk Roads faced desert and mountain barriers; Indian Ocean faced monsoon winds and vast distances.</p>
                      <p><strong>Body Paragraph 2:</strong> Technological adaptations - Silk Roads used camel caravans and oasis settlements; Indian Ocean used lateen sails and astrolabes.</p>
                      <p><strong>Body Paragraph 3:</strong> Cultural impact - Silk Roads spread Buddhism and Islam; Indian Ocean spread Hindu-Buddhist syncretism and Islamic culture.</p>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">Multiple Choice</h3>
                    <p className="text-sm mb-4">Which technology was most crucial for the success of Indian Ocean trade?</p>
                    <div className="space-y-2 text-sm">
                      <p>A) Camel saddle</p>
                      <p>B) Lateen sail</p>
                      <p>C) Paper money</p>
                      <p>D) Astrolabe</p>
                      <p><strong>Answer:</strong> B) Lateen sail - This triangular sail allowed ships to sail against the wind, enabling year-round trade in the Indian Ocean.</p>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Clock className="text-primary" size={32} />
              </div>
              <h2 className="text-2xl font-bold">Coming Soon</h2>
              <p className="text-muted-foreground">The study guide for Unit {unit.id} is currently being drafted. Check back soon!</p>
              <Button asChild variant="outline" className="rounded-xl">
                <Link to="/units/ap-world">Back to Units</Link>
              </Button>
            </div>
          )}
        </motion.div>

        <footer className="flex justify-between items-center pt-8">
          <div className="text-sm text-muted-foreground">
            Ready to test your knowledge?
          </div>
          <div className="flex gap-3">
            <Button asChild variant="outline" className="rounded-xl">
              <Link to={`/flashcards/${unit.id}`}>Practice Cards</Link>
            </Button>
            <Button asChild className="rounded-xl">
              <Link to={`/quiz/${unit.id}`}>Take Quiz</Link>
            </Button>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default StudyGuide;