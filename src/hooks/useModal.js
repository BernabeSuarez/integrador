import { useState } from 'react'

export const useModal = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue)

    const openDialog = () => setIsOpen(true)
    const closeDialog = () => setIsOpen(false)

    return [isOpen, openDialog, closeDialog]
}