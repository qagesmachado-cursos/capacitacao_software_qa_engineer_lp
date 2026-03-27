const pageContent = {
  hero: {
    title: "Capacitação Software QA Engineer",
    description:
      "Saia do zero ou destrave sua carreira em testes de software e esteja mais preparado para conquistar sua primeira oportunidade em QA",
    ctaLabel: "Quero falar sobre a capacitacao",
  },
  sections: {
    audience: {
      title: "Essa mentoria é para você que:",
      items: [
        "Quer entrar em QA do zero e não sabe por onde começa.",
        "Já estuda testes, mas não consegue oportunidades em QA.",
        "Já atua com testes e quer subir de nivel.",
        "Se sente perdido(a) sobre o que estudar e como evoluir em QA.",
        "Quer acelerar sua carreira com direcionamento prático",
      ],
    },
    deliverables: {
      title: "O que você recebe na mentoria:",
      items: [
        "Aulas práticas (ao vivo + gravadas)",
        "Acompanhamento direto para tirar dúvidas",
        "Exercícios práticos para aplicar o que aprendeu",
        "Material de apoio com dicas e recursos",
        "Mapa de carreira com próximos passos claros",
      ],
    },
    testimonial: {
      title: "Depoimento:",
      text: '"Em 2 meses de mentoria eu organizei meus estudos, melhorei meu curriculo e conquistei minha primeira oportunidade em QA."',
    },
    limitedSpots: {
      title: "Vagas limitadas",
      paragraphs: [
        "Para manter a qualidade da mentoria, atendo poucos alunos por vez.",
        "Se você quer acelerar sua evolução, essa pode ser sua oportunidade.",
      ],
    },
    courseModules: {
      title: "Conteúdo do curso em módulos:",
      modules: [
        {
          title: "Módulo 1 — Introdução ao Teste de Software",
          summary:
            "Você vai entender o papel do QA no mercado, por que os testes são essenciais e como pensar como um profissional de qualidade desde o início.",
        },
        {
          title: "Módulo 2 — Fundamentos dos Testes",
          summary:
            "Aqui você constrói a base sólida: conceitos fundamentais, princípios de testes e como funciona o processo de qualidade no desenvolvimento de software.",
        },
        {
          title: "Módulo 3 — Níveis e Tipos de Teste",
          summary:
            "Você aprende a diferenciar e aplicar os principais tipos de teste, entendendo quando usar cada abordagem (manual, automatizado, exploratório, regressão, etc).",
        },
        {
          title: "Módulo 4 — Processo de Teste na Prática",
          summary:
            "Você vai dominar o fluxo completo de testes dentro de um projeto real — do planejamento até a entrega final com qualidade.",
        },
        {
          title: "Módulo 5 — Escrita de Casos de Teste",
          summary:
            "Aprenda a documentar testes de forma profissional, clara e organizada, utilizando boas práticas e padrões usados no mercado.",
        },
        {
          title: "Módulo 6 — Reporte de Bugs",
          summary:
            "Você vai aprender a identificar, classificar e reportar bugs de forma estratégica, aumentando sua credibilidade como QA.",
        },
        {
          title: "Módulo 7 — Metodologias e Atuação do QA",
          summary:
            "Entenda como funcionam os projetos de software e como o QA se posiciona dentro dos times ágeis e tradicionais.",
        },
        {
          title: "Módulo 9 — Testes de Front-end na Prática",
          summary:
            "Aplicação real de testes em interfaces web, focando em comportamento do usuário, usabilidade e qualidade visual.",
        },
        {
          title: "Módulo 10 — Testes de API na Prática",
          summary:
            "Você vai aprender a testar APIs na prática, validando requisições, respostas e integrações entre sistemas.",
        },
        {
          title: "Módulo 11 — Técnicas de Teste (Avançado)",
          summary:
            "Domine técnicas utilizadas no mercado para criar cenários mais eficientes e aumentar a cobertura dos testes.",
        },
        {
          title: "Módulo 12 — Estratégia de Testes (Avançado)",
          summary:
            "Aprenda como estruturar uma estratégia de testes eficiente e evitar erros comuns que prejudicam a qualidade do produto.",
        },
      ],
    },
    guarantee: {
      text: "Garantia de 7 dias: se o conteúdo não for para você, devolvemos seu investimento dentro do prazo.",
    },
  },
  footer: {
    title: "Pronto(a) para evoluir em QA?",
    whatsappLabel: "Falar no WhatsApp",
    note: "Substitua o numero do WhatsApp no link acima.",
  },
};

function renderList(listElementId, items) {
  const listElement = document.getElementById(listElementId);
  if (!listElement) return;

  listElement.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    listElement.appendChild(li);
  });
}

function renderModules(listElementId, modules) {
  const container = document.getElementById(listElementId);
  if (!container) return;

  container.innerHTML = "";
  modules.forEach((mod) => {
    const block = document.createElement("div");
    block.className = "module-item";
    const heading = document.createElement("h3");
    heading.className = "module-title";
    heading.textContent = mod.title;
    block.appendChild(heading);
    const summaryText = mod.summary ?? mod.description;
    if (summaryText) {
      const p = document.createElement("p");
      p.className = "module-summary";
      p.textContent = summaryText;
      block.appendChild(p);
    }
    container.appendChild(block);
  });
}

function renderLandingPage() {
  document.getElementById("hero-title").textContent = pageContent.hero.title;
  document.getElementById("hero-description").textContent =
    pageContent.hero.description;
  document.getElementById("hero-cta").textContent = pageContent.hero.ctaLabel;

  document.getElementById("audience-title").textContent =
    pageContent.sections.audience.title;
  renderList("audience-list", pageContent.sections.audience.items);

  document.getElementById("deliverables-title").textContent =
    pageContent.sections.deliverables.title;
  renderList("deliverables-list", pageContent.sections.deliverables.items);

  document.getElementById("limited-title").textContent =
    pageContent.sections.limitedSpots.title;
  document.getElementById("limited-p1").textContent =
    pageContent.sections.limitedSpots.paragraphs[0];
  document.getElementById("limited-p2").textContent =
    pageContent.sections.limitedSpots.paragraphs[1];

  document.getElementById("modules-title").textContent =
    pageContent.sections.courseModules.title;
  renderModules("modules-list", pageContent.sections.courseModules.modules);

  document.getElementById("guarantee-text").textContent =
    pageContent.sections.guarantee.text;

  document.getElementById("testimonial-title").textContent =
    pageContent.sections.testimonial.title;
  document.getElementById("testimonial-text").textContent =
    pageContent.sections.testimonial.text;

  document.getElementById("footer-title").textContent = pageContent.footer.title;
  document.getElementById("footer-whatsapp").textContent =
    pageContent.footer.whatsappLabel;
  document.getElementById("footer-note").textContent = pageContent.footer.note;
}

renderLandingPage();
