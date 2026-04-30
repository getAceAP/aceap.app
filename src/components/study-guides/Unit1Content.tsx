import { Landmark, Swords, ScrollText, Users, Globe, ShieldCheck, BookOpen, Coins } from "lucide-react";

const Unit1Content = () => {
  return (
    <div className="space-y-16">
      {/* Overview */}
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <Globe className="text-primary shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-primary mb-1">Unit 1: The Global Tapestry (c. 1200-1450)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This unit explores the early civilizations that laid the foundation for human history, focusing on state formation, cultural exchange, and technological innovation across Eurasia, Africa, and the Americas.
            </p>
          </div>
        </section>

        {/* 1.1 Civilizations and Empires */}
        <section className="space-y-8">
          <div className="border-l-4 border-primary pl-6">
            <h2 className="text-3xl font-bold m-0">1.1 Civilizations and Empires</h2>
            <p className="text-muted-foreground mt-2">The rise of complex societies in the River Valleys.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 not-prose">
            <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2"><Swords className="text-primary" size={18} /></h3>
              <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Mesopotamia</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">The "Cradle of Civilization" with city-states like Sumer, Babylon, and Assyria; invented writing (cuneiform), the wheel, and Hammurabi's Code.</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-6">
              <h3 className="font-bold text-sm uppercase tracking-wider text-primary">Ancient Egypt</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Developed a centralized government, monumental architecture (pyramids), and a complex religious system centered on the afterlife.</p>
            </div>
            <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-6">
              <h3 className="font-bold text-sm uppercase tracking-wider text-primary">Indus Valley</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Advanced urban planning in Harappa and Mohenjo-Daro; undeciphered script; trade with Mesopotamia.</p>
            </div>
            <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-6">
              <h3 className="font-bold text-sm uppercase tracking-wider text-primary">Ancient China</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Xia, Shang, and Zhou dynasties; developed bronze casting, oracle bones, and early forms of Confucianism.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 1.2 Early Empires */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">1.2 Early Empires</h2>
          <p className="text-muted-foreground mt-2">The Akkadian, Babylonian, and Assyrian empires in Mesopotamia.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><Globe className="text-primary" size={18} /></h3>
            <div className="p-6 rounded-2xl bg-muted/30 border border-border">
              <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Akkadian Empire</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">First empire to unite much of Mesopotamia under Sargon the Great; used military innovation and diplomacy.</p>
            </div>
            <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-6">
              <h3 className="font-bold text-sm uppercase tracking-wider text-primary">Babylonian Empire</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Famous for the Hanging Gardens and the Code of Hammurabi; contributed to law and astronomy.</p>
            </div>
            <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-6">
              <h3 className="font-bold text-sm uppercase tracking-wider text-primary">Assyrian Empire</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Militaristic empire known for iron weapons, efficient bureaucracy, and brutal conquests.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unit1Content;