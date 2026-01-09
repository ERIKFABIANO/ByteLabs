import { User, Rocket, Users, Heart, Code, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RobotProfessor from "@/components/RobotProfessor";

const SobrePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre o <span className="text-gradient">Projeto</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A história por trás do ByteLab e a missão de democratizar conhecimento técnico
            </p>
          </div>

          {/* Robot intro */}
          <div className="mb-16">
            <RobotProfessor 
              message="Deixa eu te apresentar o Erik, o cara por trás de tudo isso! Ele criou esse material incrível pra ajudar a galera. 🚀"
              variant="excited"
            />
          </div>

          {/* About Erik */}
          <section className="mb-16">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Avatar placeholder */}
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <User className="w-16 h-16 text-primary" />
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Erik</h2>
                  <p className="text-primary font-medium mb-4">Criador do ByteLab • 22 anos</p>
                  
                  <div className="space-y-4 text-foreground/80 leading-relaxed">
                    <p>
                      E aí! Eu sou o Erik, desenvolvedor e entusiasta de tecnologia. Com 22 anos, 
                      já passei por aquela fase de ficar perdido tentando entender como computadores 
                      realmente funcionam por baixo dos panos.
                    </p>
                    <p>
                      Esse eBook foi criado especialmente para a <span className="text-primary font-semibold">Planton</span>, 
                      com o objetivo de ajudar meus colegas de equipe a entenderem os fundamentos 
                      que muitas vezes são pulados em cursos tradicionais. Sabe aquele conhecimento 
                      que faz a diferença entre apenas escrever código e realmente <em>entender</em> o 
                      que está acontecendo?
                    </p>
                    <p>
                      A ideia surgiu de conversas no time, onde percebi que muita gente tinha 
                      dúvidas sobre conceitos básicos - não por falta de capacidade, mas por 
                      falta de material didático que explicasse de forma clara e direta. 
                      Então decidi criar algo diferente: um laboratório interativo onde cada 
                      conceito é explicado visualmente, com analogias práticas e sem enrolação.
                    </p>
                    <p>
                      Acredito que conhecimento técnico não precisa ser intimidador. Com as 
                      explicações certas e um pouco de paciência, qualquer pessoa pode entender 
                      desde código binário até arquiteturas complexas de IA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              A <span className="text-gradient">Missão</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 text-center card-interactive">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Para o Time</h3>
                <p className="text-sm text-muted-foreground">
                  Criado para capacitar a equipe da Planton com conhecimento técnico sólido
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center card-interactive">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Sem Enrolação</h3>
                <p className="text-sm text-muted-foreground">
                  Direto ao ponto, com exemplos práticos e explicações visuais
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center card-interactive">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Com Carinho</h3>
                <p className="text-sm text-muted-foreground">
                  Cada capítulo foi pensado para ser acessível e interessante
                </p>
              </div>
            </div>
          </section>

          {/* What you'll learn */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              O que você vai <span className="text-gradient">aprender</span>
            </h2>
            
            <div className="bg-muted/30 border border-border rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Fundamentos Reais</h4>
                    <p className="text-sm text-muted-foreground">
                      Como binário, CPU, memória e sistemas operacionais funcionam de verdade
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Arquitetura Web</h4>
                    <p className="text-sm text-muted-foreground">
                      Frontend, backend, APIs, bancos de dados e como tudo se conecta
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Automação & IA</h4>
                    <p className="text-sm text-muted-foreground">
                      Como usar n8n, criar agents e entender LLMs modernos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Visão de Arquiteto</h4>
                    <p className="text-sm text-muted-foreground">
                      Entender sistemas como um todo, não apenas pedaços isolados
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Planton shoutout */}
          <section className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted border border-border">
              <Heart className="w-4 h-4 text-destructive" />
              <span className="text-sm">
                Feito com dedicação para a equipe <span className="text-primary font-semibold">Planton</span>
              </span>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SobrePage;
