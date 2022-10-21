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
import { Link } from "react-router-dom";

const CreateOffer: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateOfferInputs>({
    resolver: yupResolver(createOfferSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isCreated, setIsCreated] = useState(false);

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
      try {
        setIsLoading(true);
        await OffersService.createOffer(request);
        setIsCreated(true);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
  });

  return (
    <form onSubmit={submitCreateOffer}>
      <Card>
        <CardHeader>Créer une annonce</CardHeader>
        <CardBody>
          {!isCreated && (
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
          )}
          {isLoading && <Loading />}
          {!isCreated && !isLoading && <Button type="submit">Créer</Button>}
          {/* {hasError && <Error refresh={() => submitCreateOffer()} />} */}
          {isCreated && (
            <>
              <p>
                L'annonce a bien été créée ! Vous allez recevoir un mail pour
                valider votre annonce.
              </p>
              <Link to="/offers">Revenir à la liste des annonces</Link>
            </>
          )}
        </CardBody>
      </Card>
    </form>
  );
};

export default CreateOffer;
