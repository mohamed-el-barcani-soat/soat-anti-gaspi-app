type Address = {
  country: string;
  street: string;
  city: string;
  zipcode: string;
};

type User = {
  username: string;
  email: string;
};
export default interface CreateOfferRequest {
  user: User;
  title: string;
  description: string;
  address: Address;
  availabilityDate?: Date;
  expirationDate?: Date;
}
