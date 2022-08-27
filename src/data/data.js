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
    {
        id: 10,
        name: 'Gorra Rolling Stones',
        img: 'img/Gorra-4.jpg',
        section: 'Gorras',
        description:
            'Gorras',
        price: 3900,
    },
    {
        id: 11,
        name: 'Gorra Ramones',
        img: 'img/Gorra-5.jpg',
        section: 'Gorras',
        description:
            'Gorras',
        price: 3900,
    },
    {
        id: 12,
        name: 'Buzo Ac Dc',
        img: 'img/Buzo-1.jpg',
        section: 'Buzos',
        description:
            'Buzo Ac Dc',
        price: 8900,
    },
    {
        id: 13,
        name: 'Buzo Rolling Stones',
        img: 'img/Buzo-2.jpg',
        section: 'Buzos',
        description:
            'Buzo Rolling Stones',
        price: 8900,
    },
    {
        id: 14,
        name: 'Buzo Rolling Stones',
        img: 'img/Buzo-3.jpg',
        section: 'Buzos',
        description:
            'Buzo Rolling Stones',
        price: 8900,
    },
    {
        id: 15,
        name: 'Borcegos de Cuero',
        img: 'img/Calzado-4.jpg',
        section: 'Calzado',
        description:
            'Borcegos de cuero',
        price: 14000,
    },
    {
        id: 16,
        name: 'Zapatos de cuero',
        img: 'img/Calzado-5.jpg',
        section: 'Calzado',
        description:
            'Zapatos de cuero',
        price: 12500,
    },
    {
        id: 17,
        name: 'Remera Guns and Roses',
        img: 'img/Remera-4.jpg',
        section: 'Remeras',
        description:
            'Remeras urbanas',
        price: 5500,
    },
    {
        id: 18,
        name: 'Remera Urbana',
        img: 'img/Remera-5.jpg',
        section: 'Remeras',
        description:
            'Remeras urbanas',
        price: 5500,
    },
    {
        id: 19,
        name: 'Remera Ramones',
        img: 'img/Remera-6.jpg',
        section: 'Remeras',
        description:
            'Remeras urbanas',
        price: 5500,
    },
    {
        id: 20,
        name: 'Remera Rolling Stones',
        img: 'img/Remera-7.jpg',
        section: 'Remeras',
        description:
            'Remeras urbanas',
        price: 5500,
    },
    {
        id: 21,
        name: 'Remera Guns and Roses',
        img: 'img/Remera-8.jpg',
        section: 'Remeras',
        description:
            'Remeras urbanas',
        price: 5500,
    },
];

export const ProductsCategories = [
    {
        section: 'Calzado',
        img: 'img/Botas.jpg'
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