import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you create an account, such as your name and email address. We also collect data about your progress in the courses.</p>
          
          <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, and to personalize your learning experience.</p>
          
          <h2 className="text-2xl font-semibold">3. Data Security</h2>
          <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.</p>
          
          <h2 className="text-2xl font-semibold">4. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at support@aceap.app.</p>
        </section>
      </div>
    </Layout>
  );
};

export default Privacy;