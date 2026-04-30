import { Scale, Factory, Zap, Users, TrendingUp, Globe, Landmark, ScrollText, BookOpen, AlertTriangle, ShieldCheck } from "lucide-react";

const Unit5Content = () => {
  return (
    <div className="space-y-16">
      {/* Overview */}
      <section className="space-y-6">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-4 items-start not-prose">
          <Scale className="text-primary shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-primary mb-1">Unit 5: Revolutions (1750-1900)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This era is defined by two seismic shifts: the <strong>Enlightenment-led political revolutions</strong> that challenged monarchies and established republics, and the <strong>Industrial Revolution</strong> that fundamentally altered how humans produced goods, lived their lives, and interacted with the environment.
            </p>
          </div>
        </div>
      </section>

      {/* 5.1 & 5.2 Enlightenment and Revolutions */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">5.1 & 5.2 Enlightenment and Political Revolutions</h2>
          <p className="text-muted-foreground mt-2">The age of reason, natural rights, and the rise of nationalism.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><ScrollText className="text-primary" size={18} /> Enlightenment Ideas</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Thinkers applied reason to human relationships and politics, challenging traditional authority.</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>John Locke:</strong> Argued for <strong>Natural Rights</strong> (life, liberty, property) and the <strong>Social Contract</strong> (consent of the governed).</li>
              <li><strong>Montesquieu:</strong> Advocated for the <strong>Separation of Powers</strong> (3 branches) to prevent tyranny.</li>
              <li><strong>Voltaire:</strong> Promoted religious toleration and freedom of speech.</li>
              <li><strong>Rousseau:</strong> Emphasized the <strong>General Will</strong> of the people.</li>
              <li><strong>Adam Smith:</strong> Wrote <i>The Wealth of Nations</i>, advocating for <strong>Laissez-faire</strong> capitalism and free markets.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><Landmark className="text-primary" size={18} /> Major Revolutions</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <strong>American (1776):</strong> Challenged British rule over taxes and lack of representation; established a republic based on Enlightenment principles.
              </li>
              <li>
                <strong>French (1789):</strong> Overthrew the absolute monarchy; issued the <strong>Declaration of the Rights of Man</strong>; led to the radical <strong>Reign of Terror</strong> and the rise of <strong>Napoleon</strong>.
              </li>
              <li>
                <strong>Haitian (1791):</strong> The only successful slave revolt in history, led by <strong>Toussaint L'Ouverture</strong>. It ended slavery in Saint-Domingue and created the first independent black republic.
              </li>
              <li>
                <strong>Latin American:</strong> <strong>Simon Bolivar</strong> (The Liberator) led independence movements against Spain in South America, inspired by Enlightenment ideas and the American/French revolutions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5.3 - 5.6 Industrial Revolution */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">5.3 - 5.6 The Industrial Revolution</h2>
          <p className="text-muted-foreground mt-2">The birth of the factory system, technological innovation, and global spread.</p>
        </div>

        <div className="space-y-6">
          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Factory className="text-primary" size={20} /> Why Great Britain?</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold text-primary">Natural & Economic Advantages</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                  <li>Abundant <strong>coal</strong> for steam power and <strong>iron</strong> for machines.</li>
                  <li>Proximity to waterways and canals for cheap transport.</li>
                  <li>Accumulation of <strong>capital</strong> from colonial trade and slave labor.</li>
                  <li>Protection of private property and a stable government.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-primary">The Enclosure Movement</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Common lands were fenced off by wealthy landowners, forcing small farmers to move to cities in search of work, providing a surplus of cheap labor for the new factories.</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Zap className="text-primary" size={20} /> Technological Innovations</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-bold text-primary">Steam Engine</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Improved by <strong>James Watt</strong>. Allowed factories to be built anywhere (not just near rivers) and powered locomotives and steamships.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary">Second Industrial Rev</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Focused on <strong>steel</strong> (Bessemer process), <strong>chemicals</strong>, <strong>electricity</strong>, and <strong>precision machinery</strong> in the late 19th century.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary">Communication</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">The <strong>Telegraph</strong> and later the telephone revolutionized long-distance communication, shrinking the world.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.7 - 5.10 Economic & Social Impacts */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">5.7 - 5.10 Economic & Social Impacts</h2>
          <p className="text-muted-foreground mt-2">Capitalism, Socialism, and the changing fabric of society.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/20 space-y-4">
            <h3 className="font-bold text-green-600 flex items-center gap-2 mb-2"><TrendingUp size={18} /> Economic Developments</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Capitalism:</strong> Replaced mercantilism. Focused on private ownership and profit.</li>
              <li><strong>Transnational Business:</strong> Companies like <strong>HSBC</strong> and <strong>Unilever</strong> operated across borders, often engaging in economic imperialism.</li>
              <li><strong>Stock Markets:</strong> Allowed for the accumulation of massive capital for large-scale industrial projects.</li>
              <li><strong>Standard of Living:</strong> Improved for the middle class but remained low for the working class for decades.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20 space-y-4">
            <h3 className="font-bold text-destructive flex items-center gap-2 mb-2"><Users size={18} /> Social Impacts & Reactions</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Urbanization:</strong> Rapid growth of cities led to overcrowding, pollution, and disease (cholera).</li>
              <li><strong>Labor Unions:</strong> Workers organized to demand better wages, shorter hours, and the end of child labor.</li>
              <li><strong>Marxism:</strong> Karl Marx argued that the <strong>proletariat</strong> (workers) would overthrow the <strong>bourgeoisie</strong> (owners) to create a classless society.</li>
              <li><strong>Feminism:</strong> Emerged as women demanded the right to vote (suffrage) and access to education (e.g., Mary Wollstonecraft).</li>
            </ul>
          </div>
        </div>

        <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><ShieldCheck className="text-primary" size={20} /> State-Sponsored Industrialization</h3>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="font-bold text-primary">Meiji Restoration (Japan)</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Japan rapidly modernized and industrialized to avoid Western colonization. The government built factories and railroads, then sold them to private investors (<strong>zaibatsu</strong>).</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-primary">Muhammad Ali (Egypt)</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Attempted to modernize Egypt's military and economy through state-sponsored textile production, but faced resistance from the British who wanted to maintain Egypt as a source of raw cotton.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unit5Content;