import type { Category } from './types';
import {
  Coffee,
  IceCream,
  Waves,
  Blend,
  Sparkles,
  CakeSlice,
  Cake,
  UtensilsCrossed,
  HeartPulse,
  Martini,
} from 'lucide-react';

export const categories: Category[] = [
  {
    id: 'classicos-do-cafe',
    name: 'Clássicos do Café',
    icon: Coffee,
    recipes: [
      {
        id: 'cappuccino-tradicional',
        name: 'Cappuccino Tradicional',
        image: 'cappuccino-tradicional',
        prepTime: '5 min',
        servings: '1 xícara',
        ingredients: [
          '30 ml de café espresso forte',
          '120 ml de leite vaporizado',
          '2 colheres de sopa de espuma de leite',
          '1 colher de chá de cacau em pó (opcional)',
        ],
        preparation: [
          'Extraia o espresso em uma xícara.',
          'Aqueça e vaporize o leite até criar espuma.',
          'Despeje o leite sobre o café, finalizando com a espuma.',
          'Polvilhe cacau em pó por cima.',
        ],
      },
      {
        id: 'espresso-macchiato',
        name: 'Espresso Macchiato',
        image: 'espresso-macchiato',
        prepTime: '3 min',
        servings: '1 xícara pequena',
        ingredients: [
          '30 ml de café espresso',
          '1 colher de sopa de espuma de leite',
        ],
        preparation: [
          'Extraia o espresso em uma xícara pequena.',
          'Adicione uma colher de espuma de leite no centro do café.',
          'Sirva imediatamente.',
        ],
      },
    ],
  },
  {
    id: 'cafes-gelados-refrescantes',
    name: 'Cafés Gelados & Refrescantes',
    icon: IceCream,
    recipes: [
      {
        id: 'iced-latte',
        name: 'Iced Latte',
        image: 'iced-latte',
        prepTime: '5 min',
        servings: '1 copo grande',
        ingredients: [
          '50 ml de café espresso',
          '150 ml de leite frio',
          'Gelo a gosto',
          'Açúcar ou adoçante a gosto (opcional)',
        ],
        preparation: [
          'Encha um copo grande com gelo.',
          'Adicione o café espresso.',
          'Complete com o leite frio.',
          'Adoce se desejar e mexa bem.',
        ],
      },
      {
        id: 'cold-brew',
        name: 'Cold Brew',
        image: 'cold-brew',
        prepTime: '12 horas',
        servings: 'Aprox. 750 ml',
        ingredients: [
          '100g de café em grãos moído grosseiramente',
          '1 litro de água fria',
        ],
        preparation: [
          'Em um recipiente grande, misture o café moído com a água.',
          'Deixe em infusão na geladeira por 12 a 24 horas.',
          'Filtre a mistura usando um filtro de papel ou pano fino.',
          'Sirva com gelo, e adicione leite ou água se preferir mais suave.',
        ],
      },
    ],
  },
  {
    id: 'cafes-cremosos-espumados',
    name: 'Cafés Cremosos & Espumados',
    icon: Waves,
    recipes: [
      {
        id: 'flat-white',
        name: 'Flat White',
        image: 'flat-white',
        prepTime: '4 min',
        servings: '1 xícara',
        ingredients: [
          '60 ml de café espresso (duplo)',
          '120 ml de leite vaporizado com microespuma',
        ],
        preparation: [
          'Extraia o espresso duplo em uma xícara.',
          'Vaporize o leite para criar uma textura aveludada e cremosa (microespuma).',
          'Despeje o leite sobre o espresso, criando uma fina camada de espuma na superfície.',
        ],
      },
      {
        id: 'cafe-au-lait',
        name: 'Café au Lait',
        image: 'cafe-au-lait',
        prepTime: '5 min',
        servings: '1 xícara grande',
        ingredients: [
          '120 ml de café forte coado',
          '120 ml de leite aquecido',
        ],
        preparation: [
          'Prepare o café coado diretamente em uma xícara grande.',
          'Aqueça o leite sem deixar ferver.',
          'Despeje o café e o leite quente simultaneamente na xícara para misturar.',
        ],
      },
    ],
  },
  {
    id: 'cremes-pastas-de-cafe',
    name: 'Cremes & Pastas de Café',
    icon: Blend,
    recipes: [
      {
        id: 'creme-de-cafe',
        name: 'Creme de Café',
        image: 'creme-de-cafe',
        prepTime: '10 min',
        servings: '4 porções',
        ingredients: [
          '1 xícara de açúcar',
          '50g de café solúvel',
          '1 xícara de água fervente',
        ],
        preparation: [
          'Em uma batedeira, coloque o açúcar e o café solúvel.',
          'Adicione a água fervente e bata em velocidade alta por cerca de 10 minutos, até formar um creme fofo e claro.',
          'Guarde em um pote fechado no freezer. Sirva com leite quente ou frio.',
        ],
      },
      {
        id: 'pasta-de-amendoim-com-cafe',
        name: 'Pasta de Amendoim com Café',
        image: 'pasta-de-amendoim-com-cafe',
        prepTime: '8 min',
        servings: 'Aprox. 200g',
        ingredients: [
          '150g de pasta de amendoim integral',
          '1 colher de sopa de café solúvel em pó',
          '1 colher de sopa de mel ou agave',
        ],
        preparation: [
          'Em uma tigela, misture bem a pasta de amendoim, o café solúvel e o mel.',
          'Continue misturando até que a pasta fique homogênea.',
          'Sirva com pães, torradas ou frutas.',
        ],
      },
    ],
  },
  {
    id: 'cafes-gourmet-autorais',
    name: 'Cafés Gourmet & Autorais',
    icon: Sparkles,
    recipes: [
      {
        id: 'cafe-com-canela-e-cardamomo',
        name: 'Café com Canela e Cardamomo',
        image: 'cafe-com-canela-e-cardamomo',
        prepTime: '6 min',
        servings: '1 xícara',
        ingredients: [
          '1 xícara de café coado',
          '1 pitada de canela em pó',
          '1 pitada de cardamomo em pó',
          'Leite ou açúcar a gosto',
        ],
        preparation: [
          'Prepare o café coado.',
          'Adicione a canela e o cardamomo ao café quente e mexa bem.',
          'Adicione leite ou açúcar se desejar.',
        ],
      },
      {
        id: 'latte-de-lavanda',
        name: 'Latte de Lavanda',
        image: 'latte-de-lavanda',
        prepTime: '10 min',
        servings: '1 xícara',
        ingredients: [
          '30 ml de café espresso',
          '150 ml de leite',
          '1 colher de sopa de xarope de lavanda',
        ],
        preparation: [
          'Prepare o xarope de lavanda (fervendo flores de lavanda com açúcar e água) ou use um pronto.',
          'Extraia o espresso em uma xícara.',
          'Adicione o xarope de lavanda ao espresso.',
          'Vaporize o leite e despeje sobre a mistura.',
        ],
      },
    ],
  },
  {
    id: 'sobremesas-com-cafe',
    name: 'Sobremesas com Café',
    icon: CakeSlice,
    recipes: [
      {
        id: 'tiramisu-classico',
        name: 'Tiramisù Clássico',
        image: 'tiramisu-classico',
        prepTime: '30 min + 4h de geladeira',
        servings: '8 porções',
        ingredients: [
          '4 gemas',
          '100g de açúcar',
          '500g de queijo mascarpone',
          '200ml de café forte, frio',
          '30 biscoitos champanhe',
          'Cacau em pó para polvilhar',
        ],
        preparation: [
          'Bata as gemas com o açúcar até obter um creme claro.',
          'Adicione o mascarpone e misture delicadamente.',
          'Molhe os biscoitos no café e faça uma camada em um refratário.',
          'Cubra com uma camada do creme de mascarpone. Repita as camadas.',
          'Leve à geladeira por pelo menos 4 horas. Polvilhe cacau antes de servir.',
        ],
      },
      {
        id: 'mousse-de-cafe',
        name: 'Mousse de Café',
        image: 'mousse-de-cafe',
        prepTime: '15 min + 2h de geladeira',
        servings: '6 porções',
        ingredients: [
          '1 lata de leite condensado',
          '1 lata de creme de leite',
          '1 xícara de café forte, frio',
          '1 envelope de gelatina sem sabor',
        ],
        preparation: [
          'Dissolva a gelatina conforme as instruções da embalagem.',
          'No liquidificador, bata o leite condensado, o creme de leite, o café e a gelatina dissolvida.',
          'Despeje em taças individuais e leve à geladeira por pelo menos 2 horas.',
        ],
      },
    ],
  },
  {
    id: 'bolos-tortas-de-cafe',
    name: 'Bolos & Tortas de Café',
    icon: Cake,
    recipes: [
      {
        id: 'bolo-de-cafe-com-nozes',
        name: 'Bolo de Café com Nozes',
        image: 'bolo-de-cafe-com-nozes',
        prepTime: '1 hora',
        servings: '12 fatias',
        ingredients: [
          '3 ovos',
          '1 xícara de açúcar',
          '1/2 xícara de óleo',
          '1 xícara de café forte',
          '2 xícaras de farinha de trigo',
          '1 colher de sopa de fermento em pó',
          '1/2 xícara de nozes picadas',
        ],
        preparation: [
          'Bata os ovos, o açúcar e o óleo.',
          'Adicione o café e a farinha, misturando bem.',
          'Incorpore o fermento e as nozes.',
          'Asse em forno pré-aquecido a 180°C por 40 minutos.',
        ],
      },
      {
        id: 'torta-holandesa-de-cafe',
        name: 'Torta Holandesa de Café',
        image: 'torta-holandesa-de-cafe',
        prepTime: '40 min + 3h de geladeira',
        servings: '10 porções',
        ingredients: [
          '1 pacote de biscoito maisena',
          '100g de manteiga derretida',
          '1 lata de leite condensado',
          '1/2 xícara de café forte',
          '1 pacote de biscoito calipso',
          'Ganache de chocolate para cobrir',
        ],
        preparation: [
          'Triture o biscoito maisena e misture com a manteiga para forrar o fundo de uma forma.',
          'Bata o leite condensado com o café e um creme de leite até engrossar.',
          'Disponha os biscoitos calipso na lateral da forma e despeje o creme.',
          'Leve à geladeira. Cubra com ganache antes de servir.',
        ],
      },
    ],
  },
  {
    id: 'massas-receitas-salgadas-com-cafe',
    name: 'Massas & Receitas Salgadas',
    icon: UtensilsCrossed,
    recipes: [
      {
        id: 'risoto-de-cafe',
        name: 'Risoto de Café',
        image: 'risoto-de-cafe',
        prepTime: '30 min',
        servings: '2 porções',
        ingredients: [
          '1 xícara de arroz arbóreo',
          '1/2 cebola picada',
          '50 ml de café espresso',
          'Caldo de legumes quente',
          'Queijo parmesão ralado a gosto',
          'Manteiga e azeite',
        ],
        preparation: [
          'Refogue a cebola no azeite e manteiga. Adicione o arroz e frite um pouco.',
          'Adicione o café e mexa até evaporar.',
          'Vá adicionando o caldo de legumes aos poucos, mexendo sempre.',
          'Quando o arroz estiver al dente, finalize com manteiga e parmesão.',
        ],
      },
      {
        id: 'molho-barbecue-de-cafe',
        name: 'Molho Barbecue de Café',
        image: 'molho-barbecue-de-cafe',
        prepTime: '25 min',
        servings: 'Aprox. 300 ml',
        ingredients: [
          '1 xícara de ketchup',
          '1/4 xícara de café forte',
          '2 colheres de sopa de vinagre de maçã',
          '2 colheres de sopa de açúcar mascavo',
          '1 colher de chá de páprica defumada',
        ],
        preparation: [
          'Em uma panela, misture todos os ingredientes.',
          'Leve ao fogo baixo e cozinhe por cerca de 20 minutos, mexendo ocasionalmente, até o molho engrossar.',
          'Use para marinar carnes ou como acompanhamento.',
        ],
      },
    ],
  },
  {
    id: 'fitness-saudaveis-com-cafe',
    name: 'Fitness & Saudáveis com Café',
    icon: HeartPulse,
    recipes: [
      {
        id: 'smoothie-de-cafe-e-banana',
        name: 'Smoothie de Café e Banana',
        image: 'smoothie-de-cafe-e-banana',
        prepTime: '5 min',
        servings: '1 copo',
        ingredients: [
          '1 banana congelada',
          '100 ml de café forte, frio',
          '1/2 xícara de iogurte natural ou leite vegetal',
          '1 colher de sopa de sementes de chia',
        ],
        preparation: [
          'Bata todos os ingredientes no liquidificador até obter uma mistura cremosa.',
          'Sirva imediatamente.',
        ],
      },
      {
        id: 'proteina-gelada-com-cafe',
        name: 'Proteína Gelada com Café',
        image: 'proteina-gelada-com-cafe',
        prepTime: '3 min',
        servings: '1 copo',
        ingredients: [
          '1 scoop de whey protein (sabor baunilha ou chocolate)',
          '150 ml de café forte, frio',
          'Gelo a gosto',
        ],
        preparation: [
          'Em uma coqueteleira ou liquidificador, misture o whey protein com o café frio.',
          'Adicione gelo e agite/bata bem até ficar homogêneo e gelado.',
        ],
      },
    ],
  },
  {
    id: 'drinks-coqueteis-com-cafe',
    name: 'Drinks & Coquetéis com Café',
    icon: Martini,
    recipes: [
      {
        id: 'espresso-martini',
        name: 'Espresso Martini',
        image: 'espresso-martini',
        prepTime: '5 min',
        servings: '1 taça',
        ingredients: [
          '50 ml de vodka',
          '30 ml de licor de café (Kahlúa)',
          '30 ml de café espresso recém-extraído',
          'Gelo',
          'Grãos de café para decorar',
        ],
        preparation: [
          'Encha uma coqueteleira com gelo.',
          'Adicione a vodka, o licor de café e o espresso.',
          'Agite vigorosamente por 15 segundos.',
          'Coe para uma taça de martini gelada e decore com grãos de café.',
        ],
      },
      {
        id: 'irish-coffee',
        name: 'Irish Coffee',
        image: 'irish-coffee',
        prepTime: '7 min',
        servings: '1 taça',
        ingredients: [
          '40 ml de uísque irlandês',
          '1 colher de chá de açúcar mascavo',
          '120 ml de café quente e forte',
          'Creme de leite fresco, levemente batido',
        ],
        preparation: [
          'Aqueça uma taça de vidro com água quente e descarte a água.',
          'Adicione o uísque e o açúcar, mexendo para dissolver.',
          'Despeje o café quente.',
          'Com cuidado, despeje o creme de leite levemente batido sobre as costas de uma colher para que flutue no topo.',
        ],
      },
    ],
  },
];

export const getRecipeById = (id: string) => {
  for (const category of categories) {
    const recipe = category.recipes.find(recipe => recipe.id === id);
    if (recipe) {
      return recipe;
    }
  }
  return null;
};
