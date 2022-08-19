import { useState } from 'react'

export const useCompra = () => {
    const [compra, setCompra] = useState([])
    return {
        compra,
        setCompra
    }
}