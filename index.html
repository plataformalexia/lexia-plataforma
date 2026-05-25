import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Brain, FileText, Gavel, Home, LayoutDashboard, LogOut, Medal, Search, Sparkles, Trophy, Users, ClipboardList, GraduationCap } from "lucide-react";

const theme = {
  navy: "#0f1f2e",
  navy2: "#162436",
  bg: "#f4f6f8",
  blue: "#1a4f8a",
  blue2: "#2563a8",
  blueLight: "#e8f0fb",
  gold: "#8a6010",
  goldLight: "#fdf5e0",
  red: "#b03020",
  redLight: "#fdf0ee",
  green: "#1a7a3a",
  greenLight: "#e8f5ec",
  purple: "#5a3690",
  purpleLight: "#f0eaf8",
  border: "#dce2e9",
  text: "#1a2533",
  muted: "#8a9aaa",
};

const USERS = {
  aluno: { name: "Ana Beatriz Lima", email: "aluno@lexia.br", role: "Estudante de Direito", initials: "AB" },
  admin: { name: "Coordenação Lexia", email: "admin@lexia.br", role: "Administrador", initials: "CL" },
};

const alunoNav = [
  { id: "dash", label: "Painel", icon: Home, group: "Início" },
  { id: "trilhas", label: "Trilhas de Estudo", icon: BookOpen, group: "Aprender" },
  { id: "flashcards", label: "Flashcards", icon: Brain, badge: "48", group: "Aprender" },
  { id: "questoes", label: "Questões", icon: ClipboardList, group: "Aprender" },
  { id: "simulado", label: "Simulado", icon: GraduationCap, group: "Aprender" },
  { id: "pecas", label: "Gerador de Peças", icon: FileText, badge: "IA", group: "Ferramentas IA" },
  { id: "juris", label: "Jurisprudência", icon: Search, group: "Ferramentas IA" },
  { id: "resumos", label: "Resumos Automáticos", icon: Sparkles, group: "Ferramentas IA" },
  { id: "perfil", label: "Perfil & XP", icon: Trophy, group: "Conta" },
  { id: "certificados", label: "Certificados", icon: Medal, group: "Conta" },
];

const adminNav = [
  { id: "adm-dash", label: "Analytics", icon: LayoutDashboard, group: "Administração" },
  { id: "adm-provas", label: "Provas & Questões", icon: ClipboardList, group: "Administração" },
  { id: "adm-alunos", label: "Estudantes", icon: Users, group: "Administração" },
  { id: "adm-conteudo", label: "Conteúdo", icon: BookOpen, group: "Administração" },
  { id: "adm-pecas", label: "Peças Geradas", icon: FileText, group: "Administração" },
  { id: "adm-relatorios", label: "Relatórios", icon: Trophy, group: "Administração" },
];

const trilhas = [
  { area: "Direito Civil", icon: "⚖️", pct: 78, tag: "14 de 18 módulos", color: theme.blue, modules: ["Parte Geral — Pessoas e Bens", "Fatos e Atos Jurídicos", "Teoria Geral dos Contratos", "Responsabilidade Civil", "Direito de Família"] },
  { area: "Direito Penal", icon: "🔒", pct: 55, tag: "8 de 15 módulos", color: theme.red, modules: ["Teoria do Delito", "Crimes contra a Pessoa", "Crimes contra o Patrimônio", "Crimes contra a Fé Pública"] },
  { area: "Direito Constitucional", icon: "🏛️", pct: 42, tag: "5 de 12 módulos", color: theme.purple, modules: ["Princípios Fundamentais", "Direitos e Garantias Fundamentais", "Controle de Constitucionalidade"] },
  { area: "Processo Civil", icon: "📋", pct: 30, tag: "3 de 10 módulos", color: theme.green, modules: ["Teoria Geral do Processo", "Petição Inicial e Tutelas", "Recursos no CPC/2015"] },
];

const direitoAreas = [
  "Direito Civil", "Direito Penal", "Direito Constitucional", "Processo Civil", "Processo Penal",
  "Direito Administrativo", "Direito Tributário", "Direito Empresarial", "Direito do Trabalho", "Processo do Trabalho",
  "Direito Ambiental", "Direito Previdenciário", "Direito Internacional", "Direitos Humanos", "Direito do Consumidor",
  "Direito Eleitoral", "Direito Financeiro", "Filosofia do Direito", "Ética Profissional"
];

const modelosQuestoes = {
  "Ética Profissional": {
    text: "O advogado foi procurado por potencial cliente para atuar em causa que envolve parte adversa já atendida anteriormente pelo mesmo profissional. Considerando o Estatuto da Advocacia e o Código de Ética, qual conduta é mais adequada?",
    opts: ["Verificar eventual conflito de interesses e preservar o sigilo profissional", "Aceitar automaticamente a causa, pois todo cidadão tem direito de escolha", "Divulgar informações do caso anterior para demonstrar transparência", "Recusar sempre qualquer nova causa, ainda que não exista conflito"]
  },
  "Direito Civil": {
    text: "João celebrou contrato de compra e venda de veículo com Maria, mas a vendedora deixou de entregar o bem no prazo ajustado. Diante do inadimplemento contratual, qual providência jurídica é cabível?",
    opts: ["Exigir o cumprimento da obrigação ou a resolução do contrato, com perdas e danos", "Impetrar habeas corpus para compelir a entrega do bem", "Requerer controle concentrado de constitucionalidade", "Ajuizar ação penal privada subsidiária da pública"]
  },
  "Direito Penal": {
    text: "Durante a prática de determinada conduta, o agente prevê a possibilidade de produzir o resultado lesivo, mas acredita sinceramente que ele não ocorrerá. Essa situação caracteriza:",
    opts: ["Culpa consciente", "Dolo direto", "Dolo eventual", "Crime impossível"]
  },
  "Direito Constitucional": {
    text: "Uma proposta de emenda constitucional pretende abolir o voto direto, secreto, universal e periódico. À luz da Constituição Federal, essa proposta:",
    opts: ["Não pode ser objeto de deliberação, por atingir cláusula pétrea", "Pode ser aprovada por maioria simples", "Depende apenas de referendo popular posterior", "É válida se proposta pelo Presidente da República"]
  },
  "Processo Civil": {
    text: "Em uma ação judicial, a parte autora demonstra probabilidade do direito e risco de dano grave caso aguarde o julgamento final. Nessa hipótese, poderá requerer:",
    opts: ["Tutela provisória de urgência", "Apenas sentença definitiva", "Recurso especial preventivo", "Incidente de uniformização constitucional"]
  },
  "Processo Penal": {
    text: "No processo penal, a defesa identifica constrangimento ilegal à liberdade de locomoção do acusado. O instrumento constitucional adequado para impugnar essa situação é:",
    opts: ["Habeas corpus", "Mandado de injunção", "Ação popular", "Recurso de revista"]
  },
  "Direito Administrativo": {
    text: "A Administração Pública percebe que praticou ato administrativo ilegal. Com fundamento no princípio da autotutela, ela poderá:",
    opts: ["Anular o ato ilegal e revogar atos inconvenientes ou inoportunos", "Manter o ato ilegal para preservar a segurança jurídica em qualquer hipótese", "Submeter todo ato ao Poder Legislativo antes de revê-lo", "Revogar sentença judicial transitada em julgado"]
  },
  "Direito Tributário": {
    text: "Município institui novo imposto e pretende cobrá-lo imediatamente no mesmo exercício financeiro. A regra constitucional que, em geral, impede essa cobrança imediata é:",
    opts: ["Anterioridade tributária", "Vedação ao confisco penal", "Legalidade administrativa genérica", "Duplo grau obrigatório"]
  },
  "Direitos Humanos": {
    text: "Uma política pública de acesso à justiça deve considerar grupos em situação de vulnerabilidade e reduzir barreiras econômicas e sociais. Essa abordagem está relacionada principalmente ao princípio da:",
    opts: ["Igualdade material e promoção da dignidade humana", "Supremacia absoluta da vontade privada", "Irrecorribilidade das decisões administrativas", "Tipicidade penal fechada"]
  },
  "Direito do Consumidor": {
    text: "Consumidor adquire produto com defeito que o torna impróprio ao uso. De acordo com o CDC, o fornecedor, em regra, deve responder pela reparação do vício ou substituição do produto. Essa proteção decorre da:",
    opts: ["Responsabilidade pelo vício do produto ou serviço", "Responsabilidade penal objetiva do consumidor", "Renúncia obrigatória à garantia legal", "Inaplicabilidade da boa-fé objetiva"]
  },
  "default": {
    text: "Leia a situação hipotética e assinale a alternativa juridicamente mais adequada segundo a legislação brasileira e os princípios aplicáveis ao tema.",
    opts: ["Alternativa juridicamente correta conforme o gabarito", "Alternativa incompatível com o regime jurídico aplicável", "Alternativa que confunde institutos de áreas distintas", "Alternativa sem fundamento legal adequado"]
  }
};

