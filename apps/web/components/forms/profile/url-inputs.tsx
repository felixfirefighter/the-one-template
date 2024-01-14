'use client'

import { Button, TextInput } from '@mantine/core'
import { useState } from 'react'

export const UrlInputs = () => {
  const [urlInputs, setUrlInputs] = useState([
    {
      value: 'https://github.com/felixfirefighter',
      autofocus: false,
    },
    {
      value: 'https://www.linkedin.com/in/yoongtilee/',
      autofocus: false,
    },
  ])

  return (
    <>
      {urlInputs.map((input, index) => {
        return (
          <TextInput
            key={index}
            label={index === 0 ? 'URLs' : ''}
            description={
              index === 0
                ? 'Add links to your website, blog, or social media profiles'
                : ''
            }
            placeholder="https://www.theone.com"
            value={input.value}
            mb={'xs'}
            autoFocus={input.autofocus}
            onChange={(e) => {
              const inputs = urlInputs.map((urlInput, urlInputIndex) => {
                if (urlInputIndex === index) {
                  return {
                    value: e.target.value,
                    autofocus: false,
                  }
                }

                return urlInput
              })

              setUrlInputs(inputs)
            }}
          ></TextInput>
        )
      })}

      <Button
        variant="default"
        size="xs"
        onClick={() => {
          setUrlInputs([
            ...urlInputs.map((input) => {
              return {
                ...input,
                autofocus: false,
              }
            }),
            {
              value: '',
              autofocus: true,
            },
          ])
        }}
      >
        Add URL
      </Button>
    </>
  )
}
