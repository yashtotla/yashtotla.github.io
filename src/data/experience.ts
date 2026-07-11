export interface ConcurrentItem {
  title: string
  detail?: string
  href?: string
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
  links?: Array<{
    label: string
    href: string
    advisor?: { name: string; href: string }
  }>
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
      'Investment products for digital assets, backed by institutions like Nomura and Brevan Howard.',
    points: [
      'Built indexer services across Solana, Near, Aptos, Injective, and Ethereum — ~3 TB/day (500 TB+/yr) over gRPC streams with a multithreaded producer–consumer architecture.',
      'Built high-throughput, write-heavy ingestion pipelines into PostgreSQL with per-transaction atomicity, backpressure, and schema-level reindexing.',
      'Designed a unified multi-chain backend API that abstracts five heterogeneous chains behind concurrency-optimized routing and chain-agnostic domain models.',
      'Wrote tf_utils, an internal Python library (RPC, financial math, logging, database), and ran deploy infra on EC2 and load balancers with CI/CD and observability.',
    ],
    tags: [
      'Rust',
      'Python',
      'TypeScript',
      'gRPC',
      'PostgreSQL',
      'AWS',
      'Distributed systems',
    ],
  },
  {
    period: '2022 — 2024',
    role: 'Technical Consultant & Advisor',
    org: 'Independent · Fintech',
    kind: 'work',
    context:
      'Alongside full-time roles at Livspace and TruFin Labs. Advised fintech startups — Sublime Finance, Leap Wallet, Kriya Finance, and Stratzy AI — on architecture and delivery; at peak, the products reached 300k+ monthly active users.',
    tags: ['Advisory', 'Architecture', 'Fintech'],
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
      'Teaching Assistant — Microprocessor Programming & Interfacing; Analog & Digital VLSI Design.',
      'Vice Chair, IEEE Student Chapter · Finance Head, Quark (the annual tech fest).',
      'Scholarships: Merit-cum-Need (University) and INSPIRE (Government of India).',
    ],
    concurrent: {
      label: 'Internships',
      items: [
        {
          title: 'MathWorks',
          detail:
            'MATLAB Coder compiler internals — constant-folded report expressions and polymorphic MEX generation (C++).',
        },
        {
          title: 'Vuclip',
          detail:
            'Data science — knowledge-graph user-journey modeling, subscription-propensity models with sequence embeddings, and AutoML video sentiment.',
        },
        {
          title: 'Quixote',
          detail:
            'Embedded C + ML — dead reckoning from noisy IMU data with an Extended Kalman Filter.',
        },
        {
          title: 'iCreate',
          detail:
            'Industrial IoT — process analysis and optimization for metal die-casting and food processing.',
        },
        {
          title: 'Coderlens',
          detail: 'Built Python, NumPy, Pandas, and data-science question banks.',
          href: 'https://github.com/yashtotla/coderlens',
        },
      ],
    },
    links: [
      {
        label: 'Wavelets in image processing',
        href: 'https://drive.google.com/file/d/1LkFeZoPy7LQTo6PEZ4eRi6RZdsgl18k_/view',
        advisor: {
          name: 'Prof. Amit Setia',
          href: 'https://scholar.google.com/citations?user=Wt02vywAAAAJ&hl=en',
        },
      },
      {
        label: 'Advanced analytics at Vuclip',
        href: 'https://docs.google.com/document/d/1vKLqk1ZA3eUNnTlnkQuLV5dw3ALOGWE6/preview',
        advisor: {
          name: 'Dr. Chetana Gavankar',
          href: 'https://scholar.google.com/citations?user=4YxlyNMAAAAJ&hl=en',
        },
      },
    ],
  },
]