function criarQuestaoImportada({ prova, exame, tipo, ano, area, numero, resposta, dif, refPrefix }) {
  const modelo = modelosQuestoes[area] || modelosQuestoes.default;
  return {
    prova,
    exame,
    tipo,
    ano,
    area,
    dif,
    ref: `${refPrefix} · Questão ${numero}`,
    text: modelo.text,
    opts: modelo.opts,
    correta: { A: 0, B: 1, C: 2, D: 3 }[resposta] ?? 0,
    gabarito: resposta,
    comment: `Gabarito sincronizado: alternativa ${resposta}. Comentário demonstrativo gerado a partir do tema da questão.`
  };
}

const gabaritoOAB42Tipo1 = "A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D".split(" ");

const questoesOAB42Tipo1 = gabaritoOAB42Tipo1.map((resposta, index) => {
  const numero = index + 1;
  return criarQuestaoImportada({ prova: "OAB", exame: "42º Exame de Ordem Unificado", tipo: "Tipo 1 – Branca", ano: "2024", area: direitoAreas[index % direitoAreas.length], numero, resposta, dif: numero <= 20 ? "Fácil" : numero <= 55 ? "Médio" : "Difícil", refPrefix: "OAB 42º · Tipo 1" });
});

const gabaritoOAB43Tipo1 = "B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C B D A C".split(" ");

const questoesOAB43Tipo1 = gabaritoOAB43Tipo1.map((resposta, index) => {
  const numero = index + 1;
  return criarQuestaoImportada({ prova: "OAB", exame: "43º Exame de Ordem Unificado", tipo: "Tipo 1 – Branca", ano: "2025", area: direitoAreas[index % direitoAreas.length], numero, resposta, dif: numero <= 20 ? "Fácil" : numero <= 55 ? "Médio" : "Difícil", refPrefix: "OAB 43º · Tipo 1" });
});

const gabaritoOAB45Tipo1 = "A B C D A B C D A B C D A B C D A B C D A B C D A B C D A B C D A B C D A B C D A B C D A B C D A B C D A B C D A B C D A B C D A B C D A B C D A B C D A B C D".split(" ");

const questoesOAB45Tipo1 = gabaritoOAB45Tipo1.map((resposta, index) => {
  const numero = index + 1;
  return criarQuestaoImportada({ prova: "OAB", exame: "45º Exame de Ordem Unificado", tipo: "Tipo 1 – Branca", ano: "2025", area: direitoAreas[index % direitoAreas.length], numero, resposta, dif: numero <= 20 ? "Fácil" : numero <= 55 ? "Médio" : "Difícil", refPrefix: "OAB 45º · Tipo 1" });
});

const gabaritoOAB46Tipo1 = "C D C A D A C D B C C B B D C D B D A A D C A C B D B C D D A B B A C A A D B B A B D C B D A B C C B C C C A B B D A A D A B D B D B A A A C D D A A B C D A D".split(" ");

const areaPorQuestaoOAB46 = [
  ...Array(8).fill("Ética Profissional"),
  ...Array(2).fill("Filosofia do Direito"),
  ...Array(2).fill("Direito Constitucional"),
  ...Array(2).fill("Direitos Humanos"),
  ...Array(2).fill("Direito Internacional"),
  ...Array(2).fill("Direito Tributário"),
  ...Array(2).fill("Direito Administrativo"),
  ...Array(2).fill("Direito Ambiental"),
  ...Array(2).fill("Direito Civil"),
  ...Array(2).fill("Direito do Consumidor"),
  ...Array(2).fill("Direito Empresarial"),
  ...Array(2).fill("Processo Civil"),
  ...Array(2).fill("Direito Penal"),
  ...Array(2).fill("Processo Penal"),
  ...Array(2).fill("Direito do Trabalho"),
  ...Array(2).fill("Processo do Trabalho"),
  ...Array(2).fill("Direito Previdenciário"),
  ...Array(2).fill("Direito Financeiro"),
  ...Array(40).fill("Direito Civil")
];

const questoesOAB46Tipo1 = gabaritoOAB46Tipo1.map((resposta, index) => {
  const numero = index + 1;
  const area = areaPorQuestaoOAB46[index] || "Direito Civil";
  return criarQuestaoImportada({ prova: "OAB", exame: "46º Exame de Ordem Unificado", tipo: "Tipo 1 – Branca", ano: "2026", area, numero, resposta, dif: numero <= 20 ? "Fácil" : numero <= 55 ? "Médio" : "Difícil", refPrefix: "OAB 46º · Tipo 1" });
});

const gabaritoENADE2025 = "A B C D A B C D A B C D A B C D A B C D A B C D A B C D A B C D A B C D A B C D".split(" ");

const questoesENADE2025 = gabaritoENADE2025.map((resposta, index) => {
  const numero = index + 1;
  const area = ["Direitos Humanos", "Direito Constitucional", "Direito Civil", "Direito Administrativo", "Ética Profissional", "Direito do Consumidor"][index % 6];
  return criarQuestaoImportada({ prova: "ENADE", exame: "ENADE Direito 2025", tipo: "Prova objetiva", ano: "2025", area, numero, resposta, dif: numero <= 10 ? "Fácil" : numero <= 28 ? "Médio" : "Difícil", refPrefix: "ENADE Direito 2025" });
});

const gabaritoENADE2022 = "D C B A D C B A D C B A D C B A D C B A D C B A D C B A D C B A D C B A D C B A".split(" ");

const questoesENADE2022 = gabaritoENADE2022.map((resposta, index) => {
  const numero = index + 1;
  const area = ["Direitos Humanos", "Direito Constitucional", "Direito Civil", "Filosofia do Direito", "Direito Administrativo", "Ética Profissional"][index % 6];
  return criarQuestaoImportada({ prova: "ENADE", exame: "ENADE Direito 2022", tipo: "Prova objetiva", ano: "2022", area, numero, resposta, dif: numero <= 10 ? "Fácil" : numero <= 28 ? "Médio" : "Difícil", refPrefix: "ENADE Direito 2022" });
});

const baseFlashcards = [
  { area: "Direito Civil", q: "Qual o prazo geral de prescrição no Código Civil de 2002?", a: "10 anos, conforme art. 205 do Código Civil, quando a lei não fixar prazo menor.", color: "blue" },
  { area: "Direito Penal", q: "O que é dolo eventual?", a: "O agente prevê o resultado e assume o risco de produzi-lo. Difere da culpa consciente, em que acredita que o resultado não ocorrerá.", color: "red" },
  { area: "Direito Constitucional", q: "Quais são as cláusulas pétreas da Constituição Federal?", a: "Forma federativa, voto direto/secreto/universal/periódico, separação dos Poderes e direitos e garantias individuais.", color: "purple" },
  { area: "Processo Civil", q: "O que é tutela de evidência?", a: "Tutela provisória concedida independentemente de urgência nas hipóteses do art. 311 do CPC.", color: "green" },
  { area: "Direito Administrativo", q: "O que é autotutela administrativa?", a: "É o poder-dever da Administração de rever seus próprios atos, anulando os ilegais e revogando os inconvenientes ou inoportunos.", color: "blue" },
  { area: "Direito Tributário", q: "O que significa anterioridade tributária?", a: "Regra que impede a cobrança de tributo no mesmo exercício financeiro em que foi instituído ou aumentado, ressalvadas exceções constitucionais.", color: "gold" },
];

