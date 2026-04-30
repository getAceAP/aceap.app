import { Globe, Zap, Users, TrendingUp, ShieldAlert, Landmark, AlertTriangle, BookOpen, HeartPulse, MapPin, Scale, Factory, Sparkles } from "lucide-react";

const Unit9Content = () => {
  return (
    <div className="space-y-16">
      {/* Overview */}
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <Globe className="text-primary shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-primary mb-1">Unit 9: Globalization (1900-present)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This final unit examines the unprecedented level of global integration in the late 20th and early 21st centuries. It covers technological advances, global economic shifts, environmental challenges, and the spread of a global culture and human rights.
            </p>
          </div>
        </div>
      </section>

      {/* 9.1 - 9.3 Tech & Environment */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">9.1 - 9.3 Technology & Environment</h2>
          <p className="text-muted-foreground mt-2">Shrinking the world and challenging the planet.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><Zap className="text-primary" size={18} /> Technological Advances</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Communication:</strong> The Internet, social media, and mobile phones have made instant global interaction possible.</li>
              <li><strong>Transportation:</strong> Commercial air travel and shipping containers have revolutionized global trade and movement.</li>
              <li><strong>Green Revolution:</strong> New agricultural technologies (high-yield seeds, fertilizers) increased food production but had environmental costs.</li>
              <li><strong>Medical Advances:</strong> Antibiotics, vaccines, and birth control have fundamentally changed human health and demographics.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20 space-y-4">
            <h3 className="font-bold text-destructive flex items-center gap-2 mb-2"><AlertTriangle size={18} /> Environmental Challenges</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Climate Change:</strong> Driven by the burning of fossil fuels and greenhouse gas emissions.</li>
              <li><strong>Deforestation & Desertification:</strong> Caused by industrial agriculture and urban expansion.</li>
              <li><strong>Resource Depletion:</strong> Competition for fresh water, minerals, and energy sources.</li>
              <li><strong>Global Response:</strong> Agreements like the <strong>Paris Climate Accord</strong> aim to address these issues through international cooperation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9.4 - 9.5 Global Economics */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">9.4 - 9.5 Global Economics</h2>
          <p className="text-muted-foreground mt-2">The rise of a truly global market.</p>
        </div>

        <div className="space-y-6">
          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><TrendingUp className="text-primary" size={20} /> Economic Liberalization</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold text-primary">Free Market Policies</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Leaders like <strong>Ronald Reagan</strong>, <strong>Margaret Thatcher</strong>, and <strong>Deng Xiaoping</strong> (China) promoted deregulation and privatization, integrating their economies into the global market.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-primary">Global Organizations</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">The <strong>World Trade Organization (WTO)</strong>, <strong>IMF</strong>, and <strong>World Bank</strong> were created to regulate and facilitate international trade and finance.</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Factory className="text-primary" size={20} /> Knowledge & Service Economies</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In developed nations, the economy shifted from manufacturing to <strong>knowledge-based</strong> and <strong>service sectors</strong>. Manufacturing moved to developing nations (e.g., Vietnam, Mexico) with lower labor costs.
            </p>
          </div>
        </div>
      </section>

      {/* 9.6 - 9.9 Global Culture & Resistance */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">9.6 - 9.9 Global Culture & Resistance</h2>
          <p className="text-muted-foreground mt-2">Human rights, global culture, and the pushback against globalization.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="p-6 rounded-2xl bg-accent/30 border border-primary/10 space-y-4">
            <h3 className="font-bold text-primary flex items-center gap-2 mb-2"><Sparkles size={18} /> Global Culture & Rights</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Human Rights:</strong> The <strong>UN Universal Declaration of Human Rights</strong> established global standards for individual dignity.</li>
              <li><strong>Global Pop Culture:</strong> Hollywood, Bollywood, Anime, Reggae, and K-Pop have created a shared global cultural experience.</li>
              <li><strong>Global Sports:</strong> The Olympics and World Cup serve as symbols of global interaction and competition.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20 space-y-4">
            <h3 className="font-bold text-destructive flex items-center gap-2 mb-2"><AlertTriangle size={18} /> Resistance to Globalization</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Anti-Globalization Movement:</strong> Critics argue that globalization benefits wealthy nations and corporations at the expense of the poor and the environment.</li>
              <li><strong>Nationalist Pushback:</strong> Movements like <strong>Brexit</strong> and the rise of populist leaders reflect a desire to reclaim national sovereignty.</li>
              <li><strong>Cultural Preservation:</strong> Efforts to protect local languages and traditions from being overwhelmed by a homogenized global culture.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unit9Content;