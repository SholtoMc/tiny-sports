import React from 'react'
import Markdoc, { type RenderableTreeNode } from '@markdoc/markdoc'

interface MarkdocRendererProps {
  content: RenderableTreeNode
}

export function MarkdocRenderer({ content }: MarkdocRendererProps) {
  return (
    <div className="prose prose-zinc prose-headings:font-heading prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none">
      {Markdoc.renderers.react(content, React)}
    </div>
  )
}