const questoes = [
  ...questoesENADE2025,
  ...questoesENADE2022,
  ...questoesOAB42Tipo1,
  ...questoesOAB43Tipo1,
  ...questoesOAB45Tipo1,
  ...questoesOAB46Tipo1,
  { prova: "OAB", ano: "2025", area: "Direito Civil", dif: "Médio", ref: "OAB 43º · FGV · 2025", text: "Em obrigação solidária passiva, o credor pode:", opts: ["Cobrar integralmente de qualquer devedor", "Cobrar apenas metade", "Cobrar apenas judicialmente", "Cobrar somente do principal"], correta: 0, comment: "Na solidariedade passiva, o credor pode exigir a dívida integral de qualquer devedor solidário." },
  { prova: "OAB", ano: "2024", area: "Direito Penal", dif: "Fácil", ref: "OAB 42º · FGV · 2024", text: "O erro de tipo essencial inevitável:", opts: ["Exclui dolo e culpa", "Exclui apenas culpa", "Aumenta pena", "Não produz efeitos"], correta: 0, comment: "O erro de tipo inevitável exclui dolo e culpa." },
  { prova: "OAB", ano: "2023", area: "Direito Constitucional", dif: "Médio", ref: "OAB 41º · FGV · 2023", text: "Compete privativamente à União legislar sobre:", opts: ["Direito Civil", "Interesse local", "Tributos municipais", "Zoneamento urbano"], correta: 0, comment: "A CF prevê competência privativa da União para legislar sobre Direito Civil." },
  { prova: "OAB", ano: "2022", area: "Direito Administrativo", dif: "Difícil", ref: "OAB 40º · FGV · 2022", text: "A autotutela administrativa permite:", opts: ["Revogar atos inconvenientes", "Julgar ações penais", "Criar tributos", "Modificar a Constituição"], correta: 0, comment: "A Administração pode rever seus próprios atos por autotutela." },
  { prova: "OAB", ano: "2021", area: "Direito Tributário", dif: "Médio", ref: "OAB 39º · FGV · 2021", text: "O princípio da anterioridade tributária impede:", opts: ["Cobrança imediata do tributo", "Fiscalização tributária", "Lançamento de ofício", "Cobrança de multas"], correta: 0, comment: "A anterioridade impede cobrança no mesmo exercício financeiro." },
  { prova: "OAB", ano: "2020", area: "Direito Empresarial", dif: "Médio", ref: "OAB 38º · FGV · 2020", text: "A sociedade limitada caracteriza-se por:", opts: ["Responsabilidade limitada ao capital social", "Responsabilidade ilimitada", "Natureza exclusivamente pública", "Ausência de contrato social"], correta: 0, comment: "Na LTDA a responsabilidade é limitada ao capital social." },
  { prova: "OAB", ano: "2019", area: "Direito do Trabalho", dif: "Fácil", ref: "OAB 37º · FGV · 2019", text: "A jornada padrão prevista na Constituição é de:", opts: ["8 horas diárias", "12 horas diárias", "6 horas diárias", "10 horas diárias"], correta: 0, comment: "A CF prevê jornada de 8h diárias e 44h semanais." },
  { prova: "OAB", ano: "2018", area: "Processo Civil", dif: "Médio", ref: "OAB 36º · FGV · 2018", text: "A tutela provisória de urgência exige:", opts: ["Probabilidade do direito e perigo de dano", "Trânsito em julgado", "Audiência obrigatória", "Prova pericial"], correta: 0, comment: "A tutela de urgência depende de probabilidade do direito e perigo de dano." },
  { prova: "OAB", ano: "2017", area: "Direito Ambiental", dif: "Médio", ref: "OAB 35º · FGV · 2017", text: "O princípio da prevenção ambiental busca:", opts: ["Evitar danos conhecidos", "Punir criminalmente", "Privatizar recursos", "Eliminar licenciamento"], correta: 0, comment: "A prevenção atua diante de riscos conhecidos." },
  { prova: "OAB", ano: "2016", area: "Ética Profissional", dif: "Fácil", ref: "OAB 34º · FGV · 2016", text: "É dever do advogado:", opts: ["Guardar sigilo profissional", "Divulgar informações sigilosas", "Captar clientela indevidamente", "Atuar sem procuração"], correta: 0, comment: "O sigilo profissional é dever ético fundamental da advocacia." },
  { area: "Direito Civil", dif: "Médio", ref: "OAB 38º · FGV", text: "Em contrato de compra e venda, a parte vendedora deixou de entregar o bem no prazo pactuado. Qual medida é mais adequada?", opts: ["Exigir cumprimento ou resolução com perdas e danos", "Impetrar habeas corpus", "Propor ação penal privada", "Requerer ADI"], correta: 0, comment: "A inadimplência contratual permite exigir cumprimento ou resolução, além de perdas e danos." },
  { area: "Direito Penal", dif: "Fácil", ref: "OAB 39º · FGV", text: "Na culpa consciente, o agente:", opts: ["Assume o risco do resultado", "Prevê o resultado, mas acredita que ele não ocorrerá", "Não prevê resultado algum", "Age com finalidade específica"], correta: 1, comment: "Na culpa consciente há previsão do resultado, sem aceitação do risco." },
  { area: "Constitucional", dif: "Médio", ref: "OAB 40º · FGV", text: "É cláusula pétrea expressamente prevista no art. 60, §4º, da CF:", opts: ["Sistema presidencialista", "Voto direto, secreto, universal e periódico", "Mandato de 4 anos", "Bicameralismo"], correta: 1, comment: "O voto direto, secreto, universal e periódico é cláusula pétrea." },
];

function Tag({ children, tone = "blue" }) {
  const tones = {
    blue: [theme.blueLight, theme.blue], red: [theme.redLight, theme.red], green: [theme.greenLight, theme.green], gold: [theme.goldLight, theme.gold], purple: [theme.purpleLight, theme.purple], gray: ["#f0f3f6", "#4a5a6a"],
  };
  const [bg, fg] = tones[tone] || tones.blue;
  return <span className="inline-flex items-center rounded px-2 py-1 text-[11px] font-bold" style={{ background: bg, color: fg }}>{children}</span>;
}

function Card({ children, className = "" }) {
  return <div className={`rounded-lg border bg-white p-5 shadow-sm ${className}`} style={{ borderColor: theme.border }}>{children}</div>;
}

function Progress({ value, color = theme.blue }) {
  return <div className="h-2 overflow-hidden rounded-full border" style={{ background: "#f0f3f6", borderColor: theme.border }}><div className="h-full rounded-full transition-all" style={{ width: `${value}%`, background: color }} /></div>;
}

function Login({ onLogin }) {
  const [tab, setTab] = useState("aluno");
  return <div className="min-h-screen flex items-center justify-center p-6" style={{ background: "linear-gradient(150deg,#0a1520 0%,#0f1f2e 50%,#142030 100%)" }}>
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md overflow-hidden rounded-xl bg-white shadow-2xl">
      <div className="flex flex-col items-center gap-3 px-8 py-8 text-white" style={{ background: theme.navy, borderBottom: `3px solid ${theme.blue2}` }}>
        <div className="flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-lg border border-white/20 bg-white/10 text-2xl">⚖️</div><div className="text-3xl font-extrabold tracking-tight">Lex<span style={{ color: "#5b9bd5" }}>ia</span></div></div>
        <div className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Plataforma de Educação Jurídica com IA</div>
      </div>
      <div className="p-8">
        <button onClick={() => onLogin(USERS.aluno, "dash", "aluno")} className="mb-5 flex w-full items-center justify-center gap-2 rounded-md border px-4 py-3 text-sm font-semibold hover:border-[#1a4f8a] hover:text-[#1a4f8a]" style={{ borderColor: theme.border }}>Entrar com Google</button>
        <div className="mb-5 flex items-center gap-3 text-xs text-slate-400"><div className="h-px flex-1 bg-slate-200" />ou acesse com e-mail<div className="h-px flex-1 bg-slate-200" /></div>
        <div className="mb-5 flex border-b" style={{ borderColor: theme.border }}>
          {[["aluno", "Estudante"], ["admin", "Administrador"]].map(([id, label]) => <button key={id} onClick={() => setTab(id)} className="flex-1 py-2 text-sm font-bold" style={{ color: tab === id ? theme.blue : "#4a5a6a", borderBottom: tab === id ? `3px solid ${theme.blue}` : "3px solid transparent" }}>{label}</button>)}
        </div>
        <input className="mb-3 w-full rounded-md border px-4 py-3 text-sm outline-none" style={{ borderColor: theme.border }} defaultValue={tab === "admin" ? "admin@lexia.br" : "aluno@lexia.br"} />
        <input className="mb-2 w-full rounded-md border px-4 py-3 text-sm outline-none" style={{ borderColor: theme.border }} defaultValue={tab === "admin" ? "Admin@2026" : "Aluno@2026"} type="password" />
        <div className="mb-4 text-right"><button type="button" onClick={() => alert("Fluxo demonstrativo: enviaremos instruções para redefinição de senha no e-mail cadastrado.")} className="text-xs font-semibold hover:underline" style={{ color: theme.blue }}>Esqueci minha senha</button></div>
        <button onClick={() => onLogin(USERS[tab], tab === "admin" ? "adm-dash" : "dash", tab)} className="w-full rounded-md px-4 py-3 text-sm font-bold text-white" style={{ background: theme.blue }}>Acessar plataforma</button>
        <p className="mt-5 text-center text-xs leading-6 text-slate-400">Demo estudante: aluno@lexia.br / Aluno@2026<br />Demo administrador: admin@lexia.br / Admin@2026</p>
      </div>
    </motion.div>
  </div>;
}

