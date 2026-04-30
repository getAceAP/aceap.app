import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Timer, ShieldCheck, GraduationCap } from "lucide-react";

interface QuizModeSelectionProps {
  onSelect: (mode: 'study' | 'exam') => void;
  unitTitle: string;
}

const QuizModeSelection = ({ onSelect, unitTitle }: QuizModeSelectionProps) => {
  return (
    <div className="max-w-2xl mx-auto space-y-8 py-12">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{unitTitle}</h1>
        <p className="text-muted-foreground">Choose how you want to practice today.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <Card 
          className="relative overflow-hidden border-2 hover:border-primary/50 transition-all cursor-pointer group"
          onClick={() => onSelect('study')}
        >
          <CardHeader>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
              <Brain size={24} />
            </div>
            <CardTitle>Study Mode</CardTitle>
            <CardDescription>Perfect for learning new material.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2"><ShieldCheck size={14} className="text-green-500" /> Instant feedback</li>
              <li className="flex items-center gap-2"><ShieldCheck size={14} className="text-green-500" /> Detailed explanations</li>
              <li className="flex items-center gap-2"><ShieldCheck size={14} className="text-green-500" /> No time pressure</li>
            </ul>
            <Button className="w-full rounded-xl">Start Studying</Button>
          </CardContent>
        </Card>

        <Card 
          className="relative overflow-hidden border-2 hover:border-destructive/50 transition-all cursor-pointer group"
          onClick={() => onSelect('exam')}
        >
          <CardHeader>
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive mb-4 group-hover:scale-110 transition-transform">
              <Timer size={24} />
            </div>
            <CardTitle>Exam Mode</CardTitle>
            <CardDescription>Simulate the real AP environment.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2"><Timer size={14} className="text-destructive" /> 50-minute timer</li>
              <li className="flex items-center gap-2"><Timer size={14} className="text-destructive" /> No instant feedback</li>
              <li className="flex items-center gap-2"><Timer size={14} className="text-destructive" /> Results at the end</li>
            </ul>
            <Button variant="destructive" className="w-full rounded-xl">Start Exam</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizModeSelection;