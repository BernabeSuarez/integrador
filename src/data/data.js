export const productsItems = [  //array de objetos de cada producto
    {
        id: 1,
        name: 'Botitas de Lona',
        img: 'img/Calzado-1.jpg',
        section: 'Calzado',
        description:
            'Botitas de Lona',
        price: 14000,
    },
    {
        id: 2,
        name: 'Borcegos de Cuero',
        img: 'img/Calzado-2.jpg',
        section: 'Calzado',
        description:
            'Borcegos de cuero',
        price: 15000,
    },
    {
        id: 3,
        name: 'Borcegos de Cuero',
        img: 'img/Calzado-3.jpg',
        section: 'Calzado',
        description:
            'Borcegos de cuero',
        price: 25000,
    },
    {
        id: 4,
        name: 'Remera Motley Crue',
        img: 'img/Remera-1.jpg',
        section: 'Remeras',
        description:
            'Remeras urbanas',
        price: 5500,
    },
    {
        id: 5,
        name: 'Remera Pink Floyd',
        img: 'img/Remera-2.jpg',
        section: 'Remeras',
        description:
            'Remeras urbanas',
        price: 5500,
    },
    {
        id: 6,
        name: 'Remera Led Zeppelin',
        img: 'img/Remera-3.jpg',
        section: 'Remeras',
        description:
            'Remeras urbanas',
        price: 5000,
    },
    {
        id: 7,
        name: 'Gorra Rolling Stones',
        img: 'img/Gorra-1.jpg',
        section: 'Gorras',
        description:
            'Gorras',
        price: 3900,
    },
    {
        id: 8,
        name: 'Gorra Rolling Stones',
        img: 'img/Gorra-2.jpg',
        section: 'Gorras',
        description:
            'Gorras',
        price: 3900,
    },
    {
        id: 9,
        name: 'Gorra The Who',
        img: 'img/Gorra-3.jpg',
        section: 'Gorras',
        description:
            'Gorras',
        price: 3900,
    },
];

export const ProductsCategories = [
    {
        section: 'Calzado',
        img: 'img/Calzado.jpg'
    },
    {
        section: 'Remeras',
        img: 'img/Remeras.jpg'
    },
    {
        section: 'Gorras',
        img: 'img/Gorras.jpg'
    }
]

export const products = productsItems.reduce((res, products) => {
    if (!res[products.section]) { //crea un objeto de cada item de la seccion
        res[products.section] = []
    }
    res[products.section] = [...res[products.section], products]; //agrega todos los productos que corresponden a la seccion
    return res;

}, {})