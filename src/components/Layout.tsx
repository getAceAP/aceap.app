import React, { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router"; // Assuming Next.js; adjust if using React Router
import { useSearchParams } from "react-router-dom"; // If using React Routerconst Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { pathname } = router;

  // Default SEO data; can be overridden per page
  const defaultSEO = {
    title: "AP World History Hub",
    description: "Comprehensive AP World History resources",
    image: "/og-image.png",
    url: "https://yourdomain.com/",
  };

  // Simple mapping of routes to SEO overrides
  const routeSEO = {
    "/": { ...defaultSEO },
    "/dashboard": {
      ...defaultSEO,
      title: "Dashboard – AP World History Hub",
      description: "Your personalized AP World History dashboard with quick access to guides, quizzes, and flashcards.",
    },
    "/units/ap-world": { ...defaultSEO },
    "/units/ap-world/quiz": { ...defaultSEO, title: "Quiz – AP World History" },
    "/units/ap-world/guide": { ...defaultSEO, title: "Study Guide – AP World History" },
    "/coming-soon": { ...defaultSEO, title: "Coming Soon – AP World History Hub" },
    // Add more overrides as needed
  };

  const seo = routeSEO[pathname] || defaultSEO;

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.url} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.url} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
        {/* JSON‑LD can be added here if needed per page */}
      </Helmet>

      <!-- Your existing layout wrapper -->
      <div className="min-h-screen flex flex-col">
        {children}
      </div>
    </>
  );
};

export default Layout;