import { Globe, Landmark, Coins, MapPin, BookOpen, ArrowLeftRight } from "lucide-react";

const Unit1Content = () => {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <Globe className="text-primary shrink-0 mt-1" size={20} />
          <div className="space-y-3">
            <h3 className="font-bold text-primary mb-0">Unit 1: The Global Tapestry (c. 1200–1450)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              This unit is state-building: how governments, religions, and social systems held large, diverse populations together before 1450. The exam cares less about memorizing every king and more about <em>how</em> a state extracted resources, claimed legitimacy, and borrowed ideas from neighbors.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              Keep a comparison chart in your head: Song China (exam bureaucracy + commercial boom), Dar al-Islam (shared law and scholarship across Afro-Eurasia), South and Southeast Asian kingdoms on Indian Ocean choke points, American empires built on tribute and labor drafts, African states on gold-salt and coastal trade, and a fragmented Europe of manors and the Church.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">1.1 East Asia</h2>
          <p className="text-muted-foreground mt-2">Song prosperity, Confucian order, and Buddhist variety.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Landmark className="text-primary" size={18} /> Song state and economy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              The Song (960–1279) emphasized civil administration over conquest. The imperial exam created a <strong>meritocratic</strong> path into the <strong>scholar-gentry</strong>, though wealth still helped. <strong>Champa rice</strong> (fast-ripening, from Vietnam via the tribute system) allowed extra harvests, feeding cities. The <strong>Grand Canal</strong> (completed under the Sui, used heavily later) moved grain north. Proto-industrial workshops, paper money, and gunpowder all sit in this unit even if “industry” sounds later.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              <strong>Filial piety</strong> and <strong>Neo-Confucianism</strong> (Confucian ethics mixed with Buddhist and Daoist metaphysics) ordered family and state. Foot binding among elites signaled status and constrained women’s mobility. Woodblock printing spread texts. Neighboring Japan (Heian court culture, then feudal samurai) and Korea adapted Chinese models without becoming China.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><BookOpen className="text-primary" size={18} /> Buddhism in East Asia</h3>
            <ul className="space-y-2 text-sm text-muted-foreground m-0">
              <li><strong>Theravada:</strong> monastic, older core; strong in Sri Lanka and mainland SE Asia.</li>
              <li><strong>Mahayana:</strong> bodhisattvas can help others; popular in East Asia.</li>
              <li><strong>Tibetan:</strong> ritual and unique political-religious mix.</li>
              <li><strong>Chan/Zen:</strong> meditation; appealed to Chinese and Japanese elites.</li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              AP loves <strong>syncretism</strong>: Buddhism did not simply “replace” Confucianism. It nested beside ancestor rites and state exams. If a stimulus mentions monasteries owning land or Neo-Confucian backlash, that is this debate.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">1.2 Dar al-Islam</h2>
          <p className="text-muted-foreground mt-2">Abbasids, Turkic military elites, and a shared scholarly world.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg m-0">Political map</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              After 750 the <strong>Abbasid Caliphate</strong> ruled from Baghdad and prized administration. By the 1000s <strong>Seljuk Turks</strong> held real power while the caliph kept religious prestige. <strong>Mamluks</strong> (Turkic military slaves) later ran Egypt and stopped Mongol advance there. The <strong>Delhi Sultanate</strong> planted Muslim rule in northern India. A <strong>sultan</strong> is a political-military ruler; “caliph” claims succession to Muhammad.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg m-0">Culture and conversion</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              The <strong>House of Wisdom</strong> in Baghdad translated and expanded Greek, Persian, and Indian learning. <strong>Sufis</strong> spread Islam through personal devotion and local custom — often more effective than armies. The five pillars, Sharia, and Arabic as a scholarly language let a Moroccan qadi work in Mali or Delhi. <strong>Nasir al-Din al-Tusi</strong> stands in for Islamic science on the exam.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">1.3 South and Southeast Asia</h2>
          <p className="text-muted-foreground mt-2">Hindu and Buddhist states on land and strait.</p>
        </div>
        <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            After the Guptas, <strong>Rajput</strong> kingdoms and later <strong>Vijayanagara</strong> in the Deccan organized Hindu power. The <strong>Bhakti movement</strong> stressed personal devotion to a deity and could cut across caste in practice. <strong>Urdu</strong> mixed Hindi with Persian and Arabic script — a language of cultural blending under Muslim rule.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            <strong>Srivijaya</strong> taxed the Strait of Malacca. Khmer Angkor and later Majapahit show how Indian Ocean trade and Hindu-Buddhist kingship built monumental states. If a question mentions a choke point and tribute from passing ships, think Srivijaya.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">1.4 The Americas</h2>
          <p className="text-muted-foreground mt-2">Tribute empires, labor drafts, and mound centers.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg m-0">Mexica (Aztec)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">A tributary empire, not a tightly run province system. Conquered peoples sent maize, cloth, and captives. Tenochtitlan’s chinampas fed the capital. State religion and public sacrifice legitimized the warrior elite. Theocracy mixed sacred kingship with tribute.</p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg m-0">Inca</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0"><strong>Pachacuti</strong> expanded the state. The <strong>mita</strong> rotated labor for roads, terraces, and mines. The <strong>Carpa Nan</strong> tied the Andes together. Cuzco’s Temple of the Sun held royal mummies. Quipu recorded data. Compare mita (labor) with Aztec tribute (goods and people).</p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-3">
            <h3 className="font-bold text-lg m-0">Mississippian</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0"><strong>Cahokia</strong> was a mound-building trade hub near the Mississippi. Many Eastern Woodland societies were <strong>matrilineal</strong>. No iron, no wheel — still large ceremonial centers. Do not treat “no writing” as “no state.”</p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">1.5 Africa</h2>
          <p className="text-muted-foreground mt-2">Gold, Islam, Christianity, and Indian Ocean towns.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 not-prose items-stretch">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><Coins className="text-primary" size={18} /> West Africa</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              <strong>Ghana</strong> then <strong>Mali</strong> taxed the trans-Saharan gold-salt trade. Mansa Musa’s hajj is Unit 2 energy but Mali’s wealth starts here. Islam in courts and cities; rural areas often kept local practice. Kin-based networks still organized much of the interior.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 m-0"><MapPin className="text-primary" size={18} /> East and South</h3>
            <p className="text-sm text-muted-foreground leading-relaxed m-0">
              <strong>Swahili</strong> city-states mixed Bantu and Arabic through Indian Ocean trade. <strong>Great Zimbabwe</strong> linked inland gold to that coast. <strong>Ethiopia</strong> remained a Christian highland kingdom. The Indian Ocean slave trade moved people from East Africa toward the Middle East and India — different scale and legal frame from the later Atlantic system, but still forced labor.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">1.6 Europe</h2>
          <p className="text-muted-foreground mt-2">Feudal fragments, the Church, and a commercial thaw.</p>
        </div>
        <div className="not-prose p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            <strong>Feudalism</strong> bound lords and vassals through land for military service. The <strong>manorial</strong> economy was local: serfs owed labor on the lord’s demesne. The <strong>three-field system</strong> raised yields. <strong>Magna Carta</strong> (1215) and Parliament limited English kings — not democracy, but a check. The <strong>Great Schism</strong> (1054) split Catholic West and Orthodox East. Crusades linked Europe more tightly to the eastern Mediterranean. By 1300, burghers and a small bourgeoisie grew in towns. Humanism and the Renaissance sit at the edge of this period in Italy.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">
            Compare: Europe is politically <em>decentralized</em> relative to Song China or the Ottomans-to-come. The Catholic Church is the closest thing to a trans-regional institution.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="not-prose p-6 rounded-2xl border border-primary/20 bg-primary/5 flex gap-3">
          <ArrowLeftRight className="text-primary shrink-0 mt-0.5" size={18} />
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="m-0"><strong>Exam tip:</strong> Always name the <em>method</em> of control: exams (Song), tribute (Aztec), mita (Inca), tax on trade (Mali, Srivijaya), feudal oaths (Europe), slave-soldier elites (Mamluks). If two states share Islam, ask whether that is law, trade language, or Sufi conversion — not “they were the same empire.”</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unit1Content;
