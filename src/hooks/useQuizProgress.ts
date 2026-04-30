import { supabase } from '@/utils/supabase';
import { useAuth } from '@/context/AuthContext';
import { showError, showSuccess } from '@/utils/toast';

export const useQuizProgress = () => {
  const { user } = useAuth();

  const saveQuizResult = async (unitId: number, score: number, total: number, mode: 'study' | 'exam') => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('quiz_results')
        .insert({
          user_id: user.id,
          unit_id: unitId,
          score,
          total_questions: total,
          mode,
          completed_at: new Date().toISOString(),
        });

      if (error) throw error;
      showSuccess("Progress saved! 📈");
    } catch (err: any) {
      console.error("Error saving quiz progress:", err);
      // We don't show error to user here to avoid interrupting the flow
    }
  };

  return { saveQuizResult };
};