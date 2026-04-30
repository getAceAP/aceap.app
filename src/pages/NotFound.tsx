import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home, AlertCircle, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-8 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-32 h-32 sm:w-48 sm:h-48 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
            <AlertCircle className="text-destructive w-16 h-16 sm:w-24 sm:h-24" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg"
          >
            404
          </motion.div>
        </motion.div>

        <div className="space-y-3 max-w-md">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Lost in History?</h1>
          <p className="text-muted-foreground leading-relaxed">
            The page you're looking for doesn't exist. It might have been moved to a different era or deleted from the archives.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none justify-center">
          <Button asChild variant="outline" className="rounded-xl h-12 px-6">
            <Link to="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          <Button asChild className="rounded-xl h-12 px-6 shadow-lg shadow-primary/20">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;