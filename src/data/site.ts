/**
 * Fonte única de conteúdo da landing. Todo texto editável vive aqui —
 * os componentes só fazem layout. Para trocar copy, preço ou contato,
 * mexa neste arquivo e rode `npm run build`.
 */

export const contact = {
  email: 'contato@fbtechia.com',
  phone: '(62) 99848-3451',
  phoneRaw: '5562998483451',
  whatsapp:
    'https://wa.me/5562998483451?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20FBTECHIA%20e%20quero%20saber%20mais.',
  city: 'Goiânia, GO — Brasil',
  legalName: 'FBTECHIA',
  formerName: 'Fortes Bezerra Tecnologia e Consultoria LTDA',
}

export const nav = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Reforma Tributária', href: '#reforma' },
  { label: 'Como trabalhamos', href: '#abordagem' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
]

export const hero = {
  eyebrow: 'Antes Fortes Bezerra · agora FBTECHIA',
  title: 'Tecnologia e IA que resolvem',
  titleAccent: 'problemas reais de operação',
  subtitle:
    'Construímos plataformas sob medida para gestão fiscal, controladoria e operação de distribuidoras. Software que processa o volume real da sua empresa e entrega decisão — não relatório.',
  primaryCta: { label: 'Falar com um especialista', href: '#contato' },
  secondaryCta: { label: 'Ver nossas soluções', href: '#solucoes' },
}

// Números conferidos contra os repositórios dos produtos. Ao alterar,
// confirme que o dado continua verdadeiro — é a parte do site que mais
// rápido envelhece.
export const stats = [
  { value: '5', label: 'plataformas próprias em operação' },
  { value: '3', label: 'ERPs integrados: Winthor, Oracle e SAP' },
  { value: '9', label: 'centros de distribuição atendidos' },
  { value: '2026', label: 'prontos para a Reforma Tributária' },
]

export type Product = {
  name: string
  tagline: string
  description: string
  bullets: string[]
  status: 'Em produção' | 'Em desenvolvimento' | 'Piloto'
  icon: 'receipt' | 'gauge' | 'boxes' | 'calendar' | 'chartPie'
  url?: string
}

export const products: Product[] = [
  {
    name: 'FBTax Cloud',
    tagline: 'Gestão fiscal e apuração da Reforma Tributária',
    description:
      'Plataforma SaaS multi-tenant de gestão fiscal para empresas brasileiras. Motor em Go que analisa arquivos SPED de gigabytes em segundos, com integração direta à Receita Federal para CBS/IBS e débitos fiscais.',
    bullets: [
      'Apuração CBS/IBS na regra vigente da transição',
      'Integração com Receita Federal e ERPs (Oracle, Winthor, SAP)',
      'Dashboards, relatórios e trilha de auditoria',
      'Portal do cliente com contratos, licenças e vencimentos',
    ],
    status: 'Em produção',
    icon: 'receipt',
    url: 'https://www.fbtax.cloud',
  },
  {
    name: 'FB Farol',
    tagline: 'Semáforo de metas para força de vendas',
    description:
      'Farol de vendas para distribuidoras que operam com força de vendas em campo. Mostra ao gestor, em segundos, quem está batendo meta e quem não está — com drill-down de Diretoria até cliente e produto.',
    bullets: [
      'Hierarquia Diretoria → GGV → Supervisor → RCA → Cliente → Produto',
      'Indicadores de positivação, mix de itens e faturado vs transmitido',
      'Clientes sem venda aparecem no painel — não somem da conta',
      'Acesso web autenticado e URL pública para o RCA em campo',
    ],
    status: 'Em produção',
    icon: 'gauge',
  },
  {
    name: 'FB SmartPick',
    tagline: 'Recalibração de picking em centros de distribuição',
    description:
      'Automatiza a recalibração de endereços de picking em CDs que operam com WMS Winthor (Totvs) ou SAP S/4HANA, eliminando parada de separador por endereço subcalibrado e desperdício de área por supercalibração.',
    bullets: [
      'Importação de dados do WMS via CSV',
      'Cálculo de calibragem por giro real do item',
      'Fim da espera por resuprimento no meio da separação',
      'Recuperação de área útil no CD',
    ],
    status: 'Em produção',
    icon: 'boxes',
  },
  {
    name: 'FB Controladoria',
    tagline: 'Automação dos processos de controladoria',
    description:
      'Substitui a controladoria operada em Excel por processo automatizado: montagem de DRE gerencial, auditoria de ações de rebaixa de preço e conferências recorrentes, direto das extrações do ERP.',
    bullets: [
      'DRE gerencial montada automaticamente',
      'Auditoria de Ação 201 (rebaixa de preço)',
      'Trilha de carga que aponta divergências na base',
      'Comparativo entre exercícios',
    ],
    status: 'Em desenvolvimento',
    icon: 'chartPie',
  },
  {
    name: 'FB Eventos',
    tagline: 'Gestão de grandes eventos',
    description:
      'Plataforma SaaS multi-tenant para organizadoras de eventos de massa. Venda de espaços a fornecedores com planta visual e pagamento integrado, terceirização de mão de obra, ingressos e integrações.',
    bullets: [
      'Planta do evento com lotes e zonas clicáveis',
      'Venda de espaço self-service por m²',
      'Gestão de prestadores com comissionamento',
      'Ingressos e integração com sites de venda',
    ],
    status: 'Piloto',
    icon: 'calendar',
  },
]

