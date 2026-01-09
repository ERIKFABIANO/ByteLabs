import { useState, useEffect } from "react";

interface ProgressData {
  completedChapters: number[];
  currentChapter: number;
  lastVisited: string;
}

const STORAGE_KEY = "bytelab_progress";

const defaultProgress: ProgressData = {
  completedChapters: [],
  currentChapter: 1,
  lastVisited: new Date().toISOString(),
};

export const useProgress = () => {
  const [progress, setProgress] = useState<ProgressData>(defaultProgress);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load progress from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as ProgressData;
        setProgress(parsed);
      } catch {
        setProgress(defaultProgress);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever progress changes
  const saveProgress = (newProgress: ProgressData) => {
    const updated = { ...newProgress, lastVisited: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setProgress(updated);
  };

  const markChapterComplete = (chapterId: number) => {
    if (!progress.completedChapters.includes(chapterId)) {
      const newCompleted = [...progress.completedChapters, chapterId].sort((a, b) => a - b);
      saveProgress({
        ...progress,
        completedChapters: newCompleted,
        currentChapter: Math.max(progress.currentChapter, chapterId + 1),
      });
    }
  };

  const setCurrentChapter = (chapterId: number) => {
    saveProgress({
      ...progress,
      currentChapter: chapterId,
    });
  };

  const isChapterCompleted = (chapterId: number) => {
    return progress.completedChapters.includes(chapterId);
  };

  const isChapterLocked = (chapterId: number) => {
    if (chapterId === 1) return false;
    // Chapter is locked if the previous one isn't completed
    return !progress.completedChapters.includes(chapterId - 1);
  };

  const getProgressPercentage = (totalChapters: number) => {
    return Math.round((progress.completedChapters.length / totalChapters) * 100);
  };

  const resetProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
    setProgress(defaultProgress);
  };

  return {
    progress,
    isLoaded,
    markChapterComplete,
    setCurrentChapter,
    isChapterCompleted,
    isChapterLocked,
    getProgressPercentage,
    resetProgress,
  };
};
