import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase';
import { useAuth } from '@/context/AuthContext';
import { units } from '@/data/content';

export interface UnitStats {
  learned: number;
  total: number;
  percentage: number;
}

export const useAllProgress = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<Record<number, UnitStats>>({});
  const [loading, setLoading] = useState(true);

  const fetchAllProgress = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('flashcard_progress')
      .select('flashcard_id, correct_count')
      .eq('user_id', user.id);

    if (!error && data) {
      const newStats: Record<number, UnitStats> = {};
      
      units.forEach(unit => {
        const unitCardIds = unit.flashcards.map(f => f.id);
        const learnedInUnit = data.filter(p => 
          unitCardIds.includes(p.flashcard_id) && p.correct_count >= 3
        ).length;

        newStats[unit.id] = {
          learned: learnedInUnit,
          total: unit.flashcards.length,
          percentage: Math.round((learnedInUnit / unit.flashcards.length) * 100)
        };
      });
      
      setStats(newStats);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAllProgress();
  }, [user]);

  return { stats, loading, refresh: fetchAllProgress };
};