import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Newspaper } from "lucide-react";
import { motion } from "framer-motion";
import { useTitle } from "@/hooks/useTitle";
import { updatePosts } from "@/data/updates";

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const Updates = () => {
  useTitle("Updates");

  return (
    <Layout wide>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-8 py-16 sm:py-24 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest">
            <Newspaper size={12} />
            Updates
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">What’s new on AceAP</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Product notes and course launches — a simple blog for now. An email newsletter can plug in later without changing this page.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-8 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto space-y-10">
          {updatePosts.map((post, i) => (
            <motion.article
              key={post.id}
              id={post.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-[1.75rem] border border-border bg-card p-6 sm:p-8 space-y-4 scroll-mt-24"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 text-primary px-2.5 py-0.5 normal-case tracking-normal font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{post.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
              <div className="space-y-3 pt-1">
                {post.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}

          <div className="pt-2">
            <Link
              to="/home"
              className="inline-flex items-center font-bold text-primary hover:underline"
            >
              Back to home
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Updates;