export const approach = [
  {
    title: 'Domínio antes de código',
    description:
      'Antes de escrever qualquer linha, mapeamos o processo real — as planilhas, as rotinas do ERP, os contornos que a equipe já inventou. Software que ignora o processo vira mais um sistema abandonado.',
  },
  {
    title: 'IA onde ela ganha',
    description:
      'Usamos inteligência artificial onde ela realmente reduz trabalho: classificação fiscal, leitura de documento, detecção de divergência e apoio à decisão. Não colamos um chat na tela para dizer que temos IA.',
  },
  {
    title: 'Performance como requisito',
    description:
      'Nossos motores são escritos em Go e processam arquivos de gigabytes em segundos. Se o analista espera, a ferramenta perdeu. Volume real da sua empresa, não volume de demonstração.',
  },
  {
    title: 'Entrega em dias, não meses',
    description:
      'Plataformas em produção com infraestrutura pronta — autenticação, multi-tenant, integrações de ERP. Você começa a operar rápido e evolui a partir do que já funciona.',
  },
]

export const reforma = {
  eyebrow: 'Reforma Tributária',
  title: 'A maior mudança fiscal em décadas já começou',
  description:
    'O período de transição exige apuração paralela, revisão de cadastro e recálculo de preço. Empresas que se adaptam primeiro conquistam vantagem; as que deixam para depois pagam em multa e retrabalho.',
  highlights: [
    {
      title: 'Conformidade contínua',
      description:
        'Sua apuração acompanha a legislação conforme ela muda ao longo da transição, sem depender de planilha atualizada na mão.',
    },
    {
      title: 'Oportunidade de crédito',
      description:
        'O novo modelo de não cumulatividade abre créditos que o regime antigo travava. Identificamos onde eles estão na sua operação.',
    },
    {
      title: 'Impacto no preço',
      description:
        'Simulamos o efeito da nova carga sobre a sua margem por produto e por cliente, antes que ele apareça no resultado.',
    },
  ],
}

export const plan = {
  eyebrow: 'Planos',
  title: 'Comece pelo que dói mais',
  description:
    'Contratação por empresa, com teste antes de decidir. Escopo e preço se ajustam ao porte da operação e ao número de CNPJs do grupo.',
  price: 'R$ 300,00',
  priceSuffix: 'por empresa/mês',
  priceNote: 'A partir de · 14 dias de teste sem cartão de crédito',
  includes: [
    'Acesso completo à plataforma contratada',
    'Atualizações automáticas de legislação',
    'Dashboards e relatórios personalizados',
    'Integração com o ERP que você já usa',
    'Suporte por WhatsApp, e-mail e telefone',
    'Treinamento da sua equipe',
    'Backup automático e segurança de dados',
    'Consultoria mensal de acompanhamento',
  ],
  guarantee:
    'Se durante o período de teste a ferramenta não provar valor, você cancela sem custo e sem burocracia.',
  cta: { label: 'Começar teste de 14 dias', href: '#contato' },
}

export const faq = [
  {
    q: 'A Fortes Bezerra virou FBTECHIA. O que muda para quem já é cliente?',
    a: 'Só o nome e o endereço do site. A empresa, a equipe, os contratos e os sistemas em produção continuam exatamente os mesmos. O domínio fortesbezerra.com.br passa a redirecionar para fbtechia.com, e os acessos às plataformas seguem funcionando normalmente.',
  },
  {
    q: 'Vocês vendem software pronto ou desenvolvem sob medida?',
    a: 'Os dois. Temos plataformas em produção — FBTax Cloud, FB Farol, FB SmartPick — que atendem casos recorrentes, e desenvolvemos módulos específicos quando o processo do cliente exige. A maior parte dos nossos projetos começa com um produto existente e cresce com o que é próprio daquela operação.',
  },
  {
    q: 'Integram com qual ERP?',
    a: 'Já operamos integrados a Winthor (Totvs/PC Sistemas), Oracle e SAP S/4HANA. Para outros ERPs, avaliamos a integração na fase de diagnóstico — o padrão é uma ponte que lê o ERP sem interferir na operação dele.',
  },
  {
    q: 'Como funciona o teste de 14 dias?',
    a: 'Você usa a plataforma com os seus próprios dados, sem cartão de crédito e sem compromisso. Nós fazemos a carga inicial e o treinamento da equipe dentro desse período, para que a avaliação seja com a operação real e não com dados de demonstração.',
  },
  {
    q: 'Qual o prazo de implementação?',
    a: 'Dias, não meses. A infraestrutura já existe — autenticação, multi-tenant, integrações. O que leva tempo é entender o seu processo e mapear os dados, e isso corre em paralelo ao teste.',
  },
  {
    q: 'Onde ficam hospedados os dados?',
    a: 'Em infraestrutura em nuvem sob nossa gestão, com backup automático e isolamento por cliente (multi-tenant). Para clientes que exigem, avaliamos deploy on-premise — os sistemas são containerizados justamente para permitir isso.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Pode. Não trabalhamos com fidelidade forçada. As condições de aviso prévio ficam explícitas em contrato antes da assinatura.',
  },
]

export const finalCta = {
  title: 'Vamos olhar a sua operação',
  description:
    'Uma conversa de 30 minutos costuma ser suficiente para saber se temos algo que resolve o seu problema — e para dizer com franqueza quando não temos.',
}
