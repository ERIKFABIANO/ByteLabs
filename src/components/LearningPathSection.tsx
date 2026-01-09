import LearningPath from "./LearningPath";
import { useProgress } from "@/hooks/useProgress";

const LearningPathSection = () => {
  const { progress, getProgressPercentage } = useProgress();
  const totalChapters = 11;
  const percentage = getProgressPercentage(totalChapters);

  return (
    <section className="py-16 border-b border-border">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Sua <span className="text-gradient">Jornada</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-4">
            {progress.completedChapters.length} de {totalChapters} módulos completos
          </p>
          
          {/* Progress bar */}
          <div className="max-w-md mx-auto">
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-accent via-primary to-secondary transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">{percentage}% concluído</p>
          </div>
        </div>

        {/* Path */}
        <div className="max-w-5xl mx-auto overflow-x-auto pb-4">
          <div className="min-w-[700px]">
            <LearningPath />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathSection;
