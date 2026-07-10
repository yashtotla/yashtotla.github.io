export interface ConcurrentItem {
  title: string
  detail?: string
}

export interface TimelineEntry {
  period: string
  role: string
  org: string
  location?: string
  kind: 'work' | 'education'
  context?: string
  points?: Array<string>
  tags?: Array<string>
  concurrent?: { label?: string; items: Array<ConcurrentItem> }
  upcoming?: boolean
}

export const experience: Array<TimelineEntry> = [
  {
    period: 'Incoming · 2026',
    role: 'M.S. Computer Science',
    org: 'Georgia Tech',
    location: 'Atlanta, GA',
    kind: 'education',
    upcoming: true,
    context:
      'Going deep on systems for AI — LLM inference, multimodal inference, model serving, and the infrastructure behind large models.',
    tags: ['LLM inference', 'Model serving', 'AI systems'],
  },
  {
    period: 'Sep 2022 — Present',
    role: 'Senior Software Engineer, Backend',
    org: 'TruFin Labs',
    location: 'London, UK',
    kind: 'work',
    context:
      'Investment products for digital assets, backing $100M+ from institutions like Nomura and Brevan Howard.',
    points: [
      'Built a unified multi-chain backend API abstracting five heterogeneous blockchains behind concurrency-optimized routing and chain-agnostic domain models.',
      'Designed multithreaded indexer services for Solana, Aptos, Near, and Injective — 500 TB+/yr over gRPC streams with a producer–consumer architecture.',
      'Built high-throughput ingestion pipelines into PostgreSQL with backpressure, per-transaction atomicity, and schema-level reindexing.',
      'Led three engineers on a time-weighted loyalty Points Program with exactly-once, reindexable ETL.',
    ],
    tags: [
      'Rust',
      'Python',
      'gRPC',
      'PostgreSQL',
      'Kubernetes',
      'Concurrency',
      'Distributed systems',
    ],
  },
  {
    period: 'Mar — Aug 2022',
    role: 'Software Development Engineer',
    org: 'Livspace',
    location: 'Bengaluru, India',
    kind: 'work',
    context: '$1.2B home-interiors platform operating across 100+ cities.',
    points: [
      'Led the margin calculator and cross-border vendor payout flows, cutting settlement time from 15 days to 3.',
      'Refactored services managing 5M+ SKUs into a micro-frontend architecture with zero-downtime deploys.',
      'Raised the web app Lighthouse score from 56 to 98 via HTTP/2, compression, tree-shaking, and lazy loading.',
    ],
    tags: ['JavaScript', 'Micro-frontends', 'Web performance', 'Unleash'],
  },
  {
    period: 'Sep 2020 — Feb 2022',
    role: 'Member of Technical Staff',
    org: 'Oracle',
    location: 'Bengaluru, India',
    kind: 'work',
    context: 'Oracle Content Management.',
    points: [
      'Increased API throughput 10× with concurrency-safe request handling and distributed locks in Java.',
      'Shipped an enterprise blogging solution adopted by 20+ Oracle teams.',
      'Built chatbots on Oracle Digital Assistant — intent models, entity extraction, and multi-turn dialog over a headless CMS.',
    ],
    tags: ['Java', 'Distributed locks', 'Concurrency', 'NLP'],
  },
  {
    period: 'Aug 2016 — Aug 2020',
    role: 'B.E. Electrical & Electronics',
    org: 'BITS Pilani, Goa',
    location: 'Goa, India',
    kind: 'education',
    context: 'First Division · CGPA 8.56 / 10.',
    points: [
      'Relevant coursework: Machine Learning, Neural Networks, Probability & Statistics, Optimization, Non-linear Optimization, Digital Image Processing, Operating Systems.',
      'Scholarships: Merit-cum-Need (University) and INSPIRE (Government of India).',
    ],
    concurrent: {
      label: 'Alongside the degree',
      items: [
        {
          title: 'Teaching Assistant',
          detail: 'Microprocessor Programming & Interfacing',
        },
        {
          title: 'Teaching Assistant',
          detail: 'Analog & Digital VLSI Design',
        },
        { title: 'Vice Chair', detail: 'IEEE Student Chapter' },
        { title: 'Finance Head', detail: 'Quark, the annual tech fest' },
      ],
    },
  },
]
