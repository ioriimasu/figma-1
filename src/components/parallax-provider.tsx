"use client"

import { ReactNode } from 'react'

interface ParallaxProviderProps {
  children: ReactNode
}

export function ParallaxProvider({ children }: ParallaxProviderProps) {
  return (
    <div className="parallax-container">
      {children}
    </div>
  )
}