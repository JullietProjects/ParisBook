/**
 * Pages of the illustration book, in reading order.
 *
 * To add a page:
 *   1. Put artwork in `public/assets/` at the correct size:
 *      cover → 1024×1024 px (square); story pages → 1024×723 px (landscape).
 *   2. Append an entry: `{ cover: true, image, alt, coverTitle?, coverTagline? }` for a cover-only screen, or
 *      `{ image, alt, text, chapterTitle? }` for a story page. Use `**bold**` and `*italic*` in `text`.
 *      Set `chapterTitle` on the first page of a scenario; later pages inherit it until you set a new title.
 */
export const pages = [
  {
    cover: true,
    image: "/assets/cover.png",
    alt: "Capa: ilustração em traço — três amigos em Paris com a Torre Eiffel ao fundo",
    coverTitle: "PARIS 2025",
    coverTagline: "Momentos que não cabem em uma página",
  },
  {
    chapterTitle: "Para o Procopio",
    image: "/assets/11-para-procopio.png",
    alt: "Ilustração em traço: Procopio beija a narradora na têmpora, sentados juntos, o braço dele no ombro dela",
    text: `Em Paris, entre histórias, fachadas e caminhadas, você seguia contando tudo e eu ia alguns passos atrás, tentando guardar cada momento em uma foto. Este livro foi o jeito que encontrei de reunir um pouco do que vivemos — inclusive os momentos que não cabem em uma página.

**Feliz Aniversário**, Procopinho! Eu te amo muito. Você é um pai incrível, e eu sou muito feliz por ter vivido tudo isso com você. — Com carinho, Julia :)`,
  },
  {
    chapterTitle: "Amsterdã → Paris",
    image: "/assets/00-amsterdam-to-paris.png",
    alt: "Ilustração em traço: mapa simplificado da viagem de Amsterdã a Paris, com rota por terra e ícones de bicicleta, trem e Torre Eiffel",
    text: `Primeira viagem à Europa: a primeira parada tinha sido **Amsterdã** — canais, bicicletas, o choque de estar do outro lado do oceano.

Depois vieram horas de estrada e de trem até tocarmos solo francês e nos reencontrarmos em **Paris**.`,
  },
  {
    chapterTitle: "Le Hibou",
    image: "/assets/01-le-hibou-1.png",
    alt: "Ilustração: três amigos em frente ao Restaurante Le Hibou, com mesas ao ar livre e letreiro no toldo",
    text: `Finalmente os três ali, prontos para o que vinha. Ainda com o corpo sentindo a viagem e o fuso confuso, a fome bateu com urgência. Não procuramos por muito tempo: o destino parecia ter colocado o **Le Hibou** no nosso caminho.

Ele não seria só mais uma parada — ganharia o título de nossa estreia gastronômica em solo francês.`,
  },
  {
    image: "/assets/01-le-hibou-2.png",
    alt: "Ilustração: os três amigos à mesa saboreando crepes no Restaurante Le Hibou",
    text: `Havia algo de especial em sentar naquela mesa no primeiro dia: o burburinho local, o aroma de massa tostada e queijo derretido.

Quando os crepes chegaram, fumegantes e dourados, foram um abraço de boas-vindas. Olhamos um para o outro e sorrimos: a aventura na França tinha, oficialmente, começado ali.`,
  },
  {
    chapterTitle: "Le Procope",
    image: "/assets/02-le-procope.png",
    alt: "Ilustração em traço: a narradora fotografa Procopio em frente ao Le Procope, com o letreiro do restaurante na fachada",
    text: `Saímos do *Le Hibou* pelas ruas de Paris — e, para Procopio, cada fachada virava aula. Foi assim que chegamos ao lendário **Le Procope**.

— "Café mais antigo de Paris" — explicou, sem respirar. — "Voltaire, Franklin… dizem que Napoleão deixou o chapéu como garantia." Eu tirei o celular: Procopio no *Le Procope*. Ele riu, posou, e eu cliquei.`,
  },
  {
    chapterTitle: "Fontaine Saint-Sulpice",
    image: "/assets/03-fontaine-saint-sulpice.png",
    alt: "Ilustração em traço: Procopio, Hugo e a narradora em frente à Fontaine Saint-Sulpice, com a praça e edifícios ao fundo",
    text: `Seguimos sem mapa até a **Fontaine Saint-Sulpice**. A praça abriu um silêncio: água caindo, estátuas de pedra. — "São os Quatro Oradores" — explicou Procopio.

Hugo parou ao meu lado, tranquilo. — "Parece que a cidade sabe quando a gente precisa diminuir o passo." O hotel esperava — mas, pela primeira vez, sem urgência. E assim encerramos o primeiro dia.`,
  },
  {
    chapterTitle: "Eglise de Saint Germain des Pres",
    image: "/assets/04-eglise-saint-germain-des-pres.png",
    alt: "Ilustração em traço: Procopio, Hugo e a narradora entrando na Eglise de Saint Germain des Pres, com a torre, o portal e o interior abobadado ao fundo",
    text: `No dia seguinte, acordamos em Paris com a sensação de que o primeiro dia tinha sido só um prólogo.

A torre da **Eglise de Saint Germain des Pres** apareceu alta e sóbria. Entramos; eu fotografei arcos e colunas. Procopio já explicava tudo: uma das igrejas mais antigas de Paris. O primeiro capítulo do novo dia.`,
  },
  {
    chapterTitle: "Musée d'Orsay",
    image: "/assets/05-musee-dorsay.png",
    alt: "Ilustração em traço: Procopio, Hugo e a narradora de costas, admirando a fachada simplificada do Musée d'Orsay com o relógio",
    text: `Depois da *Eglise de Saint Germain des Pres*, um dos pontos altos do dia era o **Musée d'Orsay**.

Entramos admirados — tanta coisa para ver ao mesmo tempo que o olhar não sabia onde pousar primeiro.`,
  },
  {
    image: "/assets/05-musee-dorsay-mapa.png",
    alt: "Ilustração em traço: visão por cima dos ombros dos três amigos estudando o mapa do tesouro do Musée d'Orsay",
    text: `Para não nos perdermos naquela antiga estação cheia de salas, peguei o "mapa do tesouro" do museu — a rota sugerida pelas obras.

Os três parados juntos, cabeças inclinadas sobre o papel. Eu marcava o próximo passo; Procopio já inventava desvios históricos; Hugo só acompanhava o plano, calmo como sempre.`,
  },
  {
    image: "/assets/05-musee-dorsay-cordier.png",
    alt: "Ilustração em traço: Procopio posando ao lado dos bustos de Charles Cordier no Musée d'Orsay",
    text: `Foi assim que chegamos a um dos cantos favoritos do Procopio: os três bustos de Charles Cordier — *L'Arabe d'El Aghouat en burnous*, *La Capresse des Colonies* e *Homme du Soudan en costume algérien*.

Pedi que ele posasse ao lado deles. Cliquei. Bronze, onyx e um sorriso de historiador, no mesmo enquadramento.`,
  },
  {
    chapterTitle: "Jardin du Luxembourg",
    image: "/assets/06-jardin-du-luxembourg.png",
    alt: "Ilustração em traço: Hugo, Procopio e a narradora sentados num banco do Jardin du Luxembourg, com o lago e o palácio ao fundo",
    text: `Saímos do *Musée d'Orsay* no final da tarde — um descanso merecido no **Jardin du Luxembourg**.

Pedimos a uma visitante que tirasse nossa foto no banco da praça, antes de voltarmos para o hotel. Palácio ao fundo, os três no meio: a tarde guardada num enquadramento.`,
  },
  {
    chapterTitle: "Paris Seine",
    image: "/assets/07-paris-seine.png",
    alt: "Ilustração em traço: Procopio, Hugo e a narradora num bateau-mouche no Sena, com a Torre Eiffel e a ponte ao fundo",
    text: `No dia seguinte, um passeio de barco no **Seine** — Torre Eiffel ao fundo, a cidade passando devagar.

— "São os Bateaux Mouches" — apontou Procopio. — "Desde o século XIX levam a gente a ver Paris pela água." Hugo cruzou os braços; o rio fazia o resto.`,
  },
  {
    chapterTitle: "Louvre",
    image: "/assets/08-louvre.png",
    alt: "Ilustração em traço: selfie no Louvre — Procopio à esquerda, Hugo no meio, a narradora à direita com o celular",
    text: `Depois do passeio de barco, passamos em frente ao **Louvre** — a pirâmide de vidro brilhando no meio do pátio, gente de todo lado, a gente sem pressa nenhuma.

Tirei umas fotos muito especiais: Procopio à esquerda, Hugo no meio, eu enquadrando a selfie. Clique. Três sorrisos e Paris inteira cabendo na tela do celular.`,
  },
  {
    chapterTitle: "Bistro parisiense",
    image: "/assets/08-bistro-tartare.png",
    alt: "Ilustração em traço: Hugo, Procopio e a narradora à mesa redonda num bistro, com tartare, sobremesas e pão",
    text: `Depois disso, saímos do pátio do *Louvre* com o estômago reclamando. Entramos no primeiro **bistro parisiense** que apareceu — e resolvemos forrar a barriga de uma vez: pão quente, pratos chegando, sobremesas disputando espaço na mesa redonda.

Até me aventurei no steak tartare. Levantei o garfo, olhei de novo… era carne crua demais até para quem tinha jurado ser corajosa. Procopio atacava a crème brûlée; Hugo atacava o pudim. Eu fui direto para a sobremesa — e, bem cheios, voltamos para o hotel.`,
  },
  {
    chapterTitle: "Notre-Dame",
    image: "/assets/09-notre-dame.png",
    alt: "Ilustração em traço: Procopio posando em frente à fachada da Notre-Dame, com a praça e os portais góticos ao fundo",
    text: `No dia seguinte, visitamos a **Notre-Dame**. A fachada se abriu diante de nós — ainda mais impressionante que a da *Eglise de Saint Germain des Pres*.

— "Começou em 1163" — soltou Procopio, sem respirar. — "Séculos de pedra, a rosa do portal… Napoleão coroado ali… E no século XIX ela estava quase em ruínas, até Victor Hugo publicar *Notre-Dame de Paris* e o país voltar a querer cuidá-la."

Dito isso, pediu que eu tirasse a foto para os amigos. Posou. Cliquei.`,
  },
  {
    chapterTitle: "Montmartre",
    image: "/assets/10-montmartre-funicular.png",
    alt: "Ilustração em traço: Procopio, a narradora e Hugo na estação do funicular de Montmartre, olhando os trilhos íngremes",
    text: `Ao final da tarde, o plano era **Montmartre** — chegar a tempo do pôr do sol. Em vez de subir a pé, pegamos o bondinho.

Os trilhos íngremes subiam entre árvores e escadas de pedra. Procopio já explicava a história do funicular; nós escutávamos atentamente.`,
  },
  {
    image: "/assets/10-montmartre-sunset.png",
    alt: "Ilustração em traço: escadas lotadas de Montmartre com a multidão de costas, olhando a cidade de Paris ao longe",
    text: `Lá em cima, parece que todo mundo teve a mesma ideia: as escadas estavam lotadas.

Mesmo assim deu para curtir. Sentamos no meio da multidão e observamos a cidade lá de cima — telhados cinza até o horizonte, o céu esfriando. Hugo murmurou: — "Valeu a subida."`,
  },
  {
    image: "/assets/10-montmartre-descent.png",
    alt: "Ilustração em traço: Procopio sozinho descendo a rua de paralelepípedos de Montmartre, de costas, com a mochila e uma garrafinha d'água",
    text: `Na descida de *Montmartre*, Procopio não parava: — "Essas ruas íngremes eram atalhos de artistas e boêmios" — explicou, sem olhar para trás.

Enquanto isso, eu atrasava o passo, buscando o ângulo certo. Clique! Uma das minhas fotos favoritas: Procopio à frente, a rua inclinada e Paris descendo com ele.

E era assim que eu queria lembrar dessa viagem: em movimento, entre histórias e cliques, tentando guardar um pouco de tudo.`,
  },
];
