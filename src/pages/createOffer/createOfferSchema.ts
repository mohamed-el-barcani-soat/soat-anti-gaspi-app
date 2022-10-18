import * as yup from "yup";

const userSchema = yup.object({
  username: yup
    .string()
    .required("Le username est requis")
    .max(250, "Le username doit être inférieur à 250 charactères"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be valid"),
});

const addressSchema = yup.object({
  streetNumber: yup
    .number()
    .typeError("Le numéro de la rue doit être un nombre")
    .required("Le numéro de la rue est requis")
    .min(1, "Le numéro de la rue doit être supérieur ou égale à 1"),
  country: yup
    .string()
    .required("Le pays est requis")
    .max(250, "Le pays doit être inférieur à 250 charactères"),
  street: yup.string().required("La rue est requise"),
  city: yup
    .string()
    .required("La ville est requise")
    .max(250, "La ville doit être inférieur à 250 charactères"),
  zipcode: yup
    .string()
    .required("Le code postal est requis")
    .max(250, "Le code postal doit être inférieur à 250 charactères"),
});

const createOfferSchema = yup.object({
  user: userSchema,
  title: yup
    .string()
    .required("Le titre est requis")
    .max(250, "Le titre doit être inférieur à 250 charactères"),
  address: addressSchema,
  availability: yup
    .date()
    .typeError("La date de disponibilité est requise")
    .required("La date de disponibilité est requise"),
  expiration: yup
    .date()
    .typeError("La date d'expiration est requise")
    .required("La date d'expiration est requise"),
});

export default createOfferSchema;
