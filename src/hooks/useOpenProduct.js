import { useState } from 'react'

export const useOpenProduct = () => {
    const [openProduct, setOpenProduct] = useState(null)
    return {
        openProduct,
        setOpenProduct
    }
}