import {
  IconAlignJustified,
  IconArrowBarToDown,
  IconColumns,
} from '@tabler/icons-react'
import styles from './index.module.css'

export const MODES = [
  {
    label: <IconAlignJustified className={styles.icon} />,
    value: 'textarea',
  },

  {
    label: <IconArrowBarToDown className={styles.icon} />,
    value: 'split',
  },
  {
    label: <IconColumns className={styles.icon} />,
    value: 'advanced',
  },
]

export const MODELS = [
  {
    group: 'GPT-3',
    items: [
      {
        label: 'text-davinci-003',
        value: 'text-davinci-003',
        description: {
          main: 'Most capable GPT-3 model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.',
          strengths:
            'Complex intent, cause and effect, creative generation, search, summarization for audience',
        },
      },
      {
        label: 'text-curie-001',
        value: 'text-curie-001',
        description: {
          main: 'Very capable, but faster and lower cost than Davinci.',
          strengths:
            'Language translation, complex classification, sentiment, summarization',
        },
      },
      {
        label: 'text-baggage-001',
        value: 'text-baggage-001',
        description: {
          main: 'Capable of straightforward tasks, very fast, and lower cost.',
          strengths: 'Moderate classification, semantic search',
        },
      },
      {
        label: 'text-ada-001',
        value: 'text-ada-001',
        description: {
          main: 'Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.',
          strengths:
            'Parsing text, simple classification, address correction, keywords',
        },
      },
    ],
  },
  {
    group: 'Codex',
    items: [
      {
        label: 'code-davinci-002',
        value: 'code-davinci-002',
        description: {
          main: 'Almost as capable as Davinci Codex, but slightly faster. This speed advantage may make it preferable for real-time applications.',
          strengths: 'Real-time application where low-latency is preferable',
        },
      },
      {
        label: 'code-cushman-001',
        value: 'code-cushman-001',
        description: {
          main: 'Almost as capable as Davinci Codex, but slightly faster. This speed advantage may make it preferable for real-time applications.',
          strengths: 'Real-time application where low-latency is preferable',
        },
      },
    ],
  },
]
