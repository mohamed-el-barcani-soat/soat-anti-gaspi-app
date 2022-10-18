type Address = {
  streetNumber: number;
  streetNumberIndicator?: number;
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
  availability?: Date;
  expiration?: Date;
}
