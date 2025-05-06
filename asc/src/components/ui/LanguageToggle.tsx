'use client'

import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

type Language = 'en' | 'tl'

interface LanguageToggleProps {
  onLanguageChange: (language: Language) => void
}

export default function LanguageToggle({ onLanguageChange }: LanguageToggleProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en')

  const handleChange = (language: Language) => {
    setSelectedLanguage(language)
    onLanguageChange(language)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {selectedLanguage === 'en' ? 'English' : 'Tagalog'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleChange('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChange('tl')}>
          Tagalog
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
