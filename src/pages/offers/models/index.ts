export interface Offer {
    title: string;
    description :string;
    id: string;
    user: {
        email: string
    }
}

export interface Offers {
    content: Offer[],
    total: number
}