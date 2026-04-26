import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p>By accessing or using AceAP.app, you agree to be bound by these Terms of Service.</p>
          
          <h2 className="text-2xl font-semibold">2. Use of Service</h2>
          <p>You agree to use the service only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account.</p>
          
          <h2 className="text-2xl font-semibold">3. Intellectual Property</h2>
          <p>The content, features, and functionality of AceAP.app are owned by us and are protected by international copyright, trademark, and other intellectual property laws.</p>
          
          <h2 className="text-2xl font-semibold">4. Limitation of Liability</h2>
          <p>In no event shall AceAP.app be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the service.</p>
        </section>
      </div>
    </Layout>
  );
};

export default Terms;