export type OrderStatus = 'pending' | 'confirmed' | 'cancelled';

export interface MenuItem {
    id: string;
    name: string;
    price: number;
    category: "food" | "drink";
    isAvailable: boolean;
}

export interface OrderItem {
    menuItemId: string;
    quantity: number;
}

export interface Customer {
    id: string;
    name: string;
    email?: string;
    address?: string;
}

export interface Order {
    id: string;
    customer: Customer;  // customer property is an object that matches Customer interface
    items: OrderItem[]; // items property is an array of objects that match OrderItem interface
    status: OrderStatus;
    discountCode?: string;
    deliveryRequired: boolean;
}

export interface ReceiptItem {
    name: string;
    quantity: number;
    unitPrice: number;
    lineTotal: number;
}

export interface Receipt {
    orderId: string;
    customerName: string;
    items: ReceiptItem[];
    subtotal: number;
    discountAmount?: number;
    deliveryFee?: number;
    taxAmount: number;
    total: number;
    status: OrderStatus;
}