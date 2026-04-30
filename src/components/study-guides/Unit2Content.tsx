import { Target, Globe, Users, TrendingUp, ShieldAlert, Zap, Landmark, AlertTriangle, BookOpen, HeartPulse, MapPin } from "lucide-react";

const Unit2Content = () => {
  return (
    <div className="space-y-16">
      {/* Overview */}
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <Target className="text-primary shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-primary mb-1">Unit 2: Networks of Exchange (c. 1200-1450)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This era marks the first large-scale intercontinental connections, as trade routes like the Silk Road, Indian Ocean, and Trans-Saharan linked societies across Eurasia and Africa, facilitating the exchange of goods, ideas, and technologies.
            </p>
          </div>
        </section>

        {/* 2.1 & 2.2 Trade and Technology */}
        <section className="space-y-8">
          <div className="border-l-4 border-primary pl-6">
            <h2 className="text-3xl font-bold m-0">2.1 & 2.2 Trade and Technological Exchange</h2>
            <p className="text-muted-foreground mt-2">The technological and commercial foundations of long-distance trade.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 not-prose">
            <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2"><Zap className="text-primary" size={18} /></h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Cross-cultural diffusion of technology enabled safer, faster travel.</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><strong>Caravel:</strong> Small, maneuverable ships with lateen sails for coastal exploration.</li>
                <li><strong>Compass & Astrolabe:</strong> Improved navigation tools for open-ocean travel.</li>
                <li><strong>Caravanserais:</strong> Rest stops that provided safety and supplies for merchants.</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2"><Landmark className="text-primary" size={18} /></h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Key trade hubs like Samarkand, Constantinople, and Cairo became centers of cultural exchange.</p>
            </div>
          </div>
        </section>

        {/* 2.3 The Mongol Pax */}
        <section className="space-y-8">
          <div className="border-l-4 border-primary pl-6">
            <h2 className="text-3xl font-bold m-0">2.3 The Mongol Pax</h2>
            <p className="text-muted-foreground mt-2">How the Mongol Empire unified Eurasia under one system of trade and communication.</p>
          </div>
          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Users className="text-primary" size={20} /></h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold text-primary">Pax Mongolica</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">A period of relative peace and stability that allowed merchants to travel safely across Eurasia, facilitating the exchange of goods, ideas, and technologies.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-sm uppercase tracking-widest text-primary">Key Figures</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                  <li><strong>Genghis Khan:</strong> Unified the Mongol tribes and began the expansion.</li>
                  <li><strong>Ögedei Khan:</strong> Expanded the empire to its greatest territorial extent.</li>
                  <li><strong>Kublai Khan:</strong> Established the Yuan Dynasty in China and promoted cultural exchange.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2.4 Cultural Diffusion */}
        <section className="space-y-8">
          <div className="border-l-4 border-primary pl-6">
            <h2 className="text-3xl font-bold m-0">2.4 Cultural Diffusion</h2>
            <p className="text-muted-foreground mt-2">How contact with distant societies spread ideas, religions, and technologies.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 not-prose">
            <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20 space-y-4">
              <h3 className="font-bold text-blue-600 flex items-center gap-2 mb-2"><BookOpen className="text-primary" size={18} /></h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Buddhism spread from India to China, Korea, and Japan via Silk Road merchants and monks.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20 space-y-4">
              <h3 className="font-bold text-blue-600 flex items-center gap-2 mb-2"><Globe className="text-primary" size={18} /></h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                <li>Islam spread across Central Asia and into Southeast Asia through trade networks.</li>
                <li>Hindu numerals and mathematical concepts traveled to the Islamic world and eventually to Europe.</li>
                <li>Technologies like papermaking moved from China to the Islamic world and then to Europe.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Unit2Content;