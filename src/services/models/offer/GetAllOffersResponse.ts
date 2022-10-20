type AddressResponse = {
  country: string;
  street: string;
  city: string;
  zipcode: string;
};

type UserResponse = {
  username: string;
  email: string;
};

type OfferResponse = {
  title: string;
  description: string;
  offerId: string;
  user: UserResponse;
  address: AddressResponse;
  availabilityDate?: Date | string;
  expirationDate?: Date | string;
};

export default interface GetAllOffersResponse {
  elements: OfferResponse[];
  pageCount: number;
}
