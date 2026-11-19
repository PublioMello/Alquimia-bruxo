import ganley from "../assets/Ganley.png";

// Lista de posts. Para criar um novo, adicione um objeto aqui.
//
// - slug: vira o endereço do post (/posts/<slug>)
// - title: título (aparece no card e no post)
// - subtitle: frase de abertura, embaixo da foto
// - date: AAAA-MM-DD
// - image: importe a foto lá em cima, como o "ganley"
// - imagePosition (opcional): qual parte da foto aparece no card.
//   Formato "horizontal vertical", em %. "50% 50%" é o centro (padrão).
//   Exemplos: "50% 0%" = topo, "50% 30%" = um pouco acima do meio,
//   "50% 100%" = parte de baixo, "30% 50%" = mais para a esquerda.
// - content: o texto. Separe os parágrafos com uma linha em branco.
//   Uma linha começando com "## " vira um título de seção.
const allPosts = [
  {
    slug: "o-efeito-ganley",
    title: "O efeito Ganley",
    subtitle: "Vale a pena continuar hormonizado?",
    date: "2026-11-19",
    image: ganley,
    imagePosition: "50% 50%",
    content: `
Muitos estão pulando do barco.

Nos últimos meses, vários atletas anunciaram a aposentadoria dos palcos.

E essa decisão está totalmente atrelada ao uso de esteroides.

Alguns, infelizmente, morreram. Outros estão com problemas de saúde quase irreversíveis.

Esse cenário impactou não só quem compete, mas também o marombeiro comum.

O iniciante, que estava cogitando fazer o uso apenas de testosterona, já tirou completamente a ideia da cabeça.

O usuário experiente, agora vive num dilema:

Voltar a ser natural e saudável, mas perder boa parte dos ganhos e ter extrema dificuldade em aceitar a nova identidade, ou continuar o uso e viver com medo das consequências?

E pra piorar, o mercado fitness é composto por 2 tipos de referências:

O coach underground, que não liga para a saúde do cliente e só olha pro shape.

E o médico que demoniza 1ml de testosterona.

São dois extremos e por isso há essa confusão.

Mas o meio termo existe.

E é o caminho mais inteligente.

Ele é composto por esses pilares:

## Respeite o seu tamanho

Isso significa que a possibilidade de ter colaterais está intimamente ligada ao tanto de músculo que você tem.

Quanto mais massa muscular, maiores são as chances do esteróide se ligar aos receptores musculares, e não aos receptores do coração, próstata, pele, etc.

Então não adianta copiar um protocolo de um cara de 100kg, se você tem 80kg.

É o mesmo que colocar 100ml de água em um copo que cabe somente 80ml.

Os 20 ml restantes vão resultar apenas em colateral.

## Faça exames

Tem cara que gasta R$2.000 em um protocolo, mas não gasta R$500 em exames.

É importante monitorar o hematócrito, perfil lipídico, função renal e função hepática a cada 3~5 meses. Ecocardiograma com strain e PSA a cada 8~12 meses.

São eles que vão tirar a preocupação, ou vão acender um alerta antes da merda acontecer.

Um tempo atrás, quem fazia exames virava chacota.

## Tenha uma estrutura

Tem que ter tempo definido para acelerar e pisar no freio, mesmo se os exames estiverem ok.

Além de manter os exames bons, reduzir as doses também é benéfico para sensibilizar novamente os receptores androgênicos, e continuar evoluindo nas próximas aceleradas.

## Então, respondendo a pergunta inicial

Vale a pena continuar hormonizado?

Com certeza.

Mas dentro desses termos.
`,
  },
];

// Posts do mais novo para o mais antigo.
export const posts = [...allPosts].sort((a, b) => b.date.localeCompare(a.date));

export const POSTS_PER_PAGE = 6;

export function getPost(slug) {
  return posts.find((post) => post.slug === slug);
}

// Divide o texto em blocos: { type: "heading" | "paragraph", text }
export function getBlocks(post) {
  return post.content
    .trim()
    .split(/\n\s*\n/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk) =>
      chunk.startsWith("## ")
        ? { type: "heading", text: chunk.slice(3) }
        : { type: "paragraph", text: chunk },
    );
}

// Data no formato brasileiro: 19 de novembro de 2026
export function formatDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
