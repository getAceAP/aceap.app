import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ApushPlaceholder = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-12">
        <div className="bg-gray-100 p-8 rounded-2xl shadow-sm text-center">
          <h1 className="text-3xl font-bold">APUSH Content Coming Soon</h1>
          <p className="text-muted-foreground mt-4">
            This section for AP U.S. History is under development. Check back later for updates!
          </p>
          <Button
            asChild
            href="/"
            className="rounded-xl bg-primary text-primary-foreground px-6 py-3"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ApushPlaceholder;