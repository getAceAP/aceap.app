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
  Lightbulb,
  Repeat,
  ListChecks,
  Volume2,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import { courseCovers } from "@/data/course-covers";
import StudyLaptop from "@/components/StudyLaptop";

const faces = [
  { initials: "AP", className: "bg-primary text-primary-foreground" },
  { initials: "WH", className: "bg-amber-500 text-white" },
  { initials: "PS", className: "bg-sky-500 text-white" },
  { initials: "PC", className: "bg-emerald-500 text-white" },
];

const Band = ({
  children,
  className,
  innerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) => (
  <section className={cn("py-20 sm:py-28 px-4 sm:px-8", className)}>
    <div className={cn("max-w-6xl mx-auto", innerClassName)}>{children}</div>
  </section>
);

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
    <Layout wide>
      <Band className="relative" innerClassName="max-w-6xl">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-sky-400/8 to-fuchsia-400/10 dark:from-primary/20 dark:via-sky-500/10 dark:to-fuchsia-500/10" />
          <div className="absolute -top-28 left-[12%] h-[420px] w-[420px] rounded-full bg-primary/25 dark:bg-primary/30 blur-[100px]" />
          <div className="absolute top-10 -right-10 h-[380px] w-[380px] rounded-full bg-sky-400/30 dark:bg-sky-500/20 blur-[90px]" />
          <div className="absolute -bottom-20 left-[30%] h-[280px] w-[280px] rounded-full bg-fuchsia-400/25 dark:bg-fuchsia-500/18 blur-[80px]" />

          <div className="absolute right-[-10%] top-1/2 h-[640px] w-[640px] -translate-y-1/2">
            <div className="absolute inset-0 rounded-full border border-primary/30 dark:border-primary/40" />
            <div className="absolute inset-[7%] rounded-full border border-sky-400/25 dark:border-sky-400/35" />
            <div className="absolute inset-[14%] rounded-full border border-fuchsia-400/25 dark:border-fuchsia-400/35" />
            <div className="absolute inset-[22%] rounded-full border border-primary/20 dark:border-primary/30" />
            <div className="absolute inset-[31%] rounded-full border border-sky-400/20 dark:border-sky-400/30" />
            <div className="absolute inset-[41%] rounded-full border border-fuchsia-400/20 dark:border-fuchsia-400/30" />
            <div className="absolute inset-[52%] rounded-full border border-primary/15 dark:border-primary/25" />
          </div>
          <div className="absolute -left-[12%] -top-24 h-[420px] w-[420px]">
            <div className="absolute inset-0 rounded-full border border-primary/20 dark:border-primary/30" />
            <div className="absolute inset-[12%] rounded-full border border-sky-400/20 dark:border-sky-400/30" />
            <div className="absolute inset-[26%] rounded-full border border-fuchsia-400/20 dark:border-fuchsia-400/30" />
            <div className="absolute inset-[42%] rounded-full border border-primary/15 dark:border-primary/25" />
          </div>
        </div>

        <div className="relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full bg-card border border-border shadow-sm">
                <div className="flex items-center">
                  {faces.map((face, i) => (
                    <span
                      key={face.initials}
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold ring-2 ring-card",
                        i > 0 && "-ml-2",
                        face.className
                      )}
                    >
                      {face.initials}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground">1.5K+ students last month</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest">
                <Sparkles size={12} className="fill-primary" />
                Built for the 5
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
              Master <span className="text-primary italic">AP Exams</span>
              <br />
              <span className="text-muted-foreground">with Active Recall.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Stop passive reading. AceAP uses randomized testing and type-in flashcards to force your brain to remember the curriculum.
            </p>
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
              <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-2xl shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/35 transition-shadow duration-300 font-bold">
                <Link to="/home">
                  Start Studying Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground font-medium sm:self-center">Free to start. No textbook required.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="pb-6 lg:pb-0"
          >
            <StudyLaptop />
          </motion.div>
        </div>
      </Band>

      <Band className="bg-violet-50 dark:bg-violet-950/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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
        </div>
      </Band>

      <Band className="bg-sky-50 dark:bg-sky-950/50">
        <div className="space-y-12">
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
        </div>
      </Band>

      <Band className="bg-amber-50 dark:bg-amber-950/50">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Courses on AceAP</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Built around College Board units, not random trivia decks.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { id: "ap-world", title: "AP World History", points: ["9 units of vocab", "Stimulus-based quizzes", "Study guides for every unit"] },
              { id: "ap-psych", title: "AP Psychology", points: ["5 CED units + full review", "150 questions per unit", "Practice exam with research stimuli"] },
              { id: "ap-precalc", title: "AP Precalculus", points: ["Generated practice (500+ variants/unit)", "Formula drills + teaching guides", "Units 1–3 live; Unit 4 later"] },
            ].map((course) => (
              <div key={course.title} className="rounded-[2.5rem] border border-border bg-card overflow-hidden space-y-0">
                <div className="relative h-40">
                  <img src={courseCovers[course.id]} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-8 pt-4 space-y-5">
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
              </div>
            ))}
          </div>
        </div>
      </Band>

      <Band className="bg-fuchsia-50 dark:bg-fuchsia-950/50">
        <div className="space-y-12">
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
        </div>
      </Band>

      <Band className="bg-emerald-50 dark:bg-emerald-950/50">
        <div className="space-y-12">
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
              { icon: <Sparkles size={18} />, title: "World quizzes cover all 9 units", body: "Units 1 and 9 now have full practice sets, matching the rest of the course—not a two-question stub." },
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
        </div>
      </Band>

      <Band className="bg-rose-50 dark:bg-rose-950/50" innerClassName="max-w-5xl">
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
              "5 free quiz questions for guests — then sign up",
              "Study guides stay open with no mid-unit lock",
              "Explanations sit under the question, not in a separate PDF",
            ].map((line) => (
              <li key={line} className="flex items-center gap-2 font-medium text-foreground">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </Band>

      <Band className="bg-indigo-50 dark:bg-indigo-950/50">
        <div className="space-y-12">
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
        </div>
      </Band>

      <Band className="bg-orange-50 dark:bg-orange-950/50" innerClassName="max-w-4xl space-y-10">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-center">Questions people actually ask</h2>
        <div className="space-y-4">
          {[
            { q: "Is it only AP World?", a: "No. World, Psychology, and Precalculus (Units 1–3) are live. More APs are listed as coming soon." },
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
      </Band>

      <Band className="bg-slate-100 dark:bg-slate-900">
        <div className="text-center space-y-16">
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
        </div>
      </Band>

      <Band className="bg-primary/10 dark:bg-primary/15">
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.25 }}
          className="bg-primary rounded-[3rem] p-10 sm:p-20 text-center text-primary-foreground space-y-8 shadow-2xl shadow-primary/30 relative overflow-hidden"
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
      </Band>
    </Layout>
  );
};

export default Landing;
