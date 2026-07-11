export type ScratchItem =
  | { type: 'link'; title: string; href: string; source?: string; note?: string }
  | { type: 'note'; text: string; author?: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'video'; title: string; href: string; source?: string }
  | { type: 'tweet'; href: string; text: string; author: string }

export const scratchItems: Array<ScratchItem> = [
  {
    type: 'link',
    title: 'Vocab Mountain',
    href: 'https://www.vocabmountain.fun/',
    source: 'vocabmountain.fun',
    note: 'A minimal, distraction-free GRE vocab app I built — flashcards, quizzes, and games.',
  },
]
