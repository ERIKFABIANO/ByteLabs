import { Binary, Cpu, Code, Globe, Server, Database, Plug, GitBranch, Workflow, Bot, Layers } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";

interface PathNode {
  id: number;
  title: string;
  icon: React.ReactNode;
}

const LearningPath = () => {
  const { progress, isChapterCompleted } = useProgress();

  const nodes: PathNode[] = [
    { id: 1, title: "Binário", icon: <Binary className="w-5 h-5" /> },
    { id: 2, title: "Máquina", icon: <Cpu className="w-5 h-5" /> },
    { id: 3, title: "Programação", icon: <Code className="w-5 h-5" /> },
    { id: 4, title: "Internet", icon: <Globe className="w-5 h-5" /> },
    { id: 5, title: "Servidores", icon: <Server className="w-5 h-5" /> },
    { id: 6, title: "Banco de Dados", icon: <Database className="w-5 h-5" /> },
    { id: 7, title: "APIs", icon: <Plug className="w-5 h-5" /> },
    { id: 8, title: "Git", icon: <GitBranch className="w-5 h-5" /> },
    { id: 9, title: "Automação", icon: <Workflow className="w-5 h-5" /> },
    { id: 10, title: "IA", icon: <Bot className="w-5 h-5" /> },
    { id: 11, title: "Arquitetura", icon: <Layers className="w-5 h-5" /> },
  ];

  return (
    <div className="relative py-8">
      {/* Connection line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-secondary transform -translate-y-1/2 opacity-30" />
      
      {/* Animated flow */}
      <svg className="absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2 overflow-visible" style={{ width: '100%' }}>
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(142 76% 36%)" />
            <stop offset="50%" stopColor="hsl(187 100% 42%)" />
            <stop offset="100%" stopColor="hsl(270 91% 65%)" />
          </linearGradient>
        </defs>
        <line 
          x1="0" 
          y1="2" 
          x2="100%" 
          y2="2" 
          stroke="url(#flowGradient)" 
          strokeWidth="4"
          strokeDasharray="20 10"
          className="animate-data-flow"
        />
      </svg>

      {/* Nodes */}
      <div className="relative flex justify-between items-center">
        {nodes.map((node, index) => {
          const completed = isChapterCompleted(node.id);
          const isCurrent = progress.currentChapter === node.id;
          
          return (
            <div
              key={node.id}
              className="flex flex-col items-center gap-2 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`
                  relative w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300
                  ${completed 
                    ? "bg-accent text-accent-foreground glow-accent" 
                    : isCurrent 
                      ? "bg-primary text-primary-foreground animate-pulse-glow" 
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }
                  group-hover:scale-110
                `}
              >
                {node.icon}
                
                {/* Pulse ring for current */}
                {isCurrent && (
                  <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-30" />
                )}
                
                {/* Checkmark for completed */}
                {completed && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center border-2 border-background">
                    <svg className="w-3 h-3 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
              
              <span className={`text-[10px] md:text-xs font-medium text-center transition-colors ${
                completed || isCurrent ? "text-foreground" : "text-muted-foreground"
              } group-hover:text-primary`}>
                {node.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearningPath;
