import type { Block, Section } from '@vcm/content'

/**
 * `todo` blocks are development-only. In a production build they are stripped,
 * so an unfinished case study can never ship with placeholder text visible.
 */
const SHOW_TODOS = import.meta.env.DEV

export function CaseStudyBody({ sections }: { sections: Section[] }) {
  return (
    <div className="prose-editorial">
      {sections.map((section) => {
        const blocks = section.blocks.filter((b) => b.type !== 'todo' || SHOW_TODOS)
        if (blocks.length === 0) return null
        return (
          <section key={section.id} aria-labelledby={section.id}>
            <h2 id={section.id}>{section.heading}</h2>
            {blocks.map((block, i) => (
              <BlockView key={i} block={block} />
            ))}
          </section>
        )
      })}
    </div>
  )
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'p':
      return <p>{block.text}</p>
    case 'h3':
      return <h3>{block.text}</h3>
    case 'ul':
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'figure':
      return (
        <figure>
          <img
            src={block.src}
            alt={block.alt}
            loading="lazy"
            className="w-full border border-[var(--border)]"
          />
          <figcaption className="mt-2 text-sm text-muted">{block.caption}</figcaption>
        </figure>
      )
    case 'note':
      return (
        <p className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-4 text-sm text-muted">
          {block.text}
        </p>
      )
    case 'todo':
      return (
        <p className="rounded-md border border-dashed border-amber-500/60 bg-amber-500/5 p-4 text-sm">
          <strong className="font-semibold">Needs your input: </strong>
          {block.text}
        </p>
      )
  }
}
