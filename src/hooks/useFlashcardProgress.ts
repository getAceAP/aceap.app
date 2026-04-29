import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase';
import { useAuth } from '@/context/AuthContext';

export type MasteryStatus = 'new' | 'learning' | 'learned';

export interface Progress {
  flashcard_id: string;
  correct_count: number;
  status: MasteryStatus;
}

export const useFlashcardProgress = (unitId: number) => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<Record<string, Progress>>({});
  const [loading, setLoading] = useState(true);

  const fetchProgress = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('flashcard_progress')
        .select('flashcard_id, correct_count')
        .eq('user_id', user.id);

      if (error) throw error;

      if (data) {
        const progressMap: Record<string, Progress> = {};
        data.forEach((item) => {
          const status: MasteryStatus = item.correct_count >= 3 ? 'learned' : item.correct_count >= 1 ? 'learning' : 'new';
          progressMap[item.flashcard_id] = {
            flashcard_id: item.flashcard_id,
            correct_count: item.correct_count,
            status,
          };
        });
        setProgress(progressMap);
      }
    } catch (err) {
      console.error("Error fetching progress:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateProgress = async (flashcardId: string, wasCorrect: boolean) => {
    if (!user || !wasCorrect) return;

    const current = progress[flashcardId] || { correct_count: 0 };
    const newCount = current.correct_count + 1;

    try {
      const { error } = await supabase
        .from('flashcard_progress')
        .upsert({
          user_id: user.id,
          flashcard_id: flashcardId,
          correct_count: newCount,
          updated_at: new Date().toISOString(),
        }, { 
          onConflict: 'user_id,flashcard_id' 
        });

      if (error) throw error;

      // Update local state immediately for UI responsiveness
      const status: MasteryStatus = newCount >= 3 ? 'learned' : 'learning';
      setProgress((prev) => ({
        ...prev,
        [flashcardId]: { flashcard_id: flashcardId, correct_count: newCount, status },
      }));
    } catch (err) {
      console.error("Error updating progress:", err);
    }
  };

  useEffect(() => {
    fetchProgress();
  }, [user, unitId]);

  return { progress, updateProgress, loading, refresh: fetchProgress };
};