import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DataFlowDiagram from "@/components/DataFlowDiagram";
import RobotProfessor from "@/components/RobotProfessor";
import { Binary, Cpu, HardDrive, Globe, Layers } from "lucide-react";

const DiagramasPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container px-4 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Diagramas</span> Interativos
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Visualize conceitos complexos de forma simples. Passe o mouse para explorar cada componente.
            </p>
          </div>

          {/* Robot intro */}
          <div className="mb-12">
            <RobotProfessor 
              message="Diagramas são a melhor forma de entender sistemas! Cada caixinha aqui representa um conceito importante. Interaja com eles! 🎯"
              variant="thinking"
            />
          </div>

          {/* Data Flow Diagram */}
          <section className="mb-16">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-6">Fluxo de Dados em Aplicação Web</h2>
              <DataFlowDiagram />
            </div>
          </section>

          {/* Computer Architecture */}
          <section className="mb-16">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-6">Arquitetura de um Computador</h2>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {/* CPU */}
                <div className="group cursor-pointer">
                  <div className="w-24 h-24 rounded-xl border-2 border-primary bg-primary/10 flex flex-col items-center justify-center gap-2 transition-all group-hover:glow-primary group-hover:scale-105">
                    <Cpu className="w-8 h-8 text-primary" />
                    <span className="text-xs font-medium">CPU</span>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2 max-w-[100px] opacity-0 group-hover:opacity-100 transition-opacity">
                    Processa instruções
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center text-muted-foreground">↔</div>

                {/* RAM */}
                <div className="group cursor-pointer">
                  <div className="w-24 h-24 rounded-xl border-2 border-secondary bg-secondary/10 flex flex-col items-center justify-center gap-2 transition-all group-hover:glow-secondary group-hover:scale-105">
                    <Binary className="w-8 h-8 text-secondary" />
                    <span className="text-xs font-medium">RAM</span>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2 max-w-[100px] opacity-0 group-hover:opacity-100 transition-opacity">
                    Memória rápida
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center text-muted-foreground">↔</div>

                {/* Storage */}
                <div className="group cursor-pointer">
                  <div className="w-24 h-24 rounded-xl border-2 border-accent bg-accent/10 flex flex-col items-center justify-center gap-2 transition-all group-hover:glow-accent group-hover:scale-105">
                    <HardDrive className="w-8 h-8 text-accent" />
                    <span className="text-xs font-medium">SSD/HD</span>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2 max-w-[100px] opacity-0 group-hover:opacity-100 transition-opacity">
                    Armazenamento
                  </p>
                </div>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                <p>CPU executa → RAM armazena temporário → SSD persiste dados</p>
              </div>
            </div>
          </section>

          {/* Network Layers */}
          <section className="mb-16">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-6">Camadas de Rede (Simplificado)</h2>
              
              <div className="max-w-md mx-auto space-y-3">
                <div className="group cursor-pointer">
                  <div className="p-4 rounded-lg border-2 border-secondary bg-secondary/10 transition-all group-hover:glow-secondary">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Aplicação</span>
                      <span className="text-xs text-muted-foreground">HTTP, HTTPS, FTP</span>
                    </div>
                  </div>
                </div>

                <div className="text-center text-muted-foreground">↓</div>

                <div className="group cursor-pointer">
                  <div className="p-4 rounded-lg border-2 border-primary bg-primary/10 transition-all group-hover:glow-primary">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Transporte</span>
                      <span className="text-xs text-muted-foreground">TCP, UDP</span>
                    </div>
                  </div>
                </div>

                <div className="text-center text-muted-foreground">↓</div>

                <div className="group cursor-pointer">
                  <div className="p-4 rounded-lg border-2 border-accent bg-accent/10 transition-all group-hover:glow-accent">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Internet</span>
                      <span className="text-xs text-muted-foreground">IP, ICMP</span>
                    </div>
                  </div>
                </div>

                <div className="text-center text-muted-foreground">↓</div>

                <div className="group cursor-pointer">
                  <div className="p-4 rounded-lg border-2 border-muted-foreground/50 bg-muted/30 transition-all group-hover:border-foreground">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Física</span>
                      <span className="text-xs text-muted-foreground">Ethernet, Wi-Fi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Full Stack */}
          <section>
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-6">Stack Completo de Aplicação</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-mono text-accent text-center">FRONTEND</h3>
                  <div className="space-y-2">
                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/30 text-sm text-center">React / Vue</div>
                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/30 text-sm text-center">HTML / CSS / JS</div>
                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/30 text-sm text-center">Navegador</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-mono text-primary text-center">BACKEND</h3>
                  <div className="space-y-2">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 text-sm text-center">API REST</div>
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 text-sm text-center">Node / Python</div>
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 text-sm text-center">Servidor</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-mono text-secondary text-center">DADOS</h3>
                  <div className="space-y-2">
                    <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/30 text-sm text-center">PostgreSQL</div>
                    <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/30 text-sm text-center">Redis Cache</div>
                    <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/30 text-sm text-center">Storage</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DiagramasPage;
