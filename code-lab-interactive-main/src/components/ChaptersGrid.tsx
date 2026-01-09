import { Binary, Cpu, Code, Globe, Server, Database, Plug, GitBranch, Workflow, Bot, Layers } from "lucide-react";
import ChapterCard from "./ChapterCard";
import { useProgress } from "@/hooks/useProgress";

const ChaptersGrid = () => {
  const { isChapterCompleted, isChapterLocked } = useProgress();

  const chapters = [
    {
      number: 1,
      title: "Código Binário",
      description: "Como 0 e 1 se transformam em tudo que você vê na tela",
      level: "beginner" as const,
      icon: <Binary className="w-6 h-6" />,
      hoverInfo: "Computadores só entendem dois estados: presença ou ausência de energia elétrica",
      href: "/capitulo/1",
    },
    {
      number: 2,
      title: "A Máquina Entende",
      description: "O caminho do código até a execução no processador",
      level: "beginner" as const,
      icon: <Cpu className="w-6 h-6" />,
      hoverInfo: "Seu código passa por várias transformações antes de virar operações elétricas",
      href: "/capitulo/2",
    },
    {
      number: 3,
      title: "Programação",
      description: "Linguagens, algoritmos e estruturas de dados",
      level: "beginner" as const,
      icon: <Code className="w-6 h-6" />,
      hoverInfo: "Linguagens são abstrações que facilitam nossa comunicação com máquinas",
      href: "/capitulo/3",
    },
    {
      number: 4,
      title: "Internet & Redes",
      description: "Como computadores se comunicam globalmente",
      level: "intermediate" as const,
      icon: <Globe className="w-6 h-6" />,
      hoverInfo: "A internet é uma rede de redes usando protocolos padronizados",
      href: "/capitulo/4",
    },
    {
      number: 5,
      title: "Servidores",
      description: "Máquinas que nunca dormem atendendo requisições",
      level: "intermediate" as const,
      icon: <Server className="w-6 h-6" />,
      hoverInfo: "Um servidor é um computador otimizado para receber e responder pedidos 24/7",
      href: "/capitulo/5",
    },
    {
      number: 6,
      title: "Banco de Dados",
      description: "Onde e como informações são armazenadas",
      level: "intermediate" as const,
      icon: <Database className="w-6 h-6" />,
      hoverInfo: "Bancos organizam dados de forma que sejam encontrados rapidamente",
      href: "/capitulo/6",
    },
    {
      number: 7,
      title: "APIs & Integração",
      description: "Comunicação entre sistemas diferentes",
      level: "intermediate" as const,
      icon: <Plug className="w-6 h-6" />,
      hoverInfo: "APIs são contratos de comunicação entre softwares",
      href: "/capitulo/7",
    },
    {
      number: 8,
      title: "Versionamento",
      description: "Git e controle de versão profissional",
      level: "intermediate" as const,
      icon: <GitBranch className="w-6 h-6" />,
      hoverInfo: "Git salva cada mudança do código como uma foto no tempo",
      href: "/capitulo/8",
    },
    {
      number: 9,
      title: "Automação",
      description: "n8n e orquestração de workflows",
      level: "advanced" as const,
      icon: <Workflow className="w-6 h-6" />,
      hoverInfo: "Automação conecta sistemas e elimina tarefas repetitivas",
      href: "/capitulo/9",
    },
    {
      number: 10,
      title: "Inteligência Artificial",
      description: "Agents, LLMs e o futuro da computação",
      level: "advanced" as const,
      icon: <Bot className="w-6 h-6" />,
      hoverInfo: "IA moderna usa redes neurais para encontrar padrões em dados",
      href: "/capitulo/10",
    },
    {
      number: 11,
      title: "Arquitetura Real",
      description: "Como sistemas de produção são estruturados",
      level: "advanced" as const,
      icon: <Layers className="w-6 h-6" />,
      hoverInfo: "Arquitetura é a arte de organizar componentes para escalar",
      href: "/capitulo/11",
    },
  ];

  return (
    <section className="py-20">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Módulos de <span className="text-gradient">Aprendizado</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada capítulo foi criado para construir seu conhecimento de forma progressiva. 
            Passe o mouse para ver insights rápidos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter) => (
            <ChapterCard 
              key={chapter.number} 
              {...chapter} 
              completed={isChapterCompleted(chapter.number)}
              locked={isChapterLocked(chapter.number)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChaptersGrid;
