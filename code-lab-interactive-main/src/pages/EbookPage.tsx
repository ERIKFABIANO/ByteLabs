import { Link } from "react-router-dom";
import { BookOpen, ChevronRight, Clock, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RobotProfessor from "@/components/RobotProfessor";
import { useProgress } from "@/hooks/useProgress";

const EbookPage = () => {
  const { isChapterCompleted, getProgressPercentage } = useProgress();
  const percentage = getProgressPercentage(11);

  const chapters = [
    { id: 1, title: "Código Binário", part: "Fundamentos", time: "8 min" },
    { id: 2, title: "A Máquina Entende", part: "Fundamentos", time: "12 min" },
    { id: 3, title: "Programação", part: "Fundamentos", time: "15 min" },
    { id: 4, title: "Internet & Redes", part: "Infraestrutura", time: "10 min" },
    { id: 5, title: "Servidores", part: "Infraestrutura", time: "10 min" },
    { id: 6, title: "Banco de Dados", part: "Infraestrutura", time: "12 min" },
    { id: 7, title: "APIs & Integração", part: "Infraestrutura", time: "10 min" },
    { id: 8, title: "Versionamento", part: "Ferramentas", time: "10 min" },
    { id: 9, title: "Automação", part: "Avançado", time: "12 min" },
    { id: 10, title: "Inteligência Artificial", part: "Avançado", time: "15 min" },
    { id: 11, title: "Arquitetura Real", part: "Avançado", time: "15 min" },
  ];

  const parts = [
    { name: "Fundamentos da Computação", chapters: [1, 2, 3], color: "accent" },
    { name: "Infraestrutura & Web", chapters: [4, 5, 6, 7], color: "primary" },
    { name: "Ferramentas & Práticas", chapters: [8], color: "secondary" },
    { name: "Avançado: IA & Arquitetura", chapters: [9, 10, 11], color: "secondary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm">eBook Completo</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fundamentos da <span className="text-gradient">Computação</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Do código binário à arquitetura de sistemas modernos. 
              Um guia completo para entender como computadores realmente funcionam.
            </p>
          </div>

          {/* Progress */}
          <div className="bg-card border border-border rounded-xl p-6 mb-12">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium">Seu progresso</span>
              <span className="text-primary font-bold">{percentage}%</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-accent via-primary to-secondary transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Robot */}
          <div className="mb-12">
            <RobotProfessor 
              message="Esse eBook foi feito com carinho pelo Erik para ajudar a galera da Planton! 11 capítulos, do básico ao avançado. Bora aprender? 📚"
              variant="excited"
            />
          </div>

          {/* Table of Contents */}
          <div className="space-y-8">
            {parts.map((part, partIndex) => (
              <section key={partIndex}>
                <h2 className={`text-lg font-bold mb-4 flex items-center gap-2`}>
                  <span className={`w-3 h-3 rounded-full bg-${part.color}`} />
                  Parte {partIndex + 1}: {part.name}
                </h2>
                
                <div className="space-y-2">
                  {part.chapters.map((chapterId) => {
                    const chapter = chapters.find(c => c.id === chapterId)!;
                    const completed = isChapterCompleted(chapterId);
                    
                    return (
                      <Link
                        key={chapterId}
                        to={`/capitulo/${chapterId}`}
                        className="flex items-center justify-between p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-mono ${
                            completed 
                              ? "bg-accent/20 text-accent" 
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {completed ? <CheckCircle className="w-5 h-5" /> : String(chapterId).padStart(2, '0')}
                          </div>
                          <div>
                            <h3 className="font-medium group-hover:text-primary transition-colors">
                              {chapter.title}
                            </h3>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              {chapter.time}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* Start reading CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/capitulo/1"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:glow-primary transition-all"
            >
              <BookOpen className="w-5 h-5" />
              Começar a Leitura
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EbookPage;
