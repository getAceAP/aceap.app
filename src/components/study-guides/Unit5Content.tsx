import { Scale, Factory, Zap, Users, TrendingUp, Globe, Landmark, ScrollText } from "lucide-react";

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
              This era is defined by two seismic shifts: the Enlightenment-led political revolutions that challenged monarchies, and the Industrial Revolution that fundamentally altered how humans produced goods and lived their lives.
            </p>
          </div>
        </div>
      </section>

      {/* 5.1 & 5.2 Enlightenment and Revolutions */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">5.1 & 5.2 Enlightenment and Political Revolutions</h2>
          <p className="text-muted-foreground mt-2">The age of reason and the rise of nationalism.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><ScrollText className="text-primary" size={18} /> Enlightenment Ideas</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Natural Rights:</strong> John Locke's idea of life, liberty, and property.</li>
              <li><strong>Social Contract:</strong> The agreement between the governed and the government.</li>
              <li><strong>Separation of Powers:</strong> Montesquieu's 3-branch system to prevent tyranny.</li>
              <li><strong>Laissez-faire:</strong> Adam Smith's 'hands-off' approach to the economy.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2"><Landmark className="text-primary" size={18} /> Major Revolutions</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>American (1776):</strong> Challenged British rule; established a republic.</li>
              <li><strong>French (1789):</strong> Overthrew the absolute monarchy; Declaration of the Rights of Man.</li>
              <li><strong>Haitian (1791):</strong> The only successful slave revolt in history, led by Toussaint L'Ouverture.</li>
              <li><strong>Latin American:</strong> Simon Bolivar led independence movements against Spain.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5.3 & 5.4 Industrial Revolution */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">5.3 & 5.4 The Industrial Revolution</h2>
          <p className="text-muted-foreground mt-2">The birth of the factory system and its global spread.</p>
        </div>

        <div className="space-y-6">
          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Factory className="text-primary" size={20} /> Why Great Britain?</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold text-primary">Natural Resources</h4>
                <p className="text-sm text-muted-foreground">Abundant coal for steam power and iron for machine building. Proximity to waterways for transport.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-primary">Legal & Economic Factors</h4>
                <p className="text-sm text-muted-foreground">Protection of private property, accumulation of capital from colonial trade, and the <strong>Enclosure Movement</strong> which provided a surplus of labor.</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl border border-border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Globe className="text-primary" size={20} /> Global Spread</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-bold text-primary">United States</h4>
                <p className="text-xs text-muted-foreground">Rapid industrialization in the North, fueled by textile mills and massive railroad expansion.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary">Russia</h4>
                <p className="text-xs text-muted-foreground">State-sponsored industrialization focused on heavy industry and the <strong>Trans-Siberian Railroad</strong>.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary">Japan</h4>
                <p className="text-xs text-muted-foreground">The <strong>Meiji Restoration</strong> saw Japan rapidly modernize to avoid Western colonization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.7 & 5.8 Economic Developments and Reactions */}
      <section className="space-y-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-bold m-0">5.7 & 5.8 Economic Developments and Reactions</h2>
          <p className="text-muted-foreground mt-2">Capitalism, Socialism, and Reform.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 not-prose">
          <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/20">
            <h3 className="font-bold text-green-600 flex items-center gap-2 mb-4"><TrendingUp size={18} /> Capitalism & Transnational Business</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The rise of <strong>Joint-Stock Companies</strong> and <strong>Limited Liability Corporations</strong> allowed for massive investment. Transnational businesses like <strong>HSBC</strong> and <strong>Unilever</strong> began to operate globally.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
            <h3 className="font-bold text-destructive flex items-center gap-2 mb-4"><Users size={18} /> Reactions to Industrialization</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong>Labor Unions:</strong> Workers organized to demand better wages and conditions.</li>
              <li><strong>Marxism:</strong> Karl Marx argued that the proletariat would eventually overthrow the bourgeoisie.</li>
              <li><strong>Ottoman/Qing Reforms:</strong> The Tanzimat reforms and Self-Strengthening Movement attempted to modernize but faced internal resistance.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unit5Content;