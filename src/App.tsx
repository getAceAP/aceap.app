import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Units from "./pages/Units";
import Quiz from "./pages/Quiz";
import QuizUnit4 from "./pages/QuizUnit4";
import QuizUnit5 from "./pages/QuizUnit5";
import Flashcards from "./pages/Flashcards";
import StudyGuide from "./pages/StudyGuide";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Settings from "./pages/Settings";
import Predictions from "./pages/Predictions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/units/ap-world" element={<Units />} />
          <Route path="/units/ap-world/quiz/4" element={<QuizUnit4 />} />
          <Route path="/units/ap-world/quiz/5" element={<QuizUnit5 />} />
          <Route path="/units/ap-world/quiz/:unitId" element={<Quiz />} />
          <Route path="/units/ap-world/flashcards/:unitId" element={<Flashcards />} />
          <Route path="/units/ap-world/guide/:unitId" element={<StudyGuide />} />
          <Route path="/predictions" element={<Predictions />} />
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