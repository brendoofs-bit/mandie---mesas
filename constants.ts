import { 
  Palette, 
  Award, 
  Heart, 
  MessageCircle, 
  FileText, 
  Utensils, 
  CheckCircle, 
  Truck 
} from 'lucide-react';
import { Feature, ProcessStep, FaqItem, Testimonial, GalleryItem } from './types';

export const BRAND_COLORS = {
  chocolate: '#522B00',
  cream: '#FFF4E7',
  salmon: '#FDAE9C',
  beige: '#FFE4CB',
  white: '#FEFEFE',
};

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Criações Autorais",
    description: "Cada mesa é uma criação exclusiva, desenvolvida sob medida para refletir a personalidade do seu evento. Não seguimos modelos prontos, criamos obras únicas.",
    icon: Palette
  },
  {
    id: 2,
    title: "Curadoria de Sabores",
    description: "Combinamos clássicos atemporais como Pavlova de Frutas Vermelhas, Torta de Maçã e Banoffee com criações inovadoras que surpreendem cada convidado.",
    icon: Award
  },
  {
    id: 3,
    title: "Visual e Paladar em Harmonia",
    description: "Mesas imponentes que impressionam visualmente e conquistam pelo sabor. Do planejamento à montagem, cuidamos de cada detalhe para uma experiência memorável.",
    icon: Heart
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Conte-nos seu Sonho",
    description: "Entre em contato pelo WhatsApp e compartilhe suas ideias, tema do evento, número de convidados e preferências de sabores.",
    icon: MessageCircle
  },
  {
    id: 2,
    title: "Projeto Sob Medida",
    description: "Desenvolvemos uma proposta exclusiva com composição da mesa, sabores, decoração e orçamento detalhado especialmente para você.",
    icon: FileText
  },
  {
    id: 3,
    title: "Prove Antes de Confirmar",
    description: "Oferecemos degustação guiada na Mandiê para você conhecer os sabores que vão compor sua mesa especial.",
    icon: Utensils
  },
  {
    id: 4,
    title: "Confirmação e Produção",
    description: "Após aprovação, iniciamos a produção artesanal com antecedência adequada, garantindo perfeição em cada detalhe.",
    icon: CheckCircle
  },
  {
    id: 5,
    title: "Montagem Impecável",
    description: "Nossa equipe leva, monta e garante que sua mesa esteja perfeita no dia e horário combinados.",
    icon: Truck
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Juliana Santos",
    role: "Casamento",
    text: "A mesa de sobremesas foi o ponto alto do nosso casamento! Os convidados não paravam de elogiar. A Chef Amanda entendeu perfeitamente nossa visão e entregou algo ainda mais incrível.",
    image: "https://picsum.photos/id/64/100/100",
    stars: 5
  },
  {
    id: 2,
    name: "Roberto Lima",
    role: "Aniversário 50 Anos",
    text: "Contratei para o aniversário de 50 anos da minha mãe e foi simplesmente perfeito. A apresentação era de cinema e o sabor... indescritível!",
    image: "https://picsum.photos/id/91/100/100",
    stars: 5
  },
  {
    id: 3,
    name: "Fernanda & Diego",
    role: "Bodas de Ouro",
    text: "Elegância pura. A Mandiê trouxe sofisticação para nossa celebração. O cuidado com cada doce é perceptível. Recomendamos de olhos fechados.",
    image: "https://picsum.photos/id/65/100/100",
    stars: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Quantas pessoas uma mesa de sobremesas atende?",
    answer: "Trabalhamos com formatos adaptáveis: Pequena (30-50 pessoas), Média (50-100 pessoas) e Grande (100-200+ pessoas). Calculamos a quantidade ideal de doces por convidado para evitar desperdícios ou faltas."
  },
  {
    question: "Qual a antecedência necessária para encomenda?",
    answer: "Recomendamos no mínimo 2 semanas para eventos pequenos e idealmente 1 a 2 meses para grandes eventos (casamentos, corporativos), garantindo a reserva da data e o planejamento perfeito."
  },
  {
    question: "A montagem está inclusa no serviço?",
    answer: "Sim! Nossa equipe especializada realiza o transporte, a montagem completa da mesa no local do evento e a desmontagem das peças decorativas após a festa."
  },
  {
    question: "Posso escolher os sabores da mesa?",
    answer: "Com certeza. Oferecemos total personalização com a curadoria da Chef Amanda. Você pode mesclar nossos clássicos com sabores que tenham significado especial para você."
  },
  {
    question: "Atendem eventos fora de Brasília?",
    answer: "Atendemos principalmente o DF. Para locais fora do plano piloto ou entorno, cobramos uma taxa de deslocamento adicional. Consulte-nos sobre sua localidade."
  },
  {
    question: "Fazem degustação antes do evento?",
    answer: "Sim, mediante agendamento prévio. A degustação tem um valor simbólico que é abatido do valor final caso o contrato seja fechado."
  },
  {
    question: "Qual o investimento para uma mesa de sobremesas?",
    answer: "O investimento varia conforme a quantidade de doces, complexidade da decoração e personalização. Entre em contato para um orçamento sob medida."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, src: "https://picsum.photos/id/1080/600/800", category: "casamentos", title: "Casamento Juliana & Carlos", description: "150 convidados • Clássico Romântico" },
  { id: 2, src: "https://picsum.photos/id/429/600/600", category: "casamentos", title: "Mini Wedding Sofia", description: "Intimista • Jardim" },
  { id: 3, src: "https://picsum.photos/id/431/600/900", category: "aniversarios", title: "50 Anos Estilo Garden", description: "Mesa Rústica • Frutas Frescas" },
  { id: 4, src: "https://picsum.photos/id/1060/600/700", category: "corporativo", title: "Evento Empresarial", description: "Coffee Break Premium" },
  { id: 5, src: "https://picsum.photos/id/835/600/600", category: "bodas", title: "Bodas de Ouro", description: "Elegância Clássica" },
  { id: 6, src: "https://picsum.photos/id/292/600/800", category: "casamentos", title: "Mesa de Doces Finos", description: "Casamento Noturno" },
  { id: 7, src: "https://picsum.photos/id/488/600/500", category: "aniversarios", title: "15 Anos Moderno", description: "Tendência Geométrica" },
  { id: 8, src: "https://picsum.photos/id/365/600/900", category: "casamentos", title: "Casamento ao Ar Livre", description: "Floral e Leve" },
  { id: 9, src: "https://picsum.photos/id/493/600/600", category: "bodas", title: "Bodas de Prata", description: "Minimalista" },
  { id: 10, src: "https://picsum.photos/id/225/600/800", category: "corporativo", title: "Lançamento de Produto", description: "Identidade Visual da Marca" },
  { id: 11, src: "https://picsum.photos/id/425/600/700", category: "aniversarios", title: "Aniversário Infantil Luxo", description: "Temático Personalizado" },
  { id: 12, src: "https://picsum.photos/id/517/600/600", category: "casamentos", title: "Destination Wedding", description: "Tropical Chic" },
];