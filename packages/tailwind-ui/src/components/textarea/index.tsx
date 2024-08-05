import clsx from 'clsx'
import React, { useState } from 'react'

interface TextareaProps {
  label?: string
  placeholder?: string
  value?: string
  rows?: number
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  maxLength?: number
  showLength?: boolean
  error?: string
  disabled?: boolean
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  value = '',
  rows = 4,
  onChange,
  maxLength = 500,
  showLength,
  error,
  disabled,
}) => {
  const [charCount, setCharCount] = useState(value.length)
  const [isFocused, setIsFocused] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length)
    onChange(e)
  }

  return (
    <div className="w-full">
      {label && (
        <label className="text-neutral-700 text-sm font-medium mb-1.5">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={clsx(
          'w-full text-sm border rounded py-3 px-3.5 text-gray-700 focus:outline-none',
          {
            'border-red-500 shadow ': error || charCount > maxLength,
            'shadow-red-300': (error || charCount >maxLength) && isFocused, 
            'border-brand-500 shadow shadow-brand-300': !error && isFocused,
            'border-neutral-200': !error && !isFocused && !disabled,
            'bg-neutral-100': disabled,
            'bg-neutral-50': !disabled,
          },
        )}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        // maxLength={maxLength}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className={'flex justify-between gap-4 text-sm'}>
        {<span className="text-red-600">{error ? error : null}</span>}
        {showLength && <span className={clsx("text-neutral-500", {
          'text-red-600': charCount > maxLength
        })}>
          {charCount}/{maxLength}
        </span>}
      </div>
    </div>
  )
}