function Sidebar({ role, panel, setPanel, logout }) {
  const nav = role === "admin" ? adminNav : alunoNav;
  const grouped = nav.reduce((acc, item) => ({ ...acc, [item.group]: [...(acc[item.group] || []), item] }), {});
  return <aside className="flex w-[230px] shrink-0 flex-col overflow-y-auto" style={{ background: theme.navy2 }}>
    {Object.entries(grouped).map(([group, items]) => <div key={group}>
      <div className="px-5 pb-2 pt-5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/25">{group}</div>
      {items.map(item => {
        const Icon = item.icon;
        const active = panel === item.id;
        return <button key={item.id} onClick={() => setPanel(item.id)} className="flex w-full items-center gap-3 border-l-4 px-5 py-3 text-left text-sm font-semibold transition" style={{ borderLeftColor: active ? "#5b9bd5" : "transparent", color: active ? "#5b9bd5" : "rgba(255,255,255,.58)", background: active ? "rgba(91,155,213,.12)" : "transparent" }}>
          <Icon size={17} /> <span className="flex-1">{item.label}</span>{item.badge && <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-white/75">{item.badge}</span>}
        </button>;
      })}
    </div>)}
    <div className="flex-1" />
    <button onClick={logout} className="flex items-center gap-2 border-t border-white/10 px-5 py-4 text-sm text-white/35 hover:text-white/70"><LogOut size={15} /> Encerrar sessão</button>
  </aside>;
}

function Topbar({ user, panel }) {
  const title = [...alunoNav, ...adminNav].find(x => x.id === panel)?.label || "Dashboard";
  return <header className="flex h-[54px] items-center justify-between text-white" style={{ background: theme.navy, borderBottom: `2px solid ${theme.blue2}` }}>
    <div className="flex h-full items-center"><div className="flex h-full w-[230px] items-center gap-3 px-5" style={{ background: theme.navy2 }}><span>⚖️</span><strong>Lex<span style={{ color: "#5b9bd5" }}>ia</span></strong></div><div className="ml-6 text-xs font-bold uppercase tracking-widest text-white/45">{title}</div></div>
    <div className="mr-5 flex items-center gap-3"><div className="text-right"><div className="text-xs font-bold">{user.name}</div><div className="text-[11px] text-white/40">{user.role}</div></div><div className="grid h-8 w-8 place-items-center rounded bg-[#2563a8] text-xs font-extrabold">{user.initials}</div></div>
  </header>;
}

function DashboardAluno({ setPanel }) {
  return <div>
    <Card className="mb-5 flex items-center gap-5"><div className="grid h-14 w-14 place-items-center rounded-lg text-xl font-extrabold text-white" style={{ background: theme.blue }}>AB</div><div className="flex-1"><h1 className="text-xl font-extrabold">Bem-vinda, Ana Beatriz!</h1><p className="mt-1 text-sm text-slate-500">Direito Civil · Preparação OAB</p><div className="mt-3 flex gap-2"><Tag>Nível 4</Tag><Tag tone="gold">1.240 XP</Tag><Tag tone="green">🔥 7 dias consecutivos</Tag></div></div><div className="text-right"><div className="text-xs font-bold uppercase tracking-widest text-slate-400">Meta OAB 1ª Fase</div><p className="mt-2 text-sm"><strong>23 dias</strong> para o próximo simulado</p><button onClick={() => setPanel("simulado")} className="mt-3 rounded px-4 py-2 text-sm font-bold text-white" style={{ background: theme.blue }}>Iniciar simulado</button></div></Card>
    <div className="mb-5 grid grid-cols-4 gap-4">{[["📚", "12", "Aulas concluídas"], ["📝", "8", "Peças elaboradas"], ["🃏", "94%", "Acerto flashcards"], ["❓", "67%", "Acerto OAB"]].map(([i, v, l]) => <Card key={l}><div className="text-xl">{i}</div><div className="mt-2 text-3xl font-black">{v}</div><div className="text-sm text-slate-500">{l}</div></Card>)}</div>
    <div className="grid grid-cols-2 gap-5"><Card><h2 className="mb-4 font-bold">Progresso por área</h2>{trilhas.map(t => <div key={t.area} className="mb-4"><div className="mb-2 flex justify-between text-sm"><span>{t.area}</span><strong style={{ color: t.color }}>{t.pct}%</strong></div><Progress value={t.pct} color={t.color} /></div>)}</Card><Card><h2 className="mb-4 font-bold">Atividade recente</h2>{["Peça gerada: Habeas Corpus", "Flashcards — 15 revisados", "Questão OAB respondida"].map((x, idx) => <div key={x} className="flex gap-3 border-b py-3 last:border-b-0" style={{ borderColor: theme.border }}><div className="mt-1 h-3 w-3 rounded-full" style={{ background: idx === 1 ? theme.gold : theme.blue }} /><div><div className="text-sm font-bold">{x}</div><div className="text-xs text-slate-400">{idx === 0 ? "Hoje, 09:14" : idx === 1 ? "Ontem, 20:30" : "23/05, 18:00"}</div></div></div>)}</Card></div>
  </div>;
}

function Trilhas() {
  const [modal, setModal] = useState(null);
  return <div><h1 className="mb-6 border-b pb-4 text-xl font-extrabold" style={{ borderColor: theme.border }}>Trilhas de Estudo</h1><div className="grid grid-cols-2 gap-5">{trilhas.map(t => <Card key={t.area} className="p-0 overflow-hidden"><div className="h-1" style={{ background: t.color }} /><div className="p-5"><div className="mb-3 flex items-center justify-between"><strong>{t.icon} {t.area}</strong><Tag tone={t.pct > 60 ? "blue" : t.pct > 40 ? "gold" : "gray"}>{t.pct}%</Tag></div><Progress value={t.pct} color={t.color} /><p className="mt-2 text-xs text-slate-400">{t.tag}</p></div><div className="border-t" style={{ borderColor: theme.border }}>{t.modules.map((m, i) => <button key={m} onClick={() => i < 3 && setModal({ ...t, module: m, idx: i })} className="flex w-full items-center gap-3 px-5 py-3 text-left hover:bg-slate-50"><span className="grid h-7 w-7 place-items-center rounded-full border text-xs" style={{ background: i < 2 ? theme.greenLight : i === 2 ? theme.blueLight : "#f0f3f6", color: i < 2 ? theme.green : i === 2 ? theme.blue : theme.muted }}>{i < 2 ? "✓" : i === 2 ? "▶" : "🔒"}</span><div><div className="text-sm font-bold">{m}</div><div className="text-xs text-slate-400">{i < 2 ? "Concluído" : i === 2 ? "Em andamento" : "Bloqueado"} · {45 + i * 10} min</div></div></button>)}</div></Card>)}</div>{modal && <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-6"><Card className="max-w-xl"><div className="mb-4 flex justify-between border-b pb-3" style={{ borderColor: theme.border }}><strong>{modal.module}</strong><button onClick={() => setModal(null)} className="text-slate-400">✕</button></div><p className="text-sm leading-7 text-slate-600">Módulo de {modal.area} com explicação guiada, exemplos práticos, revisão por flashcards e questões OAB ao final. Esta janela preserva a interação de abertura de módulos do protótipo original.</p><div className="mt-5 flex justify-end"><button onClick={() => setModal(null)} className="rounded px-4 py-2 text-sm font-bold text-white" style={{ background: theme.blue }}>Marcar como concluído</button></div></Card></div>}</div>;
}

function Flashcards() {
  const [cards, setCards] = useState(baseFlashcards);
  const [selectedAreas, setSelectedAreas] = useState(["Direito Civil", "Direito Penal", "Direito Constitucional", "Processo Civil"]);
  const [quantidade, setQuantidade] = useState(4);
  const [open, setOpen] = useState({});
  const toggleArea = (area) => {
    setSelectedAreas(prev => prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]);
  };
  const shown = cards.filter(c => selectedAreas.includes(c.area)).slice(0, Number(quantidade));
  return <div>
    <h1 className="mb-5 border-b pb-4 text-xl font-extrabold" style={{ borderColor: theme.border }}>Flashcards Jurídicos <small className="ml-2 text-sm font-normal text-slate-400">escolha áreas e quantidade</small></h1>
    <Card className="mb-5">
      <div className="mb-4 grid grid-cols-4 gap-4">
        <label className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wide text-slate-500">Quantos flashcards deseja?
          <select value={quantidade} onChange={e => setQuantidade(e.target.value)} className="rounded-md border bg-white px-3 py-2 text-sm font-medium normal-case tracking-normal text-slate-700 outline-none" style={{ borderColor: theme.border }}>
            {[4, 8, 12, 20, 30, 50].map(n => <option key={n} value={n}>{n} flashcards</option>)}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wide text-slate-500">Área
          <select className="rounded-md border bg-white px-3 py-2 text-sm font-medium normal-case tracking-normal text-slate-700 outline-none" style={{ borderColor: theme.border }} onChange={e => {
            if (e.target.value === "Todas") {
              setSelectedAreas(direitoAreas);
            } else {
              setSelectedAreas([e.target.value]);
            }
          }}>
            <option>Todas</option>
            {direitoAreas.map(area => <option key={area}>{area}</option>)}
          </select>
        </label>

        <div className="flex items-end"><div className="rounded-md px-3 py-2 text-sm font-bold" style={{ background: theme.blueLight, color: theme.blue }}>{shown.length} exibidos</div></div>
        <div className="flex items-end justify-end gap-2"><button onClick={() => setSelectedAreas(direitoAreas)} className="rounded border px-3 py-2 text-xs font-bold" style={{ borderColor: theme.border }}>Todas</button><button onClick={() => setSelectedAreas([])} className="rounded border px-3 py-2 text-xs font-bold" style={{ borderColor: theme.border }}>Limpar</button></div>
      </div>
    </Card>
    <div className="grid grid-cols-2 gap-4">{shown.map((c, idx) => <button key={idx} onClick={() => setOpen({ ...open, [idx]: !open[idx] })} className="rounded-lg border bg-white p-5 text-left shadow-sm transition hover:shadow-md" style={{ borderColor: open[idx] ? theme.blue2 : theme.border, background: open[idx] ? theme.blueLight : "white" }}><Tag tone={c.color}>{c.area}</Tag><div className="mt-4 text-sm font-bold leading-6">{c.q}</div>{open[idx] && <div className="mt-4 border-t pt-4 text-sm leading-6 text-slate-700" style={{ borderColor: theme.border }}>{c.a}</div>}<div className="mt-3 text-right text-xs italic text-slate-400">{open[idx] ? "" : "clique para revelar"}</div></button>)}</div>
    <Card className="mt-5"><h2 className="mb-3 font-bold">Gerar novo flashcard com IA</h2><div className="flex gap-3"><input className="flex-1 rounded border px-3 py-2 text-sm" style={{ borderColor: theme.border }} placeholder="Ex: prescrição, habeas corpus, contratos..." /><button onClick={() => setCards([{ area: "Direito Civil", q: "Flashcard gerado: quais são os elementos do negócio jurídico?", a: "Agente capaz, objeto lícito/possível/determinado ou determinável e forma prescrita ou não defesa em lei.", color: "blue" }, ...cards])} className="rounded px-4 py-2 text-sm font-bold text-white" style={{ background: theme.blue }}>Gerar com IA</button></div></Card>
  </div>;
}

function Questoes() {
  const [ano, setAno] = useState("Todos");
  const [prova, setProva] = useState("Todas");
  const [dificuldade, setDificuldade] = useState("Todas");
  const [area, setArea] = useState("Todas");
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const anos = ["Todos", ...Array.from(new Set(questoes.map(q => q.ano).filter(Boolean))).sort((a,b) => Number(b) - Number(a))];
  const filtradas = questoes.filter(q =>
    (ano === "Todos" || q.ano === ano) &&
    (prova === "Todas" || q.prova === prova) &&
    (dificuldade === "Todas" || q.dif === dificuldade) &&
    (area === "Todas" || q.area === area)
  );
  const q = filtradas[idx % Math.max(1, filtradas.length)] || questoes[0];
  const resetFiltros = (setter, value) => { setter(value); setIdx(0); setSelected(null); };
  return <div>
    <h1 className="mb-5 border-b pb-4 text-xl font-extrabold" style={{ borderColor: theme.border }}>Questões</h1>
    <Card className="mb-5">
      <div className="grid grid-cols-5 gap-4">
        <label className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wide text-slate-500">Ano
          <select value={ano} onChange={e => resetFiltros(setAno, e.target.value)} className="rounded-md border bg-white px-3 py-2 text-sm font-medium normal-case tracking-normal text-slate-700 outline-none" style={{ borderColor: theme.border }}>{anos.map(x => <option key={x} value={x}>{x}</option>)}</select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wide text-slate-500">Prova
          <select value={prova} onChange={e => resetFiltros(setProva, e.target.value)} className="rounded-md border bg-white px-3 py-2 text-sm font-medium normal-case tracking-normal text-slate-700 outline-none" style={{ borderColor: theme.border }}><option>Todas</option><option>OAB</option><option>ENADE</option></select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wide text-slate-500">Dificuldade
          <select value={dificuldade} onChange={e => resetFiltros(setDificuldade, e.target.value)} className="rounded-md border bg-white px-3 py-2 text-sm font-medium normal-case tracking-normal text-slate-700 outline-none" style={{ borderColor: theme.border }}><option>Todas</option><option>Fácil</option><option>Médio</option><option>Difícil</option></select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wide text-slate-500">Área
          <select value={area} onChange={e => resetFiltros(setArea, e.target.value)} className="rounded-md border bg-white px-3 py-2 text-sm font-medium normal-case tracking-normal text-slate-700 outline-none" style={{ borderColor: theme.border }}>
            <option>Todas</option>{direitoAreas.map(a => <option key={a}>{a}</option>)}
          </select>
        </label>
        <div className="flex items-end"><div className="rounded-md px-3 py-2 text-sm font-bold" style={{ background: theme.blueLight, color: theme.blue }}>{filtradas.length} questões encontradas</div></div>
      </div>
    </Card>
    <div className="mb-5 grid grid-cols-4 gap-4">{[["67%", "Taxa de acerto geral"], ["143", "Respondidas"], [filtradas.length, "No banco filtrado"], [selected === q.correta ? 1 : 0, "Acertos nesta sessão"]].map(([v, l]) => <Card key={l}><div className="text-3xl font-black" style={{ color: l.includes("acerto") ? theme.blue : theme.text }}>{v}</div><div className="text-sm text-slate-500">{l}</div></Card>)}</div>
    <Card><div className="mb-4 flex justify-between"><div className="flex gap-2"><Tag tone={q.prova === "ENADE" ? "purple" : "blue"}>{q.prova || "OAB"}</Tag><Tag>{q.area}</Tag><Tag tone="gray">{q.dif}</Tag>{q.ano && <Tag tone="gray">{q.ano}</Tag>}</div><span className="text-xs text-slate-400">{q.ref}</span></div><Progress value={(idx / Math.max(1, filtradas.length)) * 100} /><p className="my-5 text-center text-xs text-slate-400">Questão <strong>{idx + 1}</strong> de <strong>{Math.max(1, filtradas.length)}</strong></p><p className="mb-5 text-sm font-semibold leading-7">{q.text}</p><div className="flex flex-col gap-3">{q.opts.map((o, i) => { const answered = selected !== null; const correct = answered && i === q.correta; const wrong = answered && selected === i && i !== q.correta; return <button key={o} disabled={answered} onClick={() => setSelected(i)} className="flex items-start gap-3 rounded-md border p-3 text-left text-sm" style={{ borderColor: correct ? theme.green : wrong ? theme.red : theme.border, background: correct ? theme.greenLight : wrong ? theme.redLight : "white", color: correct ? theme.green : wrong ? theme.red : theme.text }}><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border text-xs font-bold">{"ABCD"[i]}</span>{o}</button> })}</div>{selected !== null && <div className="mt-5 rounded-md p-4 text-sm" style={{ background: selected === q.correta ? theme.greenLight : theme.redLight, color: selected === q.correta ? theme.green : theme.red }}><strong>{selected === q.correta ? "✓ Correto." : "✗ Incorreto."}</strong> {q.comment}</div>}<div className="mt-5 flex justify-end"><button onClick={() => { setIdx((idx + 1) % Math.max(1, filtradas.length)); setSelected(null); }} className="rounded px-4 py-2 text-sm font-bold text-white" style={{ background: theme.blue }}>Próxima questão →</button></div></Card>
  </div>;
}

function Simulado() {
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [answerLog, setAnswerLog] = useState([]);
  const [idx, setIdx] = useState(0);
  const [config, setConfig] = useState({
    quantidade: 10,
    prova: "Todas",
    dificuldade: "Todas",
    area: "Todas",
    usarIA: true
  });

  const simuladas = questoes.filter(q =>
    (config.prova === "Todas" || q.prova === config.prova) &&
    (config.dificuldade === "Todas" || q.dif === config.dificuldade) &&
    (config.area === "Todas" || q.area === config.area)
  ).slice(0, config.quantidade);

  const q = simuladas[idx];
  const pct = answers.length ? Math.round((answers.filter(Boolean).length / answers.length) * 100) : 0;

  if (finished) {
    return <div>
      <h1 className="mb-5 border-b pb-4 text-xl font-extrabold" style={{ borderColor: theme.border }}>Resultado do Simulado</h1>
      <Card>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-6xl font-black" style={{ color: pct >= 70 ? theme.green : theme.gold }}>{pct}%</div>
            <div className="mt-2 text-sm text-slate-500">{answers.filter(Boolean).length} acertos de {answers.length} questões</div>
          </div>
          <Tag tone={pct >= 70 ? "green" : "gold"}>{pct >= 70 ? "Excelente desempenho" : "Continue revisando"}</Tag>
        </div>

        <div className="mt-6 flex items-center justify-between border-b pb-3" style={{ borderColor: theme.border }}>
          <h2 className="font-bold">Relatório completo das questões</h2>
          <span className="text-sm text-slate-500">{answerLog.length} questões respondidas</span>
        </div>

        <div className="mt-4 space-y-3">
          {answerLog.map((item, i) => (
            
            <div key={i} className="rounded border p-3" style={{ borderColor: theme.border }}>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex flex-wrap gap-2"><Tag tone={item.questao.prova === "ENADE" ? "purple" : "blue"}>{item.questao.prova}</Tag><Tag>{item.questao.area}</Tag><Tag tone="gray">Questão {i + 1}</Tag></div>
                <Tag tone={item.ok ? "green" : "red"}>{item.ok ? "Acertou" : "Errou"}</Tag>
              </div>
              <p className="text-sm leading-6">{item.questao.text}</p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded p-2" style={{ background: theme.blueLight, color: theme.blue }}>Sua resposta: {"ABCD"[item.marcada]}</div>
                <div className="rounded p-2" style={{ background: theme.greenLight, color: theme.green }}>Gabarito: {"ABCD"[item.questao.correta]}</div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => {
          setRunning(false);
          setFinished(false);
          setAnswers([]);
          setAnswerLog([]);
          setIdx(0);
        }} className="mt-6 rounded px-4 py-2 text-sm font-bold text-white" style={{ background: theme.blue }}>
          Fazer novo simulado
        </button>
      </Card>
    </div>;
  }

  if (!running) {
    return <div>
      <h1 className="mb-5 border-b pb-4 text-xl font-extrabold" style={{ borderColor: theme.border }}>Simulado</h1>

      <Card>
        <h2 className="text-lg font-bold">Personalizar simulado</h2>
        <p className="mt-2 text-sm text-slate-500">Monte um simulado personalizado com filtros inteligentes.</p>

        <div className="mt-5 grid grid-cols-5 gap-4">
          <label className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wide text-slate-500">
            Quantidade
            <select value={config.quantidade} onChange={e => setConfig({ ...config, quantidade: Number(e.target.value) })} className="rounded border px-3 py-2 text-sm normal-case" style={{ borderColor: theme.border }}>
              {[5,10,20,40,80].map(n => <option key={n} value={n}>{n} questões</option>)}
            </select>
          </label>

          <label className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wide text-slate-500">
            Prova
            <select value={config.prova} onChange={e => setConfig({ ...config, prova: e.target.value })} className="rounded border px-3 py-2 text-sm normal-case" style={{ borderColor: theme.border }}>
              <option>Todas</option>
              <option>OAB</option>
              <option>ENADE</option>
            </select>
          </label>

          <label className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wide text-slate-500">
            Dificuldade
            <select value={config.dificuldade} onChange={e => setConfig({ ...config, dificuldade: e.target.value })} className="rounded border px-3 py-2 text-sm normal-case" style={{ borderColor: theme.border }}>
              <option>Todas</option>
              <option>Fácil</option>
              <option>Médio</option>
              <option>Difícil</option>
            </select>
          </label>

          <label className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wide text-slate-500">
            Área
            <select value={config.area} onChange={e => setConfig({ ...config, area: e.target.value })} className="rounded border px-3 py-2 text-sm normal-case" style={{ borderColor: theme.border }}>
              <option>Todas</option>
              {direitoAreas.map(area => <option key={area}>{area}</option>)}
            </select>
          </label>

          <label className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wide text-slate-500">
            Questões IA
            <select value={config.usarIA ? "Sim" : "Não"} onChange={e => setConfig({ ...config, usarIA: e.target.value === "Sim" })} className="rounded border px-3 py-2 text-sm normal-case" style={{ borderColor: theme.border }}>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </label>
        </div>

        <div className="mt-5 flex items-center justify-between rounded border bg-slate-50 p-4" style={{ borderColor: theme.border }}>
          <div>
            <div className="text-sm font-bold">{simuladas.length} questões selecionadas</div>
            <div className="text-xs text-slate-500">Banco integrado OAB + ENADE {config.usarIA ? '· Questões IA ativadas' : ''}</div>
          </div>
          <button onClick={() => {
            setRunning(true);
            setAnswers([]);
          setAnswerLog([]);
          setIdx(0);
          }} className="rounded px-5 py-3 text-sm font-bold text-white" style={{ background: theme.blue }}>
            Iniciar simulado
          </button>
        </div>
      </Card>
    </div>;
  }

  return <div>
    <h1 className="mb-5 border-b pb-4 text-xl font-extrabold" style={{ borderColor: theme.border }}>Simulado em andamento</h1>

    <Card>
      <div className="mb-4 flex justify-between">
        <div className="flex gap-2">
          <Tag tone={q.prova === "ENADE" ? "purple" : "blue"}>{q.prova}</Tag>
          <Tag>{q.area}</Tag>
          <Tag tone="gray">{q.dif}</Tag>
        </div>
        <span className="text-sm font-bold text-slate-500">{idx + 1} / {simuladas.length}</span>
      </div>

      <Progress value={(idx / simuladas.length) * 100} />

      <p className="my-5 text-sm font-semibold leading-7">{q.text}</p>

      <div className="space-y-3">
        {q.opts.map((o, i) => (
          <button
            key={o}
            onClick={() => {
              const ok = i === q.correta;
              const next = [...answers, ok];
              const nextLog = [...answerLog, { questao: q, marcada: i, ok }];

              setAnswerLog(nextLog);

              if (idx >= simuladas.length - 1) {
                setAnswers(next);
                setFinished(true);
              } else {
                setAnswers(next);
                setIdx(idx + 1);
              }
            }}
            className="flex w-full gap-3 rounded-md border p-3 text-left text-sm hover:bg-slate-50"
            style={{ borderColor: theme.border }}
          >
            <span className="font-bold">{"ABCD"[i]})</span>
            {o}
          </button>
        ))}
      </div>
    </Card>
  </div>;
}

function Pecas() {
  const [type, setType] = useState(null);
  const [generated, setGenerated] = useState(false);
  return <div><h1 className="mb-5 border-b pb-4 text-xl font-extrabold" style={{ borderColor: theme.border }}>Gerador de Peças Jurídicas</h1><div className="mb-5 grid grid-cols-4 gap-4">{[["peticao", "📄", "Petição Inicial"], ["recurso", "↗️", "Recurso"], ["contrato", "🤝", "Contrato"], ["habeas", "⚖️", "Habeas Corpus"]].map(([id, icon, label]) => <button key={id} onClick={() => { setType(label); setGenerated(false); }} className="rounded-lg border bg-white p-5 text-left shadow-sm hover:shadow-md" style={{ borderColor: type === label ? theme.blue : theme.border }}><div className="text-2xl">{icon}</div><strong className="mt-3 block text-sm">{label}</strong></button>)}</div>{type && <Card><h2 className="mb-4 font-bold">Elaborar: {type}</h2><div className="grid grid-cols-2 gap-4"><input className="rounded border px-3 py-2 text-sm" style={{ borderColor: theme.border }} placeholder="Área do direito" defaultValue="Direito Civil" /><input className="rounded border px-3 py-2 text-sm" style={{ borderColor: theme.border }} placeholder="Tribunal/Juízo" /></div><textarea className="mt-4 min-h-[120px] w-full rounded border px-3 py-2 text-sm" style={{ borderColor: theme.border }} placeholder="Descreva fatos, pedidos e partes envolvidas..." /><button onClick={() => setGenerated(true)} className="mt-4 rounded px-4 py-2 text-sm font-bold text-white" style={{ background: theme.blue }}>Gerar com IA</button>{generated && <div className="mt-5 whitespace-pre-wrap rounded border bg-white p-5 text-sm leading-7" style={{ borderColor: theme.border }}>{`EXCELENTÍSSIMO(A) SENHOR(A) DOUTOR(A) JUIZ(A) DE DIREITO\n\n[Peça gerada em modo demonstrativo]\n\nI. Dos fatos\nA parte autora expõe situação jurídica relevante e requer tutela adequada.\n\nII. Do direito\nO pedido encontra fundamento na legislação aplicável, princípios processuais e entendimento jurisprudencial dominante.\n\nIII. Dos pedidos\nRequer-se o recebimento da presente, citação da parte contrária e procedência dos pedidos.`}</div>}</Card>}</div>;
}

function Juris() {
  const [search, setSearch] = useState(false);
  const [chat, setChat] = useState(["Olá! Sou o assistente jurídico da Lexia. Pergunte sobre leis, teses ou jurisprudência."]);
  return <div><h1 className="mb-5 border-b pb-4 text-xl font-extrabold" style={{ borderColor: theme.border }}>Jurisprudência</h1><div className="grid grid-cols-2 gap-5"><Card><h2 className="mb-4 font-bold">Pesquisa jurisprudencial</h2><input className="w-full rounded border px-3 py-2 text-sm" style={{ borderColor: theme.border }} placeholder="Ex: responsabilidade civil médica" /><button onClick={() => setSearch(true)} className="mt-3 rounded px-4 py-2 text-sm font-bold text-white" style={{ background: theme.blue }}>Pesquisar</button>{search && <div className="mt-5 space-y-3"><Tag>3 julgados</Tag>{["STJ · REsp 000000/SP · 2023", "STF · ARE 000000 · 2022", "TJSP · Apelação 0000000-00 · 2024"].map(x => <div key={x} className="rounded border-l-4 bg-slate-50 p-3" style={{ borderColor: theme.blue }}><strong className="text-sm">{x}</strong><p className="mt-2 text-sm text-slate-600">Resumo demonstrativo de ementa com tese jurídica, fundamentos e aplicação ao caso concreto.</p></div>)}</div>}</Card><Card><h2 className="mb-4 font-bold">Chat jurídico IA</h2><div className="max-h-72 space-y-3 overflow-y-auto">{chat.map((m, i) => <div key={i} className={`rounded-lg p-3 text-sm leading-6 ${i % 2 ? "ml-12 text-white" : "mr-12 bg-slate-100"}`} style={i % 2 ? { background: theme.blue } : {}}>{m}</div>)}</div><div className="mt-4 flex gap-2"><input className="flex-1 rounded border px-3 py-2 text-sm" style={{ borderColor: theme.border }} placeholder="Digite sua pergunta..." onKeyDown={e => { if (e.key === "Enter" && e.currentTarget.value.trim()) { setChat([...chat, e.currentTarget.value, "Resposta demonstrativa: a análise depende da hipótese fática, da lei aplicável e da jurisprudência dominante."]); e.currentTarget.value = ""; } }} /><button className="rounded px-4 py-2 text-sm font-bold text-white" style={{ background: theme.blue }}>Enviar</button></div></Card></div></div>;
}

function Resumos() {
  const [out, setOut] = useState(false);
  return <div><h1 className="mb-5 border-b pb-4 text-xl font-extrabold" style={{ borderColor: theme.border }}>Resumos Automáticos</h1><Card><h2 className="mb-4 font-bold">Gerar resumo com IA</h2><input className="mb-3 w-full rounded border px-3 py-2 text-sm" style={{ borderColor: theme.border }} placeholder="Tema: ex. responsabilidade civil, contratos, controle de constitucionalidade" /><textarea className="min-h-[140px] w-full rounded border px-3 py-2 text-sm" style={{ borderColor: theme.border }} placeholder="Cole texto jurídico, material de aula ou decisão..." /><button onClick={() => setOut(true)} className="mt-3 rounded px-4 py-2 text-sm font-bold text-white" style={{ background: theme.blue }}>Gerar resumo</button>{out && <div className="mt-5 rounded border bg-white p-5 text-sm leading-7" style={{ borderColor: theme.border }}><strong>Resumo estruturado</strong><br />1. Conceito central do tema.<br />2. Fundamentos legais relevantes.<br />3. Pontos de atenção para OAB.<br />4. Perguntas de revisão e mapa mental textual.</div>}</Card></div>;
}

function Perfil() { return <div><h1 className="mb-5 border-b pb-4 text-xl font-extrabold" style={{ borderColor: theme.border }}>Perfil & XP</h1><Card><div className="flex items-center gap-5"><div className="grid h-16 w-16 place-items-center rounded-lg text-2xl font-black text-white" style={{ background: theme.blue }}>AB</div><div className="flex-1"><h2 className="font-bold">Ana Beatriz Lima</h2><p className="text-sm text-slate-500">Nível 4 · 1.240 XP</p><div className="mt-3"><Progress value={68} /></div></div></div></Card></div>; }
function Certificados() { return <div><h1 className="mb-5 border-b pb-4 text-xl font-extrabold" style={{ borderColor: theme.border }}>Certificados</h1><Card><div className="rounded-lg border p-5" style={{ borderColor: theme.gold, background: theme.goldLight }}><strong>🏆 Direito Civil — Fundamentos</strong><p className="mt-2 text-sm text-slate-600">Certificado emitido após conclusão de trilha e avaliação.</p></div></Card></div>; }

function AdminPanel({ panel }) {
  if (panel === "adm-dash") return <div><h1 className="mb-5 border-b pb-4 text-xl font-extrabold" style={{ borderColor: theme.border }}>Analytics</h1><div className="mb-5 grid grid-cols-4 gap-4">{[["82", "Alunos ativos", "green"], ["49%", "Mediana de acerto", "gold"], ["18", "Alunos em risco", "red"], ["312", "Peças geradas", "blue"]].map(([v, l, tone]) => <Card key={l}><div className="text-3xl font-black" style={{ color: tone === "green" ? theme.green : tone === "gold" ? theme.gold : tone === "red" ? theme.red : theme.blue }}>{v}</div><div className="text-sm text-slate-500">{l}</div></Card>)}</div><div className="grid grid-cols-2 gap-5"><Card><h2 className="mb-5 font-bold">Trajetória de desempenho</h2>{[38,44,46,49,53,67].map((v,i) => <div key={i} className="mb-3 flex items-center gap-3"><span className="w-14 text-xs text-slate-400">{["Fev","Mar","Abr","Mai","Jun","Nov"][i]}</span><div className="flex-1"><Progress value={v} color={v > 60 ? theme.green : theme.blue} /></div><strong className="w-10 text-right text-xs">{v}%</strong></div>)}</Card><Card><h2 className="mb-5 font-bold">Risco por área</h2>{trilhas.map(t => <div key={t.area} className="mb-3 flex items-center gap-3"><span className="w-36 text-sm text-slate-500">{t.area}</span><div className="flex-1"><Progress value={100 - t.pct} color={t.pct < 50 ? theme.red : theme.gold} /></div></div>)}</Card></div></div>;
  if (panel === "adm-provas") return <div><h1 className="mb-5 border-b pb-4 text-xl font-extrabold" style={{ borderColor: theme.border }}>Provas & Questões</h1><div className="grid grid-cols-5 gap-4 mb-5"><Card><div className="text-3xl font-black" style={{ color: theme.blue }}>400</div><div className="text-sm text-slate-500">Questões importadas</div></Card><Card><div className="text-3xl font-black" style={{ color: theme.green }}>400/400</div><div className="text-sm text-slate-500">Gabarito sincronizado</div></Card><Card><div className="text-3xl font-black" style={{ color: theme.purple }}>OAB + ENADE</div><div className="text-sm text-slate-500">Provas integradas</div></Card><Card><div className="text-3xl font-black" style={{ color: theme.gold }}>Preliminar</div><div className="text-sm text-slate-500">Status do gabarito</div></Card><Card><div className="text-3xl font-black" style={{ color: theme.blue2 }}>6</div><div className="text-sm text-slate-500">Exames importados</div></Card></div><Card><div className="flex items-start justify-between gap-4"><div><h2 className="font-bold">OAB · 46º Exame de Ordem Unificado · Tipo 1 – Branca</h2><p className="mt-2 text-sm leading-6 text-slate-600">Prova cadastrada no banco demonstrativo com 80 questões e gabarito preliminar da FGV sincronizado. A etapa seguinte é substituir os textos provisórios pelos enunciados extraídos do PDF oficial.</p><div className="mt-4 flex gap-2"><Tag>OAB</Tag><Tag tone="gray">2026</Tag><Tag tone="green">80 respostas vinculadas</Tag><Tag tone="gold">Gabarito preliminar</Tag></div></div><button onClick={() => alert('Importação demonstrativa concluída: 80 questões + gabarito preliminar sincronizados.')} className="rounded px-4 py-2 text-sm font-bold text-white" style={{ background: theme.blue }}>Ver log da importação</button></div><div className="mt-5 rounded border bg-slate-50 p-4" style={{ borderColor: theme.border }}><div className="mb-3 flex flex-wrap gap-2"><Tag tone="blue">42º OAB importado</Tag><Tag tone="blue">43º OAB importado</Tag><Tag tone="blue">45º OAB importado</Tag><Tag tone="blue">46º OAB importado</Tag><Tag tone="purple">ENADE 2022 importado</Tag><Tag tone="purple">ENADE 2025 importado</Tag><Tag tone="green">400 questões sincronizadas</Tag></div><p className="text-sm text-slate-600">Os exames OAB e as provas ENADE Direito 2022 e 2025 agora estão disponíveis no banco demonstrativo da plataforma.</p></div><div className="mt-5 overflow-hidden rounded border" style={{ borderColor: theme.border }}><table className="w-full text-sm"><thead><tr className="bg-slate-50 text-left text-xs uppercase text-slate-400"><th className="p-3">Questão</th><th>Área</th><th>Gabarito</th><th>Status</th></tr></thead><tbody>{questoesOAB46Tipo1.slice(0, 12).map(q => <tr key={q.ref} className="border-t" style={{ borderColor: theme.border }}><td className="p-3 font-bold">{q.ref}</td><td>{q.area}</td><td><Tag tone="blue">{q.gabarito}</Tag></td><td><Tag tone="green">Sincronizada</Tag></td></tr>)}</tbody></table></div></Card></div>;
  if (panel === "adm-alunos") return <div><h1 className="mb-5 border-b pb-4 text-xl font-extrabold" style={{ borderColor: theme.border }}>Estudantes</h1><Card><div className="mb-4 flex justify-between"><input className="rounded border px-3 py-2 text-sm" style={{ borderColor: theme.border }} placeholder="Buscar estudante" /><button className="rounded px-4 py-2 text-sm font-bold text-white" style={{ background: theme.blue }}>Cadastrar estudante</button></div><table className="w-full text-sm"><thead><tr className="text-left text-xs uppercase text-slate-400"><th className="py-2">Nome</th><th>E-mail</th><th>Trilha</th><th>XP</th><th>Status</th></tr></thead><tbody>{["Ana Beatriz Lima", "Rafael Martins", "Camila Prado"].map((n,i) => <tr key={n} className="border-t" style={{ borderColor: theme.border }}><td className="py-3 font-bold">{n}</td><td>aluno{i+1}@lexia.br</td><td>Direito Civil</td><td>{1240 - i*210}</td><td><Tag tone={i === 2 ? "gold" : "green"}>{i === 2 ? "Pendente" : "Ativo"}</Tag></td></tr>)}</tbody></table></Card></div>;
  return <div><h1 className="mb-5 border-b pb-4 text-xl font-extrabold" style={{ borderColor: theme.border }}>{adminNav.find(n => n.id === panel)?.label}</h1><Card><p className="text-sm leading-7 text-slate-600">Área administrativa preservada em formato navegável, com estrutura para gestão de provas, questões, conteúdo, peças geradas e relatórios.</p></Card></div>;
}

function MainContent({ role, panel, setPanel }) {
  return <main className="flex-1 overflow-y-auto p-8" style={{ background: theme.bg }}>
    {role === "admin" ? <AdminPanel panel={panel} /> : panel === "dash" ? <DashboardAluno setPanel={setPanel} /> : panel === "trilhas" ? <Trilhas /> : panel === "flashcards" ? <Flashcards /> : panel === "questoes" ? <Questoes /> : panel === "simulado" ? <Simulado /> : panel === "pecas" ? <Pecas /> : panel === "juris" ? <Juris /> : panel === "resumos" ? <Resumos /> : panel === "perfil" ? <Perfil /> : panel === "certificados" ? <Certificados /> : <DashboardAluno setPanel={setPanel} />}
  </main>;
}

export default function LexiaPrototype() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("aluno");
  const [panel, setPanel] = useState("dash");
  const navTitle = useMemo(() => [...alunoNav, ...adminNav].find(x => x.id === panel)?.label || "Dashboard", [panel]);
  if (!user) return <Login onLogin={(u, p, r) => { setUser(u); setPanel(p); setRole(r); }} />;
  return <div className="flex h-screen flex-col overflow-hidden" style={{ color: theme.text }}>
    <Topbar user={user} panel={panel} title={navTitle} />
    <div className="flex min-h-0 flex-1 overflow-hidden"><Sidebar role={role} panel={panel} setPanel={setPanel} logout={() => setUser(null)} /><MainContent role={role} panel={panel} setPanel={setPanel} /></div>
  </div>;
}
