import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Clock, Zap, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import RobotProfessor from "@/components/RobotProfessor";
import Footer from "@/components/Footer";
import { useProgress } from "@/hooks/useProgress";

const ChapterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const chapterId = parseInt(id || "1");
  const { setCurrentChapter, markChapterComplete, isChapterCompleted, isChapterLocked } = useProgress();

  // Update current chapter on mount
  useEffect(() => {
    if (!isChapterLocked(chapterId)) {
      setCurrentChapter(chapterId);
    }
  }, [chapterId]);

  // Redirect if chapter is locked
  useEffect(() => {
    if (isChapterLocked(chapterId)) {
      navigate("/");
    }
  }, [chapterId, isChapterLocked, navigate]);

  const totalChapters = 11;
  const isCompleted = isChapterCompleted(chapterId);

  const handleComplete = () => {
    markChapterComplete(chapterId);
  };

  const handleNextChapter = () => {
    markChapterComplete(chapterId);
    if (chapterId < totalChapters) {
      navigate(`/capitulo/${chapterId + 1}`);
    } else {
      navigate("/");
    }
  };

  // Sample chapter content
  const chapters: Record<number, {
    title: string;
    subtitle: string;
    readTime: string;
    robotMessage: string;
    sections: { title: string; content: string; code?: string; insight?: string }[];
  }> = {
    1: {
      title: "Código Binário",
      subtitle: "A linguagem fundamental das máquinas",
      readTime: "8 min",
      robotMessage: "Tudo começa aqui! Computadores são máquinas elétricas - eles só entendem dois estados: ligado e desligado, 1 e 0. Vamos entender isso! ⚡",
      sections: [
        {
          title: "O que é Binário?",
          content: "Computadores não entendem letras, palavras ou números como humanos. Eles entendem apenas dois estados físicos: ausência de energia (0) e presença de energia (1). Esse sistema é chamado de binário.",
          insight: "Cada 0 ou 1 é chamado de BIT - a menor unidade de informação.",
        },
        {
          title: "Como funciona?",
          content: "Quando você digita a letra 'A', o computador a converte para o número 65 na tabela ASCII, que em binário é representado como 01000001. São 8 bits, ou 1 byte.",
          code: "Letra 'A' → 65 (decimal) → 01000001 (binário)",
          insight: "8 bits = 1 byte. Um byte pode representar 256 valores diferentes (de 0 a 255).",
        },
        {
          title: "Tudo é Binário",
          content: "Imagens, vídeos, músicas, programas - absolutamente tudo que existe em um computador é, no final das contas, uma sequência gigante de 0s e 1s organizados de formas específicas.",
          insight: "Uma foto de 1MB contém 8.388.608 bits - uma sequência de mais de 8 milhões de 0s e 1s!",
        },
      ],
    },
    2: {
      title: "A Máquina Entende",
      subtitle: "Do código ao processador",
      readTime: "12 min",
      robotMessage: "Agora vamos ver a mágica acontecer! Seu código passa por várias transformações antes de se tornar operações elétricas no processador. 🔧",
      sections: [
        {
          title: "Compilação",
          content: "Quando você escreve código em Python, JavaScript ou outra linguagem, esse código precisa ser traduzido para algo que o processador entenda. Esse processo se chama compilação ou interpretação.",
          insight: "Linguagens compiladas (C, Rust) viram binário antes de rodar. Interpretadas (Python, JS) são traduzidas em tempo real.",
        },
        {
          title: "O Processador (CPU)",
          content: "A CPU é o cérebro do computador. Ela executa operações extremamente simples - somar, comparar, mover dados - mas faz isso bilhões de vezes por segundo.",
          code: "ADD R1, R2  // Soma registradores\nMOV R3, R1  // Move resultado",
          insight: "Uma CPU moderna pode executar mais de 4 bilhões de operações por segundo (4 GHz).",
        },
        {
          title: "Ciclo de Instrução",
          content: "A CPU trabalha em ciclos: busca uma instrução na memória, decodifica o que deve fazer, executa a operação, e guarda o resultado. Isso se repete infinitamente.",
          insight: "Fetch → Decode → Execute → Store - o ritmo eterno do processador.",
        },
      ],
    },
    3: {
      title: "Programação",
      subtitle: "Linguagens, algoritmos e estruturas",
      readTime: "15 min",
      robotMessage: "Hora de falar sobre como nós humanos conversamos com as máquinas! Linguagens de programação são a ponte entre nossa lógica e os circuitos. 💻",
      sections: [
        {
          title: "Linguagens de Programação",
          content: "Linguagens são abstrações da linguagem de máquina. Em vez de escrever 01001000, escrevemos 'print(\"Hello\")'. O computador traduz isso para nós.",
          insight: "Existem mais de 700 linguagens de programação diferentes!",
        },
        {
          title: "Alto vs Baixo Nível",
          content: "Linguagens de alto nível (Python, JavaScript) são mais fáceis para humanos. Linguagens de baixo nível (Assembly, C) são mais próximas da máquina e mais rápidas.",
          code: "# Python (alto nível)\nprint('Olá')\n\n; Assembly (baixo nível)\nmov eax, msg\ncall print",
          insight: "Quanto mais alto o nível, mais trabalho o computador faz para traduzir.",
        },
        {
          title: "Algoritmos",
          content: "Um algoritmo é uma sequência de passos para resolver um problema. É como uma receita: ingredientes (dados) + instruções (lógica) = resultado.",
          insight: "O algoritmo de ordenação mais rápido faz N×log(N) comparações. O mais lento faz N² !",
        },
      ],
    },
    4: {
      title: "Internet & Redes",
      subtitle: "Como computadores se comunicam",
      readTime: "10 min",
      robotMessage: "A internet é uma rede de redes! Vamos entender como seu navegador consegue buscar informações do outro lado do mundo em milissegundos. 🌐",
      sections: [
        {
          title: "O que é a Internet?",
          content: "A internet é uma rede global de computadores conectados. Quando você acessa um site, seu computador envia uma requisição que viaja por cabos, roteadores e servidores até chegar ao destino.",
          insight: "99% do tráfego internacional passa por cabos submarinos!",
        },
        {
          title: "Protocolos",
          content: "Para computadores se entenderem, eles precisam falar a mesma língua. HTTP, TCP/IP e DNS são alguns dos protocolos que definem como os dados são formatados e transmitidos.",
          code: "GET /pagina HTTP/1.1\nHost: exemplo.com",
          insight: "HTTP significa HyperText Transfer Protocol - o protocolo da web.",
        },
        {
          title: "DNS: O Catálogo da Internet",
          content: "Quando você digita google.com, o DNS traduz esse nome para um número IP como 142.250.190.78. É como uma lista telefônica gigante.",
          insight: "Seu computador guarda um cache DNS para não precisar perguntar toda vez.",
        },
      ],
    },
    5: {
      title: "Servidores",
      subtitle: "Máquinas que nunca dormem",
      readTime: "10 min",
      robotMessage: "Servidores são computadores especiais que ficam ligados 24 horas, 7 dias por semana, esperando requisições. Vamos conhecê-los! 🖥️",
      sections: [
        {
          title: "O que é um Servidor?",
          content: "Um servidor é um computador otimizado para receber e responder requisições. Diferente do seu PC, ele é projetado para rodar continuamente sem parar.",
          insight: "Grandes data centers têm milhões de servidores funcionando ao mesmo tempo.",
        },
        {
          title: "Tipos de Servidores",
          content: "Existem servidores web (que servem páginas), de aplicação (que rodam lógica), de banco de dados (que armazenam dados) e muitos outros tipos especializados.",
          insight: "Um único servidor físico pode rodar dezenas de servidores virtuais.",
        },
        {
          title: "Hospedagem",
          content: "Hospedagem é onde seu servidor roda. Pode ser uma VPS (servidor virtual), cloud (nuvem) ou serverless (sem servidor dedicado).",
          insight: "Serverless não significa 'sem servidor' - significa que você não precisa gerenciá-lo.",
        },
      ],
    },
    6: {
      title: "Banco de Dados",
      subtitle: "Onde informações são armazenadas",
      readTime: "12 min",
      robotMessage: "Sem banco de dados, toda informação seria perdida quando o servidor desligasse. Vamos aprender a persistir dados! 🗄️",
      sections: [
        {
          title: "O que é um Banco de Dados?",
          content: "Um banco de dados é um sistema organizado para armazenar, recuperar e gerenciar informações. Pense nele como um Excel super poderoso.",
          insight: "O maior banco de dados do mundo tem mais de 100 petabytes de dados!",
        },
        {
          title: "SQL vs NoSQL",
          content: "SQL (relacional) organiza dados em tabelas com relações entre elas. NoSQL é mais flexível, permitindo documentos, grafos ou chave-valor.",
          code: "SELECT * FROM usuarios WHERE idade > 18",
          insight: "SQL existe desde 1974 e ainda é a linguagem mais usada para bancos de dados.",
        },
        {
          title: "Índices e Performance",
          content: "Índices são como o índice de um livro - permitem encontrar dados rapidamente sem ler tudo. Sem eles, cada busca seria lenta.",
          insight: "Um índice bem feito pode fazer uma query rodar 1000x mais rápido!",
        },
      ],
    },
    7: {
      title: "APIs & Integração",
      subtitle: "Comunicação entre sistemas",
      readTime: "10 min",
      robotMessage: "APIs são contratos que permitem sistemas diferentes conversarem. É assim que seu app de clima pega dados de um servidor! 🔌",
      sections: [
        {
          title: "O que é uma API?",
          content: "API (Application Programming Interface) é um conjunto de regras que define como sistemas se comunicam. É como um cardápio de restaurante: você pede, a cozinha prepara.",
          insight: "A maioria das APIs modernas usa o formato JSON para trocar dados.",
        },
        {
          title: "REST e Endpoints",
          content: "REST é um estilo de arquitetura para APIs. Cada URL (endpoint) representa um recurso, e você usa verbos HTTP (GET, POST, PUT, DELETE) para interagir.",
          code: "GET /api/usuarios      // Lista usuários\nPOST /api/usuarios     // Cria usuário\nDELETE /api/usuarios/1 // Remove usuário",
          insight: "REST significa Representational State Transfer.",
        },
        {
          title: "Webhooks",
          content: "Enquanto APIs funcionam por requisição, webhooks funcionam por evento. O servidor avisa seu sistema quando algo acontece, sem você precisar perguntar.",
          insight: "Webhooks são como notificações push para sistemas.",
        },
      ],
    },
    8: {
      title: "Versionamento",
      subtitle: "Git e controle de versão",
      readTime: "10 min",
      robotMessage: "Imagine poder voltar no tempo no seu código! Git salva cada mudança como uma foto, permitindo desfazer erros e colaborar em equipe. ⏰",
      sections: [
        {
          title: "O que é Git?",
          content: "Git é um sistema de controle de versão. Ele rastreia todas as mudanças no seu código, permitindo voltar a qualquer ponto do passado.",
          insight: "Git foi criado por Linus Torvalds, o mesmo criador do Linux!",
        },
        {
          title: "Commits e Branches",
          content: "Um commit é uma foto do seu código em um momento. Branches são linhas paralelas de desenvolvimento que podem ser mescladas depois.",
          code: "git add .\ngit commit -m 'Adiciona nova feature'\ngit push origin main",
          insight: "Boas mensagens de commit contam O QUE mudou e POR QUÊ.",
        },
        {
          title: "GitHub e Colaboração",
          content: "GitHub é uma plataforma que hospeda repositórios Git na nuvem. Permite colaboração, revisão de código e automação de deploys.",
          insight: "GitHub tem mais de 100 milhões de desenvolvedores cadastrados.",
        },
      ],
    },
    9: {
      title: "Automação",
      subtitle: "n8n e orquestração de workflows",
      readTime: "12 min",
      robotMessage: "Por que fazer manualmente o que pode ser automatizado? Vamos aprender a conectar sistemas e criar fluxos inteligentes! 🤖",
      sections: [
        {
          title: "O que é Automação?",
          content: "Automação é fazer máquinas executarem tarefas repetitivas sem intervenção humana. Desde enviar emails até processar milhares de pedidos.",
          insight: "Empresas economizam em média 30% do tempo com automação bem implementada.",
        },
        {
          title: "n8n e Workflows",
          content: "n8n é uma ferramenta de automação visual. Você conecta 'nós' que representam ações (enviar email, buscar dados, etc) criando fluxos automatizados.",
          insight: "n8n pode se conectar a mais de 400 serviços diferentes!",
        },
        {
          title: "Triggers e Actions",
          content: "Um workflow começa com um trigger (gatilho) - um evento que dispara a automação. Depois vêm as actions (ações) que são executadas em sequência.",
          insight: "Triggers podem ser horários, webhooks, mudanças em banco de dados, emails recebidos...",
        },
      ],
    },
    10: {
      title: "Inteligência Artificial",
      subtitle: "Agents, LLMs e o futuro",
      readTime: "15 min",
      robotMessage: "IA não é mágica - são padrões encontrados em dados! Vamos entender como LLMs como eu funcionam e como criar agents inteligentes. 🧠",
      sections: [
        {
          title: "O que é IA?",
          content: "Inteligência Artificial é a capacidade de máquinas aprenderem padrões e tomarem decisões. Não é consciência - é matemática muito sofisticada.",
          insight: "O ChatGPT foi treinado em mais de 570GB de texto da internet.",
        },
        {
          title: "LLMs - Large Language Models",
          content: "LLMs são redes neurais treinadas para prever a próxima palavra. Com trilhões de exemplos, elas aprendem gramática, fatos e até raciocínio.",
          code: "Prompt: 'O céu é...'\nLLM prevê: 'azul' (95%), 'lindo' (3%), 'infinito' (2%)",
          insight: "GPT-4 tem cerca de 1.7 trilhões de parâmetros - números que definem seu comportamento.",
        },
        {
          title: "Agents de IA",
          content: "Agents são sistemas que usam LLMs para planejar, executar ações e usar ferramentas. Eles podem navegar na web, escrever código e tomar decisões.",
          insight: "Agents modernos podem decompor tarefas complexas em passos menores automaticamente.",
        },
      ],
    },
    11: {
      title: "Arquitetura Real",
      subtitle: "Como sistemas de produção funcionam",
      readTime: "15 min",
      robotMessage: "Chegamos ao fim da jornada! Agora vamos ver como tudo se conecta em sistemas reais usados por milhões de pessoas. 🏗️",
      sections: [
        {
          title: "Visão Geral",
          content: "Um sistema real combina tudo que aprendemos: frontend, backend, banco de dados, APIs, caches, filas, monitoramento. Cada peça tem seu papel.",
          insight: "Netflix usa mais de 700 microserviços para funcionar!",
        },
        {
          title: "Escalabilidade",
          content: "Quando milhões de usuários acessam ao mesmo tempo, um servidor não basta. Load balancers distribuem tráfego, e caches evitam trabalho repetido.",
          code: "Usuário → CDN → Load Balancer → Servidores → Cache → Banco",
          insight: "O Google processa mais de 8.5 bilhões de buscas por dia.",
        },
        {
          title: "De Dev a Arquiteto",
          content: "Você agora entende como código vira eletricidade, como sistemas se comunicam, como dados persistem. Você não é mais só um programador - é um arquiteto de soluções.",
          insight: "O conhecimento que você adquiriu é a base de toda a tecnologia moderna.",
        },
      ],
    },
  };

  const chapter = chapters[chapterId] || chapters[1];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar aos módulos
            </Link>

            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-sm font-mono text-primary">CAPÍTULO {String(chapterId).padStart(2, '0')}</span>
                  {isCompleted && (
                    <span className="flex items-center gap-1 text-xs text-accent">
                      <CheckCircle className="w-3 h-3" />
                      Concluído
                    </span>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mt-1">{chapter.title}</h1>
                <p className="text-muted-foreground mt-2">{chapter.subtitle}</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {chapter.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {chapter.sections.length} seções
                </div>
              </div>
            </div>
          </div>

          {/* Robot intro */}
          <div className="mb-12">
            <RobotProfessor 
              message={chapter.robotMessage}
              variant="excited"
            />
          </div>

          {/* Content sections */}
          <div className="space-y-12">
            {chapter.sections.map((section, index) => (
              <section key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-mono">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {section.content}
                </p>

                {section.code && (
                  <div className="terminal mb-4">
                    <pre className="text-sm text-primary whitespace-pre-wrap">{section.code}</pre>
                  </div>
                )}

                {section.insight && (
                  <div className="bg-muted/50 border border-primary/20 rounded-lg p-4 flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-mono text-primary block mb-1">INSIGHT</span>
                      <p className="text-sm text-foreground/80">{section.insight}</p>
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Complete button */}
          {!isCompleted && (
            <div className="mt-12 text-center">
              <button
                onClick={handleComplete}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:glow-accent transition-all"
              >
                <CheckCircle className="w-5 h-5" />
                Marcar como Concluído
              </button>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Link 
              to={chapterId > 1 ? `/capitulo/${chapterId - 1}` : "/"}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {chapterId > 1 ? "Anterior" : "Início"}
            </Link>
            
            <button 
              onClick={handleNextChapter}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:glow-primary transition-all"
            >
              {chapterId < totalChapters ? "Próximo Capítulo" : "Concluir Jornada"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChapterPage;
