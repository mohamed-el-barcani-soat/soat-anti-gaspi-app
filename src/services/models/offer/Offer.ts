interface User {
  username: string;
  email: string;
}

interface Address {
  country: string;
  street: string;
  city: string;
  zipcode: string;
}

export interface Offer {
  title: string;
  description: string;
  offerId: string;
  user: User;
  address: Address;
  availabilityDate?: Date;
  expirationDate?: Date;
}
