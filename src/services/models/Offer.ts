export type Email = {
  value: string;
};
export type User = {
  email: Email;
};

export default interface Offer {
  naturalId: string;
  title: string;
  description: string;
  user: User;
  address: string;
  availabilityDate: Date;
  expirationDate: Date;
}
