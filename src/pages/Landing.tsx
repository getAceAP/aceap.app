import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Brain,
  Target,
  Sparkles,
  BookOpen,
  Timer,
  Shuffle,
  GraduationCap,
  FileText,
  Gamepad2,
  ShieldCheck,
  Smartphone,
  Moon,
  BarChart3,
  Layers,
  CheckCircle2,
  Volume2,
  Users,
  ListChecks,
  Lightbulb,
  Repeat,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const Landing = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (user) {
        navigate("/home", { replace: true });
      } else {
        document.title = "AceAP | Master your AP Exams.";
      }
    }
  }, [user, loading, navigate]);

  if (loading || user) {
    return null;
  }

  return (
    <Layout>
      <div className="space-y-24 sm:space-y-32 py-4 sm:py-12">
        <section className="text-center space-y-8 sm:space-y-12 max-w-5xl mx-auto relative">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest shadow-sm">
                <Users size={12} />
                1.5K+ unique visitors last month
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest shadow-sm">
                <Sparkles size={12} className="fill-primary" />
                Built for the 5
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-foreground leading-[1.05] sm:leading-[1.05]">
              Master <span className="text-primary italic">AP Exams</span>
              <br />
              <span className="text-muted-foreground/80">with Active Recall.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto px-4 font-medium">
              Stop passive reading. AceAP uses randomized testing and type-in flashcards to force your brain to remember the curriculum.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center gap-3 px-4"
          >
            <Button asChild size="lg" className="w-full sm:w-auto h-16 px-10 text-xl rounded-2xl shadow-[0_20px_50px_rgba(139,92,246,0.3)] hover:shadow-[0_20px_50px_rgba(139,92,246,0.5)] transition-all duration-500 font-bold">
              <Link to="/home">
                Start Studying Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground font-medium">Free to start. No textbook required.</p>
          </motion.div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4">
          {[
            {
              icon: <Brain className="text-blue-500" size={28} />,
              title: "Active Recall",
              description: "Type-in flashcards ensure you actually know the material, not just recognize it.",
            },
            {
              icon: <Target className="text-red-500" size={28} />,
              title: "Course Specific",
              description: "Unit-by-unit practice across AP courses, from history and psych to math.",
            },
            {
              icon: <Zap className="text-yellow-500" size={28} />,
              title: "Instant Feedback",
              description: "Immediate explanations for every question to close your knowledge gaps.",
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group p-8 sm:p-10 rounded-[2.5rem] border border-border bg-card hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-500 space-y-6 shadow-sm hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-medium">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </section>

        <section className="px-4 max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">How a session actually works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Pick a course, open a unit, then drill until the terms stick. No 40-page PDF to scroll.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Choose a course", body: "AP World, AP Psychology, and AP Precalculus are live. More subjects are on the way." },
              { step: "02", title: "Pick a unit", body: "Jump into one unit or run the full-course review with mixed vocab and a practice exam." },
              { step: "03", title: "Recall, don’t reread", body: "Type answers, flip cards, match terms, or sit a timed exam. Progress saves when you are logged in." },
            ].map((item) => (
              <div key={item.step} className="p-8 rounded-[2.5rem] border border-border bg-card space-y-4">
                <div className="text-sm font-bold text-primary tracking-[0.2em]">{item.step}</div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Courses on AceAP</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Built around College Board units, not random trivia decks.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "AP World History", points: ["9 units of vocab", "Stimulus-based quizzes", "Study guides and DBQ predictions"] },
              { title: "AP Psychology", points: ["5 CED units + full review", "150 questions per unit", "Practice exam with research stimuli"] },
              { title: "AP Precalculus", points: ["Course hub is live", "More content rolling out", "Same quiz and card tools"] },
            ].map((course) => (
              <div key={course.title} className="p-8 rounded-[2.5rem] border border-border bg-card space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="text-primary" size={22} />
                </div>
                <h3 className="text-2xl font-bold">{course.title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {course.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Study tools, not another notes dump</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: <Brain size={22} />, title: "Type-in flashcards", body: "See a definition, type the term. Mark yourself right or wrong if the checker is too strict on spelling." },
              { icon: <Gamepad2 size={22} />, title: "Match mode", body: "Race six term-definition pairs against a live timer. Good for a five-minute reset between classes." },
              { icon: <GraduationCap size={22} />, title: "Study vs exam mode", body: "Study mode explains every miss immediately. Exam mode hides answers until the end and runs a timer." },
              { icon: <FileText size={22} />, title: "Unit study guides", body: "Short, structured reviews of the ideas that actually show up on questions, not a rewritten textbook." },
              { icon: <Layers size={22} />, title: "Full-course review", body: "Psychology packs every unit’s cards plus a mixed practice exam with stimulus passages." },
              { icon: <Shuffle size={22} />, title: "Shuffle everything", body: "Question order and answer choices reshuffle so you cannot memorize “B is always the hippocampus.”" },
            ].map((tool) => (
              <div key={tool.title} className="p-8 rounded-[2.5rem] border border-border bg-card flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-primary shrink-0">
                  {tool.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{tool.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{tool.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Little things that add up</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Random, true points about the site. None of them are “read chapter 12 again.”</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Timer size={18} />, title: "Timed like the real thing", body: "Exam mode uses a countdown. Psych practice exams get 90 minutes for a mixed set." },
              { icon: <ListChecks size={18} />, title: "Right and wrong, not Q12 of 150", body: "Psych quizzes show a running tally instead of a question number so you focus on the item." },
              { icon: <FileText size={18} />, title: "Stimulus questions exist", body: "Practice exams include research vignettes, the way AP Psych actually writes source-based MCQs." },
              { icon: <BarChart3 size={18} />, title: "Mastery is three correct", body: "A card counts as learned after three correct recalls, so you can see unit bars fill up." },
              { icon: <Moon size={18} />, title: "Dark mode is a first-class feature", body: "Late-night cram sessions should not look like a photocopy. Theme toggle lives in the nav." },
              { icon: <Volume2 size={18} />, title: "Optional sound", body: "Correct and wrong cues can stay on or off. You are not stuck with a game-show ding." },
              { icon: <Smartphone size={18} />, title: "Works as a PWA", body: "Add it to your home screen. The layout is built for phones in the hallway between periods." },
              { icon: <ShieldCheck size={18} />, title: "Google sign-in", body: "Save progress across devices without inventing a 19-character password you will forget by May." },
              { icon: <Repeat size={18} />, title: "Shuffle is not cosmetic", body: "Hit shuffle mid-set and you get a new mix of items and options. Muscle memory for “third button” dies." },
              { icon: <Lightbulb size={18} />, title: "Hints before the answer", body: "Flashcards can show the first letter before you tap Answer, which is oddly useful at 12:40 a.m." },
              { icon: <BookOpen size={18} />, title: "Vocab list on every unit", body: "Open the list view if you just want to scan terms before a quiz, no flipping required." },
              { icon: <Sparkles size={18} />, title: "World still has DBQ predictions", body: "AP World keeps the 2026 prediction board. Psych gets the full-course exam instead." },
            ].map((point) => (
              <div key={point.title} className="p-6 rounded-3xl border border-border bg-card space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  {point.icon}
                </div>
                <h3 className="font-bold text-lg leading-snug">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 max-w-5xl mx-auto">
          <div className="rounded-[2.5rem] border border-border bg-card p-8 sm:p-14 space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Rereading highlights is a trap</h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed text-lg">
              <p>
                Highlighting a packet feels productive and then evaporates on exam day. AceAP is built around retrieval: you have to produce the term, pick the cause, or match the study before you see the answer.
              </p>
              <p>
                That is why cards ask you to type, why quizzes shuffle options, and why study mode explains the miss immediately. The site is annoying on purpose. Annoying is how memories stick.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "No infinite scroll of notes",
                "No paywall in the middle of a unit",
                "No “unlock this deck” after question 3",
                "Explanations sit under the question, not in a separate PDF",
              ].map((line) => (
                <li key={line} className="flex items-center gap-2 font-medium text-foreground">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Made for how AP actually tests</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 sm:p-10 rounded-[2.5rem] border border-border bg-card space-y-4">
              <Timer className="text-primary" size={28} />
              <h3 className="text-2xl font-bold">Pacing, not vibes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Exam mode does not coach you through every click. You pick, you move, the clock runs. That is closer to sitting in a gym with 75 bubbles than rereading a Quizlet set on the bus.
              </p>
            </div>
            <div className="p-8 sm:p-10 rounded-[2.5rem] border border-border bg-card space-y-4">
              <FileText className="text-primary" size={28} />
              <h3 className="text-2xl font-bold">Passages and scenarios</h3>
              <p className="text-muted-foreground leading-relaxed">
                World quizzes already use historical stimuli. Psych practice exams now include split-brain, Loftus, Asch, Milgram, and other vignettes with two questions each, kept together so the passage stays on screen.
              </p>
            </div>
            <div className="p-8 sm:p-10 rounded-[2.5rem] border border-border bg-card space-y-4">
              <BarChart3 className="text-primary" size={28} />
              <h3 className="text-2xl font-bold">Progress you can see</h3>
              <p className="text-muted-foreground leading-relaxed">
                Unit cards show how many terms you have actually learned. The home screen adds a mastery bar for World and Psych so you know which course is lying to you.
              </p>
            </div>
            <div className="p-8 sm:p-10 rounded-[2.5rem] border border-border bg-card space-y-4">
              <Smartphone className="text-primary" size={28} />
              <h3 className="text-2xl font-bold">Phone-first, still usable on a laptop</h3>
              <p className="text-muted-foreground leading-relaxed">
                Big tap targets, flip cards, and match mode all work on a phone. On desktop, stimulus questions sit beside the prompt instead of stacking into a tiny column.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-center">Questions people actually ask</h2>
          <div className="space-y-4">
            {[
              { q: "Is it only AP World?", a: "No. World is the original course, Psychology is fully live, and Precalculus is on the hub. More APs are listed as coming soon." },
              { q: "Do I have to make an account?", a: "You can browse, but logging in with Google is how flashcard mastery and quiz results save." },
              { q: "Is this the official College Board curriculum?", a: "It is aligned to AP units and CED-style Psych units. It is a study tool, not the exam itself." },
              { q: "Why type answers instead of tapping?", a: "Recognition is easier than recall. Typing the term is closer to what you need when a prompt is blank on test day." },
              { q: "Can I use it the night before?", a: "Yes, but it is better as a loop: miss a card, see the explanation, shuffle, hit it again tomorrow." },
              { q: "What’s with the 1.5K number?", a: "That is unique visitors from last month, not a made-up “millions of learners” stat." },
            ].map((item) => (
              <div key={item.q} className="p-6 sm:p-8 rounded-3xl border border-border bg-card space-y-2">
                <h3 className="font-bold text-lg">{item.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border/50 pt-24 sm:pt-32 text-center space-y-16 px-4">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Everything you need for a 5.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "AP Courses", value: "3" },
              { label: "Questions", value: "1,000+" },
              { label: "Flashcards", value: "1,200+" },
              { label: "Monthly Visitors", value: "1.5K+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2"
              >
                <div className="text-4xl sm:text-6xl font-bold text-foreground tracking-tighter">{stat.value}</div>
                <div className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-4">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-primary rounded-[3rem] p-10 sm:p-20 text-center text-primary-foreground space-y-8 shadow-[0_40px_100px_rgba(139,92,246,0.3)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl sm:text-6xl font-bold tracking-tight">Ready to ace your APs?</h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg sm:text-xl font-medium">
                Join 1,500+ AP students who used AceAP last month to study smarter, not longer.
              </p>
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto h-16 rounded-2xl px-12 text-xl font-bold shadow-2xl">
                <Link to="/home">Get Started for Free</Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default Landing;
