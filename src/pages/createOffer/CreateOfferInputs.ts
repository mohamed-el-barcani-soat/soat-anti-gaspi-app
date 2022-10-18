type AddressInputs = {
  streetNumber?: number;
  streetNumberIndicator?: number;
  country: string;
  street: string;
  city: string;
  zipcode: string;
};

type UserInputs = {
  username: string;
  email: string;
};

export type CreateOfferInputs = {
  user: UserInputs;
  title: string;
  description: string;
  address: AddressInputs;
  availability?: Date;
  expiration?: Date;
};
