import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Loading,
} from "../../components";
import "./CreateOffer.css";
import { CreateOfferInputs } from "./CreateOfferInputs";
import OffersService from "../../services/OffersService";
import { CreateOfferRequest } from "../../services/models/offer";

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

const CreateOffer: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateOfferInputs>({
    resolver: yupResolver(createOfferSchema),
  });
  const [isLoading, setIsLoading] = useState(false);

  const submitCreateOffer = handleSubmit(async (data) => {
    if (data.address.streetNumber) {
      const request: CreateOfferRequest = {
        ...data,
        address: {
          ...data.address,
          streetNumber: data.address.streetNumber,
        },
      };
      const id = await OffersService.createOffer(request);
      console.log(id);
    }
  });

  return (
    <form onSubmit={submitCreateOffer}>
      <Card>
        <CardHeader>Créer une annonce</CardHeader>
        <CardBody>
          <div className="form-content">
            <Input
              label="Titre :"
              {...register("title")}
              error={errors.title?.message}
            />
            <Input
              label="Description :"
              {...register("description")}
              error={errors.description?.message}
            />
            <Input
              label="Username :"
              {...register("user.username")}
              error={errors.user?.username?.message}
            />
            <Input
              type="email"
              label="Email :"
              {...register("user.email")}
              error={errors.user?.email?.message}
            />
            <Input
              label="Ville :"
              {...register("address.city")}
              error={errors.address?.city?.message}
            />
            <Input
              label="Pays :"
              {...register("address.country")}
              error={errors.address?.country?.message}
            />
            <Input
              label="Rue :"
              {...register("address.street")}
              error={errors.address?.street?.message}
            />
            <Input
              label="Numéro de rue :"
              {...register("address.streetNumber")}
              error={errors.address?.streetNumber?.message}
            />
            <Input
              label="Indicateur :"
              {...register("address.streetNumberIndicator")}
              error={errors.address?.streetNumberIndicator?.message}
            />
            <Input
              label="Code postal :"
              {...register("address.zipcode")}
              error={errors.address?.zipcode?.message}
            />
            <Input
              type="date"
              label="Disponibilité :"
              {...register("availability")}
              error={errors.availability?.message}
            />
            <Input
              type="date"
              label="Expiration :"
              {...register("expiration")}
              error={errors.expiration?.message}
            />
          </div>
          {isLoading && <Loading />}
          {!isLoading && <Button type="submit">Créer</Button>}
          {/* {hasError && <Error refresh={() => submitCreateOffer()} />}
          {offerId && <p>L'annonce {offerId} a bien été créée !</p>} */}
        </CardBody>
      </Card>
    </form>
  );
};

export default CreateOffer;
