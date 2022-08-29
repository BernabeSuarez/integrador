import { useState } from 'react'

export const useModal = () => {
    const [show, setShow] = useState(true)
    return {
        show,
        setShow
    }
}