import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const indexPath = path.join(root, "index.html");
const htmlUnicoPath = path.join(root, "lexia-html-unico.html");
const maxCards = Number(process.env.MURAL_MAX_CARDS || 10);
const minRealCards = Number(process.env.MURAL_MIN_REAL_CARDS || 3);
const dryRun = process.env.DRY_RUN === "1";
const today = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
}).format(new Date());

const sources = [
  {
    topic: "OAB/FGV Exame de Ordem",
    tag: "OAB/FGV",
    tone: "urgent",
    source: "OAB/FGV",
    url: "https://examedeordem.oab.org.br/Noticias",
    keywords: ["oab", "fgv", "exame", "ordem", "edital", "inscrição", "calendário", "resultado", "gabarito"],
    fallbackTitle: "OAB/FGV: comunicados oficiais do Exame de Ordem",
    fallbackText: "Acompanhe a página oficial do Exame de Ordem para verificar editais, inscrições, calendários, gabaritos e resultados publicados pela OAB/FGV.",
  },
  {
    topic: "STF",
    tag: "STF",
    tone: "study",
    source: "STF",
    url: "https://noticias.stf.jus.br/",
    keywords: ["stf", "supremo", "constitucional", "plenário", "repercussão", "julgamento"],
    fallbackTitle: "STF: acompanhe pauta e julgamentos",
    fallbackText: "Use as notícias e pautas oficiais do Supremo para revisar controle de constitucionalidade, direitos fundamentais e processo constitucional.",
  },
  {
    topic: "STJ",
    tag: "STJ",
    tone: "study",
    source: "STJ",
    url: "https://stj-noticias.stj.jus.br/",
    keywords: ["stj", "superior", "recurso", "repetitivo", "jurisprudência", "turma", "corte"],
    fallbackTitle: "STJ: notícias e julgados recentes",
    fallbackText: "Acompanhe notícias oficiais do STJ para revisar teses, recursos repetitivos e temas relevantes de direito material e processual.",
  },
  {
    topic: "CNJ",
    tag: "CNJ",
    tone: "study",
    source: "CNJ",
    url: "https://www.cnj.jus.br/agencia-cnj/noticias/",
    keywords: ["cnj", "justiça", "judiciário", "resolução", "conselho", "tribunais", "ia"],
    fallbackTitle: "CNJ: gestão e inovação no Judiciário",
    fallbackText: "Acompanhe comunicados do CNJ sobre gestão judicial, tecnologia, metas nacionais, direitos fundamentais e funcionamento do sistema de justiça.",
  },
  {
    topic: "Senado",
    tag: "Senado",
    tone: "study",
    source: "Senado Notícias",
    url: "https://www12.senado.leg.br/noticias",
    keywords: ["senado", "projeto", "lei", "ccj", "comissão", "constituição", "código"],
    fallbackTitle: "Senado: tramitação legislativa em destaque",
    fallbackText: "Acompanhe notícias legislativas do Senado para conectar projetos de lei, controle político e temas constitucionais ao estudo jurídico.",
  },
  {
    topic: "Câmara",
    tag: "Câmara",
    tone: "study",
    source: "Câmara dos Deputados",
    url: "https://www.camara.leg.br/noticias",
    keywords: ["câmara", "deputados", "projeto", "lei", "comissão", "plenário", "direito"],
    fallbackTitle: "Câmara: projetos de lei e debates públicos",
    fallbackText: "Acompanhe notícias da Câmara para revisar processo legislativo, direitos fundamentais e mudanças normativas em discussão.",
  },
  {
    topic: "Diário Oficial",
    tag: "Diário Oficial",
    tone: "study",
    source: "Diário Oficial da União",
    url: "https://www.in.gov.br/leiturajornal",
    keywords: ["diário", "oficial", "lei", "decreto", "portaria", "edital", "resolução"],
    fallbackTitle: "DOU: consulta diária a atos oficiais",
    fallbackText: "Consulte o Diário Oficial da União para acompanhar leis, decretos, portarias, editais e atos normativos publicados oficialmente.",
  },
  {
    topic: "Tribunais superiores",
    tag: "Tribunais superiores",
    tone: "study",
    source: "TSE",
    url: "https://www.tse.jus.br/comunicacao/noticias",
    keywords: ["tse", "tribunal", "eleitoral", "eleições", "calendário", "urna", "registro"],
    fallbackTitle: "Tribunais superiores: notícias oficiais",
    fallbackText: "Acompanhe notícias dos tribunais superiores para relacionar atualidades institucionais a competências, recursos e organização da Justiça.",
  },
  {
    topic: "Jurisprudência",
    tag: "Jurisprudência",
    tone: "study",
    source: "Informativos STJ",
    url: "https://processo.stj.jus.br/jurisprudencia/externo/informativo/?acao=pesquisar",
    keywords: ["informativo", "jurisprudência", "tema", "repetitivo", "julgado", "tese"],
    fallbackTitle: "Informativos de jurisprudência: leitura dirigida",
    fallbackText: "Use os informativos oficiais como material de revisão, conectando teses recentes a flashcards, questões comentadas e simulados.",
  },
];

const stopWords = new Set([
  "menu",
  "buscar",
  "pesquisar",
  "acessibilidade",
  "facebook",
  "instagram",
  "youtube",
  "twitter",
  "linkedin",
  "rss",
  "login",
  "mapa do site",
  "ouvidoria",
]);

function decodeEntities(value) {
  return String(value || "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)));
}

function cleanText(value) {
  return decodeEntities(value)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function absolutize(href, base) {
  try {
    return new URL(decodeEntities(href), base).toString();
  } catch {
    return "";
  }
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "LexiaMuralBot/1.0 (+https://plataformalexia.com.br)",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
  });
  if (!response.ok) throw new Error(`HTTP ${response.status} em ${url}`);
  return await response.text();
}

