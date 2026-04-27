import type { MenuItem, Order } from './types.js';

export const menu: MenuItem[] = [
    {
        id: '1',
        name: 'Burger',
        price: 8.99,
        category: "food",
        isAvailable: true
    },
    {
        id: '2',
        name: 'fries',
        price: 12.99,
        category: "food",
        isAvailable: true
    },
    {
        id: '3',
        name: 'soda',
        price: 1.99,
        category: "drink",
        isAvailable: true
    },
    {
        id: '4',
        name: 'coffee',
        price: 5.99,
        category: "drink",
        isAvailable: false
    }
]

export const sampleOrder: Order = {
    id: 'order1',
    customer: {
        id: 'customer1',
        name: 'John Doe',
    },
    items :[
        {
            menuItemId: '1',
            quantity: 2
        },
        {
            menuItemId: '3',
            quantity: 1
        }
    ],
    status: 'confirmed',
    discountCode: 'DISCOUNT10',
    deliveryRequired: true
}
