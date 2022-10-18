import { data } from "cypress/types/jquery";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Error,
  Input,
  Loading,
} from "../../components";
import { CreateOfferRequest } from "../../services/models/offer";
import OffersService from "../../services/OffersService";
import "./CreateOffer.css";
import { CreateOfferInputs } from "./CreateOfferInputs";

interface CreateOfferState {
  isLoading: boolean;
  hasError: boolean;
}

const defaultCreateOfferInputs: CreateOfferInputs = {
  title: "",
  description: "",
  user: {
    username: "",
    email: "",
  },
  address: {
    streetNumber: undefined,
    street: "",
    country: "",
    city: "",
    zipcode: "",
  },
  availability: undefined,
  expiration: undefined,
};

const CreateOffer: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateOfferInputs>();

  // const [{ isLoading, hasError }, setState] = useState<CreateOfferState>({
  //   isLoading: false,
  //   hasError: false,
  // });

  // const [offerId, setOfferId] = useState<string>("");

  // const [createOfferRequest, setCreateOfferRequest] =
  //   useState<CreateOfferRequest>(defaultCreateOfferInputs);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setCreateOfferRequest({
  //     ...createOfferRequest,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   submitCreateOffer();
  // };

  // const submitCreateOffer = async () => {
  //   setState({ isLoading: true, hasError: false });
  //   try {
  //     // const id = await OffersService.createOffer(createOfferRequest);
  //     // setOfferId(id);
  //     // setCreateOfferRequest(defaultCreateOfferInputs);
  //   } catch (e: unknown) {
  //     setState({ isLoading: false, hasError: true });
  //   }
  //   setState({ isLoading: false, hasError: false });
  // };

  const submitCreateOffer = handleSubmit(async (data) => {
    console.log(data);
    if (data.address.streetNumber) {
      // const request: CreateOfferRequest = {
      //   ...data,
      //   address: {
      //     ...data.address,
      //     streetNumber: data.address.streetNumber,
      //   },
      // };
      // const id = await OffersService.createOffer(request);
      // console.log(id);
    }
  });

  return (
    <form onSubmit={submitCreateOffer}>
      <Card>
        <CardHeader>Créer une annonce</CardHeader>
        <CardBody>
          <div className="form-content">
            <Input label="Titre :" required {...register("title")} />
            <Input
              label="Description :"
              required
              {...register("description")}
            />
            <Input label="Username :" required {...register("user.username")} />
            <Input
              type="email"
              label="Email :"
              required
              {...register("user.email")}
            />
            <Input label="Ville :" required {...register("address.city")} />
            <Input label="Pays :" required {...register("address.country")} />
            <Input label="Rue :" required {...register("address.street")} />
            <Input
              label="Numéro de rue :"
              required
              {...register("address.streetNumber")}
            />
            <Input
              label="Indicateur :"
              {...register("address.streetNumberIndicator")}
            />
            <Input label="Code postal :" {...register("address.zipcode")} />
            <Input
              type="date"
              label="Disponibilité :"
              {...register("availability")}
            />
            <Input
              type="date"
              label="Expiration :"
              {...register("expiration")}
            />
          </div>
          <Button type="submit">Créer</Button>
          {/* {isLoading && <Loading />}
          {!isLoading && <Button type="submit">Créer</Button>}
          {hasError && <Error refresh={() => submitCreateOffer()} />}
          {offerId && <p>L'annonce {offerId} a bien été créée !</p>} */}
        </CardBody>
      </Card>
    </form>
  );
};

export default CreateOffer;
