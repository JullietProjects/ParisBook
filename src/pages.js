/**
 * Pages of the illustration book, in reading order.
 *
 * To add a page:
 *   1. Put artwork in `public/assets/desktop/` at the correct size:
 *      cover → 1024×1024 px (square); story pages → 1024×723 px (landscape).
 *   2. Append an entry: `{ cover: true, image, alt, coverTitle?, coverTagline? }` for a cover-only screen, or
 *      `{ image, alt, text, chapterTitle? }` for a story page. Use `**bold**` and `*italic*` in `text`.
 *      Set `chapterTitle` on the first page of a scenario; later pages inherit it until you set a new title.
 *   3. See `docs/writing-guide.md` for length, voice, and page structure.
 */
export const pages = [
  {
    cover: true,
    image: "/assets/desktop/cover.png",
    alt: "Capa: ilustração em traço — três amigos em Paris com a Torre Eiffel ao fundo",
    coverTitle: "PARIS 2025",
    coverTagline: "Momentos que não cabem em uma página",
  },
  {
    chapterTitle: "Amsterdã → Paris",
    image: "/assets/desktop/00-amsterdam-to-paris.png",
    alt: "Ilustração em traço: mapa simplificado da viagem de Amsterdã a Paris, com rota por terra e ícones de bicicleta, trem e Torre Eiffel",
    text: `Primeira viagem à Europa: a primeira parada tinha sido **Amsterdã** — canais, bicicletas, o choque de estar do outro lado do oceano.

Depois vieram horas de estrada e de trem até tocarmos solo francês e nos reencontrarmos em **Paris**. Finalmente os três ali, prontos para o que vinha.`,
  },
  {
    chapterTitle: "Le Hibou",
    image: "/assets/desktop/01-le-hibou-1.png",
    alt: "Ilustração: três amigos em frente ao Restaurante Le Hibou, com mesas ao ar livre e letreiro no toldo",
    text: `Ainda com o corpo sentindo a viagem e o fuso confuso, a fome bateu com urgência. Não procuramos por muito tempo: o destino parecia ter colocado o **Le Hibou** no nosso caminho.

Ele não seria só mais uma parada — ganharia o título de nossa "estreia" gastronômica em solo francês.`,
  },
  {
    image: "/assets/desktop/01-le-hibou-2.png",
    alt: "Ilustração: os três amigos à mesa saboreando crepes no Restaurante Le Hibou",
    text: `Havia algo de especial em sentar naquela mesa no primeiro dia: o burburinho local, o aroma de massa tostada e queijo derretido.

Quando os crepes chegaram, fumegantes e dourados, foram um abraço de boas-vindas. Olhamos um para o outro e sorrimos: a aventura na França tinha, oficialmente, começado ali.`,
  },
  {
    chapterTitle: "Le Procope",
    image: "/assets/desktop/02-le-procope.png",
    alt: "Ilustração em traço: a narradora fotografa Procopio em frente ao Le Procope, com o letreiro do restaurante na fachada",
    text: `Saímos do *Le Hibou* pelas ruas de Paris — e, para Procopio, cada fachada virava aula. Foi assim que chegamos ao lendário **Le Procope**.

— Café mais antigo de Paris — explicou, sem respirar. — Voltaire, Franklin… dizem que Napoleão deixou o chapéu como garantia. Eu tirei o celular: Procopio no *Le Procope*. Ele riu, posou, e eu cliquei.`,
  },
  {
    chapterTitle: "Fontaine Saint-Sulpice",
    image: "/assets/desktop/03-fontaine-saint-sulpice.png",
    alt: "Ilustração em traço: Procopio, Hugo e a narradora em frente à Fontaine Saint-Sulpice, com a praça e edifícios ao fundo",
    text: `Seguimos sem mapa até a **Fontaine Saint-Sulpice**. A praça abriu um silêncio: água caindo, estátuas de pedra. — São os Quatro Oradores — explicou Procopio.

Hugo parou ao meu lado, tranquilo. — Parece que a cidade sabe quando a gente precisa diminuir. O hotel esperava — mas, pela primeira vez, sem urgência.`,
  },
  {
    chapterTitle: "Eglise de Saint Germain des Pres",
    image: "/assets/desktop/04-eglise-saint-germain-des-pres.png",
    alt: "Ilustração em traço: Procopio, Hugo e a narradora entrando na Eglise de Saint Germain des Pres, com a torre, o portal e o interior abobadado ao fundo",
    text: `No dia seguinte, acordamos em Paris com a sensação de que o primeiro dia tinha sido só um prólogo.

A torre da **Eglise de Saint Germain des Pres** apareceu alta e sóbria. Entramos; eu fotografei arcos e colunas. Procopio já explicava: uma das igrejas mais antigas de Paris. O primeiro capítulo do novo dia.`,
  },
];
