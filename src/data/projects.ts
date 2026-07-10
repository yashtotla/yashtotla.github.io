export interface Project {
  name: string
  href: string
  blurb: string
  tags: Array<string>
}

export const projects: Array<Project> = [
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
    blurb: 'A from-scratch GPT-2 implementation in Python.',
    tags: ['Python', 'Transformers'],
  },
]
