import { useState, useEffect } from "react";

const TerminalDemo = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const terminalContent = [
    { text: "$ inicializando sistema...", delay: 500 },
    { text: "✓ Código fonte carregado", delay: 800 },
    { text: "✓ Compilando para binário: 01001000 01100101...", delay: 1200 },
    { text: "✓ Processador executando instruções", delay: 800 },
    { text: "✓ Memória alocada: 256MB", delay: 600 },
    { text: "✓ Sistema pronto!", delay: 400 },
    { text: "", delay: 300 },
    { text: "$ echo 'Você está pronto para aprender!'", delay: 800 },
    { text: "Você está pronto para aprender! 🚀", delay: 500 },
  ];

  useEffect(() => {
    if (currentIndex < terminalContent.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, terminalContent[currentIndex].text]);
        setCurrentIndex(prev => prev + 1);
      }, terminalContent[currentIndex].delay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="terminal scanlines relative overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-destructive/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-accent/80" />
        <span className="ml-4 text-xs text-muted-foreground">terminal.exe</span>
      </div>

      {/* Terminal content */}
      <div className="space-y-1 min-h-[200px]">
        {lines.map((line, index) => (
          <div 
            key={index} 
            className={`transition-opacity duration-300 ${
              line.startsWith("✓") ? "text-accent" : 
              line.startsWith("$") ? "text-primary" : 
              line.includes("🚀") ? "text-secondary font-bold" :
              "text-foreground"
            }`}
          >
            {line}
          </div>
        ))}
        {currentIndex < terminalContent.length && (
          <span className="inline-block w-2 h-4 bg-primary animate-blink" />
        )}
      </div>
    </div>
  );
};

export default TerminalDemo;
