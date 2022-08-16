export const productsItems = [  //array de objetos de cada producto
    {
        id: 1,
        name: 'Borcegos de Cuero',
        img: 'img/Borcegos-1.jpg',
        section: 'Borcegos',
        description:
            'Borcegos de cuero',
        price: 1000,
    },
    {
        id: 2,
        name: 'Borcegos de Cuero',
        img: 'img/Borcegos-2.jpg',
        section: 'Borcegos',
        description:
            'Borcegos de cuero',
        price: 1500,
    },
    {
        id: 3,
        name: 'Borcegos de Cuero',
        img: 'img/Borcegos-3.jpg',
        section: 'Borcegos',
        description:
            'Borcegos de cuero',
        price: 1600,
    },
    {
        id: 4,
        name: 'Zapatillas',
        img: 'img/Zapas-1.jpg',
        section: 'Zapatillas',
        description:
            'Zapatillas urbanas',
        price: 1200,
    },
    {
        id: 5,
        name: 'Zapatillas',
        img: 'img/Zapas-2.jpg',
        section: 'Zapatillas',
        description:
            'Zapatillas urbanas',
        price: 1300,
    },
    {
        id: 6,
        name: 'Zapatillas',
        img: 'img/Zapas-3.jpg',
        section: 'Zapatillas',
        description:
            'Zapatillas urbanas',
        price: 1700,
    },
    {
        id: 7,
        name: 'Zapatos Mujer',
        img: 'img/Zapatos-1.jpg',
        section: 'Zapatos',
        description:
            'Zapatos',
        price: 1100,
    },
    {
        id: 8,
        name: 'Zapatos Mujer',
        img: 'img/Zapatos-2.jpg',
        section: 'Zapatos',
        description:
            'Zapatos',
        price: 1600,
    },
    {
        id: 9,
        name: 'Zapatos Mujer',
        img: 'img/Zapatos-3.jpg',
        section: 'Zapatos',
        description:
            'Zapatos',
        price: 1450,
    },
];

export const products = productsItems.reduce((res, products) => {
    if (!res[products.section]) { //crea un objeto de cada item de la seccion
        res[products.section] = []
    }
    res[products.section] = [...res[products.section], products]; //agrega todos los productos que corresponden a la seccion
    return res;

}, {})