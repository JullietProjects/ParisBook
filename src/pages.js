/**
 * Pages of the illustration book, in reading order.
 *
 * To add a page:
 *   1. Put artwork in `public/assets/desktop/`.
 *   2. Append an entry: `{ cover: true, image, alt }` for a cover-only screen, or
 *      `{ image, alt, text, chapterTitle? }` for a story page. Use `**bold**` and `*italic*` in `text`.
 *      Set `chapterTitle` on the first page of a scenario; later pages inherit it until you set a new title.
 */
export const pages = [
  {
    cover: true,
    image: "/assets/desktop/cover.png",
    alt: "Capa",
  },
  {
    chapterTitle: "Le Hibou",
    image: "/assets/desktop/01-le-hibou-1.png",
    alt: "Ilustração: três amigos em frente ao Restaurante Le Hibou, com mesas ao ar livre e letreiro no toldo",
    text: `Ainda com o corpo sentindo o peso das horas de trem e o fuso horário confuso, a fome bateu com uma urgência que não podia ser ignorada. Não procuramos por muito tempo; o destino parecia ter colocado o Restaurante Le Hibou estrategicamente em nosso caminho.

Não procuramos por muito tempo; o destino parecia ter colocado o Restaurante Le Hibou estrategicamente em nosso caminho. Ele não seria apenas mais um ponto de parada aleatório no nosso roteiro; ele ganharia para sempre o título simbólico de ser o cenário da nossa "estreia" gastronômica em solo francês.`,

  },
  {
    image: "/assets/desktop/01-le-hibou-2.png",
    alt: "Ilustração: os três amigos à mesa saboreando crepes no Restaurante Le Hibou",
    text: `Havia algo de especial em sentar naquela mesa logo no primeiro dia. O ambiente carregava aquele charme autêntico, com o burburinho de conversas locais e o aroma inconfundível de massa tostada e queijo derretido pairando no ar.

Quando os crepes chegaram, fumegantes e dourados, funcionaram como um verdadeiro abraço de boas- vindas. Aquele momento foi decisivo: a cada garfada, a ansiedade da viagem se dissolvia e a ficha finalmente caía.

Olhamos um para o outro, com os estômagos finalmente forrados e os ânimos renovados. Sorrimos com a realização concreta: a nossa aventura na França tinha, oficialmente, começado ali.`,
  },
  {
    chapterTitle: "Le Procope",
    image: "/assets/desktop/02-le-procope.png",
    alt: "Ilustração em traço: a narradora fotografa Procopio em frente ao Le Procope, com o letreiro do restaurante na fachada",
    text: `A energia renovada pelos crepes precisava ser gasta, e não havia academia melhor do que as ruas de paralelepípedos de Paris. Saímos do *Le Hibou* e nos deixamos levar pelo fluxo da cidade, com o objetivo prático da digestão se transformando rapidamente em uma nova exploração.

Para Procopio, no entanto, caminhar por aquelas ruas nunca era apenas um exercício físico. Era uma peregrinação pelo tempo. Enquanto andávamos, ele apontava detalhes nas fachadas que passariam despercebidos pelo meu olhar vigilante, mas que para ele eram cicatrizes de revoluções passadas. Sua voz ganhava aquele tom professoral e apaixonado, transformando o concreto frio em narrativas vibrantes.

Foi então que chegamos à Rue de l'Ancienne Comédie. O destino seguinte não era uma coincidência, mas uma ironia deliciosa que o universo parecia ter preparado especificamente para nós. Diante de nós erguia-se o lendário **Le Procope**.

— Você sabe o que é isso? — ele perguntou, parando abruptamente, os olhos brilhando com a intensidade de quem acaba de encontrar um tesouro. — Este é o café mais antigo de Paris em funcionamento contínuo. Voltaire bebia dezenas de xícaras de café aqui por dia. Benjamin Franklin trabalhou na Constituição Americana nessas mesas. Dizem que Napoleão deixou o chapéu aqui como garantia de pagamento quando ainda era um jovem oficial sem dinheiro.

Eu sorria, não apenas pela aula de história que brotava espontaneamente, mas pela sincronicidade do momento. Minha mente, sempre buscando padrões e conexões, achou a rima visual irresistível.

— A história é fascinante — interrompi, puxando o celular do bolso —, mas a verdadeira atração histórica agora é outra. Procopio, visitando o *Le Procope*. Eu não posso deixar isso passar.

Ele riu, uma risada leve que quebrou a solenidade de seus fatos históricos, e aceitou a brincadeira. Caminhou até a entrada, posicionando-se sob a fachada clássica e imponente.

Enquadrei a cena com o cuidado do meu perfeccionismo habitual. Ajustei o ângulo para que o letreiro dourado com o nome do restaurante ficasse perfeitamente centralizado acima da cabeça dele. Ali estava ele: o meu historiador particular, sob o título que parecia ter sido escrito para ele séculos atrás.

— Sorria para a história — pedi.

Cliquei. A foto capturou não apenas o homem e o monumento, mas a fusão perfeita entre o passado que ele tanto amava e o presente que estávamos construindo juntos. Procopio no *Le Procope*: uma nota de rodapé divertida no nosso próprio livro de viagens.`,
  },
  {
    chapterTitle: "Fontaine Saint-Sulpice",
    image: "/assets/desktop/03-fontaine-saint-sulpice.png",
    alt: "Ilustração em traço: Procopio, Hugo e a narradora em frente à Fontaine Saint-Sulpice, com a praça e edifícios ao fundo",
    text: `A foto no Le Procope ainda estava fresca na memória enquanto seguimos caminhando pelas ruas de Paris. O caminho até o hotel não era exatamente direto, mas isso parecia fazer parte da experiência — cada esquina revelava algo novo.

Foi assim que chegamos à Fontaine Saint-Sulpice.

A praça trouxe um silêncio inesperado depois do movimento anterior. A fonte, imponente e serena, deixava a água correr de forma contínua, criando um ritmo calmo que parecia desacelerar tudo ao redor. Procopio se aproximou, naturalmente assumindo seu papel.

— Essa fonte homenageia figuras importantes da história religiosa da França — explicou, observando as estátuas com atenção.

Enquanto ele falava, eu me perdi nos detalhes: a textura da pedra, o som da água, a sensação de pausa. Hugo parou ao meu lado, tranquilo como sempre.

— Parece que a cidade sabe quando a gente precisa diminuir — comentou.

Ficamos ali por um momento, sem pressa. Depois de tantas descobertas, aquela pausa simples fazia sentido.

O hotel ainda nos esperava — mas, pela primeira vez, não havia urgência em chegar.`,
  },
];
