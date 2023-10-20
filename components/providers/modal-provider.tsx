'use client'

import { SettingsModal } from '@/components/modals/settings-modal'
import { CoverImageModal } from '../modals/cover-image-modal'
import { useEffect, useState } from 'react'

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  )
}
