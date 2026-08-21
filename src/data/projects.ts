export interface Project {
  name: string
  href: string
  blurb: string
  tags: Array<string>
  links?: Array<{ label: string; href: string }>
}

export const projects: Array<Project> = [
  {
    name: 'dbagent',
    href: 'https://github.com/yashtotla/dbagent',
    blurb:
      'An agent solving DBBench modification tasks in MySQL, with and without the ability to checkpoint and roll back its own writes; implementing the agentic-exploration setting from Xu et al.',
    tags: ['MySQL', 'Savepoints', 'Agentic exploration'],
    links: [
      {
        label: 'Toward Systems Foundations for Agentic Exploration',
        href: 'https://arxiv.org/abs/2510.05556',
      },
      {
        label: 'DBBench dev split · AgentBench',
        href: 'https://github.com/THUDM/AgentBench/blob/main/data/dbbench/dev.jsonl',
      },
    ],
  },
  {
    name: 'llm-serving-lab',
    href: 'https://github.com/yashtotla/llm-serving-lab',
    blurb:
      'Benchmarking LLM inference against the memory-bandwidth wall: prefix caching (−51% TTFT), INT4/INT8 quantization, and speculative decoding, measured across vLLM on CUDA and MLX on Apple Silicon.',
    tags: ['vLLM', 'MLX', 'KV cache', 'Quantization', 'Speculative decoding'],
  },
  {
    name: 'gpt-2',
    href: 'https://github.com/yashtotla/gpt-2',
    blurb:
      'GPT-2 built from scratch in PyTorch — the full transformer at GPT-2-small config (124M), tiktoken BPE, and a training loop over a text corpus.',
    tags: ['PyTorch', 'Transformers', 'tiktoken'],
  },
]
