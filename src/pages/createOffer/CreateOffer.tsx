import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
import createOfferSchema from "./createOfferSchema";

const CreateOffer: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateOfferInputs>({
    resolver: yupResolver(createOfferSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [offerId, setOfferId] = useState<string>();

  const submitCreateOffer = handleSubmit(async (data) => {
    if (data.address.streetNumber) {
      const request: CreateOfferRequest = {
        ...data,
        address: {
          ...data.address,
        },
        availabilityDate: data.availability,
        expirationDate: data.expiration,
      };
      const id = await OffersService.createOffer(request);
      setOfferId(id);
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
          {/* {hasError && <Error refresh={() => submitCreateOffer()} />} */}
          {offerId && <p>L'annonce {offerId} a bien été créée !</p>}
        </CardBody>
      </Card>
    </form>
  );
};

export default CreateOffer;
