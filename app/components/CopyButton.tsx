'use client'

import { useState } from 'react'

interface CopyButtonProps {
  text: string
  label?: string
}

export default function CopyButton({ text, label = 'Copiar' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Error al copiar:', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={`copy-button px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
        copied
          ? 'bg-green-500 text-white'
          : 'bg-pink-500 text-white hover:bg-pink-600'
      }`}
    >
      {copied ? '✓ Copiado' : label}
    </button>
  )
}
