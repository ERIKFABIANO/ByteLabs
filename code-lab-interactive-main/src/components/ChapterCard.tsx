import { useState } from "react";
import { ChevronRight, Zap, Lock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface ChapterCardProps {
  number: number;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  icon: React.ReactNode;
  hoverInfo: string;
  href: string;
  locked?: boolean;
  completed?: boolean;
}

const ChapterCard = ({
  number,
  title,
  description,
  level,
  icon,
  hoverInfo,
  href,
  locked = false,
  completed = false,
}: ChapterCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const levelColors = {
    beginner: "badge-beginner",
    intermediate: "badge-intermediate",
    advanced: "badge-advanced",
  };

  const levelLabels = {
    beginner: "Iniciante",
    intermediate: "Intermediário",
    advanced: "Avançado",
  };

  const CardWrapper = locked ? "div" : Link;

  return (
    <CardWrapper
      to={locked ? undefined : href}
      className={`block group ${locked ? "cursor-not-allowed" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`card-interactive border rounded-xl p-6 h-full transition-all duration-300 ${
        locked ? "opacity-50 border-border" : 
        completed ? "border-accent/50" : "border-border"
      }`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
              completed ? "bg-accent/20 text-accent" : "bg-muted text-primary group-hover:glow-primary"
            }`}>
              {completed ? <CheckCircle className="w-6 h-6" /> : icon}
            </div>
            <div>
              <span className="text-xs font-mono text-muted-foreground">CAPÍTULO {String(number).padStart(2, '0')}</span>
              <h3 className={`text-lg font-semibold transition-colors ${
                completed ? "text-accent" : "text-foreground group-hover:text-primary"
              }`}>
                {title}
              </h3>
            </div>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full border ${levelColors[level]}`}>
            {levelLabels[level]}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Hover Info */}
        <div className={`overflow-hidden transition-all duration-300 ${isHovered && !locked ? "max-h-24 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-muted/50 rounded-lg p-3 mb-4 border border-primary/20">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono text-primary">INSIGHT</span>
            </div>
            <p className="text-xs text-foreground/80">{hoverInfo}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          {locked ? (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span className="text-sm">Complete o anterior</span>
            </div>
          ) : completed ? (
            <div className="flex items-center gap-2 text-accent">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Concluído</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
              <span className="text-sm font-medium">Começar</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>
    </CardWrapper>
  );
};

export default ChapterCard;
