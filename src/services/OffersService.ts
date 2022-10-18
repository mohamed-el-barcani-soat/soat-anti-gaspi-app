import config from "../config";
import {
  CreateOfferRequest,
  GetAllOffersRequest as GetAllOffersRequestParams,
  Offers,
} from "./models/offer";

interface OffersServiceProps {
  createOffer: (createOfferRequest: CreateOfferRequest) => Promise<string>;
  getAllOffers: (
    getAllOffersRequest: GetAllOffersRequestParams
  ) => Promise<Offers>;
}

const OffersService: OffersServiceProps = {
  createOffer: async (createOfferRequest) => {
    // const response = await fetch(`${config.API_URL}/offers`, {
    //   method: "post",
    //   body: JSON.stringify(createOfferRequest),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const id = await response.json();
    // if (response.ok) {
    //   return id;
    // }

    // throw new Error("Erreur lors de la création d'annonce");

    return "654zef564zef654zef";
  },

  getAllOffers: async (
    requestParams: GetAllOffersRequestParams
  ): Promise<Offers> => {
    // TODO : send real request after api'll be ready to get all offers

    return Promise.resolve({
      content: [
        {
          title: "offer title 1",
          description: "offer title description",
          id: "id1",
          user: {
            email: "user1@gmail.com",
          },
          availabilityDate: new Date(),
          expirationDate: new Date(),
          address: {
            city: "Paris",
            country: "France",
            street: "rue Charles de Gaulle",
            streetNumber: 1,
            zipcode: "75001",
          },
        },
        {
          title: "Pizza de papa",
          description: "pizza de papa",
          id: "id2",
          user: {
            email: "pizza@gmail.com",
          },
          availabilityDate: new Date(),
          expirationDate: new Date(),
          address: {
            city: "Lyon",
            country: "France",
            street: "Rue Tupin",
            streetNumber: 34,
            zipcode: "69002",
          },
        },
        {
          title: "Boat",
          description: "a very nice boat and vintage",
          id: "id3",
          user: {
            email: "user3@gmail.com",
          },
          availabilityDate: new Date(2022, 12, 15),
          expirationDate: new Date(2022, 12, 25),
          address: {
            city: "Yokohama",
            country: "Japon",
            street: "street Yokohama port",
            streetNumber: 50,
            zipcode: "220-0001",
          },
        },
      ],
      total: 3,
    });
  },
};

export default OffersService;
