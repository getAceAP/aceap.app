import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Heading, Button } from "@/components/ui/heading";
import { Lock } from "lucide-react";

const ComingSoon = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center text-center space-y-8">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 space-y-6">
            <Heading as="h1" size="xl" className="text-primary font-bold">
              Coming Soon
            </Heading>
            <p className="text-muted-foreground">
              This section is under development. Check back later for AP US History, AP Government, and AP Human Geography resources.
            </p>
            <Button variant="outline" onClick={() => window.history.back()}>
              ← Back to Home
            </Button>
          </CardContent>
        </Card>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <Lock className="h-12 w-12 text-muted-foreground" />
        </div>
      </Layout>
    </Layout>
  );
};

export default ComingSoon;