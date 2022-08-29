import { useState } from 'react'

export const useCompra = () => {
    const [compra, setCompra] = useState(null)
    return {
        compra,
        setCompra
    }
}