function extractCandidates(html, baseUrl, source) {
  const candidates = [];
  const anchorRegex = /<a\b([^>]*?)href=["']([^"']+)["']([^>]*)>([\s\S]*?)<\/a>/gi;
  for (const match of html.matchAll(anchorRegex)) {
    const href = absolutize(match[2], baseUrl);
    const title = cleanText(match[4]);
    const lower = title.toLowerCase();
    if (!href || !title || title.length < 24 || title.length > 180) continue;
    if ([...stopWords].some((word) => lower === word || lower.includes(` ${word} `))) continue;
    if (/\.(pdf|jpg|jpeg|png|gif|svg|css|js)(\?|$)/i.test(href)) continue;
    if (/javascript:|mailto:|tel:/i.test(href)) continue;
    const score = scoreCandidate(title, href, source);
    if (score > 0) candidates.push({ title, url: href, score });
  }
  const unique = new Map();
  for (const item of candidates.sort((a, b) => b.score - a.score)) {
    const key = `${item.title.toLowerCase()}|${item.url}`;
    if (!unique.has(key)) unique.set(key, item);
  }
  return [...unique.values()];
}

function scoreCandidate(title, url, source) {
  const raw = `${title} ${url}`.toLowerCase();
  let score = 0;
  for (const keyword of source.keywords) {
    if (raw.includes(keyword.toLowerCase())) score += 3;
  }
  if (raw.includes(source.tag.toLowerCase())) score += 4;
  if (/noticia|notícias|materia|comunicacao|comunicacao|julgamento|informativo|calendario|calendário/.test(raw)) score += 2;
  if (/\/noticias?\//.test(url)) score += 2;
  if (/acesso|transparencia|portal|institucional|servicos|serviços|contato/.test(raw)) score -= 3;
  return score;
}

function extractDescription(html) {
  const meta = html.match(/<meta[^>]+(?:name|property)=["'](?:description|og:description)["'][^>]+content=["']([^"']+)["']/i)
    || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+(?:name|property)=["'](?:description|og:description)["']/i);
  if (meta?.[1]) return cleanText(meta[1]).slice(0, 260);
  const paragraph = html.match(/<p\b[^>]*>([\s\S]*?)<\/p>/i);
  if (paragraph?.[1]) return cleanText(paragraph[1]).slice(0, 260);
  return "";
}

function textForCard(source, candidate, description) {
  const base = description && description.length > 55 ? description : source.fallbackText;
  return base.replace(/\s+/g, " ").replace(/\s([,.])/g, "$1").slice(0, 280);
}

async function buildCard(source) {
  try {
    const listHtml = await fetchText(source.url);
    const candidates = extractCandidates(listHtml, source.url, source);
    const candidate = candidates[0] || { title: source.fallbackTitle, url: source.url };
    let description = "";
    if (candidate.url && candidate.url !== source.url) {
      try {
        description = extractDescription(await fetchText(candidate.url));
      } catch {
        description = "";
      }
    }
    return {
      tone: source.tone,
      tag: source.tag,
      title: candidate.title || source.fallbackTitle,
      date: today,
      text: textForCard(source, candidate, description),
      url: candidate.url || source.url,
      source: source.source,
      _fallback: false,
    };
  } catch (error) {
    console.warn(`[mural] fallback para ${source.source}: ${error.message}`);
    return {
      tone: source.tone,
      tag: source.tag,
      title: source.fallbackTitle,
      date: today,
      text: source.fallbackText,
      url: source.url,
      source: source.source,
      _fallback: true,
    };
  }
}

function loadExistingCards(html) {
  const match = html.match(/const muralCards=(\[[\s\S]*?\]);/);
  if (!match) return [];
  try {
    return vm.runInNewContext(match[1], {}, { timeout: 1000 });
  } catch {
    return [];
  }
}

function fingerprint(cards) {
  return cards.map((card) => `${card.tag}|${card.title}|${card.url}`).join("\n");
}

function replaceMural(html, cards) {
  const nextCards = `const muralCards=${JSON.stringify(cards, null, 2)};`;
  let next = html.replace(/const muralCards=\[[\s\S]*?\];/, nextCards);
  next = next.replace(/Mural <small>Atualizado em \d{2}\/\d{2}\/\d{4}<\/small>/, `Mural <small>Atualizado em ${today}</small>`);
  return next;
}

const html = await readFile(indexPath, "utf8");
const existingCards = loadExistingCards(html);
const generatedWithMeta = (await Promise.all(sources.map(buildCard))).slice(0, maxCards);
const realCards = generatedWithMeta.filter((card) => !card._fallback);

if (existingCards.length && realCards.length < minRealCards) {
  console.log(`[mural] Coleta insuficiente (${realCards.length}/${generatedWithMeta.length}). Mantendo mural atual para evitar publicacao generica.`);
  process.exit(0);
}

const generatedCards = generatedWithMeta.map(({ _fallback, ...card }) => card);

if (fingerprint(existingCards) === fingerprint(generatedCards)) {
  console.log("[mural] Sem noticias novas em relacao ao mural atual.");
  process.exit(0);
}

const updated = replaceMural(html, generatedCards);
if (updated === html) {
  throw new Error("Nao foi possivel localizar const muralCards no index.html.");
}

console.log(`[mural] ${generatedCards.length} cards preparados para ${today}.`);
if (!dryRun) {
  await writeFile(indexPath, updated, "utf8");
  await writeFile(htmlUnicoPath, updated, "utf8");
  console.log("[mural] index.html e lexia-html-unico.html atualizados.");
} else {
  console.log("[mural] DRY_RUN ativo: nenhum arquivo foi alterado.");
}
