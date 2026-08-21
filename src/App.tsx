import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Units from "./pages/Units";
import UnitsPsych from "./pages/UnitsPsych";
import UnitsPrecalc from "./pages/UnitsPrecalc";
import Quiz from "./pages/Quiz";
import QuizUnit2 from "./pages/QuizUnit2";
import QuizUnit3 from "./pages/QuizUnit3";
import QuizUnit4 from "./pages/QuizUnit4";
import QuizUnit5 from "./pages/QuizUnit5";
import QuizUnit6 from "./pages/QuizUnit6";
import QuizUnit7 from "./pages/QuizUnit7";
import QuizUnit8 from "./pages/QuizUnit8";
import Flashcards from "./pages/Flashcards";
import StudyGuide from "./pages/StudyGuide";
import PsychStudyGuide from "./pages/PsychStudyGuide";
import Guides from "./pages/Guides";
import GuidesWorld from "./pages/GuidesWorld";
import GuidesPsych from "./pages/GuidesPsych";
import GuidesPrecalc from "./pages/GuidesPrecalc";
import PracticeTests from "./pages/PracticeTests";
import PracticeTestsWorld from "./pages/PracticeTestsWorld";
import PracticeTestsPsych from "./pages/PracticeTestsPsych";
import PracticeTestsPrecalc from "./pages/PracticeTestsPrecalc";
import FlashcardsHub from "./pages/FlashcardsHub";
import FlashcardsWorld from "./pages/FlashcardsWorld";
import FlashcardsPsych from "./pages/FlashcardsPsych";
import FlashcardsPrecalc from "./pages/FlashcardsPrecalc";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import PrecalcStudyGuide from "./pages/PrecalcStudyGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/units/ap-world" element={<Units />} />
          <Route path="/units/ap-psych" element={<UnitsPsych />} />
          <Route path="/units/ap-precalc" element={<UnitsPrecalc />} />
          <Route path="/units/ap-world/quiz/2" element={<QuizUnit2 />} />
          <Route path="/units/ap-world/quiz/3" element={<QuizUnit3 />} />
          <Route path="/units/ap-world/quiz/4" element={<QuizUnit4 />} />
          <Route path="/units/ap-world/quiz/5" element={<QuizUnit5 />} />
          <Route path="/units/ap-world/quiz/6" element={<QuizUnit6 />} />
          <Route path="/units/ap-world/quiz/7" element={<QuizUnit7 />} />
          <Route path="/units/ap-world/quiz/8" element={<QuizUnit8 />} />
          <Route path="/units/:courseId/quiz/:unitId" element={<Quiz />} />
          <Route path="/units/:courseId/flashcards/:unitId" element={<Flashcards />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/ap-world" element={<GuidesWorld />} />
          <Route path="/guides/ap-psych" element={<GuidesPsych />} />
          <Route path="/guides/ap-precalc" element={<GuidesPrecalc />} />
          <Route path="/practice-tests" element={<PracticeTests />} />
          <Route path="/practice-tests/ap-world" element={<PracticeTestsWorld />} />
          <Route path="/practice-tests/ap-psych" element={<PracticeTestsPsych />} />
          <Route path="/practice-tests/ap-precalc" element={<PracticeTestsPrecalc />} />
          <Route path="/flashcards" element={<FlashcardsHub />} />
          <Route path="/flashcards/ap-world" element={<FlashcardsWorld />} />
          <Route path="/flashcards/ap-psych" element={<FlashcardsPsych />} />
          <Route path="/flashcards/ap-precalc" element={<FlashcardsPrecalc />} />
          <Route path="/units/ap-psych/guide/:unitId" element={<PsychStudyGuide />} />
          <Route path="/units/ap-world/guide/:unitId" element={<StudyGuide />} />
          <Route path="/units/ap-precalc/guide/:unitId" element={<PrecalcStudyGuide />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;