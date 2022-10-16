interface User {
    email: string
}

interface Address {
    streetNumber: number,
    country: string;
    street: string;
    city: string;
    zipcode: string;
}

export interface Offer {
    title: string;
    description :string;
    id: string;
    user: User;
    address: Address,
    availabilityDate?: Date,
    expirationDate?: Date
}