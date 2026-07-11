export interface Resource {
  title: string
  href: string
  source: string
  kind: string
  note: string
}

export interface ResourceGroup {
  topic: string
  items: Array<Resource>
}

export const resourceGroups: Array<ResourceGroup> = [
  {
    topic: 'Reading',
    items: [
      {
        title: 'Aleksa Gordić',
        href: 'https://www.aleksagordic.com/blog',
        source: 'aleksagordic.com',
        kind: 'blog',
        note: 'Deep, honest write-ups on ML systems and model internals.',
      },
      {
        title: 'Lee Robinson',
        href: 'https://leerob.com/',
        source: 'leerob.com',
        kind: 'blog',
        note: 'On building for the web, developer experience, and shipping.',
      },
      {
        title: 'nano-vLLM: a tiny inference engine',
        href: 'https://boringbot.substack.com/p/nano-vllm-a-tiny-inference-engine',
        source: 'boringbot.substack.com',
        kind: 'article',
        note: 'Builds a minimal inference engine end to end — a readable path into serving internals.',
      },
      {
        title: 'Inference Engineering',
        href: 'https://www.baseten.co/inference-engineering/',
        source: 'Philip Kiely · Baseten',
        kind: 'guide',
        note: 'Practical guide to serving LLMs efficiently in production.',
      },
      {
        title: 'The Physics of LLM Inference',
        href: 'https://elliotarledge.gumroad.com/l/physics-llm-inference',
        source: 'Elliot Arledge',
        kind: 'book',
        note: 'The math and mechanics behind LLM inference performance.',
      },
      {
        title: 'ML Systems',
        href: 'https://mlsysbook.ai/',
        source: 'mlsysbook.ai',
        kind: 'book',
        note: 'CMU uses this as a resource for their graduate-level ML Systems course.',
      },
    ],
  },
  {
    topic: 'Watching',
    items: [
      {
        title: 'Umar Jamil',
        href: 'https://www.youtube.com/@umarjamilai',
        source: 'youtube.com',
        kind: 'channel',
        note: 'Long-form deep dives.',
      },
      {
        title: 'Jia-Bin Huang',
        href: 'https://www.youtube.com/@jbhuang0604',
        source: 'youtube.com',
        kind: 'channel',
        note: 'Explains research papers.',
      },
      {
        title: 'Sam Witteveen',
        href: 'https://www.youtube.com/@samwitteveenai',
        source: 'youtube.com',
        kind: 'channel',
        note: 'Hands-on with whatever new stuff comes out.',
      },
    ],
  },
  {
    topic: 'Tools, collections & communities',
    items: [
      {
        title: 'Transformer Explainer',
        href: 'https://poloclub.github.io/transformer-explainer/',
        source: 'poloclub.github.io',
        kind: 'interactive',
        note: 'A cool visualizer for seeing how a transformer works.',
      },
      {
        title: 'Awesome-ML-SYS-Tutorial',
        href: 'https://github.com/zhaochenyang20/Awesome-ML-SYS-Tutorial',
        source: 'zhaochenyang20',
        kind: 'collection',
        note: 'A living collection of ML-systems and serving deep-dives.',
      },
      {
        title: 'GPU MODE',
        href: 'https://www.gpumode.com/home',
        source: 'gpumode.com',
        kind: 'community',
        note: 'Community for GPU programming and ML-systems performance.',
      },
      {
        title: 'AI neolabs & more',
        href: 'https://x.com/i/lists/2061778489036923248',
        source: '@aimalysheva',
        kind: 'X list',
        note: 'Curated list of AI neolabs and the people building them.',
      },
      {
        title: 'FollowML',
        href: 'https://x.com/i/lists/1315972265666904068',
        source: '@followML_',
        kind: 'X list',
        note: 'Curated list for keeping up with ML on X.',
      },
    ],
  },
]
