import { useState } from "react";

interface FlowStep {
  id: string;
  label: string;
  description: string;
  color: "primary" | "secondary" | "accent";
}

const DataFlowDiagram = () => {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  const steps: FlowStep[] = [
    { id: "user", label: "Usuário", description: "Interage com a interface do navegador", color: "accent" },
    { id: "frontend", label: "Front-end", description: "React processa a interação e envia requisição", color: "primary" },
    { id: "api", label: "API", description: "Endpoint recebe e valida os dados", color: "secondary" },
    { id: "backend", label: "Back-end", description: "Processa regras de negócio e lógica", color: "primary" },
    { id: "database", label: "Banco", description: "Armazena e recupera informações", color: "accent" },
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "primary": return "border-primary bg-primary/10 text-primary";
      case "secondary": return "border-secondary bg-secondary/10 text-secondary";
      case "accent": return "border-accent bg-accent/10 text-accent";
      default: return "border-muted bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="relative py-8">
      {/* Title */}
      <h3 className="text-lg font-semibold mb-6 text-center">
        <span className="text-gradient">Fluxo de Dados em um Sistema Web</span>
      </h3>

      {/* Flow diagram */}
      <div className="flex items-center justify-between gap-2">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            {/* Node */}
            <div
              className={`
                relative cursor-pointer transition-all duration-300
                ${activeStep === step.id ? "scale-110" : "hover:scale-105"}
              `}
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className={`
                w-20 h-20 rounded-xl border-2 flex flex-col items-center justify-center gap-1 p-2
                ${getColorClass(step.color)}
                ${activeStep === step.id ? "glow-" + step.color : ""}
              `}>
                <span className="text-2xl">
                  {step.id === "user" && "👤"}
                  {step.id === "frontend" && "🖥️"}
                  {step.id === "api" && "🔌"}
                  {step.id === "backend" && "⚙️"}
                  {step.id === "database" && "🗄️"}
                </span>
                <span className="text-[10px] font-medium text-center leading-tight">
                  {step.label}
                </span>
              </div>

              {/* Tooltip */}
              {activeStep === step.id && (
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 bg-card border border-border rounded-lg p-3 shadow-xl z-10 animate-fade-up">
                  <p className="text-xs text-foreground/80 text-center">
                    {step.description}
                  </p>
                </div>
              )}
            </div>

            {/* Arrow */}
            {index < steps.length - 1 && (
              <div className="flex-1 min-w-8 max-w-16 relative h-2 mx-1">
                <svg className="w-full h-full overflow-visible">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="hsl(187 100% 42%)" />
                    </marker>
                  </defs>
                  <line 
                    x1="0" 
                    y1="4" 
                    x2="calc(100% - 10px)" 
                    y2="4" 
                    stroke="hsl(187 100% 42%)" 
                    strokeWidth="2"
                    strokeDasharray="5 3"
                    markerEnd="url(#arrowhead)"
                    className="animate-data-flow"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Response flow indicator */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <span>← Resposta retorna pelo mesmo caminho →</span>
        </div>
      </div>
    </div>
  );
};

export default DataFlowDiagram;
